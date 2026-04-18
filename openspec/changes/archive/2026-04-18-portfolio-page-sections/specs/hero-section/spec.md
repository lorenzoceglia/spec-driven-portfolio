## ADDED Requirements

### Requirement: Hero section displays name and role
The `HeroSection` component SHALL display a prominent full-width section with the developer's name and professional role/title. It SHALL accept `name` and `role` as required string props.

#### Scenario: Renders name and role
- **WHEN** `HeroSection` is rendered with `name="Lorenzo Ceglia"` and `role="Full-Stack Developer"`
- **THEN** both strings are visible in the DOM

#### Scenario: Name is visually dominant
- **WHEN** `HeroSection` is rendered
- **THEN** the name element uses a significantly larger font size than the role

### Requirement: Hero section has staggered fade-in animation on load
The `HeroSection` SHALL animate its name and role with a staggered fade-in + translateY effect on initial mount. The name SHALL animate first, followed by the role with a delay.

#### Scenario: Initial mount animation
- **WHEN** `HeroSection` mounts in the browser
- **THEN** name fades in and slides up from a slight offset, followed by the role after a short delay

#### Scenario: Animation uses CSS only
- **WHEN** the component is inspected
- **THEN** animation is driven by CSS `@keyframes` or Tailwind `animate-*` utilities, with no animation library dependency

### Requirement: Hero section has a Storybook story
The `HeroSection` component SHALL have a corresponding `HeroSection.stories.tsx` file with at least one story showing the default state.

#### Scenario: Story renders without errors
- **WHEN** Storybook loads the HeroSection story
- **THEN** the component renders without errors using placeholder props
