## ADDED Requirements

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
