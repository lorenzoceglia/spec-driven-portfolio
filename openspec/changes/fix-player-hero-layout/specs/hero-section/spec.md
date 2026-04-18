## MODIFIED Requirements

### Requirement: Hero section fills the full viewport on landing
The `HeroSection` SHALL have a minimum height of `calc(100svh - 3.25rem)`, where `3.25rem` equals the header's rendered height (`py-4` + `text-sm` line-height). This ensures that on initial page load, the combined header + hero exactly fills one viewport height and no content below the hero is visible without scrolling.

#### Scenario: No below-fold content on landing
- **WHEN** a user loads the page on a standard desktop or mobile viewport
- **THEN** only the header and hero section are visible; the next section starts below the fold

#### Scenario: Content below hero is reachable by scrolling
- **WHEN** the user scrolls down from the hero
- **THEN** the TechStackSection and subsequent sections appear normally
