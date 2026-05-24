import Link from "next/link";
import Poll from "./components/Poll";

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
          <div className="flex justify-center mt-8">
            <Link 
              href="/presentation" 
              className="px-8 py-3 border-2 border-cinnabar text-cinnabar hover:bg-cinnabar hover:text-parchment transition-colors uppercase tracking-widest text-sm font-display rounded-sm"
            >
              Start Presentation
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
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-6 text-center uppercase tracking-widest text-sm">
          Prologue: The Briefing
        </h2>
        <div className="font-serif text-lg md:text-xl text-inkSoft space-y-5 leading-relaxed">
          <p>The room had no walls.</p>
          <p>Only amber light. Only a timer. Only her.</p>
          <p>Agent A stood with her hands folded at her waist—not in supplication, but in assessment. A sharp blazer over a Song-style jade pendant. Anachronism as armor. Her face was the face of someone who had watched many Designated Humans fail. She was not tired of it. She was expecting it.</p>
          <p>She bowed.</p>
          <p>One quarter. Hands in front. No warmth.</p>
          <p>「幸会。」</p>
          <p>One cold beat.</p>
          <p>Then she rose.</p>
          <p>"Good to meet you. But I doubt you'll say the same of me."</p>
          <p>Behind her, a timer flickered into existence.</p>
          <p>04:59... 04:58...</p>
          <p>"I am your system assistant, Agent A. You may call me Amanda. I do not comfort. I do not lie. I do not rewind."</p>
          <p>She stepped closer—not to intimidate, just to make sure you heard.</p>
          <p>"You have five minutes until transport to the Song Dynasty. That's right. The Song Dynasty. 1120 C.E."</p>
          <p>A holographic map unfurled behind her. Kaifeng. The Yellow River. Then red marks bleeding south like a wound.</p>
          <p>"Seven years before the Jingkang Incident. Jurchen forces will sack Kaifeng. The emperor will be taken—both emperors, actually. The Northern Song will end. You have until that morning to make one million current-day dollars."</p>
          <p>She paused. Let the number sit.</p>
          <p>"Why? Because if you do—your money multiplies by one hundred. One million becomes one hundred million. Ten million becomes one billion."</p>
          <p>She smiled. No warmth.</p>
          <p>"But fail?"</p>
          <p>She gestured to the map. The red had reached the city.</p>
          <p>"You'll be just another skeleton in the ashes."</p>
          <p>Three cards rotated slowly in the amber air.</p>
          <p>"You may choose one item. For survival. For wealth. For the ultimate prize."</p>
          <p>The cards stopped.</p>
          <ul className="list-none space-y-4">
            <li><strong>#1: PENICILLIN</strong> – A clay pot of living mold. An illustrated wound manual. No refrigeration. No lab. Just you and the green death of infection.</li>
            <li><strong>#2: FIREARMS</strong> – One breech-loading flintlock pistol. Twelve paper cartridges. One cleaning rod. Twelve chances to change history. Then silence.</li>
            <li><strong>#3: POTATOES</strong> – Twenty seed potatoes. Hand-drawn planting diagrams. Storage instructions for humid climates. A famine-proof future wrapped in brown skin.</li>
          </ul>
          <p>Agent A tilted her head.</p>
          <p>“You have 5 seconds left.”</p>
          <p>The timer read 00:05.</p>
          <p>She did not blink.</p>
        </div>
      </section>

      <div className="ink-divider" aria-hidden>❦</div>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-6 text-center uppercase tracking-widest text-sm">
          The Premise
        </h2>
        <div className="font-serif text-lg md:text-xl text-inkSoft space-y-5 leading-relaxed">
          <p>
            It is the spring of 1120 CE.
          </p>
          <p>
            The Northern Song dynasty under Emperor Huizong has just entered the Xuanhe era — its capital, Bianjing (modern Kaifeng), is the largest city on Earth. Home to over a million people. Paper money. Movable-type printing. Public examinations. An economy that historians describe as &ldquo;early modern.&rdquo;
          </p>
          <p>
            The Rainbow Bridge arches over the Bian River. Merchants shout. Tea houses steam. Everything is alive.
          </p>
          <p>
            In seven years, in 1127 CE, the Jurchen Jin will sack the city in what Chinese history calls the Jingkang Incident (靖康之耻). The dynasty will fall. The emperors will be led north in chains. The world will rearrange itself around the absence.
          </p>
          <p>
            What if one teenager arrived in 1120 with three objects from 2026 — and decided to change that?
          </p>
          <p>
            They will not arrive with all three. Agent A does not allow loopholes.
          </p>
          <p>
            They will arrive with one.
          </p>
          <p>
            The other two will remain in the amber room, untouched, unmourned, until the timer runs out.
          </p>
        </div>
      </section>

      <div className="ink-divider" aria-hidden>❦</div>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-12 text-center uppercase tracking-widest text-sm">
          See the Three Artifacts
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Link href="/artifacts#vial" className="paper-card p-6 rounded-sm group transition-transform hover:-translate-y-1 block">
            <div className="flex items-start justify-between mb-4">
              <span className="seal">霉</span>
            </div>
            <h3 className="font-display text-2xl text-ink mb-1">
              The Vial
            </h3>
            <div className="text-sm italic text-cinnabar mb-3">
              青霉 · The Mold
            </div>
          </Link>

          <Link href="/artifacts#manual" className="paper-card p-6 rounded-sm group transition-transform hover:-translate-y-1 block">
            <div className="flex items-start justify-between mb-4">
              <span className="seal">火</span>
            </div>
            <h3 className="font-display text-2xl text-ink mb-1">
              The Manual
            </h3>
            <div className="text-sm italic text-cinnabar mb-3">
              火药 · The Powder
            </div>
          </Link>

          <Link href="/artifacts#potato" className="paper-card p-6 rounded-sm group transition-transform hover:-translate-y-1 block">
            <div className="flex items-start justify-between mb-4">
              <span className="seal">薯</span>
            </div>
            <h3 className="font-display text-2xl text-ink mb-1">
              The Tuber
            </h3>
            <div className="text-sm italic text-cinnabar mb-3">
              土豆 · The Potato
            </div>
          </Link>
        </div>

        <Poll />

      </section>
    </div>
  );
}
