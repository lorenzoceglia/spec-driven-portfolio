## 1. Fix iframe initialisation

- [x] 1.1 In `src/components/FloatingPlayer.tsx`, import `djSets` from `../data/djSets`
- [x] 1.2 Change `initialEmbedUrl` ref to always use `getEmbedUrl(djSets[0].url)` (remove the `currentSet ?` conditional)
- [x] 1.3 Change `prevUrlRef` type to `useRef<string>(djSets[0].url)` (initialised to first set's URL)

## 2. Fix prevUrlRef useEffect

- [x] 2.1 Update the `currentSet?.url` useEffect: if `prevUrlRef.current === currentSet.url`, call `play()` and return; otherwise set `prevUrlRef.current = currentSet.url` and call `load(currentSet.url, true)`

## 3. Replace waveform block with h-1 progress line

- [x] 3.1 Remove `waveformUrl` state declaration and the oEmbed `useEffect` entirely
- [x] 3.2 Replace the `<div className="relative h-6 w-full overflow-hidden bg-slate-700">` block with:
  ```tsx
  <div className="h-1 w-full bg-slate-800">
    <div
      className="h-full bg-orange-500"
      style={{ width: `${relativePosition * 100}%`, transition: 'width 250ms linear' }}
    />
  </div>
  ```

## 4. Clean up useSoundCloudWidget

- [x] 4.1 In `src/hooks/useSoundCloudWidget.ts`, remove the blank-iframe block: `const rawSrc = …` through the closing `}` of the `if (!rawSrc)` block (lines ~98–110)

## 5. Fix scrollbar-none

- [x] 5.1 In `src/index.css`, append:
  ```css
  .scrollbar-none {
    scrollbar-width: none;
  }
  .scrollbar-none::-webkit-scrollbar {
    display: none;
  }
  ```

## 6. Verify

- [x] 6.1 Run `npm run build` — confirm 0 TypeScript errors
