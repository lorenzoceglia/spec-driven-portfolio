# seo-metadata Specification

## Purpose
TBD - created by archiving change seo-and-metadata. Update Purpose after archive.
## Requirements
### Requirement: index.html has a correct title and meta description
The `<title>` SHALL be `"Lorenzo Ceglia — Software Engineer"`. A `<meta name="description">` SHALL be present with a concise bio matching the hero section copy.

#### Scenario: Title is human-readable
- **WHEN** the page is loaded in a browser
- **THEN** the browser tab displays `"Lorenzo Ceglia — Software Engineer"`

### Requirement: index.html has Open Graph and Twitter card tags
The `<head>` SHALL include `og:title`, `og:description`, `og:type` (`profile`), `og:url` (canonical domain), `twitter:card` (`summary`), `twitter:title`, and `twitter:description`.

#### Scenario: OG tags are present
- **WHEN** the page HTML is inspected
- **THEN** all required Open Graph meta tags are present in the `<head>`

### Requirement: index.html includes a JSON-LD Person schema
A `<script type="application/ld+json">` block SHALL be present in the `<head>` with a `Person` schema containing `name`, `jobTitle`, `url`, and `sameAs` links to GitHub, LinkedIn, and Instagram.

#### Scenario: JSON-LD is valid and present
- **WHEN** the page HTML is inspected
- **THEN** a valid JSON-LD Person schema is present in the `<head>`

### Requirement: public/robots.txt exists and allows all crawlers
`public/robots.txt` SHALL contain `User-agent: *` and `Allow: /`.

#### Scenario: Robots.txt is accessible
- **WHEN** a crawler requests `/robots.txt`
- **THEN** the file is served with `Allow: /` for all user-agents

### Requirement: public/sitemap.xml exists with the canonical URL
`public/sitemap.xml` SHALL be a valid XML sitemap containing a single `<url>` entry for the portfolio's root URL.

#### Scenario: Sitemap contains the root URL
- **WHEN** `/sitemap.xml` is fetched
- **THEN** a valid XML sitemap with one URL entry is returned

### Requirement: public/manifest.webmanifest exists
`public/manifest.webmanifest` SHALL be a valid web app manifest with `name`, `short_name`, `theme_color` (`#0f172a`), `background_color`, and `display` fields. `index.html` SHALL link to it via `<link rel="manifest">`.

#### Scenario: Manifest is linked and valid
- **WHEN** the page HTML is inspected
- **THEN** a `<link rel="manifest">` tag is present pointing to a valid JSON manifest

