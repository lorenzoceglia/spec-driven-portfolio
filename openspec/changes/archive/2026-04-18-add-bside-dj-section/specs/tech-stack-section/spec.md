## ADDED Requirements

### Requirement: TechStackSection defaults to the Frontend tab
On initial render, the `TechStackSection` SHALL display the `Frontend` category tab as active, not the `All` tab.

#### Scenario: Frontend tab is active on first render
- **WHEN** `TechStackSection` renders for the first time
- **THEN** the "Frontend" tab is highlighted and only frontend tech badges are visible

#### Scenario: User can switch to All tab
- **WHEN** the user clicks the "All" tab
- **THEN** all tech items across all categories are displayed
