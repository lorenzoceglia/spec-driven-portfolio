# companies-section Specification

## Purpose
Responsive grid of cards showcasing past employers with company name, role, period, and description. Fades in on scroll.

## Requirements

### Requirement: Companies section renders a grid of company cards
The `CompaniesSection` component SHALL accept a `companies: Company[]` prop and render each item as a `Card`. The layout SHALL be 1 column on mobile and 2-3 columns on desktop.

#### Scenario: Renders all passed companies
- **WHEN** `CompaniesSection` is rendered with 3 `Company` objects
- **THEN** 3 cards are visible

#### Scenario: Card displays company info
- **WHEN** a `Company` card is rendered
- **THEN** company name, role, and period are visible

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
