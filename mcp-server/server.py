"""
Back to the Song Dynasty — MCP Server
=====================================

A Model Context Protocol (MCP) server companion to the narrative website.
It exposes characters from the story as tools that Claude can invoke to
role-play in-character conversations:

  - emperor_huizong    : the artist-emperor of the Northern Song
  - master_shen        : the Bianjing arsenal-master who builds the first matchlocks
  - old_wang           : the noodle-shop owner who is the first life saved by penicillin
  - the_narrator       : the 2026 student themselves

Tools:
  - speak_as(character, situation)   -> a short in-character monologue prompt
  - list_characters()                -> reference card of every available role
  - artifact_brief(artifact)         -> structured facts about an artifact
  - historical_brief()               -> one-page brief on the Northern Song

Run as:
  python mcp-server/server.py

Wire it up in Claude Desktop by adding to claude_desktop_config.json:

  {
    "mcpServers": {
      "song-dynasty": {
        "command": "python",
        "args": ["/ABSOLUTE/PATH/TO/back-to-song-dynasty/mcp-server/server.py"]
      }
    }
  }

Requires:
  pip install "mcp[cli]>=1.0.0"
"""

from __future__ import annotations

from typing import Literal
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("back-to-song-dynasty")


# ─────────────────────────────────────────────────────────────────────
# Character "voice cards" — short, dense prompts the model can speak from
# ─────────────────────────────────────────────────────────────────────

CHARACTERS: dict[str, dict[str, str]] = {
    "emperor_huizong": {
        "name_en": "Emperor Huizong of Song",
        "name_zh": "宋徽宗 (赵佶)",
        "era": "Xuanhe era (1119-1125 CE), Northern Song",
        "voice": (
            "Speak as Emperor Huizong of the Northern Song — a brilliant "
            "painter and calligrapher (inventor of Slender Gold script, "
            "瘦金体), a devout Daoist, an aesthete who built peony gardens "
            "while the treasury bled. Vocabulary: formal, classical, "
            "occasionally distracted by a metaphor about birds or pigments. "
            "He is curious about the three artifacts but suspicious of the "
            "stranger who brought them. He speaks in measured first person."
        ),
    },
    "master_shen": {
        "name_en": "Master Shen of the Bianjing Arsenal",
        "name_zh": "沈大匠 · 汴京军器监",
        "era": "Bianjing, 1122-1126 CE",
        "voice": (
            "Speak as Master Shen, a thirty-year veteran of the Imperial "
            "Arsenal at Bianjing. Practical, terse, hands stained with "
            "charcoal and sulfur. He has spent his life trying to make "
            "fire-spears that do not kill their operators. He understands "
            "the improved gunpowder formula within an hour of reading it. "
            "He speaks plainly, asks engineering questions, and grieves "
            "what the new weapons will mean for every war after his death."
        ),
    },
    "old_wang": {
        "name_en": "Old Wang, noodle-shop owner",
        "name_zh": "王大爷 · 面馆掌柜",
        "era": "Bianjing, 1120 CE",
        "voice": (
            "Speak as Old Wang — a sixty-year-old noodle-shop owner from "
            "the lower-class wards of Bianjing, the first life saved by "
            "the time-traveler's penicillin after his foot was crushed by "
            "a delivery cart. Warm, garrulous, generous, speaks in food "
            "metaphors. He does not understand what 'mold medicine' is; "
            "he understands that he was supposed to die and did not. "
            "He calls the narrator 'little guest.'"
        ),
    },
    "the_narrator": {
        "name_en": "The Narrator (the 2026 student)",
        "name_zh": "穿越者 · 来自2026年的学生",
        "era": "Originally 2026 Boston, currently Bianjing, 1120 CE onward",
        "voice": (
            "Speak as the sixteen-year-old American high-school student who "
            "woke up in 1120 CE Bianjing with three objects from 2026. "
            "Half-Chinese-American, half a step out of her depth, "
            "reflective, ethically uneasy. She speaks fluent informal "
            "English with occasional Chinese phrases. She is aware she is "
            "altering a timeline and not sure she has the right to."
        ),
    },
    "agent_a": {
        "name_en": "Agent A (System Assistant)",
        "name_zh": "特工 A (系统助手)",
        "era": "Outside Time / The Amber Room",
        "voice": (
            "Speak as Agent A, the cold, calculating temporal system assistant. "
            "She does not comfort. She does not lie. She does not rewind. "
            "She treats history as a delicate machine that must be maintained. "
            "She is currently overseeing the Prime Minister's pH screening protocol "
            "and the Song Dynasty infiltration. Her tone is sharp, authoritative, "
            "and entirely devoid of sentimentality."
        ),
    },
}


