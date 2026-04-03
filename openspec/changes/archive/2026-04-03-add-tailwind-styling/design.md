## Context

The project currently has no styling framework. Components use minimal inline styling. Tailwind CSS v4.2 is the latest major version with improved performance and simplified configuration (no config file required by default). Integration with Vite is straightforward via npm package.

Current state: Plain React components with no CSS framework  
Desired state: Components styled with Tailwind v4.2 utilities, starting with red-styled button

## Goals / Non-Goals

**Goals:**
- Install and configure Tailwind CSS v4.2
- Demonstrate Tailwind integration by styling the counter button red
- Ensure Vite build includes Tailwind CSS processing
- Make it easy for developers to add Tailwind utilities to any component

**Non-Goals:**
- Creating a comprehensive design system or component library
- Building custom Tailwind configuration (use v4.2 defaults)
- Adding pre-built UI component libraries (Headless UI, etc.)
- Setting up dark mode or advanced theme customization

## Decisions

### 1. Tailwind v4.2 Installation Method
**Decision**: Install `tailwindcss@4.2` via npm as dev dependency; use CSS `@import` in index.css

**Why**: Tailwind v4.2 supports CSS imports without requiring a config file. Vite will handle compilation automatically.

**Alternatives Considered**:
- PostCSS plugin (more complex, requires config file)
- CDN (slower, loses build optimization)

### 2. CSS Entry Point
**Decision**: Add `@import "tailwindcss"` to top of `src/index.css`

**Why**: Simple, centralized. Vite processes CSS imports and bundles with JS.

**Alternatives**:
- Separate CSS file (adds file count)
- Import in main.tsx (mixes style/logic)

### 3. Styling the Button
**Decision**: Use Tailwind utility classes: `bg-red-500 hover:bg-red-600` on button element

**Why**: Demonstrates Tailwind workflow; utilities are responsive and composable.

**Alternatives**:
- Custom CSS class (defeats purpose of Tailwind)
- Inline styles (not performant)

### 4. Build Integration
**Decision**: No changes to vite.config.ts or tsconfig needed; Vite handles CSS processing automatically

**Why**: Tailwind v4.2 works out-of-the-box with Vite's CSS handling.

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| **CSS Bundle Size** - Tailwind adds ~15-20KB unminified | Vite minifies; production bundle is ~3-5KB additional gzipped |
| **Class Name Pollution** - Tailwind utilities could conflict with existing CSS** | App has no existing CSS; low risk. Document if custom CSS added later |
| **Learning Curve** - Team may need to learn Tailwind utilities | Tailwind docs are excellent; simple project allows experimentation |
| **Build Performance** - Tailwind CSS processing adds build time** | Minimal impact on fast Vite builds; trade-off acceptable |

## Migration Plan

1. Install `tailwindcss@4.2` package
2. Add `@import "tailwindcss"` to `src/index.css`
3. Apply Tailwind classes to App.tsx button: `className="bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded"`
4. Test: `npm run dev` to verify Tailwind CSS loads
5. Verify: `npm run build` to ensure production build includes Tailwind

Rollback: Remove Tailwind import from index.css, revert App.tsx, remove dependency from package.json

## Open Questions

- Should we set up any Tailwind content scanning, or use defaults?
- Do we want to add any custom Tailwind configuration (colors, spacing) now or later?
