# Beta 1.1 Release Notes

## Critical fix
- Fixed Character Creation → First Morning / Life handoff.

## Reliability changes
- Player record is saved before optional generated content.
- Starting family or friend failures are isolated.
- Hometown initialization has a recovery fallback.
- Current settlement/location are repaired before entering play.
- First Morning can fall back to the Life screen.
- Added **Enter My Life** recovery controls.
- Handoff warnings are stored in `betaState.lastLifeHandoff`.

## Compatibility
- Schema 41
- Beta 1 storage remains part of migration.
