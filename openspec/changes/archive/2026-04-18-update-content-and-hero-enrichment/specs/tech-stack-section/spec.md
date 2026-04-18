## MODIFIED Requirements

### Requirement: Tech stack section renders a grid of technology badges
The `TechStackSection` component SHALL accept a `techs: TechItem[]` prop and render a `FilterTabs` component above the badge grid. The active tab SHALL filter the displayed badges. An "All" tab SHALL always be present and show every item. Tabs SHALL be derived from the `category` field of the passed `TechItem[]` — only categories with at least one item are included.

#### Scenario: All tab shows all badges
- **WHEN** the "All" tab is active
- **THEN** all items in `techs` are rendered as `TechBadge` components

#### Scenario: Category tab filters badges
- **WHEN** the "Frontend" tab is active
- **THEN** only items with `category === 'Frontend'` are rendered

#### Scenario: Tab derived from data only
- **WHEN** `TechStackSection` receives a `techs` array with items only in "Frontend" and "Tools" categories
- **THEN** only "All", "Frontend", and "Tools" tabs are rendered

### Requirement: TechBadge displays a fallback icon for techs with no SI icon
When a `TechItem` has no available Simple Icons entry, the component SHALL render `MdCode` from `react-icons/md` as a fallback icon. The color-on-hover behaviour SHALL still apply using the `color` prop.

#### Scenario: Fallback icon renders
- **WHEN** a `TechBadge` is rendered with `MdCode` as the icon prop
- **THEN** the generic code icon is visible alongside the tech name
