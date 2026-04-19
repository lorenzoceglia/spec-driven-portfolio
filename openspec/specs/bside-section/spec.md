# bside-section Specification

## Purpose
Dark-themed section showcasing DJ sets as a grid of cards. Provides a visual contrast to the rest of the page and serves as an anchor for the B-Side identity chip in the hero.

## Requirements

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

### Requirement: SetCard click triggers playback reliably
Clicking any `SetCard` SHALL always trigger audio playback, including the first ever click on any card.

#### Scenario: First ever click on any set
- **WHEN** the user clicks a `SetCard` for the first time after page load
- **THEN** audio begins playing for that set within one SoundCloud READY cycle

#### Scenario: Click on already-loaded set
- **WHEN** the user clicks the set whose URL matches the iframe's currently loaded URL
- **THEN** `play()` is called and audio resumes immediately without reloading the iframe

### Requirement: BSideSection and SetCard have Storybook stories
Both `BSideSection` and `SetCard` components SHALL have `.stories.tsx` files with at least one story each.

#### Scenario: Stories render without errors
- **WHEN** Storybook loads the BSideSection and SetCard stories
- **THEN** both render without errors using the HOMECOMING set as sample data

### Requirement: BSideSection displays a section tagline
Below the "B-SIDE" label, the `BSideSection` SHALL render a one-line tagline that introduces the section to the reader.

#### Scenario: Tagline is visible below the label
- **WHEN** `BSideSection` renders
- **THEN** a short descriptive sentence is visible immediately below the "B-SIDE" heading

#### Scenario: Tagline is styled to match the dark section palette
- **WHEN** `BSideSection` renders
- **THEN** the tagline text uses a muted color consistent with the `slate-900` background (e.g., `slate-400`)

### Requirement: Global text rendering is antialiased
The `body` element in `index.css` SHALL have `-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`, and `text-rendering: optimizeLegibility` applied.

#### Scenario: Antialiasing applied globally
- **WHEN** the page renders in a webkit or gecko browser
- **THEN** text uses subpixel antialiasing and optimised legibility rendering

### Requirement: FilterTabs active pill uses slate-900
The active tab in `FilterTabs` SHALL use `bg-slate-900 text-white` instead of any indigo variant.

#### Scenario: Active tab is black
- **WHEN** a tab is active in FilterTabs
- **THEN** the pill background is `slate-900` and text is white

### Requirement: Cards use rounded-lg and border-slate-200
All `Card` components SHALL use `rounded-lg` border radius and `border-slate-200` border color.

#### Scenario: Card border radius is rounded-lg
- **WHEN** a Card renders
- **THEN** the border radius is `rounded-lg` (not `rounded-xl`)

### Requirement: Company role label uses slate-700
The role label inside each company card SHALL use `text-slate-700 font-medium` instead of any indigo color.

#### Scenario: Role label is dark gray
- **WHEN** a company card renders
- **THEN** the role text is `slate-700`

### Requirement: Open source language badge is an inverted monospace tag
The language badge in `OpenSourceSection` SHALL use `bg-slate-900 text-white font-mono` styling.

#### Scenario: Language badge is dark with white monospace text
- **WHEN** an OS project card renders
- **THEN** the language badge has a `slate-900` background and white monospace text
