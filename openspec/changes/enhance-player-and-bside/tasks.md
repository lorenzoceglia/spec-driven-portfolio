## 1. Data — add three new DJ sets

- [x] 1.1 In `src/data/djSets.ts` add entry: `title: 'Hollow Frequencies vol.1'`, `url: 'https://soundcloud.com/lorenzo-ceglia/hollow-frequencies-vol1'`, `coverUrl: 'https://i1.sndcdn.com/artworks-fyie8D3yU1hSpnpQ-JoLX7g-t500x500.jpg'`, `duration: '1h 4m'`, `date: '2025'`, description from spec
- [x] 1.2 Add entry: `title: 'Hollow Frequencies vol.2'`, `url: 'https://soundcloud.com/lorenzo-ceglia/hollow-frequencies-vol2'`, `coverUrl: 'https://i1.sndcdn.com/artworks-qyTygCbuR2v2zL0C-v8xJvQ-t500x500.jpg'`, `duration: '55m'`, `date: '2026'`, description from spec
- [x] 1.3 Add entry: `title: 'Love Live Set — Lore & Rox'`, `url: 'https://soundcloud.com/lorenzo-ceglia/love-live-set-lore-rox'`, `coverUrl: 'https://i1.sndcdn.com/artworks-xTyCirQiUthuX14g-8klyzQ-t500x500.jpg'`, `duration: '1h 2m'`, `date: '2025'`, description from spec

## 2. Fix SetCard click bug

- [x] 2.1 In `src/App.tsx` change `djSets.find((s) => s.url === currentSetUrl) ?? djSets[0]` to `djSets.find((s) => s.url === currentSetUrl) ?? null` so `currentSet` starts as `null`

## 3. Hook — expose relativePosition via PLAY_PROGRESS

- [x] 3.1 In `src/hooks/useSoundCloudWidget.ts` add `const [relativePosition, setRelativePosition] = useState(0)`
- [x] 3.2 Bind `window.SC.Widget.Events.PLAY_PROGRESS` in the widget init block: callback receives `{ relativePosition: number }` — call `setRelativePosition(e.relativePosition)` (add type `PLAY_PROGRESS` to event callback signature)
- [x] 3.3 Reset `relativePosition` to `0` when `load()` is called
- [x] 3.4 Export `relativePosition` from the hook return value

## 4. FloatingPlayer — updated props, idle state, waveform, navigation

- [x] 4.1 Update `FloatingPlayerProps` type: add `sets: DJSet[]` and `onSetChange: (url: string) => void`; make `currentSet: DJSet | null`
- [x] 4.2 Update `initialEmbedUrl` ref: use `''` when `currentSet` is `null` (iframe `src=""` on idle)
- [x] 4.3 Add waveform fetch: `useEffect` on `currentSet?.url` — fetch `https://soundcloud.com/oembed?url=${encodeURIComponent(url)}&format=json`, extract `waveform_url`, store in `waveformUrl` state; reset to `null` on set change
- [x] 4.4 Render waveform area: a `relative h-6 w-full rounded overflow-hidden bg-slate-700` container; when `waveformUrl` is set, show `<img src={waveformUrl} className="absolute inset-0 w-full h-full object-cover opacity-40" />`; orange `<div>` overlay `absolute left-0 top-0 h-full bg-orange-500 opacity-70` with `width: relativePosition * 100%` and `transition: width 250ms linear`
- [x] 4.5 Add Prev/Next buttons: compute `currentIndex = sets.findIndex(s => s.url === currentSet?.url)`; Prev calls `onSetChange(sets[currentIndex - 1].url)`, disabled when `currentIndex <= 0`; Next calls `onSetChange(sets[currentIndex + 1].url)`, disabled when `currentIndex >= sets.length - 1`
- [x] 4.6 Add idle state: when `currentSet` is `null`, show `"Select a set to play"` placeholder text and disable all controls
- [x] 4.7 Reset `prevUrlRef` logic: when `currentSet` changes from `null` to a URL, always call `load(url, true)` — update the `useEffect` guard accordingly

## 5. Wire up in App.tsx

- [x] 5.1 Pass `sets={djSets}` and `onSetChange={setCurrentSetUrl}` to `<FloatingPlayer>`

## 6. Verify

- [x] 6.1 Run `npm run build` — confirm 0 TypeScript errors
