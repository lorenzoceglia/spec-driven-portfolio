## MODIFIED Requirements

### Requirement: Portfolio data layer provides typed content files
The project SHALL contain `src/data/techStack.ts`, `src/data/companies.ts`, and `src/data/openSource.ts` with real content populated from Lorenzo Ceglia's professional history and open source work.

#### Scenario: Real data is present
- **WHEN** the data files are imported
- **THEN** `techStack` contains 24 real technology items, `companies` contains 5 real company entries, and `openSourceProjects` contains 2 real library entries

### Requirement: TechItem type includes category
A `TechItem` type SHALL be defined with `name: string`, `icon: IconType`, `color: string`, and `category: 'Frontend' | 'Backend' | 'Database' | 'Tools'`.

#### Scenario: TechItem category enables tab filtering
- **WHEN** `TechStackSection` receives the real `techStack` array
- **THEN** items are correctly distributable across the four category tabs

### Requirement: OSProject type supports type and npmUrl fields
The `OSProject` type SHALL include `type: 'library' | 'contribution'` and `npmUrl?: string` in addition to existing fields.

#### Scenario: OSProject type field enables filtering
- **WHEN** `OpenSourceSection` receives the real `openSourceProjects` array
- **THEN** items can be filtered by `type === 'library'`

#### Scenario: OSProject npmUrl enables NPM link
- **WHEN** an `OSProject` has `npmUrl` set
- **THEN** the card renders an NPM link using the `npmUrl` value

### Requirement: Company type remains unchanged
The `Company` type SHALL remain `{ name, role, period, description, url? }`. Only the data values change.

#### Scenario: Company data matches CV
- **WHEN** `companies.ts` is imported
- **THEN** the five entries match SparkFabrik, Accenture Italy, Next Adv, Fabless S.P.A., and DMXLAB with correct roles and periods
