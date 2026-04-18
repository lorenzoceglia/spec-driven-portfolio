## ADDED Requirements

### Requirement: BSideSection renders a grid of DJ set cards
The `BSideSection` component SHALL accept a `sets: DJSet[]` prop and render each item as a `SetCard`. The section SHALL have a `slate-900` background, contrasting with the otherwise light page. The grid SHALL be 1 column on mobile and 2–3 columns on desktop.

#### Scenario: All sets render as cards
- **WHEN** `BSideSection` is rendered with an array of DJ sets
- **THEN** one card is visible per set

#### Scenario: Dark background applied
- **WHEN** `BSideSection` renders
- **THEN** the section has a dark (`slate-900`) background distinguishable from all other sections

### Requirement: BSideSection has a scroll anchor
The `BSideSection` root element SHALL have `id="b-side"` so the identity chip in the hero can scroll to it.

#### Scenario: Anchor is reachable
- **WHEN** a link to `#b-side` is followed
- **THEN** the browser scrolls to the BSideSection

### Requirement: SetCard displays cover, title, duration, and date
Each `SetCard` SHALL render: cover art image, set title, duration string, and date string.

#### Scenario: Card displays all metadata
- **WHEN** a `SetCard` is rendered with a complete `DJSet`
- **THEN** the cover image, title, duration, and date are all visible

### Requirement: SetCard shows a Now Playing indicator
When a set card's `url` matches the `currentSetUrl` prop, the card SHALL render a visible "Now Playing" ring or highlight.

#### Scenario: Active card is highlighted
- **WHEN** `currentSetUrl` matches the card's `url`
- **THEN** the card displays a distinguishable active ring or border

#### Scenario: Inactive card shows no indicator
- **WHEN** `currentSetUrl` does not match the card's `url`
- **THEN** no active indicator is visible on the card

### Requirement: Clicking a SetCard triggers playback
Each `SetCard` SHALL accept an `onPlay: (url: string) => void` callback. Clicking the card or its play button SHALL call `onPlay` with the set's `url`.

#### Scenario: Click fires onPlay
- **WHEN** the user clicks a `SetCard`
- **THEN** `onPlay` is called with the corresponding `DJSet.url`

### Requirement: BSideSection and SetCard have Storybook stories
Both `BSideSection` and `SetCard` components SHALL have `.stories.tsx` files with at least one story each.

#### Scenario: Stories render without errors
- **WHEN** Storybook loads the BSideSection and SetCard stories
- **THEN** both render without errors using the HOMECOMING set as sample data
