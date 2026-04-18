## ADDED Requirements

### Requirement: FilterTabs renders a list of tab buttons
The `FilterTabs` component SHALL accept `tabs: string[]`, `activeTab: string`, and `onTabChange: (tab: string) => void` props. It SHALL render one button per tab entry and visually distinguish the active tab.

#### Scenario: Active tab is highlighted
- **WHEN** `FilterTabs` renders with `activeTab="Frontend"`
- **THEN** the "Frontend" button has a visually distinct active style compared to inactive tabs

#### Scenario: Clicking a tab fires onTabChange
- **WHEN** the user clicks an inactive tab button
- **THEN** `onTabChange` is called with that tab's string value

### Requirement: FilterTabs hides empty tabs
The parent section SHALL derive the `tabs` array from actual data, passing only tabs that have at least one matching item. `FilterTabs` SHALL render only the tabs it receives — it has no knowledge of item counts.

#### Scenario: Tab with zero items is not rendered
- **WHEN** the data contains only items of type "library" and no "contribution" items
- **THEN** a "Contributions" tab does not appear in the rendered output

### Requirement: FilterTabs is mobile-friendly
The tab list SHALL be horizontally scrollable on small viewports without wrapping or overflowing the layout.

#### Scenario: Tabs scroll on mobile
- **WHEN** `FilterTabs` renders on a viewport narrower than 640px with 5 tabs
- **THEN** tabs are displayed in a single scrollable row with no layout overflow

### Requirement: FilterTabs has a Storybook story
The `FilterTabs` component SHALL have a `FilterTabs.stories.tsx` file with at least one story.

#### Scenario: Story renders without errors
- **WHEN** Storybook loads the FilterTabs story
- **THEN** the component renders with example tabs and an active selection
