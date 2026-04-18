## Context

Four independent bugs/gaps in the current portfolio:

1. The SoundCloud floating player emits no audio and the play button resets immediately after click. Root cause: the hidden `<iframe>` lacks `allow="autoplay"`, so the browser's Permissions Policy blocks cross-origin audio playback. A secondary reliability issue: `useSoundCloudWidget` exposes an undocumented `toggle()` method rather than explicit `play()`/`pause()`.
2. `HeroSection` uses `min-h-[80vh]`, leaving the top of `TechStackSection` visible on landing. The header is `sticky top-0` with `py-4` and `text-sm` content ≈ 52px (3.25rem). Hero + header should equal exactly one viewport height.
3. The `FloatingPlayer` (`fixed bottom-0`, `h-16` = 64px) overlaps the `Footer` when the user scrolls to the bottom. No layout compensation exists.
4. `BSideSection` has only a small `"B-SIDE"` uppercase label — no human-readable intro.

## Goals / Non-Goals

**Goals:**
- Audio plays after user explicitly presses play (no autoplay on open)
- Play/pause button state stays in sync with actual playback state
- Header + hero fills exactly one viewport height on landing
- Footer is always fully visible above the floating player
- B-Side section has a one-line tagline

**Non-Goals:**
- Per-card description in `SetCard`
- Auto-start on player open
- Header refactor (sticky/fixed, height var, etc.)
- New components or Storybook stories

## Decisions

### D1 — `allow="autoplay"` on the iframe

**Decision**: Add `allow="autoplay"` to the hidden `<iframe>` in `FloatingPlayer.tsx`.

The browser's [Permissions Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy) blocks cross-origin iframes from playing audio unless the embedding page explicitly grants the `autoplay` feature. The user's click gesture on the main page does not propagate as a trusted gesture into the cross-origin SoundCloud iframe via `postMessage`. Adding `allow="autoplay"` is the correct, standards-compliant fix.

**Alternatives considered**: Replacing the hidden iframe with a visible-but-tiny iframe at `1px × 1px`. Rejected — the Widget API behaviour is unchanged; the Permissions Policy still applies regardless of iframe size.

### D2 — Explicit `play()`/`pause()` instead of `toggle()`

**Decision**: Remove `toggle()` from the `useSoundCloudWidget` API. Expose `play()` and `pause()` directly. The `FloatingPlayer` calls `play()` when `!isPlaying` and `pause()` when `isPlaying`.

`toggle()` is not in the SC Widget API's official method list. It has worked historically in some SC embed versions but is undocumented and unreliable. Explicit `play()`/`pause()` matches the events we already bind (`PLAY` → `setIsPlaying(true)`, `PAUSE`/`FINISH` → `setIsPlaying(false)`) and keeps the hook's contract transparent.

### D3 — Hero height via `calc(100svh - 3.25rem)`

**Decision**: Change `HeroSection` from `min-h-[80vh]` to `min-h-[calc(100svh-3.25rem)]`.

`100svh` (safe viewport height) handles mobile browsers that show/hide address bars, avoiding the "100vh overflow" issue on iOS Safari. `3.25rem` = 52px = the header's exact rendered height (`py-4` 32px + `text-sm` line-height 20px at 16px root). No JS measurement needed; the header height is stable and hardcoded in one place.

**Alternatives considered**:
- CSS custom property `--header-height` set via JS `ResizeObserver`. More robust but adds runtime JS for a value that never changes.
- `min-h-screen` on hero + `absolute` header overlay. Changes the header stacking context and semantic flow — too broad a change.

### D4 — Conditional `pb-16` on the outer wrapper in `App.tsx`

**Decision**: When `isFloatingOpen === true`, add class `pb-16` to the outermost `div` in `App.tsx` (the `flex flex-col min-h-screen` wrapper).

This shifts the entire scrollable content up by 64px (the player height) only when the player is visible. The footer is naturally repositioned above the player without any changes to `Footer.tsx`. The class transition produces a subtle layout shift (64px jump when the player slides in), which is acceptable — the player's own slide-in animation already draws the eye downward.

**Alternatives considered**:
- Always-on `pb-16`. Cleaner, no layout jump, but wastes space when the player isn't visible (pre-scroll).
- Padding only on `<Footer>`. Requires passing `isFloatingOpen` as a prop to `Footer`, coupling layout state to a leaf component.

### D5 — B-Side tagline as static copy in `BSideSection`

**Decision**: Add a `<p>` tagline immediately below the `<h2 B-SIDE>` label. Static string hardcoded in the component — no new prop.

The tagline is persona-specific ("When code stops, the music starts.") and will not vary across renders. Promoting it to a prop adds unnecessary flexibility for a single-portfolio site.

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| `3.25rem` header height assumption breaks if header is resized | Acceptable for this single-portfolio site; document the coupling |
| `pb-16` layout shift when player opens may feel jumpy on slow connections | The player's 0.4s slide-in animation masks it; acceptable |
| SC Widget READY event reliability across embed versions | Covered by existing `pendingLoadRef` queue; unchanged |
| `allow="autoplay"` may not be enough on browsers with strict autoplay policies | User must click play explicitly (no auto-play), which is a direct user gesture — this satisfies all browser autoplay heuristics |
