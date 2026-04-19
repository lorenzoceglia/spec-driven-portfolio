## Context

`BubblePack` uses `useCirclePacker(items, containerRef)` to compute circle positions and `cloudHeight`. The container `div` has `height: cloudHeight` with a `transition: 'height 400ms ease'`. When the active tab changes, `items` changes (fewer bubbles), `cloudHeight` shrinks, and the container collapses — causing jarring layout shift.

The fix is to keep the container tall enough to always fit the "All" items cloud, regardless of which filter is active.

## Goals / Non-Goals

**Goals:**
- Eliminate height collapse on tab switch
- Keep the container at a stable, predictable height

**Non-Goals:**
- Changing packing or FLIP animation logic
- Adding extra padding beyond the stable height
- Modifying the border/radius on the container

## Decisions

**Call `useCirclePacker` twice inside `BubblePack`**

`BubblePack` receives both `items` (current filter) and `allItems` (full set). Two `useCirclePacker` calls share the same `containerRef` — the first computes positions for rendering, the second computes only `cloudHeight` for the full set (its `circles` output is discarded). Container height = `Math.max(cloudHeight, allCloudHeight)`.

_Alternative considered_: Compute stable height in `WorkedWithSection` and pass it as a `minHeight` prop. Rejected — `WorkedWithSection` has no `containerRef` to measure container width, so the stable height would be computed without scaling, causing mismatches on narrow viewports.

_Alternative considered_: Add a `stableItems` param to `useCirclePacker` that internally runs two packing passes. Rejected — overcomplicates the hook; keeping the two calls in `BubblePack` is transparent and easy to reason about.

**Remove the height CSS transition**

With height now constant, the `transition: 'height 400ms ease'` on the container div becomes a no-op. It is removed to avoid confusion.

## Risks / Trade-offs

- [Slightly more computation per render] → Acceptable: `packCircles` is fast (pure math, no DOM); the second pass runs on the same `containerWidth` and `allItems` which are stable across tab switches, so `useMemo` will almost always cache the result.
- [If `allItems` is accidentally undefined] → `BubblePack` should default `allItems` to `items` so behaviour degrades gracefully.
