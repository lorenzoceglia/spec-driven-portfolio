## MODIFIED Requirements

### Requirement: BubblePack container height is stable across filter changes
The `BubblePack` component SHALL accept an `allItems: TechItem[]` prop representing the full unfiltered set. The container height SHALL be clamped to `Math.max(cloudHeight, allItemsCloudHeight)`, where `allItemsCloudHeight` is computed by running `useCirclePacker` on `allItems`. The container height SHALL NOT change when the active filter tab changes. The `height` CSS transition SHALL be removed from the container.

#### Scenario: Height does not change on filter switch
- **WHEN** the user switches from the "All" tab to any category tab
- **THEN** the `BubblePack` container height remains the same as it was on the "All" tab

#### Scenario: Height is computed from the full set
- **WHEN** `BubblePack` renders with `allItems` containing more bubbles than `items`
- **THEN** the container height equals the height computed for `allItems`, not `items`

#### Scenario: Graceful fallback when allItems equals items
- **WHEN** `BubblePack` is rendered without an `allItems` prop (defaults to `items`)
- **THEN** container height equals `cloudHeight` as before

## REMOVED Requirements

### Requirement: BubblePack container height transitions on filter change
**Reason**: Replaced by the stable-height behavior. Collapsing height on filter switch is visually jarring and obscures the bubble animation.
**Migration**: Remove `transition: 'height 400ms ease'` from the container `div` in `BubblePack.tsx`. Pass `allItems` from `WorkedWithSection` to `BubblePack`.
