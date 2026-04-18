## MODIFIED Requirements

### Requirement: FloatingPlayer controls a single persistent SoundCloud iframe
The `FloatingPlayer` SHALL contain one `<iframe>` element pointing to a SoundCloud embed URL. The iframe SHALL be hidden from the visual layout (zero size) while the player UI is fully custom. The `useSoundCloudWidget` hook SHALL manage all communication with the iframe. The iframe SHALL carry the attribute `allow="autoplay"` so the browser's Permissions Policy permits cross-origin audio playback when the user triggers play.

#### Scenario: iframe is not visible
- **WHEN** the floating player renders
- **THEN** no SoundCloud iframe UI is visible to the user; only the custom player bar is shown

#### Scenario: Audio plays after user presses play
- **WHEN** the user clicks the play button in the floating player bar
- **THEN** audio from the SoundCloud set is audible

### Requirement: FloatingPlayer displays current set info and playback controls
The `FloatingPlayer` SHALL display: a 48×48px cover thumbnail, the set title, a play/pause toggle button, and a next-set button (if multiple sets are available). The play/pause button SHALL call `play()` when the player is paused and `pause()` when it is playing, using explicit Widget API methods rather than a generic toggle.

#### Scenario: Active set metadata is visible
- **WHEN** a set is loaded in the floating player
- **THEN** the cover art and title are visible in the player bar

#### Scenario: Play/pause button calls correct method
- **WHEN** the player is paused and the user clicks the play/pause button
- **THEN** `widget.play()` is called and playback starts

#### Scenario: Pause button calls correct method
- **WHEN** the player is playing and the user clicks the play/pause button
- **THEN** `widget.pause()` is called and playback stops

## ADDED Requirements

### Requirement: Page layout adds bottom clearance when FloatingPlayer is open
When `isFloatingOpen` is `true` in `App.tsx`, the outer layout wrapper SHALL have `pb-16` applied so the footer is never obscured by the floating player bar.

#### Scenario: Footer visible when player is open
- **WHEN** the user scrolls to the bottom of the page while the floating player is open
- **THEN** the footer is fully visible above the player bar

#### Scenario: No extra padding when player is hidden
- **WHEN** `isFloatingOpen` is `false`
- **THEN** the outer wrapper has no additional bottom padding
