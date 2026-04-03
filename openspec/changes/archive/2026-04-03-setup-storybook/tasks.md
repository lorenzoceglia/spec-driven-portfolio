## 1. Install Storybook

- [x] 1.1 Run `npx storybook@latest init` in project root
- [x] 1.2 Select React when prompted for UI framework
- [x] 1.3 Select TypeScript when prompted for language
- [x] 1.4 Select Vite when prompted for build system
- [x] 1.5 Verify Storybook files created: `.storybook/` directory exists
- [x] 1.6 Run npm install to ensure all dependencies resolved

## 2. Configure Storybook for Tailwind CSS

- [x] 2.1 Open `.storybook/preview.ts`
- [x] 2.2 Add `import "../src/index.css"` at the top to load Tailwind CSS
- [x] 2.3 Verify no TypeScript errors in preview.ts

## 3. Remove Example Content

- [x] 3.1 Remove auto-generated example stories from `.storybook/` if any exist
- [x] 3.2 Delete any example components Storybook might have created

## 4. Create Project Structure

- [x] 4.1 Create `src/stories/` directory (for future story files)
- [x] 4.2 Create `.storybook/README.md` with basic Storybook instructions for developers

## 5. Verify Storybook Setup

- [x] 5.1 Run `npm run storybook` and verify it starts without errors
- [x] 5.2 Verify Storybook UI opens at localhost:6006
- [x] 5.3 Check that Storybook loads with no errors in console
- [x] 5.4 Verify Tailwind CSS is loaded (inspect DevTools, check for Tailwind classes)
- [x] 5.5 Stop Storybook dev server (Ctrl+C)

## 6. Verify Production Build

- [x] 6.1 Run `npm run build-storybook` and verify it completes without errors
- [x] 6.2 Verify `storybook-static/` directory is created with built files
- [x] 6.3 Check that build contains index.html and assets

## 7. Update Project Documentation

- [x] 7.1 Update main README.md to document Storybook scripts and workflow
- [x] 7.2 Document how to run Storybook (`npm run storybook`)
- [x] 7.3 Document how to build Storybook (`npm run build-storybook`)
- [x] 7.4 Add note about creating stories in `src/stories/` directory

## 8. Final Verification

- [x] 8.1 Verify package.json has `storybook` and `build-storybook` scripts
- [x] 8.2 Verify no build warnings related to Storybook
- [x] 8.3 Confirm TypeScript files compile without errors
- [x] 8.4 Ready for future component stories to be added
