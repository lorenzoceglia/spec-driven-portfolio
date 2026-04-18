## MODIFIED Requirements

### Requirement: Open source section renders a grid of project cards
The `OpenSourceSection` component SHALL accept a `projects: OSProject[]` prop and render each item as a `Card`. It SHALL also render `FilterTabs` to filter by project type. The layout SHALL be 1 column on mobile and 2 columns on desktop.

#### Scenario: Renders all passed projects when All tab active
- **WHEN** `OpenSourceSection` is rendered with the All tab active
- **THEN** all `OSProject` items are visible as cards

#### Scenario: Card displays project info
- **WHEN** an `OSProject` card is rendered
- **THEN** project name, description, and language are visible

### Requirement: Project card links to repository
Each project card SHALL render a GitHub icon-link to `url` opening in a new tab. If `npmUrl` is present, an additional NPM icon-link SHALL be rendered.

#### Scenario: GitHub link opens in new tab
- **WHEN** the user clicks the GitHub icon-link on a card
- **THEN** the browser navigates to `url` in a new tab

#### Scenario: NPM link renders when present
- **WHEN** `npmUrl` is defined on a project
- **THEN** an NPM icon-link is visible on the card
