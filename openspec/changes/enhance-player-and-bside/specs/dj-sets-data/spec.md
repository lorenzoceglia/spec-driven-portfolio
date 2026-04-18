## ADDED Requirements

### Requirement: djSets contains four sets
The `djSets` export SHALL contain four entries: HOMECOMING, Hollow Frequencies vol.1, Hollow Frequencies vol.2, and Love Live Set — Lore & Rox, each with all `DJSet` fields populated.

#### Scenario: All four sets are present
- **WHEN** `djSets` is imported
- **THEN** it contains exactly four entries with non-empty `title`, `url`, `coverUrl`, `duration`, `date`, and `description` fields
