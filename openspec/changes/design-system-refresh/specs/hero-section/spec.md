## MODIFIED Requirements

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
