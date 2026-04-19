## Context

The "I worked with" section renders a circle-packed bubble cloud (`BubblePack` + `FloatingBubble`) with a `FilterTabs` bar above it, all inside `WorkedWithSection`. Three independent improvements are being made: a section background, a click tooltip, and a desktop layout overhaul.

Current state:
- `WorkedWithSection` has no background — blends with adjacent sections
- `FloatingBubble` shows a hover tooltip only for small bubbles (r < 30); large bubbles have no tooltip at all; tooltip is `position: absolute` inside the `overflow: hidden` BubblePack container — it would be clipped even if shown
- On desktop, `FilterTabs` and `BubblePack` are stacked vertically inside `max-w-5xl`; the bubble cloud is centered but naturally ~500–700px wide in a 1024px container, leaving ~200px dead space on each side

## Goals / Non-Goals

**Goals:**
- Section has a clear `bg-white` visual boundary
- All bubbles respond to click with a tooltip showing their name, rendered above all elements including the filter bar
- On desktop, filter tabs are a left sidebar; the cloud fills the remaining horizontal space
- Mobile layout is unchanged (horizontal filter scroll, full-width cloud)

**Non-Goals:**
- Tooltip does not display confidence or category
- No changes to packing algorithm, bubble sizes, or FLIP animation
- No changes to other sections

## Decisions

### 1. Portal for tooltip

**Decision:** `BubbleTooltip` renders via `ReactDOM.createPortal(…, document.body)` and is positioned using `getBoundingClientRect()` of the clicked bubble element.

**Alternatives considered:**
- `overflow: visible` on BubblePack container — previously removed to fix bubbles expanding page width; reverting would reintroduce that bug
- High `z-index` without portal — `overflow: hidden` clips children regardless of stacking context

**Rationale:** Portal is the only approach that guarantees the tooltip escapes both the overflow boundary and any stacking context below the filter bar.

### 2. Click state lives in BubblePack, not FloatingBubble

**Decision:** `BubblePack` tracks `activeId: string | null` (the clicked bubble's id). `FloatingBubble` receives `isActive: boolean` and an `onClick` callback. `BubblePack` registers a document-level `pointerdown` listener for outside-click dismissal.

**Alternatives considered:**
- State in `FloatingBubble` — each bubble would independently manage its tooltip; no coordination, two tooltips could be open simultaneously
- State in `WorkedWithSection` — requires threading click state through BubblePack, more prop drilling with no benefit

**Rationale:** BubblePack already owns the per-bubble DOM refs and coordinates FLIP. Centralising click state there keeps tooltip lifecycle next to the data needed to position it.

### 3. Tooltip position: above bubble, clamped to viewport

**Decision:** Position tooltip at `{ top: bubbleRect.top - tooltipHeight - 8 + scrollY, left: bubbleRect.left + bubbleRect.width / 2 + scrollX }` with `transform: translateX(-50%)`. Clamp left to keep it within viewport.

**Rationale:** "Above the bubble" is the natural expectation. Clamping prevents edge-case overflow on leftmost/rightmost bubbles.

### 4. Two-column layout via flex, not CSS Grid

**Decision:** `WorkedWithSection` uses `flex flex-col md:flex-row gap-8`. `FilterTabs` gets an `orientation` prop (`'horizontal' | 'vertical'`); at `md:` breakpoint `WorkedWithSection` passes `vertical`. `BubblePack` container becomes `flex-1` — the `ResizeObserver` inside `useCirclePacker` automatically picks up the narrower column width and repacks.

**Alternatives considered:**
- CSS Grid with named areas — more expressive but adds complexity; flex is sufficient for two columns
- Hardcoded breakpoint in `FilterTabs` — coupling layout knowledge into the tab component; prop is cleaner

**Rationale:** Flex is minimal, the `ResizeObserver` in `useCirclePacker` handles re-packing for free when the column width changes — no changes needed to the packing hook.

### 5. FilterTabs vertical mode

In vertical mode: `flex-col w-36 flex-shrink-0`, pills are `w-full text-left`. Active and inactive styles are unchanged.

## Risks / Trade-offs

- **Tooltip flicker on fast tab switches** — if a bubble is active and the user switches filter tabs, the active id is cleared in `useLayoutEffect` (same place FLIP is triggered). No flicker expected, but needs testing.
  → Mitigation: clear `activeId` whenever `items` prop changes.

- **Tooltip positioning on scroll** — portal tooltip is positioned once on click using `getBoundingClientRect + scrollY`. If the user scrolls after opening the tooltip, it will drift.
  → Mitigation: Acceptable for now; tooltip dismisses on outside click which naturally happens before scrolling far. A scroll listener could be added later.

- **ResizeObserver repacking latency** — debounced 100ms. On desktop, initial render packs at `containerWidth = 600` (default), then snaps to the actual column width. A brief layout jump is possible on first render.
  → Mitigation: Already present before this change; not introduced by the layout refactor.
