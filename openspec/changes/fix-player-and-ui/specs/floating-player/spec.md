## MODIFIED Requirements

### Requirement: FloatingPlayer initialises with a valid SoundCloud embed
The `FloatingPlayer` hidden iframe SHALL always be initialised with a real SoundCloud embed URL (the first set in `djSets`). The iframe SHALL never use `src=""`.

#### Scenario: Initial mount with no set selected
- **WHEN** `FloatingPlayer` mounts and `currentSet` is `null`
- **THEN** the hidden iframe has the first set's embed URL as `src` and no audio plays

#### Scenario: User selects the preloaded first set
- **WHEN** `currentSet` changes to the set whose URL matches the iframe's initial `src`
- **THEN** `play()` is called directly on the widget (no `load()` needed) and audio starts

#### Scenario: User selects a different set
- **WHEN** `currentSet` changes to a set whose URL differs from the previously loaded URL
- **THEN** `load(url, true)` is called and the new set begins playing

### Requirement: Progress display is a thin `h-1` line
The `FloatingPlayer` SHALL display a `h-1` progress bar above the controls row. The bar SHALL have a `bg-slate-800` track and an orange (`bg-orange-500`) fill driven by `relativePosition` (0–1).

#### Scenario: Track at 0% progress
- **WHEN** `relativePosition` is `0`
- **THEN** the orange fill has `width: 0%` and only the `slate-800` track is visible

#### Scenario: Track mid-play
- **WHEN** `relativePosition` is between 0 and 1
- **THEN** the orange fill occupies that fraction of the bar width, transitioning smoothly

#### Scenario: Idle state (no set selected)
- **WHEN** `currentSet` is `null`
- **THEN** the `h-1` bar is still rendered at 0% — visually a hairline separator, no layout shift

## REMOVED Requirements

### Requirement: Waveform PNG overlay
**Reason**: SC oEmbed endpoint CORS is unreliable from browser; PNG overlay is fragile and heavier than needed. Replaced by the `h-1` progress line.
**Migration**: Remove `waveformUrl` state, oEmbed `useEffect`, and `<img>` waveform element from `FloatingPlayer`.
