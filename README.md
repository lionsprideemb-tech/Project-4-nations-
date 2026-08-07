# Project Four Nations — Beta 2 Hotfix 1

This hotfix addresses two major playtest blockers and improves character creation usability.

## Gameplay onboarding
- Added a persistent **How to Play** panel to the Life screen
- Explains that the main gameplay loop is the Freeform Action box
- Includes example actions for looking around, talking, exploring, and checking responsibilities
- Examples populate the action box but remain editable
- Clarifies that suggested actions are examples rather than a limited command menu

## Freeform Action freeze fix
The Freeform Action handler has been rewritten with:
- a guaranteed `finally` unlock for the action button
- duplicate-submit protection
- a 25-second hard watchdog for connected narration
- automatic local narration fallback when connected AI is slow or unavailable
- visible generation/recovery state
- stage-by-stage diagnostic logging
- recovery narration if an unexpected exception occurs
- persistent recent failure records in `hotfixState.freeformFailures`

The player should never need to reload the entire game because one freeform action failed.

## Character Creator suggestions
Custom typing remains available, but suggestion dropdowns were added for:
- gender identity
- pronouns
- height
- skin tone
- eye color
- hair color
- hair style
- facial features
- distinguishing marks
- clothing style
- life goals
- fears/worries
- unfinished background threads

## Expanded character variety
- Personality options expanded
- Strength options expanded
- Flaws expanded from 12 choices to more than 50
- Added emotional, interpersonal, practical, fear-based, pride-based, commitment, money, authority, cultural, and stress-response flaws

## Compatibility
- Schema Version 52
- Beta 2 remains in the migration chain
- Package version 6.10.1-beta.2
