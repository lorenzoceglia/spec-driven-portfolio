## 1. Quick Tweaks

- [ ] 1.1 Update `src/App.tsx` — change `role` prop to `"Software Engineer"` and update `bio` to replace "Frontend engineer" with "Software engineer"
- [ ] 1.2 Update `src/components/TechStackSection.tsx` — seed `useState` with `'Frontend'` instead of `availableTabs[0]`

## 2. Data Layer

- [ ] 2.1 Create `src/data/djSets.ts` — define `DJSet` type (`title`, `description`, `url`, `coverUrl`, `duration`, `date`) and export `djSets` array with the HOMECOMING entry (`url: "https://soundcloud.com/lorenzo-ceglia/homecoming"`, `coverUrl: "https://i1.sndcdn.com/artworks-4OcKXUkHc5o4EDgL-VTFKNg-t500x500.jpg"`, `duration: "~1h 05m"`, `date` to be confirmed)

## 3. useSoundCloudWidget Hook

- [ ] 3.1 Create `src/hooks/useSoundCloudWidget.ts` — dynamically appends the SC Widget API script (`https://w.soundcloud.com/player/api.js`) once; initialises `SC.Widget(iframeRef.current)` after script load; binds `READY` event before any other calls; exposes `load(url, autoPlay)`, `toggle()`, `isPlaying: boolean`, `trackTitle: string`
- [ ] 3.2 Add a `pendingUrl` ref inside the hook to queue a `load()` call that arrives before `READY` fires — call it immediately after READY if pending

## 4. FloatingPlayer Component

- [ ] 4.1 Create `src/components/FloatingPlayer.tsx` — accepts `isOpen: boolean`, `currentSet: DJSet | null`, `onToggle: () => void`; renders `fixed bottom-0` full-width bar with `slate-900` bg; contains hidden zero-size `<iframe>` (Widget API source); calls `useSoundCloudWidget`; slides in/out with `translateY` CSS transition
- [ ] 4.2 Render cover thumbnail (48×48px), set title, play/pause button (icon-only), and a SoundCloud icon-link to `currentSet.url`
- [ ] 4.3 Create `src/stories/FloatingPlayer.stories.tsx` — one story with `isOpen=true` and HOMECOMING set as `currentSet`; mock `onToggle`

## 5. Identity Chips in HeroSection

- [ ] 5.1 Update `src/components/HeroSection.tsx` — add `chips?: { label: string; href?: string }[]` prop; render chips below bio as pill `<a>` or `<button>` elements with stagger delays 450ms (chip 0) and 600ms (chip 1)
- [ ] 5.2 Update `src/stories/HeroSection.stories.tsx` — add `chips` arg with `[{ label: '</> Code by day' }, { label: '🎧 B-Side', href: '#b-side' }]`

## 6. SetCard Component

- [ ] 6.1 Create `src/components/SetCard.tsx` — accepts `set: DJSet`, `isActive: boolean`, `onPlay: (url: string) => void`; renders cover image, title, duration, date; applies a visible ring/border when `isActive` is true; entire card is clickable and calls `onPlay(set.url)`
- [ ] 6.2 Create `src/stories/SetCard.stories.tsx` — two stories: `Default` (inactive) and `NowPlaying` (active ring)

## 7. BSideSection Component

- [ ] 7.1 Create `src/components/BSideSection.tsx` — accepts `sets: DJSet[]`, `currentSetUrl: string | null`, `onPlay: (url: string) => void`; renders `id="b-side"` wrapper with `bg-slate-900`; section label in light muted text; responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`); renders `SetCard` for each set, passing `isActive` and `onPlay`; scroll-reveal animation on entrance
- [ ] 7.2 Create `src/stories/BSideSection.stories.tsx` — story with HOMECOMING set, one `currentSetUrl` matching to show active state

## 8. App Wiring

- [ ] 8.1 Update `src/App.tsx` — add `const [currentSetUrl, setCurrentSetUrl] = useState<string | null>(null)` and `const [isFloatingOpen, setIsFloatingOpen] = useState(false)`
- [ ] 8.2 Attach `useIntersectionObserver` to `HeroSection` (expose a `ref` prop or wrap in a `<div ref>`) — when hero `isVisible` becomes `false`, call `setIsFloatingOpen(true)`; when it becomes `true` again, call `setIsFloatingOpen(false)`
- [ ] 8.3 Add `<BSideSection sets={djSets} currentSetUrl={currentSetUrl} onPlay={setCurrentSetUrl} />` after `OpenSourceSection`
- [ ] 8.4 Add `<FloatingPlayer isOpen={isFloatingOpen} currentSet={djSets.find(s => s.url === currentSetUrl) ?? djSets[0]} onToggle={...} />` — place it outside `<main>` so it overlays all content
- [ ] 8.5 Pass `chips={[{ label: '</> Code by day' }, { label: '🎧 B-Side', href: '#b-side' }]}` to `HeroSection`

## 9. Build & Verify

- [ ] 9.1 Run `npm run build` — fix any TypeScript errors
- [ ] 9.2 Run `npm run build-storybook` — verify all new and updated stories compile without errors
