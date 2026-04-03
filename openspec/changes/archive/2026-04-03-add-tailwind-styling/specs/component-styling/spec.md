## ADDED Requirements

### Requirement: Red button styling with Tailwind
The system SHALL apply red background color to the counter button using Tailwind utility classes.

#### Scenario: Button has red background
- **WHEN** the application renders
- **THEN** the button displays with a red background color (Tailwind class `bg-red-500`)

#### Scenario: Button has hover state
- **WHEN** user hovers over the button
- **THEN** the button background color changes to darker red (Tailwind class `hover:bg-red-600`)

#### Scenario: Button has proper spacing and text styling
- **WHEN** the application renders
- **THEN** the button has padding and white text color for good readability (Tailwind classes `px-4 py-2 text-white`)

### Requirement: Tailwind utilities applied to other elements
The system SHALL support applying Tailwind utility classes to any component element.

#### Scenario: Components can use Tailwind utilities
- **WHEN** a developer adds Tailwind classes to a component
- **THEN** the utilities are applied and visible in the browser

#### Scenario: Responsive Tailwind utilities work
- **WHEN** responsive Tailwind classes are applied (e.g., `md:bg-blue-500`)
- **THEN** the styles respond correctly to viewport size changes
