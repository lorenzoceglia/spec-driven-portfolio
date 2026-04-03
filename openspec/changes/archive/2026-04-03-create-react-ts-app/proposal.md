## Why

Setting up a modern React development environment from scratch is error-prone and time-consuming. We need a streamlined, production-ready React TypeScript application scaffold that uses industry-standard tools (Vite for fast bundling, Biome for linting/formatting) to accelerate development and ensure code quality from day one.

## What Changes

- Initialize a new React TypeScript application named `lorenzo_ceglia`
- Configure Vite as the module bundler for fast development and optimized production builds
- Integrate Biome.js for linting, formatting, and code analysis with zero-config setup
- Set up TypeScript with strict mode enabled for type safety
- Create a basic project structure with entry point, App component, and index HTML
- Configure development environment with HMR (Hot Module Replacement) support

## Capabilities

### New Capabilities
- `react-vite-setup`: Initialize a React application with Vite bundler, TypeScript support, and development server configuration
- `biome-integration`: Configure Biome.js for linting and code formatting with project-wide rules
- `project-structure`: Create a scalable project structure with proper module organization and configuration files

### Modified Capabilities
<!-- None - this is a new project setup -->

## Impact

- **Code Quality**: Enforced linting and formatting standards via Biome
- **Developer Experience**: Fast HMR and build times with Vite
- **Type Safety**: Full TypeScript integration with strict mode
- **Dependencies**: Adds React, React-DOM, Vite, Biome, and related dev dependencies
- **Project Setup**: Creates new project directory with all necessary configuration files
