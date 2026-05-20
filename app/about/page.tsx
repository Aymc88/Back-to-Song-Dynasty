import Link from "next/link";

export const metadata = {
  title: "About This Project — Back to the Song Dynasty",
  description:
    "The historical sources, the design choices, and the MCP Server bonus behind this 10th-grade World History project.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-24 font-serif text-lg text-inkSoft leading-[1.85] space-y-6">
      <div className="text-center mb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">
          About
        </div>
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-2">
          About This Project
        </h1>
        <div className="ink-divider mt-6" aria-hidden>❦</div>
      </div>

      <h2 className="font-display text-2xl text-ink mt-4">The assignment</h2>
      <p>
        This is a 10th-grade English-language World History project. The prompt
        was: a high-school student from 2026 travels to the Northern Song under
        Emperor Huizong in the Xuanhe era — the world Zhang Zeduan painted in
        <em> Along the River During the Qingming Festival</em> (清明上河图). The
        student brings three objects or technologies from 2026. The project
        explains what those three things are, what they change, and why.
      </p>

      <h2 className="font-display text-2xl text-ink mt-4">Why these three?</h2>
      <p>
        Choosing the artifacts forces you to understand what the Northern Song
        actually was — not a romantic Confucian past, but one of the most
        sophisticated economies in pre-modern history. They already had paper
        money, movable-type printing, magnetic compasses, the world&apos;s
        largest cities, and a meritocratic civil service. The artifacts have to
        repair specific weaknesses without simply handing the empire a finished
        gift.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Penicillin</strong> works because Song doctors already
          fermented things, already used moldy preparations on wounds, and had
          a culture of empirical medicine. They were ready to receive the cure.
        </li>
        <li>
          <strong>Improved gunpowder</strong> works because Song alchemists had
          been refining saltpeter for two centuries and the imperial arsenal
          could cast bronze at scale. The modern formula is a single ratio.
        </li>
        <li>
          <strong>Seed potatoes</strong> work because the Northern Song already
          farmed marginal upland intensively, with an experimental peasantry — a
          crop that thrives on poor, cold soil could be planted within a single
          growing season, and population growth is the foundation of dynastic
          strength.
        </li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-4">Historical sources</h2>
      <p>
        The historical details about Bianjing, the Xuanhe era, and the Jingkang
        Incident (靖康之耻) draw on open scholarship including the{" "}
        <em>Cambridge History of China, Volume 5</em> (the Song dynasty volume),
        Patricia Ebrey&apos;s <em>Cambridge Illustrated History of China</em>,
        and Valerie Hansen&apos;s <em>The Open Empire</em>. The descriptions of
        the painted scroll itself follow modern art-historical readings of
        Zhang Zeduan&apos;s work in the Palace Museum, Beijing.
      </p>

      <h2 className="font-display text-2xl text-ink mt-4">The MCP Server bonus</h2>
      <p>
        The original assignment used the phrase &ldquo;MCP Server Agents.&rdquo;
        The repository for this project includes a small Model Context Protocol
        server (<code>mcp-server/server.py</code>) that exposes the story&apos;s
        characters — Emperor Huizong, Master Shen the arsenal-master, Old Wang
        the noodle-shop owner, and the time-traveling narrator — as
        role-playable agents through Claude. The README explains how to wire it
        up to Claude Desktop.
      </p>

      <h2 className="font-display text-2xl text-ink mt-4">Tech stack</h2>
      <p>
        Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS,
        deployed on Vercel. The companion MCP Server is written in Python using
        the official <code>mcp</code> SDK.
      </p>

      <h2 className="font-display text-2xl text-ink mt-4">A note on changing the past</h2>
      <p>
        The final chapter of the story argues that the project is not actually
        about three magical fixes for a dying dynasty. It is about feeling the
        weight of how interlocking history really is — that every artifact in a
        museum case is also a casualty list and a birth certificate, and that
        understanding the past on its own terms is harder, and more honest,
        than trying to fix it. The story ends with the narrator leaving the
        vial in the freezer, the gunpowder in the footnotes, and the seed
        potatoes in the kitchen.
      </p>

      <div className="ink-divider mt-10" aria-hidden>❦</div>
      <div className="text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cinnabar hover:text-ink transition-colors font-medium"
        >
          ← Return home
        </Link>
      </div>
    </div>
  );
}
