## Context

The project currently has React components (App.tsx) but no isolated development environment for building and testing components independently. Storybook fills this gap by providing a separate dev environment where components can be developed, documented, and showcased without needing the full app context. With Tailwind CSS already in place, Storybook needs to be configured to use the same styling system.

Current state: React app with Tailwind CSS, no component library or documentation  
Desired state: Storybook environment ready for future component stories, inheriting project styles

## Goals / Non-Goals

**Goals:**
- Set up Storybook v8 as a development tool for React components
- Configure Storybook to work with TypeScript and Vite build system
- Ensure Storybook inherits and displays Tailwind CSS styles from the project
- Create the directory structure and configuration files needed for future stories
- Provide developers with clear npm scripts to run Storybook locally and build for production
- Document the Storybook setup for team reference

**Non-Goals:**
- Create demo components or stories (that comes in future changes)
- Set up advanced Storybook addons or plugins (start minimal)
- Configure CI/CD deployment for Storybook (can be added later)
- Create a design tokens system or theme switcher (scope for later)
- Set up Chromatic or visual regression testing (can add when needed)

## Decisions

### 1. Storybook Version
**Decision**: Install Storybook v8 (latest major version)

**Why**: Latest features, best React 19 support, modern tooling

**Alternatives Considered**:
- v7 (stable but aging, may have React 19 issues)
- v6 (too old, missing modern features)

### 2. Storybook Builder
**Decision**: Use Vite as the builder (Storybook's default for modern projects)

**Why**: Vite is already in use for main app; fast builds; consistent build system

**Alternatives**:
- Webpack (slower, more config overhead)
- SWC (less proven, Vite is better supported)

### 3. Styling Strategy in Storybook
**Decision**: Import Tailwind CSS in Storybook preview files to inherit project styles

**Why**: Single source of truth for styles; no duplication; stories see what app sees

**How**: Add `@import "tailwindcss"` in `.storybook/preview.ts` so all stories get Tailwind utilities

**Alternatives**:
- Separate CSS files (creates duplication and maintenance burden)
- Theme switcher (premature; add if needed later)

### 4. Project Structure
**Decision**: Create `.storybook/` in project root for config; `src/stories/` for future story files

**Why**: Standard Storybook convention; keeps stories co-located with components they document

### 5. TypeScript Support
**Decision**: Configure Storybook with TypeScript support; create `tsconfig.storybook.json` if needed

**Why**: Project uses TypeScript; stories should have full type safety

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| **Large node_modules** - Storybook adds ~50MB | Accept trade-off; development tool, not shipped to users; document in README |
| **Build complexity** - Two build systems (Vite for app, Storybook for stories) | Use Vite builder to minimize surface; document both scripts clearly |
| **CSS not inherited initially** - First developers might not realize Tailwind is available | Document in `.storybook/README.md` with example of how to use utilities |
| **Port conflicts** - Storybook default port 6006 might conflict | Use default port; document how to change if needed |

## Migration Plan

1. Install Storybook CLI and run initialization
2. Select React + TypeScript + Vite options during setup
3. Configure Storybook to import Tailwind CSS in preview files
4. Remove any auto-generated example stories (we're not using them yet)
5. Create empty `src/stories/` directory for future stories
6. Test: `npm run storybook` should open Storybook UI with no errors
7. Document in project README how to run Storybook

Rollback: Delete `.storybook/`, remove Storybook packages from package.json, run npm install

## Open Questions

- Should we configure any specific Storybook addons (toolbar, controls, etc.) now or wait until we have stories?
- Do we want a `.storybook/README.md` with component story guidelines, or add to main README?
- Should we set up `.storybook/theme.js` to match app's Tailwind colors, or just use defaults for now?
