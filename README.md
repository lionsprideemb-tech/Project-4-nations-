# Project Four Nations — Beta 1.1

**Beta 1.1 — First Life Hotfix**

This update repairs the critical transition from the finished character creator into the playable life simulation while preserving the existing character-creation experience.

## Main fix

Character creation now commits the player character to the world before optional systems initialize.

A failure in family generation, starting connections, portrait setup, maps, exploration, career initialization, town opportunities, or another optional subsystem should no longer prevent the life from starting.

## Recovery tools

Beta Diagnostics now includes **Enter My Life**.

Use it when a completed Beta 1 character exists but onboarding failed to launch.

Beta 1.1 repairs:
- active-character reference
- hometown
- current settlement
- current location

and then attempts to open the First Morning or normal Life screen.

## Schema

**Schema Version 41**

The previous Beta 1 storage key remains in the migration chain.

## Run locally

Requires Node.js 20+.

```bash
npm start
```

Then open:

```text
http://localhost:8787
```

AI narration and image generation remain optional.

## GitHub update

See `GITHUB_UPDATE.md` for instructions for updating an existing repository.

## Beta status

This remains a testing build. Export a world backup before destructive stress tests or very long simulation jumps.
