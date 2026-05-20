import { chapters } from "@/data/chapters";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = { slug: string };

export function generateStaticParams() {
  return chapters.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const ch = chapters.find((c) => c.slug === params.slug);
  if (!ch) return { title: "Chapter not found" };
  return {
    title: `${ch.number}. ${ch.title} — Back to the Song Dynasty`,
    description: ch.subtitle,
  };
}

export default function ChapterPage({ params }: { params: Params }) {
  const idx = chapters.findIndex((c) => c.slug === params.slug);
  if (idx === -1) notFound();
  const ch = chapters[idx];
  const prev = idx > 0 ? chapters[idx - 1] : null;
  const next = idx < chapters.length - 1 ? chapters[idx + 1] : null;

  const quoteIndex = ch.pullQuote
    ? Math.floor(ch.paragraphs.length * 0.55)
    : -1;

  return (
    <article className="max-w-3xl mx-auto px-6 pt-12 pb-24">
      <div className="text-center mb-12">
        <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">
          Chapter {ch.number} of {chapters.length}
        </div>
        <h1 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-3">
          {ch.title}
        </h1>
        <div className="font-serif italic text-xl text-cinnabar">
          {ch.subtitle}
        </div>
        <div className="text-sm text-muted mt-4 tracking-wide">{ch.era}</div>
        <div className="ink-divider mt-8" aria-hidden>❦</div>
      </div>

      <div className="font-serif text-lg md:text-xl text-inkSoft leading-[1.85] space-y-6">
        {ch.paragraphs.map((p, i) => (
          <div key={i}>
            <p className={i === 0 ? "drop-cap" : ""}>{p}</p>
            {i === quoteIndex && ch.pullQuote && (
              <blockquote className="pull-quote">&ldquo;{ch.pullQuote}&rdquo;</blockquote>
            )}
          </div>
        ))}
      </div>

      <div className="ink-divider mt-16" aria-hidden>❦</div>
      <nav className="grid sm:grid-cols-2 gap-4 mt-8">
        {prev ? (
          <Link
            href={`/chapter/${prev.slug}`}
            className="paper-card p-5 rounded-sm group hover:border-cinnabar/40 transition-colors"
          >
            <div className="text-xs uppercase tracking-widest text-muted mb-2">
              ← Previous
            </div>
            <div className="font-display text-xl text-ink group-hover:text-cinnabar transition-colors">
              {prev.number}. {prev.title}
            </div>
          </Link>
        ) : (
          <Link
            href="/"
            className="paper-card p-5 rounded-sm group hover:border-cinnabar/40 transition-colors"
          >
            <div className="text-xs uppercase tracking-widest text-muted mb-2">
              ← Home
            </div>
            <div className="font-display text-xl text-ink group-hover:text-cinnabar transition-colors">
              Return to the front page
            </div>
          </Link>
        )}
        {next ? (
          <Link
            href={`/chapter/${next.slug}`}
            className="paper-card p-5 rounded-sm group hover:border-cinnabar/40 transition-colors text-right"
          >
            <div className="text-xs uppercase tracking-widest text-muted mb-2">
              Next →
            </div>
            <div className="font-display text-xl text-ink group-hover:text-cinnabar transition-colors">
              {next.number}. {next.title}
            </div>
          </Link>
        ) : (
          <Link
            href="/artifacts"
            className="paper-card p-5 rounded-sm group hover:border-cinnabar/40 transition-colors text-right"
          >
            <div className="text-xs uppercase tracking-widest text-muted mb-2">
              The End →
            </div>
            <div className="font-display text-xl text-ink group-hover:text-cinnabar transition-colors">
              Examine the Three Artifacts
            </div>
          </Link>
        )}
      </nav>
    </article>
  );
}
