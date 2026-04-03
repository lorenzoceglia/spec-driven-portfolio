## ADDED Requirements

### Requirement: Flat, simple project structure
The system SHALL establish a minimal directory structure optimized for rapid feature development with no unnecessary organizational layers.

#### Scenario: Project structure is flat and accessible
- **WHEN** developer explores the project root
- **THEN** they find: src/ (components), public/ (static assets), package.json, tsconfig.json, index.html, and .gitignore; no config clutter

### Requirement: Entry point and root component
The system SHALL have a single HTML entry point (index.html) and a root React component (App.tsx) that developers can immediately modify.

#### Scenario: App component is the entry point
- **WHEN** the application starts
- **THEN** index.html loads src/main.tsx, which mounts App from src/App.tsx into #root

### Requirement: Public assets directory
The system SHALL provide a public/ directory for static files (favicon, images, etc.) with no unnecessary default assets.

#### Scenario: Public directory is minimal
- **WHEN** developer explores public/
- **THEN** they find: index.html and .gitignore; demo files (favicons, SVGs) are removed

### Requirement: No configuration clutter in project root
The system SHALL minimize configuration files in the root directory, keeping only essential ones: package.json, tsconfig.json, vite.config.ts, index.html, and .gitignore.

#### Scenario: Unnecessary files are removed
- **WHEN** developer lists files in project root
- **THEN** Biome.json, ESLint configs, and demo asset files are not present

### Requirement: Development commands are simplified
The system SHALL provide only essential npm scripts: dev (start server), build (create dist), and preview (test production build).

#### Scenario: Only necessary scripts exist
- **WHEN** developer checks package.json scripts
- **THEN** they see: dev, build, and preview; lint and format scripts are removed
