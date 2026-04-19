## 1. BubblePack — stable height logic

- [x] 1.1 Add `allItems?: TechItem[]` prop to `BubblePack` (defaults to `items`)
- [x] 1.2 Add a second `useCirclePacker(allItems, containerRef)` call inside `BubblePack`; destructure only `cloudHeight as allCloudHeight`
- [x] 1.3 Replace `height: cloudHeight` with `height: Math.max(cloudHeight, allCloudHeight)` on the container div
- [x] 1.4 Remove `transition: 'height 400ms ease'` from the container div

## 2. WorkedWithSection — pass allItems

- [x] 2.1 Pass `allItems={techs}` to `<BubblePack>` in `WorkedWithSection.tsx`

## 3. Spec update

- [x] 3.1 Update `openspec/specs/worked-with-section/spec.md`: replace the "BubblePack container height transitions on filter change" requirement with the new "BubblePack container height is stable across filter changes" requirement

## 4. Verification

- [x] 4.1 Run `npm run build` (or `tsc`) and confirm no type errors
- [x] 4.2 Manually switch filter tabs in the browser and confirm the container height does not collapse
