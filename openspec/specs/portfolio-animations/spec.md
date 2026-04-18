# portfolio-animations Specification

## Purpose
Defines the animation system for the portfolio: scroll-triggered fade-in for sections, hover lift for cards, and brand color reveal for tech badges. All animations use CSS transitions and IntersectionObserver — no animation library.

## Requirements

### Requirement: Sections fade in on scroll via IntersectionObserver
Each portfolio section (HeroSection, TechStackSection, CompaniesSection, OpenSourceSection) SHALL use an `useIntersectionObserver` hook to trigger a fade-in + slide-up animation when the section enters the viewport.

#### Scenario: Section is invisible before entering viewport
- **WHEN** a section is below the visible viewport
- **THEN** it is rendered with `opacity: 0` and a slight downward `translateY` offset

#### Scenario: Section animates when entering viewport
- **WHEN** a section scrolls into view
- **THEN** it transitions to `opacity: 1` and `translateY(0)` using a CSS transition

#### Scenario: Animation defaults to visible in Storybook
- **WHEN** the component is rendered in Storybook (no scroll context)
- **THEN** the section is visible (not hidden), so stories are not broken

### Requirement: Cards have a hover lift effect
All `Card` components used in CompaniesSection and OpenSourceSection SHALL apply a `translateY(-4px)` and box-shadow increase on hover using CSS transitions.

#### Scenario: Card lifts on hover
- **WHEN** the user hovers over a card
- **THEN** the card visually lifts with a smooth transition (200-300ms ease)

### Requirement: useIntersectionObserver hook is reusable
A `useIntersectionObserver` hook SHALL be created in `src/hooks/useIntersectionObserver.ts`. It SHALL accept a `ref` and `options` and return a boolean `isVisible`.

#### Scenario: Hook returns false initially
- **WHEN** the hook is initialized with an element not yet in the viewport
- **THEN** `isVisible` is `false`

#### Scenario: Hook returns true when element enters viewport
- **WHEN** the observed element enters the viewport
- **THEN** `isVisible` updates to `true`
