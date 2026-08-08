# Project Four Nations — Beta 2.1

A story-driven Avatar-inspired life RPG and living-world simulation.

## Current Build

**Beta 2.1 — Player Experience & Personal Story Director**  
**Schema Version 54**

This GitHub build is intentionally simple: the playable static application is contained in a single `index.html` file.

## Uploading the Update to GitHub

1. Open your existing GitHub repository.
2. Replace the existing `index.html` with the new `index.html`.
3. Replace the existing `README.md` with this file.
4. Commit the changes.
5. If you use GitHub Pages, allow a moment for the updated site to deploy.
6. Open or refresh the GitHub Pages site and create a fresh character for the Beta 2.1 test.

## What Beta 2.1 Changes

Beta 2.1 shifts the project from primarily presenting simulation information to presenting an actual playable character experience.

### Live Scene Gameplay

Starting a character's life now creates a playable chapter scene. The game establishes:

- where the character is
- what time it is
- what is happening around them
- which NPCs are nearby
- which personal story thread currently has momentum
- contextual actions that make sense in the scene

Players can choose a suggested action or use **Do something else…** to attempt something different.

### Personal Story Director

The Story Director uses the character the player actually created as the seed for their story.

It considers information such as:

- backstory and unfinished business
- family
- important relationships
- occupation
- goals
- fears
- personality and flaws
- requested story style
- player story-focus preferences

The goal is not to place every character into the same prewritten campaign.

Instead, the Director creates unresolved questions and developing story threads based on that individual character. Player choices and the living-world simulation determine how those threads develop.

### My Story

The game tracks important developing parts of the character's life as story threads rather than traditional quests.

These can include:

- personal history
- family
- relationships
- ambitions
- fears
- career
- mysteries
- world events that become personally important

Ignoring a story does not necessarily freeze it. NPCs and the world can continue changing.

### Character Creator

Beta 2.1 includes larger premade appearance selections so players do not have to invent every physical detail themselves.

Options include:

- gender
- skin tone
- eye color
- hair color
- hairstyle
- hair texture
- facial structure
- build
- distinguishing features
- clothing style

Character creation also includes story preferences such as adventure, romance, family, career, mystery, spirits, and overall desired story type.

## Recommended Beta 2.1 Test

Create a **new character** rather than relying only on an older save.

Give the character:

1. A meaningful backstory or unfinished situation.
2. A clear goal.
3. A fear or weakness.
4. At least one important relationship or family connection.
5. A preferred kind of story.

Then start the character's life and check whether the opening feels like the beginning of **their story**, rather than a generic world-information screen.

During testing, pay particular attention to:

- whether you immediately understand what is happening
- whether contextual actions make sense
- whether you feel free to ignore the suggested actions
- whether NPCs appear to have lives of their own
- whether the world creates momentum without forcing you into a predetermined plot
- whether your backstory actually influences your developing story
- whether Freeform Action remains responsive
- response speed when connected AI is enabled
- save/reload behavior

## Single-File Build

The static client is bundled into:

`index.html`

The CSS and client-side JavaScript are embedded directly in that file. This makes GitHub updates easier because the main playable build can be replaced with one file.

## Connected AI

Do **not** place a private OpenAI API key directly inside `index.html` or commit one to a public GitHub repository.

The single-file GitHub client can run its local simulation features, but secure connected-AI functionality requires a separate server or protected API endpoint.

## Project Direction

The intended experience is:

**The world acts → a scene develops → the player responds → consequences occur → NPCs and the world continue → the character's personal story evolves.**

The world provides circumstances.  
The Story Director develops narrative momentum.  
The simulation maintains continuity and consequences.  
The player decides who their character becomes.
