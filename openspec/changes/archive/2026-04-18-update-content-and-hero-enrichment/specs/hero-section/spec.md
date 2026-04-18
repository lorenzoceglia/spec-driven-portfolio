## MODIFIED Requirements

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

## ADDED Requirements

### Requirement: Bio text animates in with stagger
The bio line SHALL fade in after the role with a CSS animation delay, extending the existing stagger sequence: name (0ms) → role (150ms) → bio (300ms).

#### Scenario: Bio stagger animation
- **WHEN** `HeroSection` mounts
- **THEN** the bio text appears after the role with a visible delay
