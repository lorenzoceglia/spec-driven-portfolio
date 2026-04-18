# tech-stack-section Specification

## Purpose
Responsive icon grid of technologies with category filter tabs. Each badge displays a tech icon and name, with the brand color revealed on hover. Fades in on scroll.

## Requirements

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

#### Scenario: Responsive grid
- **WHEN** rendered on mobile viewport (< 640px)
- **THEN** badges are arranged in a 2-column grid

### Requirement: TechBadge displays icon and name
The `TechBadge` component SHALL display a `react-icons` icon and the technology name. It SHALL accept `name: string`, `icon: IconType`, and `color: string` as props.

#### Scenario: Renders icon and name
- **WHEN** `TechBadge` is rendered with a valid icon and name
- **THEN** both the icon and the name label are visible

### Requirement: TechBadge reveals brand color on hover
The `TechBadge` component SHALL display in a neutral gray state by default. On hover, the icon SHALL transition to the technology's brand color.

#### Scenario: Default neutral state
- **WHEN** `TechBadge` is rendered without hover
- **THEN** the icon color is a neutral gray

#### Scenario: Brand color on hover
- **WHEN** the user hovers over a `TechBadge`
- **THEN** the icon transitions to the `color` prop value using a CSS transition

### Requirement: TechBadge displays a fallback icon for techs with no SI icon
When a `TechItem` has no available Simple Icons entry, the component SHALL render `MdCode` from `react-icons/md` as a fallback icon. The color-on-hover behaviour SHALL still apply using the `color` prop.

#### Scenario: Fallback icon renders
- **WHEN** a `TechBadge` is rendered with `MdCode` as the icon prop
- **THEN** the generic code icon is visible alongside the tech name

### Requirement: TechStackSection defaults to the Frontend tab
On initial render, the `TechStackSection` SHALL display the `Frontend` category tab as active, not the `All` tab.

#### Scenario: Frontend tab is active on first render
- **WHEN** `TechStackSection` renders for the first time
- **THEN** the "Frontend" tab is highlighted and only frontend tech badges are visible

#### Scenario: User can switch to All tab
- **WHEN** the user clicks the "All" tab
- **THEN** all items across all categories are displayed

### Requirement: Tech stack section has a Storybook story
The `TechStackSection` and `TechBadge` components SHALL each have a `.stories.tsx` file with at least one story using real data.

#### Scenario: Stories render without errors
- **WHEN** Storybook loads the TechStackSection and TechBadge stories
- **THEN** both render without errors
