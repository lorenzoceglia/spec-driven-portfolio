# lorenzo_ceglia

A minimal React TypeScript application for rapid feature development.

## Project Description

`lorenzo_ceglia` is a clean, minimal React TypeScript application configured with:
- **Vite** - Fast development server and build tool with Hot Module Replacement (HMR)
- **TypeScript** - Loose mode for fast iteration (type hints available in IDE)
- **React 19** - Latest stable React with Hooks support

## Getting Started

### Prerequisites
- Node.js 14.18+ (check with `node --version`)
- npm (typically included with Node.js)

### Installation

```bash
# Install dependencies
npm install
```

## Available Scripts

### Development Server
```bash
npm run dev
```
Starts the Vite development server at `http://localhost:5173`. Changes to files will automatically reload in the browser.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory. Outputs minified static assets ready for deployment.

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build. Useful for testing the build before deployment.

## Project Structure

```
lorenzo_ceglia/
├── public/                  # Static assets
├── src/                     # Source code
│   ├── App.tsx             # Main React component
│   ├── index.css           # Global styles
│   └── main.tsx            # Application entry point
├── index.html              # HTML entry point
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── .gitignore              # Git ignore rules
```

## Development Workflow

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Edit Code** - Changes in `src/` will hot-reload in the browser

3. **Build for Production**
   ```bash
   npm run build
   ```

## TypeScript Configuration

This project uses TypeScript in loose mode for faster iteration during development. Type hints are available in your IDE without strict enforcement. To enable strict mode, update `tsconfig.app.json`:

```json
"strict": true,
"noUnusedLocals": true,
"noUnusedParameters": true
```

## Browser Support

- Modern browsers with ES2023 support
- Vite automatically handles JSX and React

## Performance

- **HMR**: Sub-second refreshes during development
- **Build Size**: ~60KB gzipped for minimal app
- **Code Splitting**: Automatic via Vite

## Adding Features

To add new features to this app:

1. Create new components in `src/`
2. Import and use them in `App.tsx` or create a component hierarchy
3. Changes will hot-reload automatically in development
4. Run `npm run build` before deploying

## License

This is a project scaffold. Feel free to use it as a starting point for your React applications.
