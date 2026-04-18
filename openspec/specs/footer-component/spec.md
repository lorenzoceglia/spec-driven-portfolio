# footer-component Specification

## Purpose
Minimal footer with the developer's name on the left and social icon links on the right. Responsive — stacks vertically on mobile.

## Requirements

### Requirement: Footer component exists and exports correctly
The system SHALL export a Footer component from `src/components/Footer.tsx` that renders as a semantic HTML `<footer>` element. The component SHALL NOT accept a `children` prop. It SHALL accept `name: string` and `links: SocialLink[]` as props, where `SocialLink = { label: string; href: string; icon: IconType }`.

#### Scenario: Footer renders name and social links
- **WHEN** Footer is rendered with a name and 4 social links
- **THEN** the name and all 4 icon links are visible

#### Scenario: Footer does not require children
- **WHEN** Footer is rendered without any children
- **THEN** it renders correctly with no empty slots or warnings

### Requirement: Footer is styled with Tailwind CSS
The Footer SHALL have a minimal layout: name left-aligned, social icon links right-aligned (or stacked on mobile). It SHALL have a subtle top border and consistent padding matching the Header's visual weight.

#### Scenario: Footer layout on desktop
- **WHEN** Footer renders on a desktop viewport
- **THEN** the name and social links are on the same row, name left and links right

#### Scenario: Footer layout on mobile
- **WHEN** Footer renders on a mobile viewport (< 640px)
- **THEN** the name and links stack vertically and are centered

### Requirement: SocialIconLink component renders an icon link
The `SocialIconLink` component SHALL render an anchor tag with a `react-icons` icon, an accessible `aria-label`, and open in a new tab via `target="_blank"`.

#### Scenario: Link opens in new tab
- **WHEN** a SocialIconLink is rendered and clicked
- **THEN** the browser navigates to `href` in a new tab

#### Scenario: Icon is visible
- **WHEN** SocialIconLink is rendered with a valid icon
- **THEN** the icon is visible at an appropriate size

### Requirement: Footer has a Storybook story
The `Footer` and `SocialIconLink` components SHALL each have a `.stories.tsx` file with at least one story using placeholder social link data (LinkedIn, Instagram, GitHub, Mail).

#### Scenario: Stories render without errors
- **WHEN** Storybook loads the Footer and SocialIconLink stories
- **THEN** both render without errors
