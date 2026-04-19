## ADDED Requirements

### Requirement: Clicking a bubble opens a tooltip with the tech name
The `BubblePack` component SHALL track a single `activeId` (the id of the clicked bubble). When a bubble is clicked, a tooltip showing the tech name SHALL appear above the bubble. Only one tooltip SHALL be visible at a time — clicking a new bubble replaces the previous tooltip.

#### Scenario: Clicking a small bubble shows its name
- **WHEN** the user clicks a bubble with radius < 30 (no label inside)
- **THEN** a tooltip appears above that bubble containing the tech name

#### Scenario: Clicking a large bubble shows its name
- **WHEN** the user clicks a bubble with radius ≥ 30 (label already visible inside)
- **THEN** a tooltip appears above that bubble containing the tech name

#### Scenario: Only one tooltip is visible at a time
- **WHEN** a tooltip is open and the user clicks a different bubble
- **THEN** the previous tooltip disappears and a new tooltip appears above the newly clicked bubble

### Requirement: Tooltip renders via React portal above all page elements
The `BubbleTooltip` component SHALL render via `ReactDOM.createPortal` into `document.body`. It SHALL use `z-index: 9999` to ensure it appears above the filter bar and all other section content. It SHALL be positioned using `getBoundingClientRect()` of the clicked bubble element at the time of the click.

#### Scenario: Tooltip is visible above the filter bar
- **WHEN** a bubble near the top of the cloud is clicked
- **THEN** the tooltip is not clipped by the BubblePack container and is not obscured by the FilterTabs bar

#### Scenario: Tooltip is horizontally clamped to viewport
- **WHEN** an edge bubble is clicked whose centered tooltip position would overflow the viewport
- **THEN** the tooltip is clamped so it remains fully visible within the viewport width

### Requirement: Clicking outside dismisses the tooltip
The tooltip SHALL dismiss when the user clicks or taps anywhere outside the tooltip and outside the active bubble.

#### Scenario: Outside click closes tooltip
- **WHEN** a tooltip is open and the user clicks outside both the tooltip and the active bubble
- **THEN** the tooltip closes and no bubble is active

#### Scenario: Clicking the same bubble again closes tooltip
- **WHEN** a tooltip is open and the user clicks the same bubble that opened it
- **THEN** the tooltip closes

### Requirement: Tooltip is cleared on filter tab change
When the active filter tab changes and `BubblePack` receives a new `items` array, any open tooltip SHALL be dismissed and `activeId` SHALL be reset to `null`.

#### Scenario: Tab switch clears active tooltip
- **WHEN** a tooltip is open and the user clicks a filter pill
- **THEN** the tooltip closes before the new bubble layout animates in

### Requirement: BubbleTooltip has a Storybook story
The `BubbleTooltip` component SHALL have a `BubbleTooltip.stories.tsx` file with at least one story demonstrating the tooltip in isolation.

#### Scenario: Story renders without errors
- **WHEN** Storybook loads the BubbleTooltip story
- **THEN** the tooltip renders with example content and is visible
