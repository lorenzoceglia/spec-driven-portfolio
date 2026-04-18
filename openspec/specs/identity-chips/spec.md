# identity-chips Specification

## Purpose
Pill-shaped anchor links in the hero section that let users quickly identify and jump to key sections of the portfolio (e.g. the B-Side DJ section).

## Requirements

### Requirement: HeroSection renders identity chips below the bio
The `HeroSection` component SHALL accept an optional `chips` prop of type `{ label: string; href?: string }[]`. When provided, it SHALL render each chip as a pill element below the bio. Chips with an `href` SHALL scroll to that anchor on click.

#### Scenario: Chips render below bio
- **WHEN** `HeroSection` receives two chips (`Code by day` and `🎧 B-Side`)
- **THEN** both chips are visible below the bio text in pill styling

#### Scenario: Chip with href scrolls to anchor
- **WHEN** the user clicks the `🎧 B-Side` chip with `href="#b-side"`
- **THEN** the page scrolls smoothly to the element with `id="b-side"`

#### Scenario: No chips renders without error
- **WHEN** `HeroSection` receives no `chips` prop
- **THEN** the component renders normally with only name, role, and bio

### Requirement: Identity chips animate in as part of the stagger sequence
Each chip SHALL fade in using the existing `fadeSlideUp` keyframe, extending the stagger chain: name (0ms) → role (150ms) → bio (300ms) → chip 1 (450ms) → chip 2 (600ms).

#### Scenario: Chip stagger animation
- **WHEN** `HeroSection` mounts with two chips
- **THEN** the first chip appears after the bio and the second chip appears after the first, each with a visible delay

### Requirement: Identity chips have a Storybook story
The `HeroSection.stories.tsx` file SHALL include a story that passes both identity chips.

#### Scenario: Story renders chips
- **WHEN** Storybook loads the HeroSection story with chips
- **THEN** both pill chips are visible below the bio
