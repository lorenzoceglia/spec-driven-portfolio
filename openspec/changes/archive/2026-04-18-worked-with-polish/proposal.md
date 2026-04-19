## Why

The "I worked with" section works functionally but has visual and UX gaps: no section background makes it blend into surrounding sections, small bubbles have no accessible name on touch devices, and on wide viewports the centered cloud leaves large dead zones on both sides.

## What Changes

- Add `bg-white` to the `WorkedWithSection` wrapper, giving the section a distinct background
- Replace hover-only tooltip on small bubbles with a click-triggered portal tooltip (name shown, dismiss on outside click) that renders above all other elements including the filter bar
- Redesign the section layout: vertical filter pill sidebar on desktop (left column, ~144px), cloud filling the remaining width; horizontal scrollable pills on mobile (unchanged)

## Capabilities

### New Capabilities

- `bubble-tooltip`: Click-triggered tooltip for tech bubbles, rendered via React portal at document.body, showing the tech name. Dismisses on outside click. Works for all bubble sizes. Must render above filter tabs and all other section content.

### Modified Capabilities

- `filter-tabs`: Layout changes — on desktop (≥ `md` breakpoint) filter tabs render as a vertical pill list in a left sidebar column. On mobile the existing horizontal scrollable layout is preserved.

## Non-goals

- Tooltip does not show confidence level or category (name only)
- No changes to bubble packing algorithm or sizes
- No changes to FLIP / tab-switch animation
- No changes to other sections

## Impact

- `WorkedWithSection.tsx` — layout refactor (flex row on desktop, flex col on mobile), `bg-white` added
- `FilterTabs.tsx` — new `orientation` prop (`horizontal` | `vertical`), vertical styles for desktop sidebar
- `FloatingBubble.tsx` — click handler added, selected state tracked
- `BubblePack.tsx` — passes click/active state down, click-outside listener
- New component: `BubbleTooltip.tsx` — portal tooltip, story required
- `BubblePack.stories.tsx` — updated for new tooltip behavior
