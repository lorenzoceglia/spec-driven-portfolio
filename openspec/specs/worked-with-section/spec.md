# worked-with-section Specification

## Purpose
Organic circle-packed bubble cloud of technologies with confidence-driven sizing, category filter tabs, FLIP re-pack animation, and click-triggered portal tooltips. Replaced the grid-based `TechStackSection`.

## Requirements

### Requirement: TechItem has a confidence field
The `TechItem` type SHALL include a `confidence: 1 | 2 | 3 | 4 | 5` field. This field controls the rendered bubble diameter. All entries in `techStack.ts` SHALL have this field populated.

#### Scenario: Confidence field is present on all items
- **WHEN** `techStack` is imported
- **THEN** every `TechItem` has a `confidence` value between 1 and 5 inclusive

### Requirement: WorkedWithSection renders an organic bubble cloud
The `WorkedWithSection` component SHALL accept a `techs: TechItem[]` prop and render a `FilterTabs` component above a `BubblePack` component. The section heading SHALL read "I worked with". The `BubblePack` SHALL display all filtered items as circular `FloatingBubble` elements positioned by a tangent-based circle-packing algorithm — not a CSS grid or flex row. Bubbles SHALL be nearly touching (3px gap), forming a dense organic cloud.

#### Scenario: Cloud is non-grid
- **WHEN** `WorkedWithSection` renders with multiple items
- **THEN** bubble positions are not aligned to a regular grid or flex row — each bubble has a unique `(x, y)` position computed by the packing algorithm

#### Scenario: Bubbles nearly touching
- **WHEN** the bubble cloud renders
- **THEN** adjacent bubbles have at most 3px gap between their edges

#### Scenario: Section heading
- **WHEN** `WorkedWithSection` renders
- **THEN** the section heading reads "I worked with" (not "Tech Stack")

### Requirement: Bubble diameter encodes confidence
The `BubblePack` and `FloatingBubble` components SHALL map `confidence` to radius as follows: `5 → 48px`, `4 → 38px`, `3 → 30px`, `2 → 23px`, `1 → 17px`. The icon inside SHALL scale proportionally (~80% of radius).

#### Scenario: Highest confidence is largest
- **WHEN** items with confidence 5 and confidence 1 are both rendered
- **THEN** the confidence-5 bubble has a larger diameter than the confidence-1 bubble

#### Scenario: Icon scales with bubble
- **WHEN** a bubble renders
- **THEN** the icon size is proportional to bubble radius

### Requirement: WorkedWithSection defaults to the All tab
On initial render, the `WorkedWithSection` SHALL display the "All" tab as active, showing all items.

#### Scenario: All tab active on first render
- **WHEN** `WorkedWithSection` renders for the first time
- **THEN** the "All" tab is highlighted and all items are visible in the cloud

### Requirement: Filter tabs trigger FLIP re-pack animation
When the active tab changes, bubbles that remain visible SHALL animate from their old positions to their new packed positions via a FLIP transition (350ms ease). Exiting bubbles SHALL animate to `scale(0) opacity(0)` over 200ms before removal. The float animation SHALL be paused for the duration of the transition.

#### Scenario: Staying bubbles animate to new positions
- **WHEN** the user switches from "All" to "Frontend"
- **THEN** the bubbles that appear in both views translate smoothly to their new packed positions

#### Scenario: Exiting bubbles shrink out
- **WHEN** the user switches tabs and some bubbles are not in the new category
- **THEN** those bubbles scale to zero and fade out before disappearing from layout

#### Scenario: Float animation pauses during transition
- **WHEN** a tab change transition is in progress
- **THEN** the floating bob animation is paused on all bubbles; it resumes after the transition completes

### Requirement: FloatingBubble has Direction-B hover style
Each `FloatingBubble` SHALL display with a `bg-slate-50` background and `border border-slate-200` at rest. On hover, the bubble SHALL transition to `bg-slate-900` background with the icon rendered in white. The transition SHALL use 200ms ease.

#### Scenario: Rest state
- **WHEN** a `FloatingBubble` is rendered without hover
- **THEN** background is `slate-50`, border is `slate-200`, icon is gray

#### Scenario: Hover state
- **WHEN** the user hovers over a `FloatingBubble`
- **THEN** background transitions to `slate-900` and icon color transitions to white

### Requirement: FloatingBubble label is adaptive by size
For bubbles with radius ≥ 30px (confidence 3–5), the technology name SHALL be rendered as text inside the bubble below the icon. For bubbles with radius < 30px (confidence 1–2), no label SHALL be visible; a portal tooltip appears on click instead.

#### Scenario: Large bubble shows label inside
- **WHEN** a `FloatingBubble` with confidence ≥ 3 renders
- **THEN** the technology name is visible inside the circle below the icon

#### Scenario: Small bubble shows no label
- **WHEN** a `FloatingBubble` with confidence ≤ 2 renders
- **THEN** no name text is visible inside the bubble

### Requirement: Bubbles have a staggered floating bob animation
Each `FloatingBubble` SHALL animate with a subtle continuous vertical bob using a CSS `@keyframes floatBubble` animation. Each bubble SHALL have a unique `animation-delay` (index × 0.35s) and a slightly varying `animation-duration` (5s–7s range).

#### Scenario: Bubbles float out of phase
- **WHEN** multiple bubbles are rendered
- **THEN** each bubble bobs vertically at a slightly different phase and rate

### Requirement: BubblePack container height is stable across filter changes
The `BubblePack` component SHALL accept an `allItems?: TechItem[]` prop representing the full unfiltered set (defaults to `items`). The container height SHALL be `Math.max(cloudHeight, allItemsCloudHeight)`, where `allItemsCloudHeight` is the height computed by running `useCirclePacker` on `allItems`. The container height SHALL NOT change when the active filter tab changes. No height CSS transition SHALL be applied to the container.

#### Scenario: Height does not change on filter switch
- **WHEN** the user switches from the "All" tab to any category tab
- **THEN** the `BubblePack` container height remains the same as it was on the "All" tab

#### Scenario: Height is computed from the full set
- **WHEN** `BubblePack` renders with `allItems` containing more bubbles than `items`
- **THEN** the container height equals the height computed for `allItems`, not `items`

#### Scenario: Graceful fallback when allItems is omitted
- **WHEN** `BubblePack` is rendered without an `allItems` prop
- **THEN** container height equals `cloudHeight` (behaviour is unchanged)

### Requirement: Circle packing recomputes on container resize
The `useCirclePacker` hook SHALL observe container width via `ResizeObserver` (debounced 100ms) and recompute all circle positions when the width changes.

#### Scenario: Repack on resize
- **WHEN** the viewport width changes and the container width changes
- **THEN** bubble positions are recomputed and bubbles snap to new positions

### Requirement: WorkedWithSection has Storybook stories
`WorkedWithSection`, `BubblePack`, and `FloatingBubble` SHALL each have a `.stories.tsx` file with at least one story using real data.

#### Scenario: Stories render without errors
- **WHEN** Storybook loads the WorkedWithSection, BubblePack, and FloatingBubble stories
- **THEN** all three render without errors
