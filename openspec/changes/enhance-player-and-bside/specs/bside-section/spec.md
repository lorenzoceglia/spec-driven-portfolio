## MODIFIED Requirements

### Requirement: Clicking a SetCard reliably triggers playback
Clicking a `SetCard` SHALL always result in the corresponding set loading and playing in the `FloatingPlayer`, regardless of whether that set was already the active one. The `App` component SHALL NOT default `currentSet` to `djSets[0]` — `currentSet` SHALL be `null` until the user explicitly selects a set.

#### Scenario: First card click starts playback
- **WHEN** no set has been selected and the user clicks any SetCard
- **THEN** the set loads in the FloatingPlayer and playback begins

#### Scenario: Clicking already-active card replays
- **WHEN** the user clicks a SetCard whose URL matches the currently loaded set
- **THEN** playback begins (or continues) from the current position
