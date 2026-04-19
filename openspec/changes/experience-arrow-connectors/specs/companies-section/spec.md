## MODIFIED Requirements

### Requirement: Companies section renders a single-column chronological list with arrow connectors
The `CompaniesSection` component SHALL render companies in a single-column list, ordered **oldest first** (ascending by start date — Fabless 2021 at the top, SparkFabrik 2026 at the bottom). Between each pair of adjacent cards, a downward-pointing SVG arrow element SHALL be rendered. The arrow tip SHALL point toward the newer (lower) card. The list SHALL be centered with a `max-w-xl` constraint. The responsive multi-column grid layout is removed.

#### Scenario: Single-column layout
- **WHEN** `CompaniesSection` renders
- **THEN** all company cards are stacked in a single column regardless of viewport width

#### Scenario: Oldest company appears first
- **WHEN** `CompaniesSection` renders
- **THEN** the company with the earliest start period appears at the top of the list

#### Scenario: Newest company appears last
- **WHEN** `CompaniesSection` renders
- **THEN** the company with the most recent start period appears at the bottom of the list

#### Scenario: Arrows appear between cards
- **WHEN** `CompaniesSection` renders with N companies
- **THEN** N-1 arrow elements are visible, each positioned between a pair of adjacent cards

#### Scenario: Arrow points downward toward newer entry
- **WHEN** an arrow connector renders between two cards
- **THEN** the arrowhead points downward, toward the more recent (lower) card

## REMOVED Requirements

### Requirement: Companies section renders a grid of company cards
**Reason**: Replaced by single-column list with arrow connectors. The grid layout gave no indication of chronological order; the new list layout makes career progression explicit.
**Migration**: Remove `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4` wrapper. Render a single `<div className="flex flex-col max-w-xl mx-auto gap-0">` with SVG arrow separators between cards.
