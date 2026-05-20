# Back to the Song Dynasty

> A 10th-grade English-language **World History** project, built as a Next.js
> narrative website with a companion **MCP Server Agents** module.

A 2026 American high-school student wakes up in **Bianjing** (汴京) — the
capital of the **Northern Song** dynasty under **Emperor Huizong** in the
**Xuanhe era** (宣和年间, 1119–1125 CE). This is the city Zhang Zeduan painted
in *Along the River During the Qingming Festival* (清明上河图). The student is
carrying three objects from 2026. In seven years, the Jurchen Jin will sack
the city in the Jingkang Incident (靖康之耻) — unless those three artifacts
change everything.

This repository contains the full eight-chapter story, a reference page on the
three artifacts, a historical-analysis "about" page, and a Python **MCP
server** that lets Claude role-play characters from the story.

* **GitHub:** `https://github.com/Aymc88/back-to-song-dynasty`
* **Live site (Vercel):** `https://back-to-song-dynasty.vercel.app`

---

## The three artifacts

| | Artifact | What it is | Why it works in 1120 |
| --- | --- | --- | --- |
| 霉 | **The Vial** | A sealed culture of *Penicillium chrysogenum* + germ-theory handbook | Song doctors already fermented preparations and used mold on wounds |
| 火 | **The Manual** | Modern black-powder formula (75/15/10) + matchlock musket + cannon designs | Song alchemists had centuries of saltpeter experience and imperial bronze foundries |
| 薯 | **The Tuber** | A sack of seed potatoes (*Solanum tuberosum*) + planting handbook | The Song farmed marginal upland intensively and could adopt the crop in one season; more food means more people |

Read the full analysis on the **/artifacts** page of the site.

---

## Tech stack

* **Frontend:** Next.js 14 (App Router) · TypeScript · Tailwind CSS
* **Hosting:** Vercel (free tier — perfect for student projects)
* **MCP server:** Python · `mcp[cli]` SDK
* **No database, no auth, no API keys** — the whole site is statically generated.

---

## Run locally

You need **Node.js 18.17+** (or 20+).

```bash
npm install      # install dependencies
npm run dev      # start the dev server
# open http://localhost:3000
```

Production build (the same one Vercel runs):

```bash
npm run build
npm start
```

---

## Deploy to Vercel — quick version

> See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for the full illustrated
> walkthrough. The commands below already use the GitHub account `Aymc88`.

1. **Create an empty GitHub repo** named `back-to-song-dynasty` at
   <https://github.com/new> (public; do NOT add a README/.gitignore/license —
   this repo already has them).
2. **Push this folder:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Back to the Song Dynasty"
   git branch -M main
   git remote add origin https://github.com/Aymc88/back-to-song-dynasty.git
   git push -u origin main
   ```
3. **Go to [vercel.com](https://vercel.com)**, sign in with GitHub, click
   **Add New → Project**, import `Aymc88/back-to-song-dynasty`, and click
   **Deploy**. Vercel auto-detects Next.js — no configuration needed.
4. ~60 seconds later you get a live URL like
   `https://back-to-song-dynasty.vercel.app`.

Every future `git push` to `main` redeploys automatically.

---

## The MCP Server (the "Agents" half)

The repo includes a **Model Context Protocol** server at
[`mcp-server/server.py`](./mcp-server/server.py) that exposes the story's
characters as role-play agents for Claude Desktop.

```bash
cd mcp-server
pip install -r requirements.txt
python server.py
```

Then wire it into Claude Desktop — see [`mcp-server/README.md`](./mcp-server/README.md).
The MCP server is a local bonus; it is **not** part of the Vercel deployment.

---

## Repository layout

```
back-to-song-dynasty/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Header, footer, global metadata
│   ├── page.tsx                  # Landing page
│   ├── globals.css               # Parchment + ink-wash styling
│   ├── about/page.tsx            # Project rationale and sources
│   ├── artifacts/page.tsx        # Detailed pages for the three artifacts
│   └── chapter/[slug]/page.tsx   # Dynamic chapter pages (1–8)
├── data/
│   └── chapters.ts               # All story content + artifact reference data
├── mcp-server/                   # The "MCP Server Agents" companion
│   ├── server.py                 # FastMCP server exposing characters as tools
│   ├── requirements.txt
│   └── README.md
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── DEPLOYMENT.md                 # Illustrated GitHub + Vercel walkthrough
└── README.md                     # ← you are here
```

---

## Historical sources

* *The Cambridge History of China*, vol. 5: *The Sung Dynasty and Its Precursors*
* Patricia B. Ebrey, *The Cambridge Illustrated History of China*
* Valerie Hansen, *The Open Empire: A History of China to 1800*
* Open-access scholarship on *Along the River During the Qingming Festival*
  from the Palace Museum, Beijing

---

## Acknowledgments

Made for a 10th-grade English World History class. The historical narrative
in the story is invented; the historical *setting* is not. The choice of
artifacts is deliberately constrained to technologies the Northern Song was
already culturally and industrially close enough to absorb — a reminder
that progress, in any era, is a question of being ready to receive an idea
as much as of having the idea.
