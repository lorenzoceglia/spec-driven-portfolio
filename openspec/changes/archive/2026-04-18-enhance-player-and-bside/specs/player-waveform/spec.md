## ADDED Requirements

### Requirement: FloatingPlayer displays a waveform with playback progress
The `FloatingPlayer` SHALL fetch the waveform PNG URL from the SoundCloud oEmbed endpoint for the current set. It SHALL render the waveform as an image with a fixed height and an orange overlay `div` whose width reflects `relativePosition` (0–1) from the `PLAY_PROGRESS` event. While the waveform is loading a neutral placeholder bar SHALL be shown.

#### Scenario: Waveform appears after set loads
- **WHEN** a set is loaded in the floating player and the oEmbed fetch resolves
- **THEN** the waveform PNG is visible in the player bar

#### Scenario: Progress overlay advances during playback
- **WHEN** the set is playing and time advances
- **THEN** the orange overlay width increases proportionally to elapsed playback time

#### Scenario: Placeholder shown while loading
- **WHEN** the set changes and the oEmbed fetch has not yet resolved
- **THEN** a neutral placeholder bar occupies the waveform area
