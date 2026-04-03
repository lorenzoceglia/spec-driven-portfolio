## Why

We need foundational layout components to build consistent UI patterns across the application. Creating reusable Header, Footer, and Section components establishes the basic page structure, enabling faster feature development and consistent design language as the app grows.

## What Changes

- Remove Storybook's default onboarding and demo content
- Create Header component (semantic layout, accepts children)
- Create Footer component (semantic layout, accepts children)
- Create Section component (layout wrapper, accepts children)
- All components use Tailwind CSS for styling
- Create Storybook stories for each component to demonstrate usage

## Capabilities

### New Capabilities
- `header-component`: Build and export a Header component for page header layout
- `footer-component`: Build and export a Footer component for page footer layout
- `section-component`: Build and export a Section component for content sections with children support
- `component-stories`: Create Storybook stories documenting each component's usage and variations

### Modified Capabilities
<!-- None - this is purely additive -->

## Impact

- **New Files**: `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/Section.tsx`, stories in `src/stories/`
- **Removed Files**: Storybook default onboarding content
- **Component Library**: Establishes foundational pattern for future components
- **No Breaking Changes**: App code unchanged; provides new building blocks
