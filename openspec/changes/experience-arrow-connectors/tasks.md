## 1. Data ordering

- [x] 1.1 Reverse the `companies` array in `companies.ts` so it is ordered oldest → newest (Fabless 2021 first, SparkFabrik 2026 last)

## 2. Layout — single-column list with arrow connectors

- [x] 2.1 Replace the `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4` wrapper in `CompaniesSection.tsx` with a `flex flex-col max-w-xl mx-auto` wrapper
- [x] 2.2 Create an `ExperienceArrow` inline SVG component (or inline SVG element) — a centered downward-pointing arrow, ~24px tall, `stroke="currentColor" text-slate-300`
- [x] 2.3 Render the arrow between each pair of adjacent cards using `companies.map((company, i) => [<Card />, i < companies.length - 1 && <ExperienceArrow />])`

## 3. Spec update

- [x] 3.1 Update `openspec/specs/companies-section/spec.md`: replace the grid-layout requirement with the single-column + arrow-connector requirement

## 4. Storybook

- [x] 4.1 Update `CompaniesSection.stories.tsx` to reflect the new layout (if it exists); verify the story still renders without errors

## 5. Verification

- [x] 5.1 Run `npm run build` (or `tsc`) and confirm no type errors
- [x] 5.2 Visually confirm: cards stack oldest → newest, arrows appear between each pair, arrowhead points downward
