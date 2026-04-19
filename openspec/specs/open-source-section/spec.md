# open-source-section Specification

## Purpose
Responsive grid of cards showcasing open source libraries and contributions, each with GitHub and optional NPM icon links. Supports filter tabs by project type.

## Requirements

### Requirement: Open source section renders a grid of project cards
The `OpenSourceSection` component SHALL accept a `projects: OSProject[]` prop and render each item as a `Card`. It SHALL also render `FilterTabs` to filter by project type. The layout SHALL be 1 column on mobile and 2 columns on desktop.

#### Scenario: Renders all passed projects when All tab active
- **WHEN** `OpenSourceSection` is rendered with the All tab active
- **THEN** all `OSProject` items are visible as cards

#### Scenario: Card displays project info
- **WHEN** an `OSProject` card is rendered
- **THEN** project name, description, and language are visible

### Requirement: Project card links to repository
Each project card SHALL render an icon-link to `url` opening in a new tab. When `platform` is `'gitlab'`, a `SiGitlab` icon SHALL be used; otherwise a `FaGithub` icon SHALL be used. If `npmUrl` is present, an additional NPM icon-link SHALL be rendered.

#### Scenario: GitHub link opens in new tab
- **WHEN** the user clicks the icon-link on a card with no `platform` or `platform === 'github'`
- **THEN** the browser navigates to `url` in a new tab using the `FaGithub` icon

#### Scenario: GitLab link renders for GitLab projects
- **WHEN** an `OSProject` has `platform === 'gitlab'`
- **THEN** a `SiGitlab` icon-link is visible on the card

#### Scenario: NPM link renders when present
- **WHEN** `npmUrl` is defined on a project
- **THEN** an NPM icon-link is visible on the card

### Requirement: Open source projects support multiple VCS platforms
The `OSProject` type SHALL include an optional `platform` field (`'github' | 'gitlab'`). When `platform` is `'gitlab'`, the `OpenSourceSection` SHALL render a `SiGitlab` icon instead of `FaGithub` for that entry's link.

#### Scenario: GitHub entry (default)
- **WHEN** an `OSProject` has no `platform` field or `platform === 'github'`
- **THEN** a `FaGithub` icon links to `url`

#### Scenario: GitLab entry
- **WHEN** an `OSProject` has `platform === 'gitlab'`
- **THEN** a `SiGitlab` icon links to `url`

### Requirement: Open source section contains six entries including four contributions
The `openSourceProjects` export SHALL contain six entries: two libraries (`react-kiosk-keyboard`, `mp3-coverify`) and four contributions (`company-playbook`, `plugin-rest-cache`, `react-hook-form`, `ryujinx`), each with all `OSProject` fields populated.

#### Scenario: Contribution filter shows four entries
- **WHEN** the user selects the "Contribution" filter tab
- **THEN** exactly four cards are shown: company-playbook, plugin-rest-cache, react-hook-form, ryujinx

#### Scenario: Library filter unchanged
- **WHEN** the user selects the "Library" filter tab
- **THEN** exactly two cards are shown: react-kiosk-keyboard and mp3-coverify

### Requirement: Open source section has a Storybook story
The `OpenSourceSection` component SHALL have a `.stories.tsx` file with at least one story using real data.

#### Scenario: Story renders without errors
- **WHEN** Storybook loads the OpenSourceSection story
- **THEN** the component renders without errors
