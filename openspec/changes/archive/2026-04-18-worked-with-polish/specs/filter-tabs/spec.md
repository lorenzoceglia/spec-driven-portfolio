## MODIFIED Requirements

### Requirement: FilterTabs renders a list of tab buttons
The `FilterTabs` component SHALL accept `tabs: string[]`, `activeTab: string`, `onTabChange: (tab: string) => void`, and `orientation: 'horizontal' | 'vertical'` props (default: `'horizontal'`). It SHALL render one button per tab entry and visually distinguish the active tab. In `horizontal` orientation the layout is a scrollable row; in `vertical` orientation the layout is a stacked column with full-width pills.

#### Scenario: Active tab is highlighted
- **WHEN** `FilterTabs` renders with `activeTab="Frontend"`
- **THEN** the "Frontend" button has a visually distinct active style compared to inactive tabs

#### Scenario: Clicking a tab fires onTabChange
- **WHEN** the user clicks an inactive tab button
- **THEN** `onTabChange` is called with that tab's string value

#### Scenario: Vertical orientation stacks pills
- **WHEN** `FilterTabs` renders with `orientation="vertical"`
- **THEN** pills are arranged in a single column, each spanning the full width of the component

## ADDED Requirements

### Requirement: WorkedWithSection uses two-column layout on desktop
On viewports ≥ `md` breakpoint, `WorkedWithSection` SHALL render `FilterTabs` in a left sidebar column (~144px wide, `flex-shrink-0`) and `BubblePack` in a `flex-1` right column. On viewports < `md`, the layout SHALL be a single column with `FilterTabs` above `BubblePack` in horizontal orientation.

#### Scenario: Desktop layout is two-column
- **WHEN** the viewport width is ≥ 768px
- **THEN** the filter pills appear to the left of the bubble cloud, not above it

#### Scenario: Mobile layout is single-column
- **WHEN** the viewport width is < 768px
- **THEN** the filter pills appear above the bubble cloud in a horizontal scrollable row

### Requirement: BubblePack respects reduced column width on desktop
When `WorkedWithSection` renders in two-column mode, the `BubblePack` container SHALL occupy the `flex-1` column. The `ResizeObserver` inside `useCirclePacker` SHALL detect the narrower column width and repack the cloud accordingly — no prop changes required.

#### Scenario: Cloud repacks after layout shift
- **WHEN** the viewport transitions from mobile to desktop (or vice versa)
- **THEN** the bubble cloud repacks to fit the new container width within 200ms (debounce)
