## MODIFIED Requirements

### Requirement: Header component exists and exports correctly
The system SHALL export a Header component from `src/components/Header.tsx` that renders as a semantic HTML `<header>` element. The component SHALL NOT accept a `children` prop — it is a decorative, fixed-layout component. It SHALL accept an optional `name: string` prop (defaults to `"Lorenzo Ceglia"`).

#### Scenario: Header renders name on the left
- **WHEN** Header component is rendered
- **THEN** the name string is visible left-aligned inside the header element

#### Scenario: Header does not require children
- **WHEN** Header is rendered without any children
- **THEN** it renders correctly with no empty slots or warnings

### Requirement: Header is styled with Tailwind CSS
The system SHALL style the Header component as a minimal decorative bar. It SHALL have a subtle bottom border and consistent padding. Background SHALL be neutral (white or very light gray) to reinforce the minimalist aesthetic.

#### Scenario: Header has minimalist styling
- **WHEN** Header component renders
- **THEN** it has padding, a light background, and a subtle bottom border via Tailwind classes

## ADDED Requirements

### Requirement: Header has a Storybook story
The `Header` component SHALL have an updated `.stories.tsx` file reflecting the new fixed-layout API.

#### Scenario: Story renders without errors
- **WHEN** Storybook loads the Header story
- **THEN** the component renders the name correctly without errors
