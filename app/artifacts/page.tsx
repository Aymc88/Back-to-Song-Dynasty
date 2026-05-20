import Link from "next/link";
import { artifacts } from "@/data/chapters";

export const metadata = {
  title: "The Three Artifacts — Back to the Song Dynasty",
  description:
    "Penicillin, improved gunpowder, and the potato — and what they each do to the Northern Song.",
};

export default function ArtifactsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-12 pb-24">
      <div className="text-center mb-12">
        <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">
          Reference
        </div>
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-3">
          The Three Artifacts
        </h1>
        <p className="font-serif italic text-lg text-inkSoft max-w-2xl mx-auto">
          A 2026 backpack arrives in 1120 CE. These are the three things inside
          it — and what each one does to a civilization that is the most
          advanced on Earth but also seven years from collapse.
        </p>
        <div className="ink-divider mt-8" aria-hidden>❦</div>
      </div>

      <div className="space-y-16">
        {artifacts.map((a, i) => (
          <article
            key={a.id}
            id={a.id}
            className="paper-card p-8 md:p-10 rounded-sm scroll-mt-24"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
              <div className="flex-shrink-0">
                <div
                  className="seal"
                  style={{ width: "5rem", height: "5rem", fontSize: "3rem", transform: "rotate(-3deg)" }}
                >
                  {a.symbol}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest text-muted mb-2">
                  Artifact {i + 1} of 3
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-ink mb-1">
                  {a.englishName}
                </h2>
                <div className="text-cinnabar italic text-lg mb-3">
                  {a.chineseName}
                </div>
                <p className="font-serif text-xl text-inkSoft italic">
                  {a.oneLine}
                </p>
              </div>
            </div>

            <Section heading="What It Is" body={a.description} />
            <Section heading="Why It Works in 1120" body={a.whyItWorks} />
            <Section heading="Historical Impact" body={a.historicalImpact} />
            <Section heading="Real-World Note" body={a.realWorldNote} italic />

            <div className="mt-8 pt-6 border-t border-muted/30 flex flex-wrap items-center justify-between gap-4">
              <Link
                href={`/chapter/the-${a.id}`}
                className="text-cinnabar hover:text-ink transition-colors font-medium"
              >
                Read the chapter on the {a.englishName.replace("The ", "")} →
              </Link>
              <Link href="/" className="text-sm text-muted hover:text-cinnabar transition-colors">
                ← Home
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Section({
  heading,
  body,
  italic = false,
}: {
  heading: string;
  body: string;
  italic?: boolean;
}) {
  return (
    <div className="mb-5">
      <div className="text-xs uppercase tracking-[0.2em] text-cinnabar font-medium mb-2">
        {heading}
      </div>
      <p
        className={`font-serif text-lg text-inkSoft leading-relaxed ${
          italic ? "italic" : ""
        }`}
      >
        {body}
      </p>
    </div>
  );
}
