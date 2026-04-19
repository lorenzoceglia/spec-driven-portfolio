## Why

The current "Tech Stack" section is a uniform grid of identical badges — it conveys breadth but communicates nothing about depth or confidence. Replacing it with a weighted bubble cloud makes skill level immediately legible at a glance, while the organic circle-packed layout gives the section a distinctive visual identity.

## What Changes

- Rename section heading from "Tech Stack" to "I worked with"
- Remove `TechBadge` grid layout; replace with an organic circle-packed bubble cloud
- Add `confidence: 1 | 2 | 3 | 4 | 5` field to `TechItem` — controls bubble diameter
- New `useCirclePacker` hook: computes non-overlapping circle positions via spiral placement, responds to container resize, runs FLIP animation on filter change
- New `BubblePack` component: renders the positioned bubbles with staggered float animation
- `FloatingBubble` subcomponent: circular, Direction-B style (slate-50 + border at rest → slate-900 + white icon on hover); label inside bubble for ⌀ ≥ 60px, hover-only tooltip below that
- Default active tab changes from `'Frontend'` to `'All'`
- Existing `TechBadge` component **removed** (replaced by `FloatingBubble`)
- `TechStackSection` renamed to `WorkedWithSection` (**BREAKING** — caller in `App.tsx` updated)

## Non-goals

- No physics engine or external layout library (D3, matter-js, etc.)
- No drag-and-drop reordering of bubbles
- No per-bubble click/detail modal
- No changes to any other section

## Capabilities

### New Capabilities

- `worked-with-section`: The complete reworked "I worked with" section — bubble cloud with circle packing, filter tabs with FLIP re-pack animation, confidence-driven sizes, floating bob animation, and Direction-B hover style.

### Modified Capabilities

- `tech-stack-section`: Requirements change to reflect confidence field on `TechItem`, new bubble layout, renamed section heading, and removal of `TechBadge` grid.

## Impact

- `src/data/techStack.ts` — add `confidence` field to all 27 entries
- `src/components/TechStackSection.tsx` — replaced by `WorkedWithSection.tsx`
- `src/components/TechBadge.tsx` — removed
- `src/components/BubblePack.tsx` — new
- `src/components/FloatingBubble.tsx` — new
- `src/hooks/useCirclePacker.ts` — new
- `src/App.tsx` — update import + component name
- `src/stories/TechStackSection.stories.tsx` — replaced by `WorkedWithSection.stories.tsx`
- `src/stories/TechBadge.stories.tsx` — removed
- New stories: `BubblePack.stories.tsx`, `FloatingBubble.stories.tsx`
