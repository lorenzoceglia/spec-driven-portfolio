## Why

Three compounding issues make the B-Side experience non-functional: clicking a SetCard does nothing because `currentSet` always falls back to `djSets[0]`, making the first card a permanent no-op; the floating player bar has no visual feedback of playback progress; and there is no way to move between sets without scrolling back up to the grid. Additionally, the B-Side catalogue needs three new sets added to the data layer.

## What Changes

- **SetCard click fix**: remove the `?? djSets[0]` fallback in `App.tsx` so `currentSet` is `null` until the user explicitly picks a set; clicking any card for the first time now fires `load(url, true)` and opens the player
- **Waveform in FloatingPlayer**: fetch the SC oEmbed `waveform_url` per set; expose `PLAY_PROGRESS` events from the hook to track `relativePosition`; render the waveform PNG with an orange progress overlay clipped to the current position
- **Prev/Next navigation**: FloatingPlayer receives the full `sets: DJSet[]` array and an `onSetChange` callback; Prev/Next buttons cycle through sets
- **Three new DJ sets**: add Hollow Frequencies vol.1, Hollow Frequencies vol.2, and Love Live Set — Lore & Rox to `src/data/djSets.ts`

## Capabilities

### New Capabilities

- `player-waveform`: waveform image + progress overlay in the floating player bar

### Modified Capabilities

- `floating-player`: receives `sets` + `onSetChange`; adds waveform + prev/next controls; no longer requires `currentSet` to be non-null on mount
- `bside-section`: SetCard click now reliably triggers playback

## Non-goals

- Seek-by-click on the waveform (display only)
- Waveform animation while paused
- Any changes to SetCard visual design (covered in `design-system-refresh`)

## Impact

- `src/App.tsx` — remove `?? djSets[0]` fallback; pass `sets` to `FloatingPlayer`; rename `onPlay` callback
- `src/data/djSets.ts` — add three new entries
- `src/hooks/useSoundCloudWidget.ts` — expose `relativePosition` state via `PLAY_PROGRESS` event
- `src/components/FloatingPlayer.tsx` — waveform fetch, progress overlay, prev/next buttons, updated props
