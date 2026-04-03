## Why

The current scaffold contains production setup complexity (Vite, Biome, strict TypeScript configuration) that adds friction during early feature development. We need a minimal, clean React application that prioritizes developer velocity and ease of adding features over pre-configured best practices. This allows us to implement and iterate on core functionality without worrying about tooling configuration.

## What Changes

- Remove Vite build configuration and development server setup
- Simplify TypeScript configuration to remove strict mode constraints
- Remove Biome linting and formatting enforcement
- Create a minimal React app with just core dependencies (React, React-DOM)
- Establish a simple, flat project structure focused on feature development
- Remove all configuration files except essential ones (package.json, tsconfig.json)

## Capabilities

### New Capabilities
- `minimal-react-setup`: Configure a bare-minimum React application with basic tooling and simplified structure
- `feature-ready-structure`: Establish a project layout optimized for rapid feature implementation without complex scaffolding

### Modified Capabilities
<!-- No existing capabilities modified -->

## Impact

- **Dependencies**: Removes Vite, Biome, ESLint, and related dev tools; keeps only React, React-DOM, and TypeScript
- **Project Structure**: Simplifies from multi-config setup to flat, minimal layout
- **Development Workflow**: Trades automated formatting/linting for speed; developers responsible for code quality during iteration
- **Build Process**: May require external build tool later (Vite, esbuild, or similar) for production
