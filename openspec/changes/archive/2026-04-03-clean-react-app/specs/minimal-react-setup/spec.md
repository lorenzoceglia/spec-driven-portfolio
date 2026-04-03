## ADDED Requirements

### Requirement: Minimal React application with TypeScript support
The system SHALL provide a working React application with loose TypeScript configuration that allows for rapid iteration without strict type checking constraints.

#### Scenario: Application mounts successfully
- **WHEN** the development server starts
- **THEN** React mounts and renders the root App component in the DOM

#### Scenario: Hot module replacement works
- **WHEN** a developer modifies and saves a component file
- **THEN** the browser automatically reloads the component without full page refresh

### Requirement: Core dependencies installed
The system SHALL have React, React-DOM, and TypeScript as the only application dependencies, with no linting or formatting enforcement tools.

#### Scenario: Production dependencies are minimal
- **WHEN** npm install completes
- **THEN** package.json contains only React, React-DOM as dependencies

#### Scenario: Dev dependencies are lean
- **WHEN** npm install completes
- **THEN** package.json has TypeScript, Vite (dev server), and @types/react as dev dependencies; no ESLint or Biome

### Requirement: TypeScript configured in loose mode
The system SHALL have TypeScript configured to allow rapid development without strict type constraints, while still providing IDE type hints.

#### Scenario: Loose TypeScript allows iteration
- **WHEN** a developer builds or runs the dev server
- **THEN** no errors occur for unused variables, implicit any, or type mismatches; type hints are available in IDE

### Requirement: Dev server starts quickly
The system SHALL provide a development server that starts in under 5 seconds and serves the React app.

#### Scenario: Dev server is ready
- **WHEN** developer runs npm run dev
- **THEN** server starts and logs "Local: http://localhost:5173" (or configured port) within 5 seconds
