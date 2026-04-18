## Why

Four user-facing issues discovered after the B-Side launch: the SoundCloud floating player produces no audio and its play button resets on click; the hero section does not fill the full viewport on landing; the floating player bar covers the footer when scrolled to the bottom; and the B-Side section lacks a human-readable intro.

## What Changes

- **SoundCloud player fix**: add `allow="autoplay"` to the hidden iframe so the browser's Permissions Policy lets the cross-origin iframe play audio; replace the undocumented `toggle()` call with explicit `play()`/`pause()` driven by `isPlaying` state
- **Hero full-viewport**: change `HeroSection` from `min-h-[80vh]` to `min-h-[calc(100svh-3.25rem)]` so header + hero fills exactly the viewport on landing
- **Footer overlap fix**: add `pb-16` to the outer layout wrapper in `App.tsx` when `isFloatingOpen === true`, pushing the footer above the floating player
- **B-Side tagline**: add a one-line section tagline below the "B-SIDE" label in `BSideSection`

## Capabilities

### New Capabilities

_None — all changes are fixes or enhancements to existing capabilities._

### Modified Capabilities

- `floating-player`: iframe now carries `allow="autoplay"`; play/pause uses explicit methods instead of `toggle()`
- `bside-section`: section gains a tagline subtitle
- `hero-section`: height changes to fill the viewport on landing

## Non-goals

- Per-card description rendering in `SetCard` (only section-level tagline)
- Auto-play on player open (user must press play explicitly)
- Changing the header to fixed/absolute positioning
- Any new components or Storybook stories (all changes are behavioural or layout)

## Impact

- `src/components/FloatingPlayer.tsx` — iframe attribute + play/pause logic
- `src/hooks/useSoundCloudWidget.ts` — expose `play()`/`pause()` instead of (or alongside) `toggle()`
- `src/components/HeroSection.tsx` — min-height class
- `src/components/BSideSection.tsx` — tagline text
- `src/App.tsx` — conditional `pb-16` on outer wrapper
