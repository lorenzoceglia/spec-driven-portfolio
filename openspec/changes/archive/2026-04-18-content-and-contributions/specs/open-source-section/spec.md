## MODIFIED Requirements

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
