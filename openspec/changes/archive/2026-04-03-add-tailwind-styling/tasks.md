## 1. Tailwind CSS Installation

- [x] 1.1 Install tailwindcss@4.2 as dev dependency via npm
- [x] 1.2 Verify tailwindcss appears in package.json devDependencies
- [x] 1.3 Run npm install to update node_modules

## 2. Configure Tailwind CSS Import

- [x] 2.1 Open src/index.css
- [x] 2.2 Add `@import "tailwindcss";` at the top of the file
- [x] 2.3 Verify no syntax errors in index.css

## 3. Style the Counter Button

- [x] 3.1 Open src/App.tsx
- [x] 3.2 Add Tailwind classes to button element: `className="bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded"`
- [x] 3.3 Verify button element has className prop instead of class attribute

## 4. Test Development Environment

- [x] 4.1 Run npm run dev and verify dev server starts
- [x] 4.2 Open browser at localhost:5173 and verify button appears red
- [x] 4.3 Hover over button and verify darker red on hover
- [x] 4.4 Open DevTools and inspect button to confirm Tailwind classes are applied
- [x] 4.5 Verify no TypeScript or console errors

## 5. Test Production Build

- [x] 5.1 Run npm run build and verify build completes without errors
- [x] 5.2 Check dist/ directory exists with bundled files
- [x] 5.3 Run npm run preview and verify button is red in production build
- [x] 5.4 Verify CSS is bundled (not missing from production)

## 6. Final Verification

- [x] 6.1 Verify Tailwind CSS loads correctly in both dev and production
- [x] 6.2 Confirm button styling matches design (red background, white text, proper spacing)
- [x] 6.3 Test responsive behavior (resize browser and verify styles persist)
- [x] 6.4 Verify no build warnings related to Tailwind
