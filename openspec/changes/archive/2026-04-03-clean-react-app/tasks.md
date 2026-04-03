## 1. Clean Up Project Structure

- [x] 1.1 Delete src/assets/ directory (unused images and SVGs)
- [x] 1.2 Delete public/vite.svg and public/icons.svg (demo files)
- [x] 1.3 Remove App.css from src/ (will recreate minimal version)
- [x] 1.4 Delete index.css from src/ (no global styles needed initially)
- [x] 1.5 Remove unused dependencies: @vitejs/plugin-react references if they exist

## 2. Update Configuration Files

- [x] 2.1 Edit tsconfig.json: remove strict: true, noUnusedLocals, noUnusedParameters flags
- [x] 2.2 Delete biome.json entirely (linting/formatting removed)
- [x] 2.3 Keep vite.config.ts with minimal React plugin configuration
- [x] 2.4 Verify tsconfig.json targets ES2023 with jsx: react-jsx

## 3. Update package.json

- [x] 3.1 Remove @biomejs/biome from devDependencies
- [x] 3.2 Remove ESLint packages (@eslint/js, eslint, eslint-plugin-*, typescript-eslint)
- [x] 3.3 Remove lint and format:check scripts from scripts section
- [x] 3.4 Update build script to: "tsc && vite build" (no pre-check needed)
- [x] 3.5 Verify only React, React-DOM in dependencies
- [x] 3.6 Verify only TypeScript, Vite, @types/react, @types/react-dom, @types/node, @vitejs/plugin-react in devDependencies
- [x] 3.7 Run npm install to update node_modules

## 4. Simplify React Components

- [x] 4.1 Create minimal src/App.tsx with simple counter component (10 lines max)
- [x] 4.2 Create minimal src/main.tsx with just ReactDOM.createRoot call
- [x] 4.3 Create minimal src/index.css with just body styles (or empty)
- [x] 4.4 Verify public/index.html has <div id="root"></div> and links to src/main.tsx

## 5. Test Development Environment

- [x] 5.1 Run npm run dev and verify dev server starts in under 5 seconds
- [x] 5.2 Verify browser opens and shows React app at localhost:5173
- [x] 5.3 Edit src/App.tsx and verify hot module replacement works (no full page refresh)
- [x] 5.4 Verify no TypeScript errors in dev server output
- [x] 5.5 Open browser DevTools console and verify no errors

## 6. Test Build Process

- [x] 6.1 Run npm run build and verify it completes without errors
- [x] 6.2 Verify dist/ directory is created with minified assets
- [x] 6.3 Run npm run preview and verify production build works in browser
- [x] 6.4 Verify bundle size is reasonable (< 100KB gzipped for minimal app)

## 7. Clean Up Project Files

- [x] 7.1 Update README.md: remove references to Biome, ESLint, strict TypeScript
- [x] 7.2 Keep .gitignore with node_modules, dist/ entries
- [x] 7.3 Remove any references to linting or formatting from README
- [x] 7.4 Verify all unnecessary files are removed from project root

## 8. Final Verification

- [x] 8.1 Git status shows only modified/new files (no large deletions missing)
- [x] 8.2 npm run dev works without warnings
- [x] 8.3 npm run build works without warnings or errors
- [x] 8.4 Project structure matches feature-ready-structure spec (flat, minimal)
- [x] 8.5 Developer can immediately add features in src/ without tooling friction
