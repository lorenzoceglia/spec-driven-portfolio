## Why

The portfolio's `index.html` still has the Vite scaffold title `"lorenzo_ceglia"` (underscore, no capitalisation) and zero meta tags. There are no crawlability files in `public/`. A developer's portfolio is effectively a public résumé — basic SEO hygiene is essential before sharing the URL.

## What Changes

- **`index.html` head**: correct title, meta description, OG tags (title, description, type, url), Twitter card, canonical link, manifest link, and a JSON-LD `Person` schema block
- **`public/robots.txt`**: allow all crawlers; no `Sitemap:` directive until a domain is confirmed
- **`public/sitemap.xml`**: single-URL sitemap with placeholder domain `https://lorenzoceglia.com` (to be updated when deployed)
- **`public/manifest.webmanifest`**: name, short name, theme color (`#0f172a`), background color, display mode

## Capabilities

### New Capabilities

- `seo-metadata`: structured head tags, crawlability files, web app manifest

### Modified Capabilities

_None — no existing spec touches SEO._

## Non-goals

- `og:image` / social preview image (requires a real asset to be created separately)
- Dynamic meta tags per section (this is a static SPA)
- Google Search Console or analytics setup

## Impact

- `lorenzo_ceglia/index.html` — head section rewritten
- `lorenzo_ceglia/public/robots.txt` — new file
- `lorenzo_ceglia/public/sitemap.xml` — new file
- `lorenzo_ceglia/public/manifest.webmanifest` — new file
