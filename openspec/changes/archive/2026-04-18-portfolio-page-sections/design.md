## Context

The portfolio is a React 19 + TypeScript + Tailwind 4 single-page app built with Vite. Currently only placeholder components exist (Header, Footer, Section) with no real portfolio content. The goal is to add the full page structure with real sections while keeping the codebase clean and Storybook-first.

Constraints:
- Tailwind 4 (no `tailwind.config.js`, utility-first, CSS variables via `@theme`)
- Biome for linting/formatting (no ESLint/Prettier)
- `react-icons` for all icons (Simple Icons `si` for tech, Font Awesome `fa6` for socials)
- Every component needs a `.stories.tsx` file
- Mobile-first responsive layout
- Content is placeholder — real data comes later, so components must be fully data-driven via props

## Goals / Non-Goals

**Goals:**
- Full single-page portfolio layout: Header → Hero → TechStack → Companies → OpenSource → Footer
- `src/data/` layer with typed placeholder content decoupled from components
- Mobile-first responsive grid (2-col on mobile, 3-4 col on tablet+) for tech/companies/OS sections
- Minimalistic animations: scroll-triggered fade-in for sections, hover lift for cards, brand color reveal for tech badges
- All new and modified components have Storybook stories

**Non-Goals:**
- Real content (placeholder data throughout)
- Dark mode
- Page routing or multi-page navigation
- Contact form
- CMS or external data fetching
- Accessibility audit (out of scope for this change)

## Decisions

### 1. Data layer: `src/data/*.ts` files

**Decision**: All portfolio content lives in typed TypeScript files under `src/data/`, imported directly into components or `App.tsx`.

**Rationale**: Cleanest separation for a static portfolio. Easy to find and update content later without touching component logic. No CMS overhead for a personal site.

**Alternatives considered**:
- Hardcode in components — couples data to UI, harder to update
- JSON files — no TypeScript inference, less ergonomic
- External API/CMS — overkill for a personal portfolio at this stage

Files:
```
src/data/
├── techStack.ts      ← TechItem[]  { name, icon, color, category }
├── companies.ts      ← Company[]   { name, role, period, description, url? }
└── openSource.ts     ← OSProject[] { name, description, url, language, stars? }
```

### 2. Icon strategy: `react-icons`

**Decision**: Use `react-icons/si` (Simple Icons) for tech logos in TechStackSection, and `react-icons/fa6` (Font Awesome 6) for social links in the Footer.

**Rationale**: `react-icons` is tree-shakeable, zero config, and covers all needed icons. Simple Icons has official brand colors per tech, enabling the color-on-hover effect.

**Alternatives considered**:
- Inline SVGs — verbose, hard to maintain
- `lucide-react` — great for UI icons but no tech logos

### 3. Animations: CSS transitions + IntersectionObserver (no Framer Motion)

**Decision**: Use CSS `transition` / `@keyframes` for hover effects and a lightweight `useIntersectionObserver` hook for scroll-triggered reveals. No animation library.

**Rationale**: Keeps bundle size minimal. Tailwind's `transition`, `duration-*`, and `ease-*` utilities cover hover effects cleanly. A small custom hook covers scroll reveals without adding a dependency.

**Alternatives considered**:
- Framer Motion — powerful but adds ~50kb; overkill for this scope
- AOS library — another dependency, harder to customize

### 4. Header redesign: decorative only, no children

**Decision**: `Header` becomes a fixed-data decorative component — no `children` prop. Displays name left-aligned, optionally nav anchor links on the right (desktop only).

**Rationale**: A personal portfolio header has a fixed, known shape. A `children` API is unnecessary flexibility.

### 5. Footer redesign: name left + social icon links right

**Decision**: `Footer` renders name on the left and four `SocialIconLink` components on the right. Links are passed as props (not hardcoded) to keep the component reusable in Storybook.

### 6. Component granularity

**Decision**: Extract `TechBadge`, `SocialIconLink`, and `Card` as shared primitives with their own stories.

**Rationale**: These are independently testable/showcaseable in Storybook. Keeping them small makes stories clean.

## Risks / Trade-offs

- **Simple Icons coverage** → Some niche tech tools may not have an `si` icon. Mitigation: fall back to a generic code icon if no `si` icon exists.
- **Tailwind 4 `@theme` syntax** → Less community examples than Tailwind 3. Mitigation: rely on Tailwind utility classes directly; avoid custom theme overrides in this change.
- **Placeholder content in Storybook** → Stories will use fake data until real content is ready. This is intentional and acceptable.
- **IntersectionObserver in Storybook** → Scroll animations may not trigger in Storybook canvas (no scrollable viewport). Mitigation: animations default to visible state; no broken UI.

## Open Questions

- What accent color palette to use? (e.g., indigo/violet, emerald, amber — to be decided during implementation)
- Should the Header include subtle scroll-based shadow (shadow appears on scroll)? Nice touch but adds a bit of JS — worth discussing.
