## Why

The application currently lacks visual styling and professional appearance. Adding Tailwind CSS v4.2 provides a modern utility-first framework for rapid styling without custom CSS overhead. This enables developers to style components quickly using consistent design tokens and responsive utilities.

## What Changes

- Install Tailwind CSS v4.2 as a dev dependency
- Configure Tailwind integration with Vite and React
- Apply Tailwind utility classes to existing components
- Style the main counter button with red background using Tailwind utilities
- Update build process to include Tailwind CSS compilation

## Capabilities

### New Capabilities
- `tailwind-integration`: Configure and integrate Tailwind CSS v4.2 with Vite build system
- `component-styling`: Apply Tailwind utility classes to React components for visual design

### Modified Capabilities
<!-- None - this is purely additive -->

## Impact

- **Dependencies**: Adds `tailwindcss@4.2.x` as dev dependency
- **Build Process**: Vite build now includes Tailwind CSS processing
- **Styling Approach**: CSS is now Tailwind utilities (no custom CSS files needed)
- **Component Files**: App.tsx and index.css updated to use Tailwind
- **No Breaking Changes**: Existing functionality unchanged, only visual appearance enhanced
