## Context

A full audit of every component shows indigo used in five distinct places: `FilterTabs` active pill, `CompaniesSection` role label, `OpenSourceSection` language badge, `HeroSection` identity chip hover, and the hero gradient destination. Each is a small change in isolation; together they define a coherent palette shift.

The typographic change to the hero name is the single highest-impact design decision. Jumping from `text-5xl/text-7xl font-bold` to `text-6xl/text-8xl font-black tracking-tighter` on `system-ui` produces a noticeably different register — heavier, more confident, more distinctly designed.

The `rounded-xl` → `rounded-lg` change on `Card` and `FilterTabs` is a subtle signal: `rounded-xl` reads as "friendly consumer app"; `rounded-lg` reads as slightly more disciplined and professional.

## Goals / Non-Goals

**Goals:**
- Zero `indigo-*` references remaining after this change
- Hero name that dominates the landing view
- Consistent `border-slate-200` and `rounded-lg` across all cards
- Antialiased text globally

**Non-Goals:**
- Layout changes, new sections, font imports, section numbers

## Decisions

### D1 — Black accent everywhere indigo was

`slate-900` and `black` are effectively identical visually; we use `slate-900` for consistency with the existing slate palette already used for text and the B-Side background.

### D2 — OS language badge becomes an inverted monospace tag

`bg-indigo-50 text-indigo-500` reads as a generic colored pill. `bg-slate-900 text-white font-mono text-xs` reads as a code token — more appropriate for a dev portfolio and ties into the monospace treatment already used for `project.name`.

### D3 — Hero gradient removed entirely

The gradient from white to `indigo-50` was purely decorative and pulled the eye toward indigo before the content even began. A flat white background is quieter and lets the oversized black type do all the work.

### D4 — `font-black tracking-tighter` on hero name

`font-black` (weight 900) is the heaviest weight available in system-ui on all platforms. `tracking-tighter` (`letter-spacing: -0.05em`) gives it the compressed editorial feel common in editorial design without needing a custom font. Applied only to the `<h1>` name element.

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| `font-black` renders differently across OSes (macOS vs Windows system-ui) | Acceptable — the weight difference is consistent even if the exact face varies |
| `rounded-lg` on cards may feel slightly less "soft" | Intentional — the goal is a more disciplined aesthetic |
| Removing the gradient loses depth from the hero | The oversized type provides more than enough visual weight to replace it |
