## Context

`companies.ts` descriptions append raw tech stack lists ("Stack: TypeScript 5, React 18, Angular 17…") that read like a CV appendix rather than communicating scope or impact. `openSource.ts` has two library entries and no external contributions, despite four merged PRs/MRs in significant open source projects.

The `OSProject` type has no `platform` field, so `OpenSourceSection` hardcodes `<FaGithub>` for all entries. The Ryujinx contribution is on a self-hosted GitLab instance (`git.ryujinx.app`), so the icon would be wrong without a type-level signal.

## Goals / Non-Goals

**Goals:**
- Company descriptions read as narrative work context, not tech enumerations
- Four external contributions visible in the Open Source section with accurate VCS icons
- Strapi PRs #56 and #57 consolidated into one card (same project, same type of fix)

**Non-Goals:**
- Changing card layout or adding star count display
- Adding contribution dates or sorting logic
- Any changes to the library entries

## Decisions

### D1 — Company descriptions: context and scope, not stack

Replace the "Stack: …" suffix with one sentence of work context. The tech stack is already surfaced in the dedicated Tech Stack section; repeating it in the experience cards is redundant and crowds out the more interesting information.

### D2 — `platform?: 'github' | 'gitlab'` on `OSProject`

Optional field. Defaults to `'github'` in the component (`platform !== 'gitlab'`). This is the minimal signal needed to pick the right icon without restructuring the type.

**Alternatives considered**: Detect platform from URL string at render time (`url.includes('gitlab')`). Rejected — brittle for custom GitLab instances like `git.ryujinx.app`.

### D3 — Strapi PRs #56 and #57 as one card

Both PRs fix the same class of bug (broken JSON in documentation examples) in the same repo, merged on consecutive days. One card with a description covering both is cleaner than two nearly-identical cards. URL points to PR #56 (the first one).

### D4 — Language badge reflects what was done, not repo language

| Entry | Badge |
|---|---|
| company-playbook | `CSS` |
| plugin-rest-cache | `Docs` |
| react-hook-form | `Docs` |
| ryujinx | `i18n` |

A visitor scanning the badges immediately understands the nature of the contribution rather than the repo's primary language.

## Risks / Trade-offs

| Risk | Mitigation |
|---|---|
| Ryujinx URL (`git.ryujinx.app`) is behind an anti-bot wall | URL still resolves for humans; the GitLab icon is correct visual signal |
| "Docs" badge for react-hook-form understates the contribution | Description copy explicitly mentions 44k+ ⭐ repo and Italian README — context makes it clear |
