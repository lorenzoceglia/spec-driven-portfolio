## 1. Data — add confidence field to TechItem

- [x] 1.1 In `src/data/techStack.ts`, add `confidence: 1 | 2 | 3 | 4 | 5` to the `TechItem` type
- [x] 1.2 Add `confidence` values to all 27 entries

## 2. Hook — useCirclePacker

- [x] 2.1 Create `src/hooks/useCirclePacker.ts`
- [x] 2.2 Implement the confidence → radius mapping
- [x] 2.3 Implement spiral placement
- [x] 2.4 Translate positions so bounding box is centred
- [x] 2.5 Add ResizeObserver

## 3. Component — FloatingBubble

- [x] 3.1 Create `src/components/FloatingBubble.tsx`
- [x] 3.2 Render a `position: absolute` div sized `r*2 × r*2`
- [x] 3.3 Apply rest/hover styles
- [x] 3.4 Render icon at correct size
- [x] 3.5 Render label inside bubble when `r >= 30`
- [x] 3.6 Render hover tooltip when `r < 30` and hovered
- [x] 3.7 Apply float animation

## 4. CSS — floatBubble keyframe

- [x] 4.1 In `src/index.css`, append the `@keyframes floatBubble` animation

## 5. Component — BubblePack

- [x] 5.1 Create `src/components/BubblePack.tsx`
- [x] 5.2 Positioned container with dynamic height + transition
- [x] 5.3 Render each packed circle as `<FloatingBubble>`
- [x] 5.4 Implement FLIP on `items` change via `useLayoutEffect`
- [x] 5.5 Track exiting bubbles (scale to 0 + opacity 0, remove after 200ms)
- [x] 5.6 Set `isTransitioning = true` when tab changes, reset after 400ms

## 6. Component — WorkedWithSection

- [x] 6.1 Create `src/components/WorkedWithSection.tsx` — props: `techs: TechItem[]`
- [x] 6.2 Render the section with `useIntersectionObserver` fade-in (same pattern as other sections)
- [x] 6.3 Section heading: `"I worked with"` using the standard `text-xs font-semibold tracking-widest text-slate-400 uppercase mb-10` style
- [x] 6.4 Derive tabs from `techs` data: `['All', ...unique categories]`; default active tab = `'All'`
- [x] 6.5 Filter `techs` by `activeTab`, pass filtered array to `<BubblePack>`

## 7. App wiring

- [x] 7.1 In `src/App.tsx`, replace `import { TechStackSection }` with `import { WorkedWithSection }` and update the JSX (`<TechStackSection techs={techStack} />` → `<WorkedWithSection techs={techStack} />`)

## 8. Cleanup

- [x] 8.1 Delete `src/components/TechBadge.tsx`
- [x] 8.2 Delete `src/stories/TechBadge.stories.tsx`
- [x] 8.3 Delete `src/components/TechStackSection.tsx`
- [x] 8.4 Delete `src/stories/TechStackSection.stories.tsx`

## 9. Storybook stories

- [x] 9.1 Create `src/stories/FloatingBubble.stories.tsx` — stories: `LargeConfidence5` (TypeScript, r=48), `SmallConfidence1` (jQuery, r=17), `HoverState`
- [x] 9.2 Create `src/stories/BubblePack.stories.tsx` — stories: `AllItems` (full techStack), `FrontendOnly` (filtered)
- [x] 9.3 Create `src/stories/WorkedWithSection.stories.tsx` — story: `Default` (full techStack)

## 10. Verify

- [x] 10.1 Run `npm run build` — confirm 0 TypeScript errors
