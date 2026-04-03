# Storybook Setup

This directory contains Storybook configuration for the project.

## Files

- `main.ts` - Main Storybook configuration (build settings, addons, etc.)
- `preview.ts` - Preview configuration (global styles, decorators, parameters)

## Running Storybook

Start the Storybook development server:

```bash
npm run storybook
```

This opens Storybook at `http://localhost:6006`

## Building Storybook

Create a production build of Storybook:

```bash
npm run build-storybook
```

Output is created in `storybook-static/` directory.

## Creating Stories

Stories are created in the `src/stories/` directory using the `.stories.tsx` file extension.

### Component Library Pattern

This project follows a **component library pattern** where reusable UI components are created in `src/components/` and documented in Storybook. Each component should:

1. **Accept children** via `React.ReactNode` prop for composition
2. **Be semantic** - use appropriate HTML elements (`<header>`, `<footer>`, `<section>`, etc.)
3. **Support customization** via optional `className` prop
4. **Be styled with Tailwind CSS** - no CSS modules or external stylesheets
5. **Have TypeScript interfaces** - document props clearly
6. **Include JSDoc comments** - explain the component's purpose

### Base Components

The project includes three foundational layout components:

- **Header** (`src/components/Header.tsx`) - Top page header with dark background
- **Footer** (`src/components/Footer.tsx`) - Bottom page footer with dark background
- **Section** (`src/components/Section.tsx`) - Content section with padding and max-width container

See their Storybook stories for usage examples.

### Story File Structure

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Click me',
    onClick: () => {},
  },
};
```

## Styling

Storybook inherits Tailwind CSS styles from the main app. Any Tailwind utilities (e.g., `bg-red-500`, `text-white`) will be available in stories.

To use Tailwind in your component stories, apply classes directly to elements or pass them as props.

## Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [React in Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
