## 1. Section Background

- [x] 1.1 Add `bg-white` to the `<section>` element in `WorkedWithSection.tsx`
- [x] 1.2 Verify no adjacent section bleeds into the white band visually (smoke-test in dev server)

## 2. BubbleTooltip Component

- [x] 2.1 Create `src/components/BubbleTooltip.tsx` — portal tooltip rendered via `ReactDOM.createPortal` into `document.body`
- [x] 2.2 Accept props: `name: string`, `anchorRect: DOMRect`, `onClose: () => void`
- [x] 2.3 Compute position: centered above anchor (`anchorRect.top + scrollY - tooltipHeight - 8`), clamp left to viewport bounds
- [x] 2.4 Apply `z-index: 9999`, white background, border, shadow, `text-sm` name label
- [x] 2.5 Create `src/stories/BubbleTooltip.stories.tsx` with at least one story

## 3. Click State in BubblePack

- [x] 3.1 Add `activeId: string | null` state to `BubblePack`
- [x] 3.2 Clear `activeId` in `useLayoutEffect` whenever `items` prop changes (tab switch)
- [x] 3.3 Add document-level `pointerdown` listener to clear `activeId` on outside click — attach in `useEffect`, detach on cleanup
- [x] 3.4 Pass `isActive={circle.id === activeId}` and `onClick={() => setActiveId(id => id === circle.id ? null : circle.id)}` to each `FloatingBubble`
- [x] 3.5 Render `<BubbleTooltip>` inside BubblePack when `activeId` is set — retrieve anchor rect from `bubbleRefs.current.get(activeId)?.getBoundingClientRect()`

## 4. FloatingBubble Click Wiring

- [x] 4.1 Add `isActive: boolean` and `onClick: () => void` props to `FloatingBubble`
- [x] 4.2 Attach `onClick` handler to the outer wrapper `<div>`
- [x] 4.3 Remove existing hover-only tooltip (`!showLabelInside && hovered` block) — tooltip is now always portal-based

## 5. FilterTabs Orientation Prop

- [x] 5.1 Add `orientation?: 'horizontal' | 'vertical'` prop to `FilterTabs` (default `'horizontal'`)
- [x] 5.2 In vertical mode: container uses `flex-col w-36`, each button uses `w-full text-left`
- [x] 5.3 In horizontal mode: existing styles unchanged
- [x] 5.4 Update `FilterTabs.stories.tsx` to add a `Vertical` story

## 6. Two-Column Desktop Layout

- [x] 6.1 Wrap `FilterTabs` and `BubblePack` in a `flex flex-col md:flex-row gap-8` container inside `WorkedWithSection`
- [x] 6.2 Pass `orientation="vertical"` to `FilterTabs` (Tailwind cannot conditionally pass props — use a JS breakpoint or always vertical; see note below)
- [x] 6.3 Give `FilterTabs` wrapper `md:w-36 md:flex-shrink-0` and `BubblePack` wrapper `flex-1 min-w-0`
- [x] 6.4 Verify `ResizeObserver` in `useCirclePacker` repacks correctly at both breakpoints

## 7. Orientation Prop — Responsive Variant

> Note: since Tailwind cannot conditionally pass React props, `FilterTabs` must handle responsive orientation internally OR `WorkedWithSection` uses a `useMediaQuery` / window resize hook to pass the correct prop. Preferred: handle inside `FilterTabs` — accept `orientation` but also apply `md:flex-col` classes so the layout is purely CSS-driven without a JS media query.

- [x] 7.1 Implement CSS-only responsive orientation in `FilterTabs`: use `flex-row md:flex-col` on the container so no JS breakpoint is needed; `WorkedWithSection` can always pass `orientation="vertical"` (used only as a hint for button width classes which are overridden at breakpoint)
- [x] 7.2 Ensure pills are horizontally scrollable in row mode and full-width in column mode

## 8. Build & Verification

- [x] 8.1 Run `npm run build` — zero TypeScript errors
- [x] 8.2 Smoke-test in dev server: white bg, click tooltip appears above filter bar, two-column desktop layout, single-column mobile layout
- [x] 8.3 Verify FLIP animation still works correctly after filter tab changes with tooltip open
