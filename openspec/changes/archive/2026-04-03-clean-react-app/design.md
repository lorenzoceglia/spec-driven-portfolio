## Context

The current project (`lorenzo_ceglia`) was scaffolded with Vite, Biome, and strict TypeScript configuration—all production-ready best practices. However, this creates friction during early feature development when the focus should be on building functionality rather than managing tooling. We need to create a minimal starting point: a clean React app with the essentials only, allowing developers to add features without navigating complex configuration.

Current state: Fully configured React + Vite + Biome scaffold  
Desired state: Minimal React app with basic setup, ready for feature development

## Goals / Non-Goals

**Goals:**
- Remove all non-essential tooling (Vite, Biome, ESLint complex configs)
- Keep React, React-DOM, TypeScript (loose mode for faster iteration)
- Create a simple, flat project structure easy to navigate
- Enable rapid feature development without build tool constraints
- Maintain a working React dev setup (basic dev server, hot reloading if possible)

**Non-Goals:**
- Build production-ready infrastructure (CI/CD, Docker, deployment configs)
- Pre-configure a testing framework
- Add state management or routing libraries
- Enforce code quality standards during this phase
- Support multiple environments (.env, staging/prod configs)

## Decisions

### 1. Use Create React App (CRA) or manual setup?
**Decision**: Manual setup using Vite's minimal React template (already installed), then remove complexity layer-by-layer.

**Why**: CRA is slow and opinionated; manual setup gives us exact control. Vite is already here and provides a fast dev server without the "bloat" feeling of full CRA setup.

**Alternatives**: 
- Use full CRA (rejected: too heavy, overconfigured)
- Use Webpack directly (rejected: more complex than Vite)
- Use esbuild (rejected: lacks dev server by default)

### 2. TypeScript: Strict mode or loose?
**Decision**: Disable strict mode, remove `noUnusedLocals` and `noUnusedParameters` checks.

**Why**: During feature development, strict mode is friction. Once features stabilize, can re-enable. Loose mode allows faster iteration.

**Alternatives**:
- Keep strict mode (rejected: conflicts with "minimal friction" goal)
- Remove TypeScript entirely (rejected: type hints still useful, just not enforced)

### 3. Linting & Formatting: Keep or remove?
**Decision**: Remove Biome, ESLint from enforcement; optional for developers.

**Why**: Automatic enforcement is friction during development. Manual linting can be added later when code quality gates matter.

**Alternatives**:
- Keep Biome (rejected: adds complexity, goal is minimal)
- Switch to ESLint only (rejected: still adds config overhead)

### 4. Project structure approach
**Decision**: Keep flat structure: `/src` for components, `/public` for assets. Remove `/src/assets`, unnecessary config files.

**Why**: Simplicity. Most React apps start flat and grow; premature organization adds friction.

### 5. Dependencies to keep
**Decision**: React, React-DOM, TypeScript (only). Remove Vite plugins and dev tools initially.

**Why**: These are the absolute essentials. Build tools and linting can be added when needed.

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| **No linting** - Code quality may degrade quickly | Document code style guidelines; re-enable linting when code becomes hard to maintain |
| **Loose TypeScript** - Type errors may slip through | Encourage developers to use IDE type checking; re-enable strict mode when code stabilizes |
| **Manual dev server** - May be slower than Vite's full setup | Accept tradeoff; Vite dev server is still fast enough for feature dev |
| **No automated formatting** - Inconsistent code style | Team agrees on style through PR review; add formatter later if needed |
| **Single-entry point structure** - May outgrow flat `/src` | Plan to refactor into features/ or modules/ when codebase reaches ~10-15 components |

## Migration Plan

1. Create new minimal React template alongside current project
2. Keep existing Vite config but strip it to essentials
3. Update tsconfig.json to loose mode
4. Remove Biome config and linting scripts from package.json
5. Remove unused dev dependencies
6. Delete unnecessary files (icons, favicons, demo components)
7. Verify dev server starts and React mounts
8. Document "what changed" for team reference

**Rollback**: Archived change provides full config if needed; can restore from git history

## Open Questions

- Should we keep a basic `.gitignore` or start from scratch?
- Do we need any environment variables (.env) initially, or add when features require it?
- Should we add a simple HTTP client (fetch wrapper) or implement as needed?
