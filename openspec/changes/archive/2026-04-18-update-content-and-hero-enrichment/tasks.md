## 1. Data Layer — Real Content

- [x] 1.1 Update `src/data/techStack.ts` — replace placeholder items with all 24 real tech stack entries from CV, assign correct categories (Frontend / Backend / Database / Tools), add `MdCode` fallback for Zustand and React Hook Form
- [x] 1.2 Update `src/data/companies.ts` — replace 3 placeholder companies with 5 real entries: SparkFabrik (2026–Present), Accenture Italy (04/2023–02/2026), Next Adv (07/2022–04/2023), Fabless S.P.A. (05/2021–07/2022), DMXLAB (01/2021–03/2021)
- [x] 1.3 Update `src/data/openSource.ts` — extend `OSProject` type with `type: 'library' | 'contribution'` and `npmUrl?: string`, replace placeholder entries with `react-kiosk-keyboard` and `mp3-coverify` with correct URLs and NPM package links

## 2. FilterTabs Shared Primitive

- [x] 2.1 Build `FilterTabs` component (`src/components/FilterTabs.tsx`) — accepts `tabs: string[]`, `activeTab: string`, `onTabChange: (tab: string) => void`; renders one button per tab with active highlight; horizontally scrollable on mobile
- [x] 2.2 Create `FilterTabs.stories.tsx` with a story showing multiple tabs and an active selection

## 3. Hero Section Enrichment

- [x] 3.1 Update `HeroSection` component — add `bio: string` as a required prop, render bio below role with staggered CSS animation delay (300ms), add `background: linear-gradient(to bottom, #ffffff, #eef2ff)` to the section element
- [x] 3.2 Update `HeroSection.stories.tsx` — add `bio` arg to the Default story

## 4. TechStackSection with Filter Tabs

- [x] 4.1 Update `TechStackSection` component — add `useState` for `activeTab`, derive `availableTabs` from `techs` data (only categories present + "All"), render `FilterTabs` above the grid, filter displayed badges by active tab
- [x] 4.2 Update `TechStackSection.stories.tsx` — verify story still works with the new filter UI (no args change needed, data drives tabs)

## 5. OpenSourceSection with Filter Tabs and NPM Links

- [x] 5.1 Update `OpenSourceSection` component — add `useState` for `activeTab`, derive `availableTabs` from `projects` data (`type` field + "All"), render `FilterTabs` above the grid, filter displayed cards by active tab
- [x] 5.2 Update the open source project card rendering — when `npmUrl` is present render an NPM icon-link (`SiNpm` from `react-icons/si`) alongside the GitHub icon-link; both open in new tab
- [x] 5.3 Update `OpenSourceSection.stories.tsx` — verify story uses the two real library entries

## 6. App.tsx — Wire Everything Together

- [x] 6.1 Update `App.tsx` — change `role` to `"Frontend Engineer"`, add `bio` prop with the agreed text: `"Frontend engineer obsessed with clean UIs and open source. Also responsible for clearing the dance floor at least once a weekend."`
- [x] 6.2 Update social links in `App.tsx` — fix GitHub URL to `https://github.com/lorenzoceglia`, fix email to `ceglia.lorenzo@gmail.com`

## 7. Build & Verify

- [x] 7.1 Run `npm run build` — fix any TypeScript errors (especially OSProject type change propagation)
- [x] 7.2 Run `npm run build-storybook` — verify all updated stories compile without errors
