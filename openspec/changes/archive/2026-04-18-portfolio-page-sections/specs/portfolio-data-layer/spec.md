## ADDED Requirements

### Requirement: Portfolio data layer provides typed content files
The project SHALL contain a `src/data/` directory with three TypeScript files exporting typed arrays of placeholder content. Content SHALL be decoupled from components.

#### Scenario: Data files exist and export correctly
- **WHEN** `src/data/techStack.ts`, `src/data/companies.ts`, and `src/data/openSource.ts` are imported
- **THEN** each exports a typed array with at least 3 placeholder items

### Requirement: TechItem type is defined
A `TechItem` type SHALL be defined with fields: `name: string`, `icon: IconType` (from `react-icons`), `color: string`, and `category: string`.

#### Scenario: TechItem is usable in TechStackSection
- **WHEN** a `TechItem[]` from `src/data/techStack.ts` is passed to `TechStackSection`
- **THEN** TypeScript compiles without type errors

### Requirement: Company type is defined
A `Company` type SHALL be defined with fields: `name: string`, `role: string`, `period: string`, `description: string`, and `url?: string`.

#### Scenario: Company is usable in CompaniesSection
- **WHEN** a `Company[]` from `src/data/companies.ts` is passed to `CompaniesSection`
- **THEN** TypeScript compiles without type errors

### Requirement: OSProject type is defined
An `OSProject` type SHALL be defined with fields: `name: string`, `description: string`, `url: string`, `language: string`, and `stars?: number`.

#### Scenario: OSProject is usable in OpenSourceSection
- **WHEN** an `OSProject[]` from `src/data/openSource.ts` is passed to `OpenSourceSection`
- **THEN** TypeScript compiles without type errors
