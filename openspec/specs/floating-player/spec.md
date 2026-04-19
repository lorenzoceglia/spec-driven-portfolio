# floating-player Specification

## Purpose
Persistent bottom-fixed player bar that appears when the hero section leaves the viewport, allowing continuous SoundCloud playback while browsing the rest of the page.

## Requirements

### Requirement: FloatingPlayer appears when the hero section leaves the viewport
The `FloatingPlayer` component SHALL be conditionally visible based on an `isOpen: boolean` prop. It SHALL be positioned `fixed` at the bottom of the viewport with a `slate-900` background. It SHALL animate in with a `translateY(100%) → translateY(0)` CSS transition and out in reverse.

#### Scenario: Player slides in on scroll past hero
- **WHEN** `isOpen` becomes `true`
- **THEN** the floating player slides up from the bottom of the viewport

#### Scenario: Player is hidden when hero is visible
- **WHEN** `isOpen` is `false`
- **THEN** the floating player is not visible

### Requirement: FloatingPlayer displays current set info and playback controls
The `FloatingPlayer` SHALL display: a 40×40px cover thumbnail, the set title, a `h-1` progress bar, a previous-set button, a play/pause button, and a next-set button. Prev/Next buttons SHALL be disabled at the first and last set respectively. The play/pause button SHALL call `play()` when paused and `pause()` when playing.

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

### Requirement: FloatingPlayer controls a single persistent SoundCloud iframe
The `FloatingPlayer` SHALL contain one `<iframe>` element pointing to a SoundCloud embed URL. The iframe SHALL be hidden from the visual layout (zero size) while the player UI is fully custom. The `useSoundCloudWidget` hook SHALL manage all communication with the iframe. The iframe SHALL carry the attribute `allow="autoplay"` so the browser's Permissions Policy permits cross-origin audio playback when the user triggers play.

#### Scenario: iframe is not visible
- **WHEN** the floating player renders
- **THEN** no SoundCloud iframe UI is visible to the user; only the custom player bar is shown

#### Scenario: Audio plays after user presses play
- **WHEN** the user clicks the play button in the floating player bar
- **THEN** audio from the SoundCloud set is audible

### Requirement: FloatingPlayer switches tracks without iframe reload
When `currentSetUrl` changes, the `FloatingPlayer` SHALL call `widget.load(newUrl, { auto_play: true })` via the `useSoundCloudWidget` hook rather than swapping `iframe.src`.

#### Scenario: Track switch is seamless
- **WHEN** the user clicks a different set card
- **THEN** the floating player begins loading and playing the new set without a visible reload flash

### Requirement: FloatingPlayer has a Storybook story
The `FloatingPlayer` component SHALL have a `FloatingPlayer.stories.tsx` file with at least one story showing the open state with mock set data.

#### Scenario: Story renders the open player
- **WHEN** Storybook loads the FloatingPlayer story with `isOpen=true`
- **THEN** the player bar is visible with cover, title, and controls

### Requirement: Page layout adds bottom clearance when FloatingPlayer is open
When `isFloatingOpen` is `true` in `App.tsx`, the outer layout wrapper SHALL have `pb-16` applied so the footer is never obscured by the floating player bar.

#### Scenario: Footer visible when player is open
- **WHEN** the user scrolls to the bottom of the page while the floating player is open
- **THEN** the footer is fully visible above the player bar

#### Scenario: No extra padding when player is hidden
- **WHEN** `isFloatingOpen` is `false`
- **THEN** the outer wrapper has no additional bottom padding
