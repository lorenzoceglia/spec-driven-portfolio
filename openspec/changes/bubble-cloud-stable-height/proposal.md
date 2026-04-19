## Why

Switching filter tabs in the bubble cloud causes the container height to animate down to match the smaller filtered set (e.g., "All" → "AI" drops from ~480px to ~120px). This is jarring — the section visually collapses, drawing attention to whitespace and layout shift rather than the bubble animation itself.

## What Changes

- `BubblePack` accepts an additional `allItems` prop (the full unfiltered set)
- `useCirclePacker` is called twice inside `BubblePack`: once for `items` (positions) and once for `allItems` (height baseline only), both using the same `containerRef`
- Container height is clamped to `Math.max(cloudHeight, allItemsHeight)` — it never shrinks below the "All" set's natural height
- The `height 400ms ease` transition is removed (no longer needed since height is stable)
- `WorkedWithSection` passes `allItems={techs}` down to `BubblePack`

## Capabilities

### New Capabilities

_(none)_

### Modified Capabilities

- `worked-with-section`: The container height is now stable at the "All" items height; it no longer shrinks on filter change. The requirement "BubblePack container height transitions on filter change" is inverted — height SHALL remain constant regardless of active filter.

## Non-goals

- Changing the packing algorithm or animation logic
- Adding padding or extra whitespace to the container beyond the stable height

## Impact

- `src/components/BubblePack.tsx` — new `allItems` prop, second `useCirclePacker` call, updated height logic
- `src/components/WorkedWithSection.tsx` — pass `allItems` to `BubblePack`
- `openspec/specs/worked-with-section/spec.md` — update the height-transition requirement
