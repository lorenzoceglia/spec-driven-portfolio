## Context

The current `TechStackSection` renders a CSS grid of `TechBadge` components — all identical in size, no confidence signal. The new design replaces this with an organic bubble cloud where circle diameter encodes confidence level (1–5). The layout must pack 27 circles of varying sizes tightly together (Apple Watch home screen aesthetic) and animate when the user filters by category.

No external layout libraries. Everything is pure TypeScript + React 19 + CSS.

## Goals / Non-Goals

**Goals:**
- Confidence-driven circle sizes (area proportional to confidence)
- Organic spiral circle packing — no grid, no flex rows
- FLIP-based re-pack animation on category filter change
- Staggered floating bob animation per bubble (pauses during FLIP)
- Direction-B hover style: slate-50 + border at rest → bg-slate-900 + white icon on hover
- Adaptive labels: inside bubble for ⌀ ≥ 60px, tooltip-on-hover for smaller
- Pure CSS/JS implementation — no D3, no physics engine

**Non-Goals:**
- Drag-to-reorder bubbles
- Click-to-expand bubble detail
- Server-side or SSR considerations

## Decisions

### Decision 1: Spiral placement algorithm (no library)

**Chosen:** Custom spiral-scan circle packing in `useCirclePacker.ts`.

Algorithm:
1. Sort circles largest → smallest (biggest placed first, fills center)
2. For each circle, scan outward in a tight spiral from `(0, 0)`:
   - Step angle: 0.1 rad increments
   - Radius grows proportionally to angle (Archimedean spiral)
   - At each candidate `(x, y)`, check distance to all placed circles
   - Place at first position where `dist(placed, candidate) >= r1 + r2 + GAP`
3. After all circles placed, compute bounding box → translate so centroid = `(0, 0)`
4. Output: `{ id, x, y, r }[]` in container-relative coordinates

**Gap constant:** `GAP = 3px` — bubbles nearly touching, not overlapping.

**Alternative considered:** CSS flexbox wrap. Rejected — produces row-aligned layout, not an organic cloud.

**Alternative considered:** D3 `packSiblings`. Rejected — adds ~50KB to bundle, we need only the packing math.

**Performance:** For 27 circles the spiral scan runs in < 2ms. Runs on mount and on `ResizeObserver` trigger (debounced 100ms).

---

### Decision 2: FLIP animation for filter tab changes

**Chosen:** Manual FLIP (First–Last–Invert–Play) via `useLayoutEffect`.

Sequence on tab change:
1. **Snapshot** current pixel positions of all visible bubbles (refs map `id → DOMRect`)
2. React re-renders with new filtered `items` → packer computes new positions
3. `useLayoutEffect` fires before paint:
   - For each bubble still present: compute delta `(newX - oldX, newY - oldY)`
   - Apply `transform: translate(Δx, Δy)` instantly (no transition)
4. On next frame (`requestAnimationFrame`): remove the override transform → CSS `transition: transform 350ms ease` takes over → bubble slides to `(0, 0)` offset = final position
5. Exiting bubbles: `transform: scale(0); opacity: 0` over 200ms, then `display: none`
6. Container height: CSS `transition: height 400ms ease` on the wrapper

**Float animation pause:** Each `FloatingBubble` receives an `isTransitioning` boolean prop. When `true`, the CSS `animation-play-state: paused` is applied. Resumes 400ms after transition completes.

**Alternative considered:** React `<Transition>` / Framer Motion. Rejected — no animation library dependency.

---

### Decision 3: Confidence → diameter mapping

Area proportional to confidence (humans perceive area, not diameter):

| confidence | diameter | icon size | label |
|---|---|---|---|
| 5 | 96px | 38px | inside |
| 4 | 76px | 30px | inside |
| 3 | 60px | 24px | inside |
| 2 | 46px | 18px | hover tooltip |
| 1 | 34px | 14px | hover tooltip |

Formula: `diameter = Math.round(34 * Math.sqrt(confidence / 1))` — scales by √confidence so area is linear.

---

### Decision 4: Component split

```
WorkedWithSection         ← section shell, FilterTabs, scroll animation
  └─ BubblePack           ← positioned container, runs packer, owns FLIP logic
       └─ FloatingBubble  ← single bubble: circle, icon, label, hover, float anim
```

`useCirclePacker(items, containerWidth)` is a standalone hook — pure computation, no DOM side effects. `BubblePack` calls it and maps results to `FloatingBubble` positions.

---

### Decision 5: Float animation via CSS keyframes + per-bubble delay

A single `@keyframes floatBubble` keyframe defined in `index.css`:

```css
@keyframes floatBubble {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33%       { transform: translateY(-4px) rotate(0.5deg); }
  66%       { transform: translateY(2px) rotate(-0.5deg); }
}
```

Each bubble receives `animation-delay: ${index * 0.35}s` and `animation-duration: ${5 + (index % 3)}s` — staggered, slightly varying period. Small amplitude (4px) keeps it subtle.

---

### Decision 6: TechBadge removal strategy

`TechBadge.tsx` and `TechBadge.stories.tsx` are deleted. `FloatingBubble` supersedes it entirely. The `TechStackSection.tsx` and its story are also deleted; `WorkedWithSection` replaces them. `App.tsx` import updated.

## Risks / Trade-offs

**[Spiral algorithm produces slightly different layouts on different container widths]**
→ Mitigation: `ResizeObserver` recomputes on width change. Layout is deterministic for a given width.

**[FLIP animation complexity — exiting + entering + moving bubbles simultaneously]**
→ Mitigation: Exit animation (200ms) completes before enter/move animation begins. Sequenced, not concurrent.

**[27 confidence-1 bubbles at ⌀ 34px may be nearly unreadable]**
→ Mitigation: Icon at 14px is still recognisable for well-known tech logos. Name on hover tooltip is always available. User can raise confidence values in data at any time.

**[Container height changes abruptly between "All" (27 items) and "Database" (3 items)]**
→ Mitigation: CSS `transition: height 400ms ease` on wrapper div smooths the resize.

**[ResizeObserver repack on every window resize could feel jittery]**
→ Mitigation: 100ms debounce on the observer callback.

## Open Questions

- None. All design decisions resolved in explore session.
