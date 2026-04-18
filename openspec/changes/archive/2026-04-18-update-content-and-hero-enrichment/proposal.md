## Why

The portfolio currently contains entirely placeholder data and a visually sparse hero section. With real professional history, published open source libraries, and a clear personal identity to express, it's time to replace every placeholder with real content and enrich the hero with a bio and visual depth.

## What Changes

- **Hero section** enriched: bio line added below the role, subtle white-to-indigo gradient background, role updated to "Frontend Engineer"
- **TechStackSection** redesigned: category filter tabs (All / Frontend / Backend / Database / Tools), real CV tech stack replacing placeholder data, fallback icon for techs with no Simple Icons entry
- **OpenSourceSection** redesigned: filter tabs (All / Libraries, expandable to Contributions later), `OSProject` type extended with `type` and `npmUrl` fields, library cards show both GitHub and NPM links
- **FilterTabs** new shared primitive component used by both TechStackSection and OpenSourceSection
- **CompaniesSection** data updated: 5 real companies (SparkFabrik, Accenture, Next Adv, Fabless, DMXLAB) replacing 3 placeholders
- **Data layer** fully updated: real tech stack (24 items), 2 real libraries, 5 real companies
- **App.tsx** updated: correct social links (GitHub, email), role string

## Capabilities

### New Capabilities

- `filter-tabs`: Reusable tab filter UI component used by tech stack and open source sections
- `hero-enrichment`: Bio text + gradient background visual treatment for the hero section
- `open-source-libraries`: Extended open source section supporting library type + NPM links + filter tabs

### Modified Capabilities

- `tech-stack-section`: Requirements change — adds filter tab interaction, fallback icon requirement, real data shape
- `open-source-section`: Requirements change — adds filter tabs, type field, NPM link support
- `portfolio-data-layer`: Requirements change — extended `OSProject` type, real data in all three files
- `hero-section`: Requirements change — new bio prop, gradient background

## Impact

- **Modified files**: `HeroSection.tsx`, `TechStackSection.tsx`, `OpenSourceSection.tsx`, `App.tsx`
- **Modified data**: `src/data/techStack.ts`, `src/data/companies.ts`, `src/data/openSource.ts`
- **New files**: `FilterTabs.tsx` + `FilterTabs.stories.tsx`
- **Updated stories**: `HeroSection.stories.tsx`, `TechStackSection.stories.tsx`, `OpenSourceSection.stories.tsx`
- **No new npm dependencies** — fallback icon from `react-icons/md` already installed
- **Non-goals**: Adding contributions to the open source section (planned for later), dark mode, animations on tabs, contact form
