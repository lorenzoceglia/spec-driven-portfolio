## Context

`FloatingPlayer` initialises its hidden iframe with `src=""` when `currentSet` is null (no set selected on mount). `SC.Widget(blankIframe).load(url)` communicates via `postMessage` to `iframe.contentWindow` — which, for a blank iframe, is either `about:blank` or the current page itself. There is no SoundCloud player inside to receive the message, so `load()` silently fails, `READY` never fires, and audio never plays. `isReadyRef` stays `false` from that point forward, making `play()` a no-op.

The `h-6 bg-slate-700` waveform strip renders unconditionally, creating a visible slate band above the player even in idle state and while waiting for the (now-dropped) oEmbed fetch. The `scrollbar-none` Tailwind class has no effect in TW4 without explicit CSS.

## Goals / Non-Goals

**Goals:**
- Audio plays on first SetCard click without exception
- Progress bar is a clean `h-1` line — no CORS, no external fetch
- Filter pill scrollbar hidden on mobile

**Non-Goals:**
- Waveform PNG visualisation
- Per-set artwork changes in the player bar
- Seek-by-click on the progress line

## Decisions

### D1 — Always initialise iframe with first set's embed URL

`initialEmbedUrl.current = getEmbedUrl(djSets[0].url)` regardless of `currentSet`. The SC Widget API initialises correctly against a real SC player embed. The first set loads silently (no autoplay). `prevUrlRef.current` is initialised to `djSets[0].url` to record that the iframe already has this URL loaded.

**Alternatives considered**: Conditionally render the iframe (only mount when `currentSet` is not null). Rejected — React ref objects are stable and the init `useEffect` wouldn't re-run when `iframeRef.current` goes from null to a DOM element, requiring a more complex callback-ref pattern.

### D2 — `prevUrlRef` comparison drives play vs load

```
useEffect(() => {
  if (!currentSet) return;
  if (prevUrlRef.current === currentSet.url) {
    play();      // already loaded — just resume
    return;
  }
  prevUrlRef.current = currentSet.url;
  load(currentSet.url, true);
}, [currentSet?.url]);
```

When user clicks the preloaded first set: URLs match → `play()`. Any other set: `load(url, true)`. Re-clicking the current set while paused: `play()` resumes correctly.

### D3 — `h-1` progress line replaces `h-6` waveform block

Remove the `waveformUrl` state, the oEmbed `useEffect`, and the `<img>` waveform overlay entirely. Replace with:

```
<div className="h-1 w-full bg-slate-800">
  <div
    className="h-full bg-orange-500"
    style={{ width: `${relativePosition * 100}%`, transition: 'width 250ms linear' }}
  />
</div>
```

Always rendered. At 0 progress: a near-invisible `slate-800` hairline — a clean separator, not an ugly band. Progress fills orange as the track plays.

**Alternatives considered**: Hide the bar when `currentSet` is null. Rejected — at `h-1` the bar is visually neutral at 0%; hiding/showing it would cause a layout shift.

### D4 — Remove `!rawSrc` blank-iframe workaround from hook

The `useSoundCloudWidget` blank-iframe block (`if (!rawSrc) { isReadyRef.current = true; ... }`) was the attempted fix for the broken `src=""` approach. With D1, the iframe always has a valid src and this block is dead code. Remove it to keep the hook clean.

### D5 — `.scrollbar-none` via explicit CSS

```css
.scrollbar-none { scrollbar-width: none; }
.scrollbar-none::-webkit-scrollbar { display: none; }
```

Added to `index.css`. Tailwind 4 does not ship this utility out of the box.

## Risks / Trade-offs

| Risk | Mitigation |
|---|---|
| First set (HOMECOMING) loads in background on every page visit | Negligible — SC embed loads lazily, no audio plays until `play()` is called |
| `play()` called before SC widget READY | `widgetRef.current?.play()` is a safe no-op if widget isn't ready yet; the READY → autoplay path via `load()` still works for all other sets |
