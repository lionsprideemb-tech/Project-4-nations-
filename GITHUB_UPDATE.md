# Update an Existing GitHub Repo to Beta 1.1

This package is designed to replace the files from Project Four Nations Beta 1 with the Beta 1.1 First Life Hotfix.

## GitHub website method

1. Open your existing Project Four Nations repository.
2. Use **Add file → Upload files**.
3. Upload the contents of this folder.
4. When GitHub warns that files already exist, allow the new versions to replace/update them.
5. Commit with a message such as:

   `Update to Beta 1.1 First Life Hotfix`

## Important files that changed

At minimum, Beta 1.1 updates:

- `app.js`
- `index.html`
- `styles.css`
- `service-worker.js`
- `package.json`
- `README.md`
- `BETA_TEST_CHECKLIST.md`

The server files are included too so the repo remains a complete build.

## Do not upload

Do not add:
- a real `.env`
- API keys
- local JSON backup saves
- runtime-generated images from `generated-art/`

`.gitignore` is already configured for those.

## After updating

If GitHub Pages or another host is serving an older cached build, refresh/redeploy the site. Beta 1.1 uses a new service-worker cache name so the updated app should replace the Beta 1 cache after the new files are served.

## Existing Beta 1 saves

Beta 1.1 includes the Beta 1 storage key in its migration chain.

If your previous character exists but the life did not start:

1. Load the existing world.
2. Open **Beta Diagnostics**.
3. Press **Enter My Life**.

The hotfix will try to repair the active-character, hometown, settlement, and current-location handoff without forcing you to recreate the character.
