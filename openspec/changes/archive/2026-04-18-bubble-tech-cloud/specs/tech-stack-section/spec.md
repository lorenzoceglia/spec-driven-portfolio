## MODIFIED Requirements

### Requirement: Tech stack section renders a grid of technology badges
The `WorkedWithSection` component (formerly `TechStackSection`) SHALL accept a `techs: TechItem[]` prop and render a `FilterTabs` component above a `BubblePack` component. The active tab SHALL filter the displayed bubbles. An "All" tab SHALL always be present and SHALL be the default active tab. Tabs are derived from the `category` field — only categories with at least one item are included. The `TechItem` category field SHALL support the values `'Frontend'`, `'Backend'`, `'Database'`, `'Tools'`, and `'AI'`. The `TechItem` type SHALL include a `confidence: 1 | 2 | 3 | 4 | 5` field.

#### Scenario: AI tab shows only AI items
- **WHEN** the "AI" tab is active
- **THEN** only items with `category === 'AI'` are rendered in the bubble cloud

#### Scenario: All tab shows all bubbles including AI
- **WHEN** the "All" tab is active
- **THEN** all items including AI tools are rendered as `FloatingBubble` components

#### Scenario: Tab derived from data only
- **WHEN** `WorkedWithSection` receives a `techs` array
- **THEN** only tabs for categories with at least one item are rendered

### Requirement: TechStackSection defaults to the Frontend tab
On initial render, the `WorkedWithSection` SHALL display the "All" tab as active — not the "Frontend" tab.

#### Scenario: All tab is active on first render
- **WHEN** `WorkedWithSection` renders for the first time
- **THEN** the "All" tab is highlighted and all items across all categories are visible

#### Scenario: User can switch to category tab
- **WHEN** the user clicks any category tab
- **THEN** only items in that category are displayed and the cloud re-packs

### Requirement: Tech stack section has a Storybook story
`WorkedWithSection`, `BubblePack`, and `FloatingBubble` SHALL each have a `.stories.tsx` file with at least one story using real data. The `TechStackSection` and `TechBadge` stories are removed.

#### Scenario: Stories render without errors
- **WHEN** Storybook loads the WorkedWithSection, BubblePack, and FloatingBubble stories
- **THEN** all three render without errors

## REMOVED Requirements

### Requirement: TechBadge displays icon and name
**Reason**: `TechBadge` component is removed entirely. Superseded by `FloatingBubble`, which renders icon and name inside a circular bubble with confidence-driven sizing.
**Migration**: Replace all `<TechBadge>` usage with `<FloatingBubble>`. Delete `TechBadge.tsx` and `TechBadge.stories.tsx`.

### Requirement: TechBadge reveals brand color on hover
**Reason**: `TechBadge` removed. `FloatingBubble` uses Direction-B hover style (bg-slate-900 + white icon) instead of brand-color reveal.
**Migration**: Delete `TechBadge.tsx`. Hover behaviour is now handled by `FloatingBubble`.

### Requirement: TechBadge displays a fallback icon for techs with no SI icon
**Reason**: `TechBadge` removed. `FloatingBubble` inherits the `MdCode` fallback pattern — any `TechItem` with `MdCode` as its icon still renders correctly.
**Migration**: No action needed; `FloatingBubble` accepts any `IconType` including `MdCode`.
