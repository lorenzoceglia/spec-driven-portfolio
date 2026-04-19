## MODIFIED Requirements

### Requirement: SetCard click triggers playback reliably
Clicking any `SetCard` SHALL always trigger audio playback, including the first ever click on any card.

#### Scenario: First ever click on any set
- **WHEN** the user clicks a `SetCard` for the first time after page load
- **THEN** audio begins playing for that set within one SoundCloud READY cycle

#### Scenario: Click on already-loaded set
- **WHEN** the user clicks the set whose URL matches the iframe's currently loaded URL
- **THEN** `play()` is called and audio resumes immediately without reloading the iframe
