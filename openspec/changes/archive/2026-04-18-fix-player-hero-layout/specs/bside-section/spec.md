## ADDED Requirements

### Requirement: BSideSection displays a section tagline
Below the "B-SIDE" label, the `BSideSection` SHALL render a one-line tagline that introduces the section to the reader.

#### Scenario: Tagline is visible below the label
- **WHEN** `BSideSection` renders
- **THEN** a short descriptive sentence is visible immediately below the "B-SIDE" heading

#### Scenario: Tagline is styled to match the dark section palette
- **WHEN** `BSideSection` renders
- **THEN** the tagline text uses a muted color consistent with the `slate-900` background (e.g., `slate-400`)
