# Upload Beta 1 to GitHub

## Option A — GitHub website

1. Create a new repository on GitHub.
2. Give it the name you want, for example:
   `project-four-nations`
3. Do not add another README or .gitignore during repo creation because this package already contains them.
4. Open the new repository.
5. Choose **Add file → Upload files**.
6. Upload the **contents** of this folder, not the outer ZIP itself.
7. Commit the files to `main`.

## Option B — Git command line

From inside this folder:

```bash
git init
git add .
git commit -m "Project Four Nations Beta 1"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## Important

Do not upload a real `.env` file or API key.

`.env` is already included in `.gitignore`.

The included `.env.example` is safe to commit because it contains placeholders only.
