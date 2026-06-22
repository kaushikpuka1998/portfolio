# Kaushik Ghosh — Portfolio (Vite + React)

Dark, animated single-page portfolio. Runs on modern Node (18–24).

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173/portfolio/

## Edit content

Everything is in **src/data.js** — links, metrics, experience, projects, skills.
Add your resume link by setting `resumeUrl` there.

---

## Deploy to GitHub Pages

Configured to publish at **https://kaushikpuka1998.github.io/portfolio/**
(same URL as your old site). Assumes a repo named `portfolio`.

### One-time setup

```bash
npm install
```

Make this folder the root of your `portfolio` GitHub repo:

```bash
git init
git remote add origin https://github.com/kaushikpuka1998/portfolio.git
git add .
git commit -m "Switch to Vite portfolio"
git branch -M main
git push -u origin main
```

### Deploy (run every time you want to publish)

```bash
npm run deploy
```

Builds into `dist/` and pushes it to the `gh-pages` branch.

### Tell GitHub to serve it

On github.com: **Settings -> Pages -> Source: Deploy from a branch ->
Branch: `gh-pages` / root -> Save.**

Wait ~1 min, then open https://kaushikpuka1998.github.io/portfolio/

---

## If your repo name is NOT "portfolio"

Change the path in two places to `/<your-repo-name>/`:

1. `vite.config.js`  -> `base: '/<your-repo-name>/'`
2. `package.json`    -> `"homepage": ".../<your-repo-name>/"`

For a user site (`kaushikpuka1998.github.io`, no subpath): set `base: '/'`.
