## MODIFIED Requirements

### Requirement: FloatingPlayer displays current set info and playback controls
The `FloatingPlayer` SHALL display: a 40×40px cover thumbnail, the set title, a waveform with progress overlay, a previous-set button, a play/pause button, and a next-set button. Prev/Next buttons SHALL be disabled at the first and last set respectively. The play/pause button SHALL call `play()` when paused and `pause()` when playing.

#### Scenario: Active set metadata is visible
- **WHEN** a set is loaded in the floating player
- **THEN** the cover art and title are visible in the player bar

#### Scenario: Prev button disabled at first set
- **WHEN** the first set in the list is active
- **THEN** the previous button is disabled and non-interactive

#### Scenario: Next button disabled at last set
- **WHEN** the last set in the list is active
- **THEN** the next button is disabled and non-interactive

#### Scenario: Next button advances to next set
- **WHEN** the user clicks the next button and a next set exists
- **THEN** the next set loads and begins playing

### Requirement: FloatingPlayer accepts a sets array and onSetChange callback
The `FloatingPlayer` SHALL accept `sets: DJSet[]` and `onSetChange: (url: string) => void` props in addition to the existing `isOpen` and `currentSet` props. Prev/Next navigation SHALL call `onSetChange` with the adjacent set's URL.

#### Scenario: onSetChange called on next
- **WHEN** the user clicks next
- **THEN** `onSetChange` is called with the URL of the following set

### Requirement: FloatingPlayer handles null currentSet gracefully
When `currentSet` is `null` (no set selected yet), the `FloatingPlayer` SHALL render an idle state with disabled controls and no waveform. The iframe SHALL have an empty `src` until the first set is loaded via the hook's `load()` method.

#### Scenario: Idle state shown before first selection
- **WHEN** `currentSet` is `null`
- **THEN** the player bar shows placeholder text and disabled controls with no audio loaded
