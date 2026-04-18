## MODIFIED Requirements

### Requirement: Tech stack section renders a grid of technology badges
The `TechStackSection` component SHALL accept a `techs: TechItem[]` prop and render a `FilterTabs` component above the badge grid. The active tab SHALL filter the displayed badges. An "All" tab SHALL always be present. Tabs are derived from the `category` field — only categories with at least one item are included. The `TechItem` category field SHALL support the values `'Frontend'`, `'Backend'`, `'Database'`, `'Tools'`, and `'AI'`.

#### Scenario: AI tab shows only AI items
- **WHEN** the "AI" tab is active
- **THEN** only items with `category === 'AI'` are rendered

#### Scenario: All tab shows all badges including AI
- **WHEN** the "All" tab is active
- **THEN** all items including AI tools are rendered as `TechBadge` components

#### Scenario: Tab derived from data only
- **WHEN** `TechStackSection` receives a `techs` array
- **THEN** only tabs for categories with at least one item are rendered
