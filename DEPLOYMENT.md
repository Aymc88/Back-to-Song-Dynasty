# Deployment Guide — GitHub (Aymc88) + Vercel

A step-by-step walkthrough for getting this project from your laptop to a
live URL like `https://back-to-song-dynasty.vercel.app`. Every command below
is already filled in for the GitHub account **`Aymc88`** — you can copy and
paste them directly.

> Total time: about 10 minutes. You need a free GitHub account (`Aymc88`)
> and a free Vercel account.

---

## 0. Prerequisites

Install these once. If you already have them, skip.

* **Node.js 18.17+** — download from [nodejs.org](https://nodejs.org). Pick "LTS".
* **Git** — download from [git-scm.com](https://git-scm.com/downloads).
* A **Vercel account** — sign up free at [vercel.com](https://vercel.com),
  and click **"Continue with GitHub"** so it links to the `Aymc88` account.

Verify Node and Git in a terminal (Terminal on macOS, PowerShell on Windows):

```bash
node --version    # should print v18.x.x or higher
git --version     # should print git version 2.x.x
```

---

## 1. Test the site locally first

It is much easier to fix problems on your laptop than after deploying.

```bash
cd "/Users/wiiche/Documents/Claude/Projects/Back to Shong Dynasty"
npm install
npm run dev
```

Open <http://localhost:3000>. You should see the cinnabar-red **Back to the
Song Dynasty** headline. Click through the chapters and the Artifacts page.
Stop the server with `Ctrl+C`.

Optional — also confirm the production build is clean:

```bash
npm run build
```

If `npm run build` finishes without red errors, Vercel will succeed too.

---

## 2. Create the GitHub repository

1. Sign in to GitHub as **`Aymc88`**.
2. Go straight to <https://github.com/new>.
3. Fill in:
   * **Owner:** `Aymc88`
   * **Repository name:** `back-to-song-dynasty`
   * **Description:** `World History project — a 2026 student travels to the Northern Song`
   * **Visibility:** **Public**
   * **Do NOT** check "Add a README file"
   * **Do NOT** add a `.gitignore` or license (this repo already has them)
4. Click **Create repository**.

Your repo URL will be: `https://github.com/Aymc88/back-to-song-dynasty`

---

## 3. Push this folder to GitHub

In a terminal, from inside the project folder. These commands are ready to
paste as-is:

```bash
cd "/Users/wiiche/Documents/Claude/Projects/Back to Shong Dynasty"

git init
git add .
git commit -m "Initial commit — Back to the Song Dynasty"
git branch -M main
git remote add origin https://github.com/Aymc88/back-to-song-dynasty.git
git push -u origin main
```

The first push will ask you to sign in to GitHub. The easiest way:

* Install the [GitHub CLI](https://cli.github.com), then run `gh auth login`
  once and follow the browser prompt. After that, `git push` just works.
* Or, when the browser window pops up, sign in as `Aymc88` and authorize.

Refresh `https://github.com/Aymc88/back-to-song-dynasty` — you should now see
all the project files.

> **If `git remote add origin` says "remote origin already exists":**
> run `git remote set-url origin https://github.com/Aymc88/back-to-song-dynasty.git`
> instead, then `git push -u origin main`.

---

## 4. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in **with GitHub** (as `Aymc88`).
2. On the dashboard click **Add New… → Project**.
3. Find `Aymc88/back-to-song-dynasty` in the repo list and click **Import**.
   * If you don't see it, click **Adjust GitHub App Permissions** and grant
     Vercel access to the repo.
4. Vercel auto-detects **Next.js**. The defaults are all correct:
   * Framework Preset: **Next.js**
   * Root Directory: `./`
   * Build Command: `next build` (default)
   * Output Directory: `.next` (default)
   * Install Command: `npm install` (default)
5. Click **Deploy**.
6. Wait ~60 seconds. When you see the celebration screen, click the preview
   image to open your live site.

Your live URL will be something like:

```
https://back-to-song-dynasty.vercel.app
```

(Vercel may append your username or random words if the name is taken, e.g.
`back-to-song-dynasty-aymc88.vercel.app` — any of them works.)

---

## 5. Future updates

Any time you change a file and push, Vercel redeploys automatically:

```bash
npm run dev                       # preview your changes locally
git add .
git commit -m "Describe what you changed"
git push
```

About a minute later, the live site reflects the changes.

---

## 6. Common problems & fixes

**`next: command not found` when running `npm run dev`.**
You skipped `npm install`. Run it.

**Vercel build fails with a TypeScript error.**
Run `npm run build` locally — the same error appears, so you can fix it
before pushing again.

**Push rejected: "src refspec main does not match any".**
You haven't committed yet. Run the `git commit` line first.

**Vercel can't see the repo.**
The repo must be public, or you must grant the Vercel GitHub App access:
GitHub → Settings → Applications → Vercel → Repository access.

**`npm install` fails on your network.**
Try again on a different network, or run `npm install --registry=https://registry.npmjs.org/`.

---

## 7. Submit your project

Hand your teacher two links:

* **Live site:** `https://back-to-song-dynasty.vercel.app`
* **Source code:** `https://github.com/Aymc88/back-to-song-dynasty`

The first is the project they read. The second shows the code, the
historical analysis in `data/chapters.ts`, and the MCP server in
`mcp-server/`.

Good luck. The Northern Song is rooting for you.
