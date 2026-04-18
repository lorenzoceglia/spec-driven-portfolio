# hero-section Specification

## Purpose
Full-width intro section displaying the developer's name, professional role, and a short bio, with a staggered CSS fade-in animation on initial mount and a subtle gradient background.

## Requirements

### Requirement: Hero section displays name and role
The `HeroSection` component SHALL display a prominent full-width section with the developer's name, professional role/title, and a short bio. It SHALL accept `name: string`, `role: string`, and `bio: string` as required props.

#### Scenario: Renders name, role, and bio
- **WHEN** `HeroSection` is rendered with `name`, `role`, and `bio` props
- **THEN** all three strings are visible in the DOM

#### Scenario: Name is visually dominant
- **WHEN** `HeroSection` is rendered
- **THEN** the name element uses a significantly larger font size than both the role and the bio

### Requirement: Hero section has a gradient background
The `HeroSection` section element SHALL have a subtle vertical gradient from white at the top to indigo-50 (`#eef2ff`) at the bottom, providing visual depth without competing with the content.

#### Scenario: Gradient is visible
- **WHEN** `HeroSection` renders
- **THEN** the section background transitions from white to a very light indigo at the bottom edge

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
