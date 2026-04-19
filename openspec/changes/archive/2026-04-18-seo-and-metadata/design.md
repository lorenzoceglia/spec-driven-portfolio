## Context

This is a static SPA with no server-side rendering. All SEO signals must live in `index.html` (served with every request) and static files in `public/`. The JSON-LD `Person` schema is the most valuable SEO addition — it tells Google this is a person page and enables rich results.

No domain is confirmed yet. The sitemap and canonical tag use `https://lorenzoceglia.com` as a placeholder. The manifest theme color matches `slate-900` (`#0f172a`) used throughout the site.

## Goals / Non-Goals

**Goals:**
- Correct, human-readable `<title>`
- Full OG + Twitter card meta tags
- JSON-LD Person schema
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest` in `public/`

**Non-Goals:**
- `og:image` (no asset yet)
- Analytics, Search Console
- Dynamic meta (SPA, not needed)

## Decisions

### D1 — JSON-LD Person schema in `index.html`

Inline `<script type="application/ld+json">` in the `<head>`. Fields: `@type: Person`, `name`, `jobTitle`, `url`, `sameAs` (GitHub, LinkedIn, Instagram). This is the single highest-value SEO addition for a personal portfolio.

### D2 — Placeholder domain `https://lorenzoceglia.com`

Used in: `og:url`, `<link rel="canonical">`, `sitemap.xml`. All three need updating when a real domain is live. Comment left in each file marking this.

### D3 — `robots.txt` without `Sitemap:` line

Including `Sitemap:` requires an absolute URL, which is unknown. Omitting it is valid — Google discovers sitemaps via Search Console independently.

### D4 — Manifest theme color `#0f172a`

Matches `slate-900`, the dominant dark color already used in the B-Side section and floating player. Creates a consistent chrome color on Android and in browser tab strips.

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| Placeholder domain causes canonical confusion if deployed at a different URL | Comment in each file; easy single-pass find-replace on deploy |
| No `og:image` means social previews will be generic | Noted as non-goal; can be added as a follow-up |
