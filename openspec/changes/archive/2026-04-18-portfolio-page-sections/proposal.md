## Why

The portfolio currently displays only a generic placeholder page. It needs real sections that represent Lorenzo's identity as a developer — who he is, what he knows, where he's worked, and what he's built in the open source community.

## What Changes

- **Header** redesigned as a minimal decorative bar with the name on the left
- **Footer** redesigned with name and four social icon links (LinkedIn, Instagram, GitHub, Mail)
- **HeroSection** added: displays name and professional role/title
- **TechStackSection** added: grid of technology badges with icon + name, color revealed on hover
- **CompaniesSection** added: cards showcasing past employers
- **OpenSourceSection** added: cards showcasing open source contributions and projects
- **Shared primitives** added: `TechBadge`, `SocialIconLink`, `Card`
- **Data layer** added: `src/data/` files separate content from components
- Every new component ships with a Storybook `.stories.tsx` file

## Capabilities

### New Capabilities

- `hero-section`: Full-width intro section with name and role, fade-in stagger animation on load
- `tech-stack-section`: Responsive icon grid of technologies, brand color reveal on hover
- `companies-section`: Cards layout for past companies/employers
- `open-source-section`: Cards layout for open source contributions and projects
- `portfolio-data-layer`: Typed data files in `src/data/` for tech stack, companies, and open source items
- `portfolio-animations`: Scroll-triggered fade-in for sections, hover lift for cards, hover color fill for tech badges

### Modified Capabilities

- `header-component`: Visual redesign — decorative bar, name left-aligned, no children slot
- `footer-component`: New layout — name left, social icon links right (LinkedIn, Instagram, GitHub, Mail)

## Impact

- **Dependencies added**: `react-icons`
- **Modified files**: `Header.tsx`, `Footer.tsx`, `App.tsx`, and their `.stories.tsx` files
- **New files**: 4 section components + 3 shared primitives + `src/data/*.ts` files + 7 story files
- **No breaking changes** to `Section.tsx`
- **Non-goals**: Contact form, blog section, dark mode, page routing, CMS integration, real content (placeholder data used throughout)
