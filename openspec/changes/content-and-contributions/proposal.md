## Why

The Experience section cards list raw tech stacks ("Stack: TypeScript 5, React 18…") which read like a CV appendix, not a compelling narrative. The Open Source section is missing four external contributions — to strapi-community, react-hook-form (44k+ ⭐), ryujinx, and SparkFabrik's company playbook — that meaningfully represent Lorenzo's range as a contributor.

## What Changes

- **companies.ts**: rewrite the `description` field for all four companies — remove tech stack enumerations, replace with narrative descriptions of actual work context and scope
- **openSource.ts**: add `platform?: 'github' | 'gitlab'` to `OSProject` type; add four new `contribution` entries
- **OpenSourceSection.tsx**: conditionally render `SiGitlab` (GitLab) vs `FaGithub` (GitHub) icon based on `platform` field

## Capabilities

### New Capabilities

_(none — data and display changes to existing capabilities)_

### Modified Capabilities

- `open-source-section`: new `platform` field controls which VCS icon is shown; four contribution entries added
- `companies-section`: description copy changed across all four entries

## Non-goals

- Changing the layout or card design of either section
- Adding star counts or contributor statistics
- Adding contribution dates or sorting

## Impact

- `src/data/companies.ts` — rewrite 4 description strings
- `src/data/openSource.ts` — add `platform` to `OSProject` type; add 4 entries
- `src/components/OpenSourceSection.tsx` — import `SiGitlab`; conditional icon render
