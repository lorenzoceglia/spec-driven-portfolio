## ADDED Requirements

### Requirement: Open source section renders a grid of project cards
The `OpenSourceSection` component SHALL accept a `projects: OSProject[]` prop and render each item as a `Card`. The layout SHALL be 1 column on mobile and 2-3 columns on desktop.

#### Scenario: Renders all passed projects
- **WHEN** `OpenSourceSection` is rendered with 4 `OSProject` objects
- **THEN** 4 cards are visible

#### Scenario: Card displays project info
- **WHEN** an `OSProject` card is rendered
- **THEN** project name, description, and language are visible

### Requirement: Project card links to GitHub
Each project card SHALL render a clickable link to the project's `url`. The link SHALL open in a new tab.

#### Scenario: Card link opens in new tab
- **WHEN** the user clicks the card or its link
- **THEN** the browser navigates to the `url` in a new tab (`target="_blank"`)

### Requirement: Open source section has a Storybook story
The `OpenSourceSection` component SHALL have a `.stories.tsx` file with at least one story using placeholder data.

#### Scenario: Story renders without errors
- **WHEN** Storybook loads the OpenSourceSection story
- **THEN** the component renders without errors
