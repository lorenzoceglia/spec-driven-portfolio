## ADDED Requirements

### Requirement: Tailwind CSS integration in Storybook
The system SHALL load and apply Tailwind CSS styles in Storybook so that stories can use Tailwind utility classes.

#### Scenario: Tailwind CSS is available in stories
- **WHEN** a component story uses Tailwind classes (e.g., `bg-red-500`)
- **THEN** the styles render correctly in Storybook preview

#### Scenario: Storybook preview includes Tailwind import
- **WHEN** Storybook initializes
- **THEN** `.storybook/preview.ts` includes Tailwind CSS import

### Requirement: Project styles are consistent between app and Storybook
The system SHALL use the same styling system (Tailwind) in both the main app and Storybook.

#### Scenario: Styles match between app and Storybook
- **WHEN** a component is viewed in Storybook
- **THEN** its styling matches how it appears in the main app
