## Context

The portfolio has a working visual structure from the previous change (`portfolio-page-sections`) but every data file contains placeholder content and the hero section is visually sparse. This change populates all content with real data and introduces two new UI patterns: category filter tabs shared across sections, and a visually enriched hero with gradient background and bio text.

## Goals / Non-Goals

**Goals:**
- Replace all placeholder data with real professional content
- Add filter tabs UI to TechStackSection and OpenSourceSection via a shared `FilterTabs` primitive
- Extend `OSProject` type to support `type` (library vs contribution) and `npmUrl`
- Enrich HeroSection: bio prop + white-to-indigo-50 gradient background
- Correct social links in App.tsx (GitHub URL, email)

**Non-Goals:**
- Adding open source contributions (data only — UI infrastructure is built but tab won't appear until contributions are added)
- Animations on tab transitions
- Dark mode
- Any new npm dependencies

## Decisions

### 1. FilterTabs as a shared primitive

**Decision**: Extract a `FilterTabs` component (`src/components/FilterTabs.tsx`) that accepts `tabs: string[]`, `activeTab: string`, and `onTabChange: (tab: string) => void`. Both `TechStackSection` and `OpenSourceSection` use it independently.

**Rationale**: Same interaction pattern in two places. A shared component ensures visual consistency and avoids duplicating tab rendering logic. Keeping it generic (string-based tabs, no knowledge of data) makes it reusable for future sections.

**Alternatives considered**:
- Inline tab rendering per section — duplicates logic, harder to keep consistent
- Generic `FilterableGrid` compound component — over-engineered for current scope

### 2. Smart tab rendering — hide empty tabs

**Decision**: `FilterTabs` does not render a tab if zero items match it. The parent section computes a `tabs` array from the actual data, only including categories that have at least one item.

**Rationale**: The open source section currently has only "Libraries". Showing a "Contributions" tab with zero items creates a confusing empty state. When contributions are added to the data file, the tab appears automatically — no code change needed.

**Implementation**: Each section derives `availableTabs` from the data before passing to `FilterTabs`:
```
const availableTabs = ['All', ...new Set(items.map(i => i.category))]
```

### 3. Hero gradient — CSS background on section element

**Decision**: Apply `background: linear-gradient(to bottom, #ffffff, #eef2ff)` directly on the `HeroSection` section element via inline style or Tailwind arbitrary value. No wrapper div, no additional markup.

**Rationale**: Tailwind 4 supports arbitrary gradient values. `#eef2ff` is `indigo-50` — already the accent color used for language badges and role text in card components. One-line change, zero new abstractions.

### 4. Hero bio as a required prop

**Decision**: Add `bio: string` as a required prop on `HeroSection`. The bio text is defined in `App.tsx` alongside name and role, not hardcoded in the component.

**Rationale**: Consistent with the data-driven pattern established in the previous change. Storybook story can showcase different bio variants.

### 5. Fallback icon for no-SI-icon techs

**Decision**: Use `MdCode` from `react-icons/md` (already imported for the email icon in Footer) as the fallback icon for techs without a Simple Icons entry (Zustand, React Hook Form).

**Rationale**: `react-icons/md` is already a dependency — zero cost. `MdCode` is neutral, doesn't suggest a specific brand, and renders at the same size as SI icons.

### 6. OSProject type extension

**Decision**: Extend `OSProject` with `type: 'library' | 'contribution'` and optional `npmUrl?: string`. Library cards render both a GitHub icon-link and an NPM icon-link when `npmUrl` is present. Contribution cards render only GitHub.

**Rationale**: The type field enables tab filtering. The `npmUrl` differentiates published libraries from unreleased repos — both of Lorenzo's current projects are NPM-published, so this is immediately useful.

### 7. Tech stack categories

**Decision**: Four categories — Frontend, Backend, Database, Tools — matching the CV groupings. Tab order: `All | Frontend | Backend | Database | Tools`.

**Full mapping:**
- Frontend: TypeScript, React, Angular, Next.js, Tailwind, Styled Components, Redux, Redux Saga, jQuery, Bootstrap, Ionic, React Hook Form, Zustand
- Backend: Node.js, Express.js, PHP, GraphQL, Hasura
- Database: PostgreSQL, MySQL, MongoDB
- Tools: Docker, AWS, Git, Vite, Vitest, ESLint

## Risks / Trade-offs

- **`MdCode` fallback visual weight** → SI icons are brand logos with recognisable shapes; `MdCode` is generic. Mitigation: the fallback is rare (Zustand, RHF) and the name label below compensates.
- **Smart tab derivation from data** → If data is empty the "All" tab still appears with zero items. Mitigation: portfolio data is never truly empty; acceptable edge case.
- **Gradient in Tailwind 4** → Tailwind 4 arbitrary gradient syntax is slightly different from v3. Mitigation: use inline `style` prop as fallback if Tailwind class doesn't compile correctly.

## Open Questions

- Should the NPM icon in library cards use `SiNpm` (orange) or a muted version consistent with the neutral-until-hover badge pattern? Leaning toward applying the same hover-color-reveal pattern for consistency.
