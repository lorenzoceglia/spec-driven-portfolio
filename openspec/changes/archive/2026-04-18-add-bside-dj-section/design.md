## Context

The portfolio currently has no audio or music identity. The B-Side feature introduces the SoundCloud Widget API — an external iframe-based JavaScript API — and a new pattern for cross-component state (the floating player and the set grid need to share which track is active). This is the most architecturally novel piece added to the project so far.

Current state of relevant files:
- `HeroSection.tsx`: name, role, bio props — no chips
- `TechStackSection.tsx`: `useState(availableTabs[0])` defaults to "All"
- `App.tsx`: flat composition, no shared state between sections
- No SoundCloud-related code exists anywhere

## Goals / Non-Goals

**Goals:**
- Add identity chips to the hero (Code + B-Side anchor) with staggered animation
- Introduce a `BSideSection` that lists DJ sets with cover, title, duration, date
- Introduce a `FloatingPlayer` that appears on scroll and plays the selected set
- Control the floating player via the SoundCloud Widget API (no iframe reloads on track switch)
- Lift `currentSetUrl` state to `App` so the grid and player stay in sync
- No new npm dependencies

**Non-Goals:**
- Seek interaction, volume control, full playback controls
- Dynamic SoundCloud API fetching of set metadata
- Mobile-specific layout variants for the floating player

## Decisions

### 1. SoundCloud Widget API over multiple static iframes

**Decision**: Use a single persistent `<iframe>` controlled by `SC.Widget` JavaScript API, calling `widget.load(url, { auto_play: true })` when the user selects a different set.

**Alternatives considered**:
- *Multiple iframes pre-rendered hidden*: Simpler React model, but heavy on browser memory and network (each iframe loads SoundCloud resources). Not scalable as the set list grows.
- *Dynamic `iframe.src` swap*: Simple but causes a full iframe reload on every track switch — visible loading flash and audio gap. Poor UX.
- *SoundCloud REST API*: Deprecated for new registrations since 2019. Not viable.

**Rationale**: `widget.load()` is the only approach that switches tracks without a page reload. It keeps the iframe persistent and swaps content at the SoundCloud embed level. Clean UX, single DOM node.

### 2. `useSoundCloudWidget` custom hook

**Decision**: Encapsulate all Widget API interaction (script loading, widget init, READY event, `load()`, `play/pause`, progress events) in a single `useSoundCloudWidget(iframeRef, currentSetUrl)` hook.

**Rationale**: The Widget API is imperative and event-driven — a poor fit for direct JSX. The hook bridges the imperative API into React state (`isPlaying`, `trackTitle`), making `FloatingPlayer` a clean declarative component. Also isolates the `window.SC` global from the rest of the codebase.

**Script loading**: The SC Widget API script (`https://w.soundcloud.com/player/api.js`) is loaded once dynamically via a `useEffect` that appends a `<script>` tag. Idempotent — checks for existing `window.SC` before appending.

### 3. State lifted to `App`

**Decision**: `currentSetUrl: string | null` and `isFloatingOpen: boolean` live in `App.tsx`.

**Alternatives considered**:
- *React Context*: Adds boilerplate for a two-consumer problem. Overkill.
- *State inside `FloatingPlayer`*: The player can't know which card was clicked.
- *State inside `BSideSection`*: The section can't tell the player what to load.

**Rationale**: App already composes all sections. Two props passed down is the simplest correct solution.

### 4. `isFloatingOpen` driven by IntersectionObserver on the Hero

**Decision**: Reuse the existing `useIntersectionObserver` hook on the `HeroSection` wrapper. When the hero is no longer visible (`isVisible === false`), set `isFloatingOpen = true`.

**Rationale**: Zero new dependencies. The hook already exists and handles the `rootMargin` / `threshold` options needed. The floating player slides in with a CSS `translateY` transition — same pattern already used for scroll-reveal on other sections.

### 5. Data hardcoded in `djSets.ts`

**Decision**: A typed `DJSet[]` array in `src/data/djSets.ts`. Fields: `title`, `description`, `url`, `coverUrl`, `duration`, `date`.

**Rationale**: SoundCloud's REST API is unavailable without an approved key. oEmbed gives metadata but requires a fetch per set. Hardcoding is resilient, zero-runtime-cost, and consistent with how `techStack`, `companies`, and `openSourceProjects` are handled in this project.

**embedUrl derivation**: Computed at render time from `url` as `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&show_artwork=true&visual=false`. `visual=false` gives a compact waveform bar appropriate for the floating player; the B-Side cards show the static cover image from `coverUrl`.

### 6. Identity chips as inline JSX in `HeroSection`

**Decision**: Render the chips directly inside `HeroSection` as a `<div>` below the bio, accepting an optional `chips?: { label: string; href?: string }[]` prop.

**Alternatives considered**:
- *Separate `IdentityChips` component*: Adds a file for what is effectively two styled anchors.

**Rationale**: The chips are tightly coupled to the hero layout and stagger animation sequence. Keeping them inside `HeroSection` avoids prop threading and simplifies the animation delay chain (chips animate at 450ms and 600ms, continuing the existing sequence).

## Risks / Trade-offs

**SoundCloud Widget API reliability** → The Widget API depends on SoundCloud's CDN for the iframe and `api.js` script. If SoundCloud is unreachable, the player silently fails. Mitigation: the `FloatingPlayer` gracefully shows a static state if `window.SC` is not available; no error is thrown to the user.

**Autoplay policy** → Browsers block autoplay before user interaction. The first play requires a direct click. Mitigation: `widget.load(url, { auto_play: false })` on initial mount; subsequent card clicks pass `auto_play: true` only after the user has already interacted with the player.

**Widget READY timing** → `widget.load()` must not be called before the READY event fires. If `currentSetUrl` changes before READY, the call is queued internally in the hook via a `pendingUrl` ref.

**iframe z-index in floating player** → The SC iframe inside the floating player must not intercept click events on the custom play/pause button overlay. Mitigation: the iframe is sized to zero-width/zero-height (hidden); the floating player UI is entirely custom, only the iframe exists as the audio source.

## Open Questions

- None — all decisions made during explore session. Set URLs will be added to `djSets.ts` as they are provided.
