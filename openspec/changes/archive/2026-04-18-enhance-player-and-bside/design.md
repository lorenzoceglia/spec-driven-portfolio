## Context

The B-Side player has two structural bugs and a missing feature set. The `currentSet` fallback to `djSets[0]` means the widget always initialises with HOMECOMING preloaded, `prevUrlRef` gets set to that URL on first render, and clicking the card is a permanent no-op because the URL "hasn't changed." The floating player also lacks any sense of playback state beyond the play/pause button icon.

The waveform approach uses SC oEmbed (`/oembed?url=...&format=json`) which returns a `waveform_url` — a 1800×280 PNG — per track. This is fetched client-side once per set change. The `PLAY_PROGRESS` event from the Widget API fires every ~200ms with `{ currentPosition: ms, relativePosition: 0–1 }`. The progress bar is a CSS `width` overlay on top of the waveform image.

## Goals / Non-Goals

**Goals:**
- Clicking any SetCard always triggers playback
- Waveform PNG visible in the player bar with orange progress overlay
- Prev/Next buttons cycle through all sets
- Four sets total in the catalogue (HOMECOMING + three new ones)

**Non-Goals:**
- Seek-by-click on the waveform
- Animated waveform bars (SVG/canvas)
- Waveform while paused (static image is fine)

## Decisions

### D1 — Remove `?? djSets[0]` default, start `currentSet` as `null`

`App.tsx:46` currently: `djSets.find(...) ?? djSets[0]`. Change to `djSets.find(...) ?? null`. `FloatingPlayer` and `BSideSection` both accept `currentSet: DJSet | null` already. The idle player state (nothing selected) shows cover placeholder and disabled controls.

When the user clicks a card: `currentSetUrl` changes from `null` → `set.url` → `FloatingPlayer` useEffect fires → `prevUrlRef.current` is `undefined` on first run → goes through the `load(url, true)` path correctly.

**Alternatives considered**: keep the default but add a `playTrigger` counter. Rejected — two pieces of state for one concept, harder to reason about.

### D2 — Waveform via oEmbed fetch + CSS overlay

Fetch `https://soundcloud.com/oembed?url=${encodeURIComponent(set.url)}&format=json` inside a `useEffect` in `FloatingPlayer` whenever `currentSet?.url` changes. Store `waveformUrl` in state. Display as `<img>` with `object-fit: cover` at fixed height (24px). Orange `<div>` overlay with `width: relativePosition * 100%` using `absolute` positioning.

**Alternatives considered**: SVG/canvas waveform rendering from raw waveform data. SC does not expose raw waveform data via public API — only the PNG. Rejected.

**Alternatives considered**: Show the visible portion of the SC iframe (the waveform strip). Cross-origin iframe, impossible to extract a specific DOM element. Rejected.

### D3 — `PLAY_PROGRESS` added to `useSoundCloudWidget`

The hook already binds `PLAY`, `PAUSE`, `FINISH`. Add `PLAY_PROGRESS` binding that calls a callback `(relativePosition: number) => void`. Expose `relativePosition: number` (0–1) from the hook. Throttle is not needed — SC fires this at a reasonable rate (~250ms).

The `SCWidgetConstructor.Events` type already has `PLAY_PROGRESS` defined.

### D4 — FloatingPlayer receives `sets` + `onSetChange`

Current props: `{ isOpen, currentSet }`. New props: `{ isOpen, currentSet, sets, onSetChange }`. Prev/Next compute `currentIndex = sets.findIndex(s => s.url === currentSet?.url)`. Previous = `sets[currentIndex - 1]`, Next = `sets[currentIndex + 1]`. Buttons are disabled (not hidden) at the boundaries.

`App.tsx` passes `sets={djSets}` and `onSetChange={setCurrentSetUrl}`.

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| oEmbed fetch adds a network round-trip per set change | Fetch is async, waveform appears after load; show a placeholder (slate-700 bar) while loading |
| `PLAY_PROGRESS` state updates re-render FloatingPlayer every ~250ms | Only `relativePosition` updates; the waveform overlay `width` is the only DOM change — negligible cost |
| `null` currentSet means the iframe has no initial `src` | Set `src=""` initially; SC Widget API binds after first `load()` call — the hook already queues via `pendingLoadRef` if READY hasn't fired |
