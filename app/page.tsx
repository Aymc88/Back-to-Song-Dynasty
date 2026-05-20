import Link from "next/link";
import { chapters, artifacts } from "@/data/chapters";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-28 text-center">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted mb-8">
            <span className="h-px w-12 bg-muted/60" />
            A World History Thought Experiment
            <span className="h-px w-12 bg-muted/60" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-ink leading-[1.05] mb-6">
            Back to the
            <br />
            <span className="text-cinnabar italic">Song Dynasty</span>
          </h1>
          <p className="font-serif text-xl md:text-2xl text-inkSoft max-w-3xl mx-auto italic mb-3">
            A 2026 American high-school student wakes up in Bianjing,
            capital of the Northern Song — the city Zhang Zeduan painted
            in <em>Along the River During the Qingming Festival</em>.
          </p>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
            They are carrying three objects from the future. They have
            seven years before the Jin invasion. They have one decision to make.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/chapter/the-scroll"
              className="inline-flex items-center gap-2 bg-cinnabar text-parchment px-6 py-3 rounded-sm hover:bg-ink transition-colors font-medium tracking-wide"
            >
              Read Chapter 1
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/artifacts"
              className="inline-flex items-center gap-2 border border-ink/40 px-6 py-3 rounded-sm hover:border-cinnabar hover:text-cinnabar transition-colors font-medium tracking-wide"
            >
              See the Three Artifacts
            </Link>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-32 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(26,20,16,0.18), transparent), repeating-linear-gradient(90deg, transparent 0 60px, rgba(58,45,34,0.15) 60px 61px, transparent 61px 70px, rgba(58,45,34,0.25) 70px 72px)",
          }}
        />
      </section>

      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="rounded-sm overflow-hidden border-2 border-ink/10 shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/rainbow-bridge.jpg" 
            alt="Rainbow Bridge from Along the River During the Qingming Festival"
            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
        <p className="text-center text-sm text-muted mt-3 italic">
          The famous Rainbow Bridge from Zhang Zeduan's Along the River During the Qingming Festival (清明上河图)
        </p>
      </section>

      <div className="ink-divider" aria-hidden>❦</div>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-6 text-center">
          The Premise
        </h2>
        <div className="font-serif text-lg md:text-xl text-inkSoft space-y-5 leading-relaxed">
          <p>
            It is the spring of 1120 CE. The Northern Song dynasty under Emperor
            Huizong has just entered the Xuanhe era — its capital, Bianjing
            (modern Kaifeng), is the largest city on Earth, home to over a
            million people, paper money, movable-type printing, public examinations,
            and an economy that historians describe as &ldquo;early modern.&rdquo;
          </p>
          <p>
            In <strong>seven years</strong>, in 1127 CE, the Jurchen Jin will
            sack the city in what Chinese history calls the
            <em> Jingkang Incident</em> (靖康之耻). The dynasty will fall. The
            world will rearrange itself around the absence.
          </p>
          <p>
            What if one teenager arrived in 1120 with three objects from 2026
            — and decided to change that?
          </p>
        </div>
      </section>

      <div className="ink-divider" aria-hidden>❦</div>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-3 text-center">
          The Three Artifacts
        </h2>
        <p className="text-center text-muted italic mb-12">
          One object that heals the body. One that changes how the world fights.
          One that feeds a people into a nation.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {artifacts.map((a, i) => (
            <Link
              key={a.id}
              href={`/artifacts#${a.id}`}
              className="paper-card p-6 rounded-sm group transition-transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="seal">{a.symbol}</span>
                <span className="text-xs uppercase tracking-widest text-muted">
                  Artifact {i + 1}
                </span>
              </div>
              <h3 className="font-display text-2xl text-ink mb-1">
                {a.englishName}
              </h3>
              <div className="text-sm italic text-cinnabar mb-3">
                {a.chineseName}
              </div>
              <p className="text-inkSoft mb-4">{a.oneLine}</p>
              <div className="text-xs text-muted group-hover:text-cinnabar transition-colors">
                Read its impact →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="ink-divider" aria-hidden>❦</div>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-3 text-center">
          The Story, in Eight Chapters
        </h2>
        <p className="text-center text-muted italic mb-10">
          Read it like a scroll — top to bottom.
        </p>
        <ol className="space-y-4">
          {chapters.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/chapter/${c.slug}`}
                className="paper-card flex items-center gap-5 p-5 rounded-sm group hover:border-cinnabar/40 transition-colors"
              >
                <span className="chapter-number flex-shrink-0">{c.number}</span>
                <div className="flex-1">
                  <div className="font-display text-xl text-ink group-hover:text-cinnabar transition-colors">
                    {c.title}
                  </div>
                  <div className="text-sm italic text-muted">{c.subtitle}</div>
                </div>
                <span className="text-muted group-hover:text-cinnabar transition-colors text-xl">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
