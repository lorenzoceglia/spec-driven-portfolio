## 1. Dependencies & Setup

- [x] 1.1 Install `react-icons` package via npm in the `lorenzo_ceglia/` project
- [x] 1.2 Create `src/data/` directory with `techStack.ts`, `companies.ts`, and `openSource.ts` with placeholder typed data
- [x] 1.3 Create `src/hooks/` directory and implement `useIntersectionObserver.ts` hook

## 2. Shared Primitive Components

- [x] 2.1 Build `TechBadge` component (`src/components/TechBadge.tsx`) — icon + name, neutral default, brand color on hover via CSS transition
- [x] 2.2 Create `TechBadge.stories.tsx` with at least one story
- [x] 2.3 Build `Card` component (`src/components/Card.tsx`) — reusable card shell with hover lift animation
- [x] 2.4 Create `Card.stories.tsx` with at least one story
- [x] 2.5 Build `SocialIconLink` component (`src/components/SocialIconLink.tsx`) — icon anchor tag, opens in new tab, has aria-label
- [x] 2.6 Create `SocialIconLink.stories.tsx` with at least one story

## 3. Header & Footer Redesign

- [x] 3.1 Redesign `Header` component — remove `children` prop, add `name: string` prop, left-aligned minimal decorative bar
- [x] 3.2 Update `Header.stories.tsx` to reflect new API
- [x] 3.3 Redesign `Footer` component — remove `children` prop, add `name: string` and `links: SocialLink[]` props, use `SocialIconLink`, responsive layout (row on desktop, stacked on mobile)
- [x] 3.4 Update `Footer.stories.tsx` to reflect new API

## 4. Hero Section

- [x] 4.1 Build `HeroSection` component (`src/components/HeroSection.tsx`) — full-width, name + role props, staggered CSS fade-in + slide-up on mount
- [x] 4.2 Create `HeroSection.stories.tsx` with at least one story using placeholder props

## 5. Tech Stack Section

- [x] 5.1 Build `TechStackSection` component (`src/components/TechStackSection.tsx`) — accepts `techs: TechItem[]`, renders responsive grid of `TechBadge` (2 col mobile → 4 col tablet → 6 col desktop), with scroll-triggered fade-in via `useIntersectionObserver`
- [x] 5.2 Create `TechStackSection.stories.tsx` with at least one story using placeholder data from `src/data/techStack.ts`

## 6. Companies Section

- [x] 6.1 Build `CompaniesSection` component (`src/components/CompaniesSection.tsx`) — accepts `companies: Company[]`, renders responsive grid of `Card` (1 col mobile → 2-3 col desktop), with scroll-triggered fade-in
- [x] 6.2 Create `CompaniesSection.stories.tsx` with at least one story using placeholder data from `src/data/companies.ts`

## 7. Open Source Section

- [x] 7.1 Build `OpenSourceSection` component (`src/components/OpenSourceSection.tsx`) — accepts `projects: OSProject[]`, renders responsive grid of `Card` with GitHub link, with scroll-triggered fade-in
- [x] 7.2 Create `OpenSourceSection.stories.tsx` with at least one story using placeholder data from `src/data/openSource.ts`

## 8. App Composition & Polish

- [x] 8.1 Update `App.tsx` to compose the full layout: Header → HeroSection → TechStackSection → CompaniesSection → OpenSourceSection → Footer, passing data from `src/data/` files
- [x] 8.2 Remove the placeholder counter state and demo content from `App.tsx`
- [x] 8.3 Verify all Storybook stories render without errors (`npm run storybook`)
- [x] 8.4 Run `npm run lint` and `npm run build` — fix any Biome or TypeScript errors
