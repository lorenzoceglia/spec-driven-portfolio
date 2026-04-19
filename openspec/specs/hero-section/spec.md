# hero-section Specification

## Purpose
Full-width intro section displaying the developer's name, professional role, and a short bio, with a staggered CSS fade-in animation on initial mount and a subtle gradient background.

## Requirements

### Requirement: Hero section displays name and role
The `HeroSection` component SHALL display a prominent full-width section with the developer's name, professional role/title, and a short bio. It SHALL accept `name: string`, `role: string`, and `bio: string` as required props. The name SHALL use `font-black` weight and `tracking-tighter` letter-spacing to create a strong typographic anchor.

#### Scenario: Renders name, role, and bio
- **WHEN** `HeroSection` is rendered with `name`, `role`, and `bio` props
- **THEN** all three strings are visible in the DOM

#### Scenario: Name is visually dominant with tight tracking
- **WHEN** `HeroSection` is rendered
- **THEN** the name element uses a significantly larger font size, `font-black` weight, and `tracking-tighter` letter-spacing compared to the role and bio

### Requirement: Hero section has a plain white background
The `HeroSection` section element SHALL have a plain white background. The previous gradient to `indigo-50` is removed.

#### Scenario: No gradient visible
- **WHEN** `HeroSection` renders
- **THEN** the section background is flat white with no gradient

### Requirement: Identity chips use black hover state
Chips with an `href` SHALL use `hover:border-slate-900 hover:text-slate-900` rather than any indigo-tinted hover state.

#### Scenario: Chip hover is black
- **WHEN** the user hovers over a chip with an href
- **THEN** the border and text transition to `slate-900`

### Requirement: Hero section has staggered fade-in animation on load
The `HeroSection` SHALL animate its name, role, bio, and identity chips with a staggered fade-in + translateY effect on initial mount. The full sequence SHALL be: name (0ms) → role (150ms) → bio (300ms) → chip 1 (450ms) → chip 2 (600ms).

#### Scenario: Initial mount animation — full chain
- **WHEN** `HeroSection` mounts with two chips
- **THEN** name, role, bio, and each chip fade in and slide up in sequence with increasing delays

#### Scenario: Animation uses CSS only
- **WHEN** the component is inspected
- **THEN** animation is driven by CSS `@keyframes` or Tailwind `animate-*` utilities, with no animation library dependency

### Requirement: Bio text animates in with stagger
The bio line SHALL fade in after the role with a CSS animation delay, extending the existing stagger sequence: name (0ms) → role (150ms) → bio (300ms).

#### Scenario: Bio stagger animation
- **WHEN** `HeroSection` mounts
- **THEN** the bio text appears after the role with a visible delay

### Requirement: Hero section has a Storybook story
The `HeroSection` component SHALL have a corresponding `HeroSection.stories.tsx` file with at least one story showing the default state.

#### Scenario: Story renders without errors
- **WHEN** Storybook loads the HeroSection story
- **THEN** the component renders without errors using the `name`, `role`, and `bio` props

### Requirement: Hero section fills the full viewport on landing
The `HeroSection` SHALL have a minimum height of `calc(100svh - 3.25rem)`, where `3.25rem` equals the header's rendered height (`py-4` + `text-sm` line-height). This ensures that on initial page load, the combined header + hero exactly fills one viewport height and no content below the hero is visible without scrolling.

#### Scenario: No below-fold content on landing
- **WHEN** a user loads the page on a standard desktop or mobile viewport
- **THEN** only the header and hero section are visible; the next section starts below the fold

#### Scenario: Content below hero is reachable by scrolling
- **WHEN** the user scrolls down from the hero
- **THEN** the TechStackSection and subsequent sections appear normally
