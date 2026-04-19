## Why

The experience section renders company cards in a multi-column grid without any visual indication of career progression. Adding directional arrows flowing from oldest to newest entry (arrow tip pointing toward the newer card) communicates growth and chronology at a glance.

## What Changes

- Layout changes from a 3-column responsive grid to a single-column list
- Card order changes to **oldest → newest** (Fabless 2021 → SparkFabrik 2026) so arrows flow naturally downward
- A small arrow element is rendered between each pair of adjacent cards — the arrowhead points down, toward the newer entry
- Arrow is a pure CSS/SVG element, no external libraries
- Mobile treatment is identical to desktop (single column already)

## Capabilities

### New Capabilities

_(none)_

### Modified Capabilities

- `companies-section`: Layout changes from grid to single-column list, ordering changes to oldest-first, arrow connectors added between cards.

## Non-goals

- Animated arrows or SVG path drawing on scroll
- Changing the card content or hover effects
- Adding structured date fields to the `Company` type (string `period` stays as-is)
- Any mobile-specific arrow treatment (single column already)

## Impact

- `src/components/CompaniesSection.tsx` — new layout logic, arrow elements between cards
- `openspec/specs/companies-section/spec.md` — update layout and ordering requirements
