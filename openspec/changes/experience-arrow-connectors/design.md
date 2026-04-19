## Context

`CompaniesSection` renders a `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` of `Card` elements in newest-first order (SparkFabrik 2026 → Fabless 2021). There is no visual indication of chronological order or career progression. The data model uses a string `period` field; no structured date objects exist.

## Goals / Non-Goals

**Goals:**
- Single-column list, oldest → newest top-to-bottom
- Directional arrow element between each pair of cards (arrowhead points down, toward the newer entry)
- Pure CSS/SVG arrow, no new dependencies

**Non-Goals:**
- Animated SVG path drawing
- Changing `Card` content or hover effects
- Adding structured date fields to `Company`
- Separate mobile vs. desktop arrow treatment

## Decisions

**Reverse the card order to oldest-first**

Arrows flow downward. Rendering oldest-first (Fabless → SparkFabrik) means the downward arrow tip naturally points toward the newer/later card, matching the user's stated direction. The data array in `companies.ts` will be reversed (or `CompaniesSection` will reverse the passed array before rendering).

_Alternative_: Keep newest-first, use upward arrows. Rejected — upward arrows feel like "back in time"; downward flow reads as progression.

**Inline SVG arrow between cards**

A small inline `<svg>` containing a vertical line + arrowhead is rendered as a separator between each card. It is centered, ~24px tall, styled with `stroke="currentColor" text-slate-300`. No absolute positioning or JS measurement required.

_Alternative_: CSS `::before`/`::after` pseudo-elements. Rejected — limited arrowhead control; SVG gives exact control over the arrowhead geometry.

_Alternative_: Unicode arrow character (↓). Rejected — typography-dependent sizing and alignment; SVG is more reliable across fonts.

**Max-width constraint for readability**

In a single-column layout, cards can stretch very wide on large screens. A `max-w-xl mx-auto` wrapper (or similar) keeps the list narrow and readable. The exact breakpoint is left to implementation.

## Risks / Trade-offs

- [Oldest-first breaks the "most recent experience first" CV convention] → Acceptable trade-off: the arrow direction makes the chronological intent unambiguous. Visitors reading top-to-bottom follow the career arc.
- [Arrow SVG hardcodes a color] → Use `text-slate-300` via `currentColor` so it inherits and can be adjusted via Tailwind class changes.
