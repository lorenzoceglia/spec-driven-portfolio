## 1. Fix SoundCloud Widget hook — explicit play/pause

- [x] 1.1 In `src/hooks/useSoundCloudWidget.ts`, add `play` and `pause` functions that call `widgetRef.current?.play()` and `widgetRef.current?.pause()` respectively
- [x] 1.2 Remove the `toggle` function from the hook's return value and from the `SCWidget` type definition

## 2. Fix floating player iframe — autoplay permission + use explicit play/pause

- [x] 2.1 In `src/components/FloatingPlayer.tsx`, add `allow="autoplay"` attribute to the hidden `<iframe>` element
- [x] 2.2 Update the play/pause button `onClick` handler to call `play()` when `!isPlaying` and `pause()` when `isPlaying`, replacing the old `toggle()` call

## 3. Fix layout — footer clearance when player is open

- [x] 3.1 In `src/App.tsx`, add `pb-16` to the outermost `div` className when `isFloatingOpen === true` (use a conditional class expression)

## 4. Fix hero viewport height

- [x] 4.1 In `src/components/HeroSection.tsx`, change the section's `min-h-[80vh]` to `min-h-[calc(100svh-3.25rem)]`

## 5. Add B-Side tagline

- [x] 5.1 In `src/components/BSideSection.tsx`, add a `<p>` element with the tagline `"When code stops, the music starts."` immediately below the `<h2>` B-SIDE label, styled `text-slate-400 text-sm mt-1 mb-10` (and remove `mb-10` from the `<h2>`)

## 6. Verify

- [x] 6.1 Run `npm run build` — confirm 0 TypeScript errors
