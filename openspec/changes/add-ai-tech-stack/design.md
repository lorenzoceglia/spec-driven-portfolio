## Context

`SiGithubcopilot` is confirmed available in the installed version of react-icons. OpenCode and OpenSpec have no Simple Icons entries — `MdCode` is the established project fallback for tools without an SI icon (already used for Zustand and React Hook Form).

The `TechItem` category type is a TypeScript union literal. Adding `'AI'` is a one-line change. The `TechStackSection` derives tabs dynamically from the data array, so the new tab appears with no component changes.

## Goals / Non-Goals

**Goals:**
- Three new items in a new AI category tab
- TypeScript compiles cleanly

**Non-Goals:**
- Component changes, custom icons

## Decisions

### D1 — Colors for OpenCode and OpenSpec

- OpenCode: `#6366f1` (indigo-500) — matches the OpenCode brand palette
- OpenSpec: `#f97316` (orange-500) — matches the OpenSpec orange used in the floating player

### D2 — GitHub Copilot color

`#000000` — Copilot's official brand color is black/monochrome.

## Risks / Trade-offs

None significant. Pure additive data change.
