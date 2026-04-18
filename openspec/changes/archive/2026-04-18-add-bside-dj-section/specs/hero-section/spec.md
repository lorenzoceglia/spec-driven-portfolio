## MODIFIED Requirements

### Requirement: Hero section has staggered fade-in animation on load
The `HeroSection` SHALL animate its name, role, bio, and identity chips with a staggered fade-in + translateY effect on initial mount. The full sequence SHALL be: name (0ms) → role (150ms) → bio (300ms) → chip 1 (450ms) → chip 2 (600ms).

#### Scenario: Initial mount animation — full chain
- **WHEN** `HeroSection` mounts with two chips
- **THEN** name, role, bio, and each chip fade in and slide up in sequence with increasing delays

#### Scenario: Animation uses CSS only
- **WHEN** the component is inspected
- **THEN** animation is driven by CSS `@keyframes` or Tailwind `animate-*` utilities, with no animation library dependency
