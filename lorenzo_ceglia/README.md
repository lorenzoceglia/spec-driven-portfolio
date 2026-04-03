# lorenzo_ceglia — Portfolio Website

This is my **personal portfolio website** built as a practical exploration of **spec-driven development** using the **OpenSpec framework** and **OpenCode** automation.

## About This Project

`lorenzo_ceglia` is not just a React application—it's a **test case for spec-driven development**. Rather than building features ad-hoc, I:

1. **Spec first** — Write detailed proposals and designs using OpenSpec
2. **Implement with guidance** — Use AI-generated specs to guide development
3. **Archive decisions** — Keep historical record of why features exist
4. **Iterate systematically** — Learn from the spec-driven workflow

This portfolio demonstrates how modern development practices (AI, specifications, component-driven design) can work together cohesively.

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

### Development

```bash
npm run dev
```

Starts the dev server at `http://localhost:5173` with hot-reload.

### Storybook (Component Development)

```bash
npm run storybook
```

View components in isolation at `http://localhost:6006`.

### Production Build

```bash
npm run build
```

### Code Quality

```bash
npm run lint      # Check with Biome
npm run format    # Format with Biome
```

## Tech Stack

- **React 19** + **TypeScript** — Component-driven UI
- **Vite** — Lightning-fast development and builds
- **Tailwind CSS 4.2.2** — Utility-first styling
- **Storybook 10.3.4** — Component documentation and isolation
- **Biome** — Code quality (no ESLint/Prettier)
- **OpenSpec** — Spec-driven development framework
- **OpenCode** — AI-powered command automation

## Project Structure

```
src/
├── stories/               # Component stories (Storybook)
├── components/            # Reusable components
├── App.tsx               # Main application
├── index.css             # Global styles (Tailwind)
└── main.tsx              # Entry point
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

## Component Development with Storybook

Storybook provides an isolated environment for developing and testing components.

### Creating a Story

Create a file in `src/stories/` with the `.stories.tsx` extension:

```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from "../MyComponent";

const meta = {
  component: MyComponent,
  title: "MyComponent",
  tags: ["autodocs"],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    /* component props */
  },
};
```

### Running Storybook

```bash
npm run storybook
```

Stories will use Tailwind CSS utilities automatically. For more info, see `.storybook/README.md`.
