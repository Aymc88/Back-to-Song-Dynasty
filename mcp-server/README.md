# Back to the Song Dynasty — MCP Server

A small Model Context Protocol (MCP) server that ships alongside the
narrative website. It exposes characters from the story — Emperor Huizong,
Master Shen, Old Wang, and the time-traveling narrator — as **role-play
agents** that Claude can invoke as tools.

This is the "MCP Server Agents" half of the project. The Next.js site tells
the story; this server lets you *talk to* people inside it.

## Tools exposed

| Tool | What it does |
| --- | --- |
| `list_characters()` | Returns voice cards for every available character. |
| `speak_as(character, situation)` | Puts Claude in-character for a given scene. |
| `artifact_brief(artifact)` | Structured facts about one of the three artifacts (`vial`, `manual`, `mirror`). |
| `historical_brief()` | A one-page brief on the Northern Song under Emperor Huizong. |

## Install

```bash
cd mcp-server
python -m venv .venv
source .venv/bin/activate           # on Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## Run (standalone)

```bash
python server.py
```

The server speaks the MCP protocol on stdio; it will look idle in your
terminal — that is correct. To actually talk to it, wire it into a
client like Claude Desktop.

## Wire it into Claude Desktop

Open Claude Desktop's config file:

* macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
* Windows: `%APPDATA%\Claude\claude_desktop_config.json`

Add the server (replace the path with the absolute path on **your** machine):

```json
{
  "mcpServers": {
    "song-dynasty": {
      "command": "python",
      "args": [
        "/ABSOLUTE/PATH/TO/back-to-song-dynasty/mcp-server/server.py"
      ]
    }
  }
}
```

Restart Claude Desktop. You should now see a tool indicator in the chat
input. Try:

> Use the `song-dynasty` server. Speak as Emperor Huizong on the day his
> youngest son recovers from a fever after the stranger's mold medicine.

Claude will call `speak_as("emperor_huizong", ...)` and continue
in-character.

## Why this is useful

The website is a one-way narrative — you read it. The MCP server makes the
same world **interactive**: you can interrogate the emperor, ask Master
Shen a metallurgy question, or have Old Wang tell you, in his own words,
what it felt like to wake up with a leg again. For a 10th-grade history
class, that is a way of testing whether the historical setting holds up
under questioning.

> **Note:** The MCP server is a *bonus*. The Vercel deployment does **not**
> need it — the website runs entirely on its own. The server is a local
> Python program you run on your own computer with Claude Desktop.
