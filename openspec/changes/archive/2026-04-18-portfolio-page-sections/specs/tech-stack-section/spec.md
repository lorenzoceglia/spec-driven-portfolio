## ADDED Requirements

### Requirement: Tech stack section renders a grid of technology badges
The `TechStackSection` component SHALL accept a `techs: TechItem[]` prop and render each item as a `TechBadge` in a responsive grid. The grid SHALL be 2 columns on mobile, 4 columns on tablet, and 6 columns on desktop.

#### Scenario: Renders all passed tech items
- **WHEN** `TechStackSection` is rendered with an array of 10 `TechItem` objects
- **THEN** 10 `TechBadge` components are visible

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

### Requirement: Tech stack section has a Storybook story
The `TechStackSection` and `TechBadge` components SHALL each have a `.stories.tsx` file with at least one story using placeholder data.

#### Scenario: Stories render without errors
- **WHEN** Storybook loads the TechStackSection and TechBadge stories
- **THEN** both render without errors
