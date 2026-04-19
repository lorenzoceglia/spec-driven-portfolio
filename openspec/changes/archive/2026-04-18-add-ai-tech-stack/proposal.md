## Why

The tech stack section reflects the tools that make up daily work. AI-assisted development with GitHub Copilot, OpenCode, and OpenSpec is now a real part of the workflow — omitting them undersells how the work actually gets done and misses a chance to be honest about modern engineering practice.

## What Changes

- **New `'AI'` category** added to the `TechItem` category union in `src/data/techStack.ts`
- **Three new entries**: GitHub Copilot (`SiGithubcopilot`), OpenCode (`MdCode`), OpenSpec (`MdCode`)
- The `'AI'` tab appears automatically in `TechStackSection` since tabs are derived from the data

## Capabilities

### New Capabilities

_None — extends existing tech-stack-section capability._

### Modified Capabilities

- `tech-stack-section`: category union gains `'AI'`; three new items appear under the new tab

## Non-goals

- Custom icons for OpenCode or OpenSpec (no SI icons exist; `MdCode` is the established fallback)
- Reordering existing categories

## Impact

- `src/data/techStack.ts` — category type union + three new entries
