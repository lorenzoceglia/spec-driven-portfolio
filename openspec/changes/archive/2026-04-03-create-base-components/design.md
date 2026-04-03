## Context

The app currently has no reusable layout components—only an App.tsx with a button. To establish a component library pattern, we need foundational layout components (Header, Footer, Section) that developers can use to build pages. These components should be simple, semantic, and styled with Tailwind CSS to match existing project patterns.

Current state: No component library or layout components  
Desired state: Three reusable layout components with Storybook stories

## Goals / Non-Goals

**Goals:**
- Create three basic layout components: Header, Footer, Section
- Each component should accept and render children
- Use Tailwind CSS for all styling
- Create Storybook stories for each component (with basic variations)
- Establish component folder structure and patterns for future components
- Remove Storybook's default onboarding content to have a clean slate

**Non-Goals:**
- Building a full design system (just foundations)
- Creating advanced component patterns (compound components, render props, etc.)
- Setting up component testing or unit tests
- Theming or dark mode support
- Responsive design beyond basic mobile-first Tailwind defaults

## Decisions

### 1. Component Location
**Decision**: Create `src/components/` directory to hold all components

**Why**: Standard React pattern; separates UI components from app logic  
**Alternatives**: Put in `src/`, put in `public/` (rejected)

### 2. Component Structure
**Decision**: Functional components with TypeScript, accept children via `ReactNode`

**Why**: Modern React best practice; TypeScript for type safety  
**Alternatives**: Class components (outdated), no TypeScript (less safe)

### 3. Styling Approach
**Decision**: Use Tailwind CSS classes directly (no CSS modules or styled-components)

**Why**: Consistent with existing project (Tailwind already set up); fast development  
**Alternatives**: CSS modules (overkill for simple components), CSS-in-JS (unnecessary)

### 4. Component Interfaces
**Decision**: Keep simple—just accept `children` and optional `className` for customization

**Why**: Minimal API surface; easy to extend later  
**Alternatives**: Accept many props (over-engineer early)

### 5. Storybook Stories
**Decision**: Create basic stories for each component showing default usage and variations

**Why**: Documents component usage; helps developers understand how to use them  
**Alternatives**: No stories (defeats Storybook setup purpose)

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| **Too simple** - Components may feel "dumb" | They're intentionally minimal; complexity added when needed |
| **Prop API changes** - May need to evolve as features need them | Document that component API is subject to change during development |
| **No type safety for children** - May accept wrong content types | Use TypeScript `React.ReactNode` and let IDE hints guide developers |
| **Limited styling** - Tailwind classes may not cover all use cases | Developers can extend or override with custom classes via `className` prop |

## Migration Plan

1. Create `src/components/` directory
2. Create Header.tsx component
3. Create Footer.tsx component
4. Create Section.tsx component
5. Create stories for each in `src/stories/`
6. Remove Storybook's default onboarding content
7. Verify all stories render correctly in Storybook
8. Update App.tsx to import and use Section component (as example)
9. Document in `.storybook/README.md` how to use components

Rollback: Delete `src/components/`, remove component imports from stories and App.tsx

## Open Questions

- Should components accept styling props (disabled state, variants)? Or keep minimal?
- Should we export a barrel export file (src/components/index.ts)?
- Should Header/Footer components have specific content structure (logo, nav, etc.) or be completely open?