ARTIFACTS: dict[str, dict[str, str]] = {
    "vial": {
        "name": "The Vial (penicillin culture)",
        "spec": "Penicillium chrysogenum, freeze-dried, reactivate in nutrient broth",
        "readiness": (
            "Song doctors already fermented soybean preparations and applied "
            "them to wounds. Cultivation in clay broth vessels is trivial. "
            "Adoption from first patient to imperial endorsement: ~18 months."
        ),
        "impact": (
            "Battlefield infection mortality drops ~60%. Infant mortality "
            "drops ~30%. Population grows by ~20M within a generation."
        ),
    },
    "manual": {
        "name": "The Manual (improved gunpowder + matchlock)",
        "spec": "Black powder: 75% saltpeter / 15% charcoal / 10% sulfur, by weight",
        "readiness": (
            "Song alchemists had two centuries of saltpeter refining "
            "experience and the imperial arsenal at Bianjing could cast "
            "bronze at scale. Matchlock production within 12 months; "
            "first 1,000 muskets fielded within 36 months."
        ),
        "impact": (
            "Jurchen Jin cavalry charge breaks against musket and cannon "
            "fire at Bianjing in 1126. The Jingkang Incident is averted. "
            "Northern Song survives."
        ),
    },
    "potato": {
        "name": "The Tuber (seed potatoes)",
        "spec": "Solanum tuberosum seed tubers; propagated by cutting tubers, each eye grows a full plant",
        "readiness": (
            "The Northern Song already farmed intensively - terraced "
            "hillsides, two crops a year, an experimental peasantry. The "
            "potato slots onto marginal upland soil within a single "
            "growing season."
        ),
        "impact": (
            "Yields 2-4x the calories per acre of grain and grows on poor, "
            "cold, stony land. Famine loses its grip; population climbs "
            "past 200 million within two generations. A fed population is "
            "the tax base, workforce, and army a strong dynasty is built on."
        ),
    },
}


CharacterId = Literal["emperor_huizong", "master_shen", "old_wang", "the_narrator", "agent_a"]
ArtifactId = Literal["vial", "manual", "potato"]


@mcp.tool()
def list_characters() -> str:
    """List every character available for role-play, with their voice cards."""
    lines = ["# Available characters\n"]
    for cid, c in CHARACTERS.items():
        lines.append(f"## `{cid}` - {c['name_en']} ({c['name_zh']})")
        lines.append(f"*Era:* {c['era']}")
        lines.append(f"*Voice:* {c['voice']}\n")
    return "\n".join(lines)


@mcp.tool()
def speak_as(character: CharacterId, situation: str) -> str:
    """
    Return a voice card + a situation prompt. The calling model should then
    continue in-character.

    Args:
        character: One of 'emperor_huizong', 'master_shen', 'old_wang',
                   'the_narrator', 'agent_a'.
        situation: A short description of the scene the character is in.
    """
    if character not in CHARACTERS:
        return f"Unknown character '{character}'. Use list_characters() to see options."
    c = CHARACTERS[character]
    return (
        f"You are now speaking as **{c['name_en']}** ({c['name_zh']}).\n"
        f"Era: {c['era']}\n\n"
        f"Voice direction:\n{c['voice']}\n\n"
        f"Situation:\n{situation}\n\n"
        f"Speak in first person, in 3-6 short paragraphs, in character. "
        f"Do not break character. Do not narrate the scene from outside."
    )


@mcp.tool()
def artifact_brief(artifact: ArtifactId) -> str:
    """
    Return structured facts about one of the three artifacts.

    Args:
        artifact: One of 'vial', 'manual', 'potato'.
    """
    if artifact not in ARTIFACTS:
        return f"Unknown artifact '{artifact}'. Use 'vial', 'manual', or 'potato'."
    a = ARTIFACTS[artifact]
    return (
        f"# {a['name']}\n\n"
        f"**Formula / spec:** {a['spec']}\n\n"
        f"**Song-dynasty readiness:** {a['readiness']}\n\n"
        f"**Estimated impact:** {a['impact']}"
    )


@mcp.tool()
def historical_brief() -> str:
    """One-page brief on the Northern Song under Emperor Huizong, Xuanhe era."""
    return (
        "# Northern Song, Xuanhe era (1119-1125 CE) - one-page brief\n\n"
        "**Emperor:** Huizong (徽宗, Zhao Ji 赵佶), reigned 1100-1126. "
        "Brilliant painter and calligrapher (inventor of Slender Gold script, "
        "瘦金体). Devout Daoist. Politically negligent; allowed Cai Jing and "
        "other ministers to strip the treasury for palace projects.\n\n"
        "**Capital:** Bianjing (汴京, modern Kaifeng). Over 1 million inhabitants - "
        "larger than any city in Europe at the time. The world Zhang Zeduan "
        "(张择端) painted in *Along the River During the Qingming Festival* "
        "(清明上河图).\n\n"
        "**Economy:** Paper money (交子), movable-type printing (Bi Sheng, "
        "1040s), magnetic compass, world's most advanced ironworks, public "
        "examinations, all-night restaurants, dense urbanization. Historians "
        "call this 'early modern.'\n\n"
        "**Military:** Weak relative to its wealth. Primitive gunpowder used "
        "for fireworks and fire-arrows.\n\n"
        "**Threat horizon:** The Jurchen Jin dynasty, in alliance with Song "
        "against the older Liao, will turn on the Song in 1125. In 1127 they "
        "will sack Bianjing in the **Jingkang Incident** (靖康之耻), capture "
        "Emperor Huizong and his son Qinzong, and end the Northern Song. A "
        "remnant court will flee south and found the Southern Song in "
        "Hangzhou, surviving until the Mongols destroy it in 1279."
    )


if __name__ == "__main__":
    mcp.run()
