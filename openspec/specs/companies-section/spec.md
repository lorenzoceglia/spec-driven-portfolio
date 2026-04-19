# companies-section Specification

## Purpose
Responsive grid of cards showcasing past employers with company name, role, period, and description. Fades in on scroll.

## Requirements

### Requirement: Companies section renders a single-column chronological list with arrow connectors
The `CompaniesSection` component SHALL accept a `companies: Company[]` prop and render each item as a `Card` in a single-column flex list ordered **oldest first** (the entry with the earliest start period appears at the top; the most recent appears at the bottom). Between each pair of adjacent cards a downward-pointing SVG `ExperienceArrow` element SHALL be rendered; the arrowhead SHALL point downward toward the newer (lower) card. The list SHALL be constrained to `max-w-xl` and centered.

#### Scenario: Renders all passed companies
- **WHEN** `CompaniesSection` is rendered with 4 `Company` objects
- **THEN** 4 cards are visible

#### Scenario: Card displays company info
- **WHEN** a `Company` card is rendered
- **THEN** company name, role, and period are visible

#### Scenario: Single-column layout
- **WHEN** `CompaniesSection` renders
- **THEN** all company cards are stacked in a single column regardless of viewport width

#### Scenario: Oldest company appears first
- **WHEN** `CompaniesSection` renders
- **THEN** the company with the earliest start period appears at the top of the list

#### Scenario: Arrows appear between cards
- **WHEN** `CompaniesSection` renders with N companies
- **THEN** N-1 arrow elements are visible, each positioned between a pair of adjacent cards

#### Scenario: Arrow points downward toward newer entry
- **WHEN** an arrow connector renders between two cards
- **THEN** the arrowhead points downward, toward the more recent (lower) card

### Requirement: Company card has hover lift animation
Each company `Card` SHALL rise slightly (`translateY(-4px)`) with a soft shadow on hover, using a CSS transition.

#### Scenario: Hover lift
- **WHEN** the user hovers over a company card
- **THEN** the card translates upward and a shadow becomes visible

### Requirement: Companies section has a Storybook story
The `CompaniesSection` component SHALL have a `.stories.tsx` file with at least one story using placeholder data.

#### Scenario: Story renders without errors
- **WHEN** Storybook loads the CompaniesSection story
- **THEN** the component renders without errors

### Requirement: Company descriptions are narrative, not tech enumerations
Each `Company` entry's `description` field SHALL describe work context and scope in plain language. Descriptions SHALL NOT contain "Stack:" labels or comma-separated lists of technology names.

#### Scenario: Experience card renders without tech list
- **WHEN** the `CompaniesSection` renders any company card
- **THEN** the description text contains no "Stack:" substring and reads as a complete sentence or short paragraph
