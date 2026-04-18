## Why

The portfolio presents Lorenzo as a developer, but his identity is genuinely dual — software engineer and DJ. The current hero is visually sparse and says nothing about the music side. Adding identity chips to the hero and a dedicated B-Side section with an ambient floating player makes the portfolio more distinctive, more personal, and more memorable.

## What Changes

- Role updated from "Frontend Engineer" to "Software Engineer" across the site
- Bio updated to reflect new role
- `TechStackSection` default tab changes from "All" to "Frontend" to avoid an overwhelming initial view
- `HeroSection` gains two identity chip tags: "Code by day" and "🎧 B-Side" (the latter anchors to the new section)
- New `BSideSection` component: dark (`slate-900`) section listing all DJ sets as cards with cover art, title, duration, and date
- New `FloatingPlayer` component: sticky bottom bar that appears when the hero scrolls out of view, wrapping a SoundCloud iframe controlled via the Widget API
- New `useSoundCloudWidget` hook encapsulating the SoundCloud Widget API lifecycle
- New `src/data/djSets.ts` data file with one initial entry (HOMECOMING)
- Clicking a set card loads it into the floating player; a "Now Playing" ring shows the active card
- App lifts `currentSetUrl` and `isFloatingOpen` state to wire the two new components together

## Capabilities

### New Capabilities

- `identity-chips`: Dual identity pill tags rendered inside `HeroSection` below the bio, with scroll-anchor behaviour
- `bside-section`: Dark-themed section displaying DJ set cards with cover, title, duration, and date
- `floating-player`: Sticky SoundCloud player persisting across scroll, driven by SoundCloud Widget API
- `dj-sets-data`: Typed data file for DJ sets; initial entry is HOMECOMING

### Modified Capabilities

- `hero-section`: Adds `identityChips` content below bio; stagger animation extended to cover chips
- `tech-stack-section`: Default active tab changes from "All" to "Frontend"

## Non-goals

- SoundCloud API integration (no API key — all data is hardcoded in the data file)
- Custom audio controls (seek bar interaction, volume) — playback only
- Automatic fetching of new sets from SoundCloud
- Animated waveform visualiser
- Mobile-specific floating player layout variations beyond responsive sizing

## Impact

- `src/App.tsx`: lifts two new state values, adds `BSideSection` and `FloatingPlayer`, updates role and bio
- `src/components/HeroSection.tsx`: receives and renders identity chips
- `src/components/TechStackSection.tsx`: seeds `useState` with `'Frontend'` instead of `availableTabs[0]`
- New files: `IdentityChips.tsx`, `BSideSection.tsx`, `SetCard.tsx`, `FloatingPlayer.tsx`, `useSoundCloudWidget.ts`, `djSets.ts`
- New story files for every new component
- No new npm dependencies (SoundCloud Widget API is loaded via a `<script>` tag at runtime)
