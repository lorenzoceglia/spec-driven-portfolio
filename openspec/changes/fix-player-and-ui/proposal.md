## Why

The floating player is broken: audio never plays because the SoundCloud Widget API silently fails when initialised against a blank iframe (`src=""`). The `h-6` waveform bar also renders unconditionally, creating an ugly slate-700 stripe even when idle. On mobile, the filter pill tabs show a native scrollbar because `scrollbar-none` is not a built-in Tailwind 4 utility.

## What Changes

- **FloatingPlayer**: always initialise the hidden iframe with the first set's embed URL instead of `src=""`; update `prevUrlRef` logic so clicking an already-loaded set calls `play()` directly rather than re-loading
- **FloatingPlayer**: replace the `h-6` waveform block (and its oEmbed fetch) with a `h-1` progress line driven by `relativePosition` — lighter, guaranteed to work, no CORS dependency
- **useSoundCloudWidget**: remove the blank-iframe workaround (`!rawSrc` block) that is no longer needed
- **index.css**: add `.scrollbar-none` CSS rules (Firefox + WebKit) so the filter pill tabs hide their scrollbar on mobile

## Capabilities

### New Capabilities

_(none — these are fixes to existing capabilities)_

### Modified Capabilities

- `floating-player`: idle state no longer relies on `src=""`; progress display changes from waveform PNG overlay to a thin progress line
- `bside-section`: SetCard click now reliably triggers playback on first interaction

## Non-goals

- Waveform PNG visualisation (dropped — CORS-fragile, heavier than needed)
- Any changes to SetCard visual design
- Any changes to filter tab layout beyond scrollbar hiding

## Impact

- `src/components/FloatingPlayer.tsx` — iframe init, prevUrlRef logic, waveform → progress bar
- `src/hooks/useSoundCloudWidget.ts` — remove !rawSrc blank-iframe block
- `src/index.css` — add scrollbar-none rules
