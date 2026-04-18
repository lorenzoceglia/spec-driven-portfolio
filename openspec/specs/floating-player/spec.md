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
The `FloatingPlayer` SHALL display: a 48×48px cover thumbnail, the set title, a play/pause toggle button, and a next-set button (if multiple sets are available).

#### Scenario: Active set metadata is visible
- **WHEN** a set is loaded in the floating player
- **THEN** the cover art and title are visible in the player bar

#### Scenario: Play/pause toggle works
- **WHEN** the user clicks the play/pause button
- **THEN** playback state toggles between playing and paused

### Requirement: FloatingPlayer controls a single persistent SoundCloud iframe
The `FloatingPlayer` SHALL contain one `<iframe>` element pointing to a SoundCloud embed URL. The iframe SHALL be hidden from the visual layout (zero size) while the player UI is fully custom. The `useSoundCloudWidget` hook SHALL manage all communication with the iframe.

#### Scenario: iframe is not visible
- **WHEN** the floating player renders
- **THEN** no SoundCloud iframe UI is visible to the user; only the custom player bar is shown

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
