## Context

We are setting up a new React TypeScript project called `lorenzo_ceglia` from scratch. This requires coordinating multiple decisions across tooling (Vite), code quality (Biome), and project structure. The project needs to be production-ready and follow modern React patterns.

## Goals / Non-Goals

**Goals:**
- Establish a reproducible, fast development environment with Vite
- Implement consistent code quality standards via Biome for all team members
- Create a scalable project structure that supports future feature development
- Enable developers to build and test React components efficiently
- Document all setup steps for team onboarding

**Non-Goals:**
- Building deployment infrastructure (CI/CD pipelines, Docker, etc.)
- Complex state management setup (Redux, MobX) - kept minimal
- UI component library or design system
- Testing framework setup (can be added later)

## Decisions

1. **Module Bundler: Vite**
   - **Why**: Vite offers sub-second HMR, faster builds than Webpack, and zero-config React support
   - **Alternatives Considered**: Webpack (complex config, slower), Turbopack (not production-ready), esbuild (no built-in dev server)
   - **Rationale**: Developer velocity is critical; Vite's speed advantages justify adoption for new projects

2. **Code Quality: Biome.js**
   - **Why**: Unified linting + formatting tool written in Rust; much faster than ESLint + Prettier; requires zero configuration
   - **Alternatives Considered**: ESLint + Prettier (setup overhead), Ruff (Python-focused), Rome (predecessor to Biome)
   - **Rationale**: Zero-config and blazing-fast performance reduce friction; single tool reduces maintenance

3. **TypeScript with Strict Mode**
   - **Why**: Catches type errors at development time; improves code maintainability and IDE support
   - **Alternatives Considered**: JavaScript only (less safety), loose TypeScript (defeats purpose)
   - **Rationale**: Strict mode enforces best practices; investment now prevents bugs at scale

4. **Project Root Location**
   - **Decision**: Create app at `src/` with entry point at `src/main.tsx`, public assets in `public/`
   - **Rationale**: Standard React + Vite convention; clear separation of source and public assets

5. **React version: 18.x**
   - **Why**: Latest stable React with Concurrent Features and Hooks support
   - **Rationale**: Current best practice for new projects

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| **Biome adoption curve** - Team unfamiliar with Biome rules | Provide clear documentation and VS Code extension for inline feedback |
| **Vite edge cases** - May encounter less common issues than Webpack | Maintain active check of Vite docs and community; fallback plan to esbuild if needed |
| **Node version constraints** - Vite requires Node 14.18+; Biome may have specific requirements | Document minimum Node version in package.json engines field |
| **HMR reliability** - Fast reloads may mask state inconsistencies during development | Use React DevTools to monitor component state; test in production build regularly |

## Migration Plan

1. **Initialize project**: Run `npm create vite@latest lorenzo_ceglia -- --template react-ts`
2. **Install Biome**: Add Biome as dev dependency and initialize config
3. **Configure files**: Set up `vite.config.ts`, `biome.json`, `tsconfig.json`, `.gitignore`
4. **Create structure**: Establish `src/`, `public/`, component directory layout
5. **Verify setup**: Test HMR, run build, verify formatting and linting work
6. **Document**: Add README with setup and dev server instructions

Rollback: Delete project directory if issues arise; setup is non-destructive.

## Open Questions

- Should we pin specific versions in package.json or allow minor updates?
- Do we need environment-specific configurations (.env files)?
- Should we add a linting pre-commit hook?
