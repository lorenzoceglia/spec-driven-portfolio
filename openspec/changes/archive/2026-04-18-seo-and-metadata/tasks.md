## 1. index.html — head rewrite

- [x] 1.1 Change `<title>lorenzo_ceglia</title>` to `<title>Lorenzo Ceglia — Software Engineer</title>`
- [x] 1.2 Add `<meta name="description" content="Software engineer obsessed with clean UIs and open source. Also responsible for clearing the dance floor at least once a weekend." />`
- [x] 1.3 Add `<link rel="canonical" href="https://lorenzoceglia.com" />` with comment `<!-- Update when domain is live -->`
- [x] 1.4 Add Open Graph tags: `og:title`, `og:description`, `og:type` (`profile`), `og:url` (`https://lorenzoceglia.com`)
- [x] 1.5 Add Twitter card tags: `twitter:card` (`summary`), `twitter:title`, `twitter:description`
- [x] 1.6 Add `<link rel="manifest" href="/manifest.webmanifest" />`
- [x] 1.7 Add `<meta name="theme-color" content="#0f172a" />`
- [x] 1.8 Add JSON-LD Person schema:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lorenzo Ceglia",
    "jobTitle": "Software Engineer",
    "url": "https://lorenzoceglia.com",
    "sameAs": [
      "https://github.com/lorenzoceglia",
      "https://linkedin.com/in/lorenzoceglia",
      "https://instagram.com/lorenzo.ceglia"
    ]
  }
  ```

## 2. public/robots.txt

- [x] 2.1 Create `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  ```

## 3. public/sitemap.xml

- [x] 3.1 Create `public/sitemap.xml` with a single `<url>` entry for `https://lorenzoceglia.com/` and a `<lastmod>` of today's date; add comment `<!-- Update domain when live -->`

## 4. public/manifest.webmanifest

- [x] 4.1 Create `public/manifest.webmanifest`:
  ```json
  {
    "name": "Lorenzo Ceglia",
    "short_name": "LC",
    "theme_color": "#0f172a",
    "background_color": "#ffffff",
    "display": "standalone",
    "start_url": "/"
  }
  ```

## 5. Verify

- [x] 5.1 Run `npm run build` — confirm 0 TypeScript errors and all four files present in `dist/`
