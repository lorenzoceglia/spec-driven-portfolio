## ADDED Requirements

### Requirement: Section component exists and exports correctly
The system SHALL export a Section component from `src/components/Section.tsx` that renders as a semantic HTML `<section>` element and accepts React children.

#### Scenario: Section component renders children
- **WHEN** Section component is rendered with child elements
- **THEN** child elements are displayed inside the section element

#### Scenario: Section component accepts className prop
- **WHEN** Section is passed a `className` prop
- **THEN** the className is applied to the section element along with default styles

### Requirement: Section is styled with Tailwind CSS
The system SHALL style the Section component with Tailwind CSS for proper visual presentation and spacing.

#### Scenario: Section has appropriate styling
- **WHEN** Section component renders
- **THEN** it has padding and container styling via Tailwind classes to support content layout
