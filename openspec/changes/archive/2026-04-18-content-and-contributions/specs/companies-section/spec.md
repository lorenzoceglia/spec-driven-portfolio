## MODIFIED Requirements

### Requirement: Company descriptions are narrative, not tech enumerations
Each `Company` entry's `description` field SHALL describe work context and scope in plain language. Descriptions SHALL NOT contain "Stack:" labels or comma-separated lists of technology names.

#### Scenario: Experience card renders without tech list
- **WHEN** the `CompaniesSection` renders any company card
- **THEN** the description text contains no "Stack:" substring and reads as a complete sentence or short paragraph
