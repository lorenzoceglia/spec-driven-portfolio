## ADDED Requirements

### Requirement: Open source section supports filter tabs
The `OpenSourceSection` component SHALL render `FilterTabs` above the grid. Tabs SHALL be derived from the `type` field of the passed `OSProject[]` array plus an "All" tab. Only tabs with at least one matching item SHALL be included.

#### Scenario: All tab shows all projects
- **WHEN** the "All" tab is active
- **THEN** all projects in the `projects` array are visible

#### Scenario: Libraries tab filters correctly
- **WHEN** the "Libraries" tab is active
- **THEN** only projects with `type === 'library'` are visible

#### Scenario: Empty category tab is not rendered
- **WHEN** no projects have `type === 'contribution'`
- **THEN** no "Contributions" tab appears

### Requirement: Library cards display NPM link
When an `OSProject` has a `npmUrl` field, its card SHALL render an NPM icon-link alongside the GitHub icon-link. Both links SHALL open in a new tab.

#### Scenario: Library card shows two links
- **WHEN** a project card renders with both `url` and `npmUrl`
- **THEN** both a GitHub icon-link and an NPM icon-link are visible

#### Scenario: Contribution card shows one link
- **WHEN** a project card renders with only `url` and no `npmUrl`
- **THEN** only the GitHub icon-link is visible
