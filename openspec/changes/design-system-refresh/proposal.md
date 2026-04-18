## Why

The current design reads as AI-generated: every section uses identical spacing, the same small-caps uppercase label, and indigo as the sole accent color — a combination so common in AI-built portfolios it has become a visual cliché. The goal is a considered, editorial feel: strong typographic hierarchy, a single disciplined black accent, and small material choices that break the uniform rhythm.

## What Changes

- **Primary accent → black**: replace all `indigo-*` usage with `slate-900` / black equivalents across every component
- **Hero typography**: name scales to `text-6xl sm:text-8xl font-black tracking-tighter`; hero background becomes solid white (gradient removed)
- **Body rendering**: add `antialiased` and `optimizeLegibility` globally
- **FilterTabs**: active pill `bg-indigo-600` → `bg-slate-900`
- **Card border radius**: `rounded-xl` → `rounded-lg`; border `border-slate-100` → `border-slate-200`
- **Company role**: `text-indigo-500` → `text-slate-700 font-medium`
- **OS language badge**: `bg-indigo-50 text-indigo-500` → `bg-slate-900 text-white font-mono`
- **Identity chip hover**: `hover:border-indigo-300 hover:text-indigo-600` → `hover:border-slate-900 hover:text-slate-900`
- **Hero gradient**: remove `linear-gradient` to indigo-50; background is plain white

## Capabilities

### New Capabilities

_None._

### Modified Capabilities

- `hero-section`: typography and background change
- `bside-section`: no indigo references to remove (already dark)

## Non-goals

- Changing the layout or section ordering
- Adding a custom web font (system-ui is intentional)
- Changing the orange accent used in the B-Side / SC player (kept as-is)
- Section numbers or ordinal design elements

## Impact

- `src/index.css` — `antialiased`, `optimizeLegibility` on body
- `src/components/HeroSection.tsx` — font size, weight, tracking, remove gradient
- `src/components/FilterTabs.tsx` — active pill color
- `src/components/Card.tsx` — border radius, border color
- `src/components/CompaniesSection.tsx` — role color
- `src/components/OpenSourceSection.tsx` — language badge
- `src/components/HeroSection.tsx` — identity chip hover colors
