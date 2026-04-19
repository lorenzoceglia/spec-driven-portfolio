## ADDED Requirements

### Requirement: TechItem has a confidence field
The `TechItem` type SHALL include a `confidence: 1 | 2 | 3 | 4 | 5` field. This field controls the rendered bubble diameter. All entries in `techStack.ts` SHALL have this field populated.

#### Scenario: Confidence field is present on all items
- **WHEN** `techStack` is imported
- **THEN** every `TechItem` has a `confidence` value between 1 and 5 inclusive

### Requirement: WorkedWithSection renders an organic bubble cloud
The `WorkedWithSection` component SHALL accept a `techs: TechItem[]` prop and render a `FilterTabs` component above a `BubblePack` component. The section heading SHALL read "I worked with". The `BubblePack` SHALL display all filtered items as circular `FloatingBubble` elements positioned by a spiral circle-packing algorithm — not a CSS grid or flex row. Bubbles SHALL be nearly touching (3px gap), forming a dense organic cloud.

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
The `BubblePack` and `FloatingBubble` components SHALL map `confidence` to diameter as follows: `5 → 96px`, `4 → 76px`, `3 → 60px`, `2 → 46px`, `1 → 34px`. The icon inside SHALL scale proportionally.

#### Scenario: Highest confidence is largest
- **WHEN** items with confidence 5 and confidence 1 are both rendered
- **THEN** the confidence-5 bubble has a diameter of 96px and the confidence-1 bubble has a diameter of 34px

#### Scenario: Icon scales with bubble
- **WHEN** a bubble renders
- **THEN** the icon size is proportional to bubble diameter (38px at confidence 5, 14px at confidence 1)

### Requirement: WorkedWithSection defaults to the All tab
On initial render, the `WorkedWithSection` SHALL display the "All" tab as active, showing all 27 items.

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
For bubbles with diameter ≥ 60px (confidence 3–5), the technology name SHALL be rendered as text inside the bubble below the icon. For bubbles with diameter < 60px (confidence 1–2), no label SHALL be visible at rest; the name SHALL appear as a tooltip or label above the bubble on hover.

#### Scenario: Large bubble shows label inside
- **WHEN** a `FloatingBubble` with confidence ≥ 3 renders
- **THEN** the technology name is visible inside the circle below the icon

#### Scenario: Small bubble shows name on hover only
- **WHEN** a `FloatingBubble` with confidence ≤ 2 is hovered
- **THEN** the technology name appears outside the bubble (tooltip or floating label)

#### Scenario: Small bubble shows no label at rest
- **WHEN** a `FloatingBubble` with confidence ≤ 2 renders without hover
- **THEN** no name text is visible

### Requirement: Bubbles have a staggered floating bob animation
Each `FloatingBubble` SHALL animate with a subtle continuous vertical bob (`translateY` ±4px) using a CSS `@keyframes floatBubble` animation. Each bubble SHALL have a unique `animation-delay` (index × 0.35s) and a slightly varying `animation-duration` (5s–7s range) to create an organic, out-of-phase floating field.

#### Scenario: Bubbles float out of phase
- **WHEN** multiple bubbles are rendered
- **THEN** each bubble bobs vertically at a slightly different phase and rate

### Requirement: BubblePack container height transitions on filter change
The `BubblePack` wrapper element height SHALL be driven by the packing algorithm output and SHALL transition smoothly (400ms ease) when the filter changes and the cloud size changes.

#### Scenario: Container shrinks smoothly on filter
- **WHEN** the user switches from "All" (27 items) to "Database" (3 items)
- **THEN** the container height animates down to match the smaller cloud

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
