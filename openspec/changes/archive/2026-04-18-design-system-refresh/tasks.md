## 1. Global styles

- [x] 1.1 In `src/index.css`, add to the `body` rule: `-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`, and `text-rendering: optimizeLegibility`

## 2. HeroSection — typography and background

- [x] 2.1 In `src/components/HeroSection.tsx`, change the `<h1>` class from `font-bold tracking-tight` to `font-black tracking-tighter`
- [x] 2.2 Change `text-5xl sm:text-7xl` to `text-6xl sm:text-8xl`
- [x] 2.3 Remove the `style={{ background: 'linear-gradient(to bottom, #ffffff, #eef2ff)' }}` from the `<section>` element (leave `className` unchanged — white is the default)
- [x] 2.4 Change identity chip `<a>` hover classes from `hover:border-indigo-300 hover:text-indigo-600` to `hover:border-slate-900 hover:text-slate-900`

## 3. FilterTabs — active pill color

- [x] 3.1 In `src/components/FilterTabs.tsx`, change active class `bg-indigo-600 text-white` to `bg-slate-900 text-white`

## 4. Card — border radius and border color

- [x] 4.1 In `src/components/Card.tsx`, change `rounded-xl` to `rounded-lg` and `border-slate-100` to `border-slate-200`

## 5. CompaniesSection — role label

- [x] 5.1 In `src/components/CompaniesSection.tsx`, change `text-sm font-medium text-indigo-500` to `text-sm font-medium text-slate-700`

## 6. OpenSourceSection — language badge

- [x] 6.1 In `src/components/OpenSourceSection.tsx`, change `text-xs font-medium text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full` to `text-xs font-mono text-white bg-slate-900 px-2 py-0.5 rounded`

## 7. Verify

- [x] 7.1 Run `npm run build` — confirm 0 TypeScript errors
- [x] 7.2 Confirm zero remaining `indigo` class references in `src/` with a quick search
