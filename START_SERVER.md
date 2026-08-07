# Start the Phase 5.2 AI Server

Project Four Nations now includes a small Node.js server that serves the game and exposes `/api/health` and `/api/gm`.

## Requirements

- Node.js 20 or newer
- An API key and a model available to your API account if you want connected AI narration

## Local setup

1. Open a terminal in this project folder.
2. Set environment variables for `OPENAI_API_KEY`, `OPENAI_MODEL`, and optionally `OPENAI_IMAGE_MODEL` (the example defaults to `gpt-image-2`).
3. Run:

```bash
npm start
```

4. Open:

```text
http://localhost:8787
```

5. In **Settings & Saves → Story Director Connection**, choose **Connected AI with local fallback** and press **Check Connection**.

The endpoint should stay `/api/gm` when the browser and server are hosted together.

## Important

Do not open `index.html` directly from the filesystem when testing connected AI. Run the included server and access the game through `http://localhost:8787`.

If the server is unavailable or the provider call fails, the game can still fall back to its local simulation narrator.

## Hosting

The server has no npm runtime dependencies. A Node-capable host can run `npm start`. Configure secrets using that host's environment-variable interface.

`ALLOWED_ORIGIN` is optional. Set it to your public game origin if you want the server to reject browser requests from other origins.


## Image generation

Phase 5.6 also uses the same server for `POST /api/image`.

Generated images are written to the local `generated-art/` directory. On a persistent host, make sure that directory is stored on persistent disk if you want artwork to remain available after redeployment.

The browser stores only URLs such as `/generated-art/portrait_pc_123.png`; it does not put image base64 data into the save file.
