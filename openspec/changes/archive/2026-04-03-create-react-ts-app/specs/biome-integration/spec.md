## ADDED Requirements

### Requirement: Linting with Biome
The system SHALL use Biome.js to lint all JavaScript and TypeScript source files, enforcing consistent code style and catching common errors.

#### Scenario: Lint check passes
- **WHEN** a developer runs the linting command
- **THEN** all source files are checked and no violations are reported

#### Scenario: Lint violations detected
- **WHEN** source files contain code quality issues
- **THEN** Biome identifies violations with file, line, and column information

### Requirement: Code formatting with Biome
The system SHALL use Biome.js to automatically format all source code to a consistent style.

#### Scenario: Format command succeeds
- **WHEN** a developer runs the format command
- **THEN** all source files are reformatted according to Biome rules

#### Scenario: Format verification
- **WHEN** a developer runs format check
- **THEN** the system reports which files need formatting without modifying them

### Requirement: Biome configuration
The system SHALL have a biome.json configuration file that defines linting and formatting rules for the project.

#### Scenario: Configuration file exists
- **WHEN** the project is initialized
- **THEN** a biome.json file is present with sensible defaults
