# dj-sets-data Specification

## Purpose
Type definitions and static data for DJ sets, providing a typed data layer for the B-Side section and floating player.

## Requirements

### Requirement: DJSet type is defined
A `DJSet` type SHALL be defined in `src/data/djSets.ts` with fields: `title: string`, `description: string`, `url: string`, `coverUrl: string`, `duration: string`, and `date: string`.

#### Scenario: DJSet is usable in BSideSection
- **WHEN** a `DJSet[]` from `src/data/djSets.ts` is passed to `BSideSection`
- **THEN** TypeScript compiles without type errors

### Requirement: djSets data file contains at least one real entry
The `djSets` export SHALL contain the HOMECOMING set as its initial entry with all fields populated.

#### Scenario: HOMECOMING entry is present
- **WHEN** `djSets` is imported
- **THEN** it contains an entry with `title: "HOMECOMING"`, a valid SoundCloud `url`, a `coverUrl` pointing to the artwork thumbnail, a `duration` string, and a `date` string

### Requirement: djSets contains four sets
The `djSets` export SHALL contain four entries: HOMECOMING, Hollow Frequencies vol.1, Hollow Frequencies vol.2, and Love Live Set — Lore & Rox, each with all `DJSet` fields populated.

#### Scenario: All four sets are present
- **WHEN** `djSets` is imported
- **THEN** it contains exactly four entries with non-empty `title`, `url`, `coverUrl`, `duration`, `date`, and `description` fields

### Requirement: embedUrl is derived at runtime from url
No `embedUrl` field SHALL be stored in `DJSet`. The embed URL SHALL be computed as `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&show_artwork=true&visual=false` wherever needed.

#### Scenario: Embed URL is constructible from url
- **WHEN** a `DJSet.url` is passed to the embed URL formula
- **THEN** a valid SoundCloud iframe embed URL is produced
