"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Presentation() {
  const [slide, setSlide] = useState(1);
  const [showTitle, setShowTitle] = useState(false);
  const totalSlides = 18;

  const nextSlide = () => {
    if (slide === 1 && !showTitle) {
      setShowTitle(true);
    } else if (slide < totalSlides) {
      setSlide(s => s + 1);
    }
  };

  const prevSlide = () => {
    if (slide === 1 && showTitle) {
      setShowTitle(false);
    } else if (slide > 1) {
      setSlide(s => s - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slide, showTitle]);

  // CSS for graph
  const graphStyles = `
    .graph-container {
      width: 100%;
      height: 300px;
      display: flex;
      align-items: flex-end;
      gap: 4rem;
      padding-top: 2rem;
      border-bottom: 2px solid rgba(26,20,16,0.2);
      border-left: 2px solid rgba(26,20,16,0.2);
      position: relative;
      margin-bottom: 2rem; /* make room for labels below axis */
    }
    .bar-group {
      display: flex;
      gap: 4rem;
      align-items: flex-end;
      height: 100%;
      flex: 1;
      justify-content: center;
      position: relative;
    }
    .bar {
      width: 60px;
      background-color: #1A1410; /* ink color */
      position: relative;
      transition: height 1s ease-out;
      display: flex;
      justify-content: center;
    }
    .bar.cinnabar {
      background-color: #DB4437; /* cinnabar color */
    }
    .bar-label {
      position: absolute;
      bottom: -45px;
      width: 120px;
      text-align: center;
      font-weight: 500;
      line-height: 1.2;
      color: rgba(26,20,16,0.7); /* inkSoft color */
    }
    .bar-value {
      position: absolute;
      top: -25px;
      font-weight: bold;
      color: #1A1410;
    }
  `;

  return (
    <div 
      className="fixed inset-0 z-50 bg-parchment text-ink overflow-hidden flex items-center justify-center cursor-pointer select-none"
      onClick={nextSlide}
    >
      <style dangerouslySetInnerHTML={{ __html: graphStyles }} />
      <div className="absolute top-4 right-6 text-sm text-muted z-30 bg-parchment/80 px-2 py-1 rounded">
        Slide {slide} / {totalSlides}
      </div>
      <Link href="/" className="absolute top-4 left-6 text-sm text-muted hover:text-cinnabar transition-colors z-30 bg-parchment/80 px-2 py-1 rounded" onClick={(e) => e.stopPropagation()}>
        ← Exit
      </Link>

      {/* Background images for specific slides */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 transition-opacity duration-1000">
        <img src="/song_cityscape_1779649626968.png" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${slide === 1 ? 'opacity-100' : 'opacity-0'}`} alt="" />
        <img src="/vivid_song_dynasty_city.png" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${slide === 2 ? 'opacity-100' : 'opacity-0'}`} alt="" />
        <img src="/jurchen_cavalry_1779649569638.png" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${slide === 3 ? 'opacity-100' : 'opacity-0'}`} alt="" />
        <img src="/amber_room_1779649582249.png" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${slide === 4 ? 'opacity-100' : 'opacity-0'}`} alt="" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-12 mx-auto h-full flex items-center justify-center pointer-events-none">
        
        {/* Slide 1: Topic Introduction */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${slide === 1 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className={`flex flex-col items-center transition-opacity duration-[2000ms] ease-in-out ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="font-display text-5xl md:text-7xl text-ink text-center mb-4 bg-parchment/80 p-6 rounded shadow-lg backdrop-blur-sm">
              Back to the <span className="text-cinnabar italic">Song Dynasty</span>
            </h1>
            <p className="text-lg md:text-xl text-inkSoft font-serif italic text-center max-w-2xl bg-parchment/80 p-4 rounded shadow-lg backdrop-blur-sm">
              Top 3 Common Items that Can Make You a Song Dynasty Millionaire
            </p>
          </div>
          {!showTitle && (
            <div className="absolute bottom-12 text-ink text-sm animate-pulse bg-parchment/80 px-4 py-2 rounded">
              Tap to begin
            </div>
          )}
        </div>

        {/* Slide 2: Background - 1120 CE */}
        <div className={`absolute inset-0 flex items-center transition-all duration-1000 ${slide === 2 ? 'opacity-100 translate-x-0 pointer-events-auto' : slide < 2 ? 'opacity-0 translate-x-12 pointer-events-none' : 'opacity-0 -translate-x-12 pointer-events-none'}`}>
          <div className="w-1/2 ml-12 bg-parchment/90 p-8 rounded shadow-xl backdrop-blur-md">
            <h2 className="font-display text-5xl mb-6">1120 CE: Peak of the Northern Song</h2>
            <p className="text-2xl text-inkSoft leading-relaxed mb-6">
              The capital Bianjing is a bustling metropolis of over 1 million people. It has paper money, a thriving market economy, and advanced technology.
            </p>
            <ul className="text-xl text-inkSoft space-y-4 list-disc pl-6">
              <li>Movable type printing presses spread knowledge.</li>
              <li>A meritocratic society driven by imperial exams.</li>
              <li>A golden age of art and commerce.</li>
            </ul>
          </div>
        </div>

        {/* Slide 3: Background - Jin Invasion */}
        <div className={`absolute inset-0 flex justify-end items-center transition-all duration-1000 ${slide === 3 ? 'opacity-100 translate-x-0 pointer-events-auto' : slide < 3 ? 'opacity-0 translate-x-12 pointer-events-none' : 'opacity-0 -translate-x-12 pointer-events-none'}`}>
          <div className="w-1/2 mr-12 bg-parchment/90 p-8 rounded shadow-xl backdrop-blur-md">
            <h2 className="font-display text-5xl mb-6 text-cinnabar">The Impending Doom</h2>
            <p className="text-2xl text-inkSoft leading-relaxed mb-6">
              In just seven years, the Jurchen Jin dynasty will invade from the north.
            </p>
            <ul className="text-xl text-inkSoft space-y-4 list-disc pl-6">
              <li>1127 CE: The Jingkang Incident.</li>
              <li>Bianjing is sacked, both emperors captured.</li>
              <li>The dynasty is shattered, fleeing south.</li>
              <li>Millions perish in the ensuing chaos.</li>
            </ul>
          </div>
        </div>

        {/* Slide 4: Purpose */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${slide === 4 ? 'opacity-100 scale-100 pointer-events-auto' : slide < 4 ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-0 scale-105 pointer-events-none'}`}>
          <div className="bg-parchment/90 p-12 rounded shadow-2xl backdrop-blur-md max-w-4xl text-center">
            <h2 className="font-display text-4xl mb-6 uppercase tracking-widest">The Thought Experiment</h2>
            <p className="text-3xl text-inkSoft font-serif italic mb-8">
              "You have seven years before the invasion. You can take one object from the future."
            </p>
            <p className="text-2xl">
              Can one person with one modern item prevent the collapse of an empire and become immensely wealthy in the process? We analyze three candidates.
            </p>
          </div>
        </div>

        {/* Slide 5: The Choice */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${slide === 5 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <h2 className="font-display text-4xl mb-16 text-center uppercase tracking-widest">The Three Artifacts</h2>
          <div className="flex gap-12 text-center pointer-events-auto">
            <div className="hover:scale-110 transition-transform duration-500 ease-out bg-white p-6 rounded shadow-lg relative z-50 cursor-pointer">
              <div className="seal text-6xl mb-6 mx-auto">霉</div>
              <h3 className="font-display text-2xl">The Vial</h3>
            </div>
            <div className="hover:scale-110 transition-transform duration-500 ease-out bg-white p-6 rounded shadow-lg relative z-50 cursor-pointer">
              <div className="seal text-6xl mb-6 mx-auto">珠</div>
              <h3 className="font-display text-2xl">The Pearls</h3>
            </div>
            <div className="hover:scale-110 transition-transform duration-500 ease-out bg-white p-6 rounded shadow-lg relative z-50 cursor-pointer">
              <div className="seal text-6xl mb-6 mx-auto">薯</div>
              <h3 className="font-display text-2xl">The Tuber</h3>
            </div>
          </div>
        </div>

        {/* Slide 6: Artifact 1 - Penicillin */}
        <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-1000 ${slide === 6 ? 'scale-100 opacity-100 pointer-events-auto' : slide < 6 ? 'scale-90 opacity-0 pointer-events-none' : 'scale-110 opacity-0 pointer-events-none'}`}>
          <div className="flex bg-white shadow-2xl rounded overflow-hidden max-w-5xl w-full">
            <div className="w-1/2 relative min-h-[400px]">
              <img src="/vial_of_mold_1779649595587.png" alt="Vial of Mold" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="w-1/2 p-12 flex flex-col justify-center">
              <div className="seal text-5xl mb-4 text-ink">霉</div>
              <h2 className="font-display text-5xl mb-2">The Vial</h2>
              <div className="text-xl italic text-cinnabar mb-8">青霉 · The Mold</div>
              <p className="text-2xl text-inkSoft leading-relaxed">
                A frosted glass cylinder containing freeze-dried <em>Penicillium chrysogenum</em>, plus an illustrated wound manual.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 7: Research - Mortality Graph */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${slide === 7 ? 'opacity-100 translate-y-0 pointer-events-auto' : slide < 7 ? 'opacity-0 translate-y-12 pointer-events-none' : 'opacity-0 -translate-y-12 pointer-events-none'}`}>
          <h2 className="font-display text-4xl mb-8">Impact on Mortality Rates</h2>
          <div className="max-w-4xl w-full bg-white p-8 rounded shadow-xl">
            <div className="graph-container">
              <div className="bar-group">
                <div className="bar cinnabar" style={{ height: slide === 7 ? '90%' : '0%' }}>
                  <span className="bar-value">~60%</span>
                  <span className="bar-label">Battlefield<br/>(Before)</span>
                </div>
                <div className="bar" style={{ height: slide === 7 ? '20%' : '0%' }}>
                  <span className="bar-value">~20%</span>
                  <span className="bar-label">Battlefield<br/>(After)</span>
                </div>
              </div>
              <div className="bar-group">
                <div className="bar cinnabar" style={{ height: slide === 7 ? '45%' : '0%' }}>
                  <span className="bar-value">~45%</span>
                  <span className="bar-label">Infant<br/>(Before)</span>
                </div>
                <div className="bar" style={{ height: slide === 7 ? '15%' : '0%' }}>
                  <span className="bar-value">~15%</span>
                  <span className="bar-label">Infant<br/>(After)</span>
                </div>
              </div>
            </div>
            <p className="text-center mt-12 text-inkSoft italic text-lg">Estimated reduction in historical mortality rates with basic antibiotics.</p>
          </div>
        </div>

        {/* Slide 8: Population Impact */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${slide === 8 ? 'opacity-100 scale-100 pointer-events-auto' : slide < 8 ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-0 scale-110 pointer-events-none'}`}>
          <div className="bg-white shadow-2xl rounded p-12 max-w-4xl w-full text-center relative overflow-hidden">
             <h2 className="font-display text-5xl mb-6 relative z-10">The Resulting Boom</h2>
             <p className="text-2xl text-inkSoft leading-relaxed mb-6 relative z-10">
               Song medicine was empirical and ready to integrate new treatments.
             </p>
             <ul className="text-xl text-inkSoft space-y-4 list-disc pl-6 text-left max-w-2xl mx-auto relative z-10">
               <li>Infections become survivable ailments.</li>
               <li>Population grows by an additional 20 million within decades.</li>
               <li>Unprecedented manpower for industry and defense.</li>
             </ul>
          </div>
        </div>

        
        {/* Slide 9: The Cost of Penicillin */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${slide === 9 ? 'opacity-100 scale-100 pointer-events-auto' : slide < 9 ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-0 scale-110 pointer-events-none'}`}>
          <div className="flex bg-white shadow-2xl rounded overflow-hidden max-w-6xl w-full">
             <div className="w-1/2 relative min-h-[450px]">
              <img src="/vial_negative.png" alt="Overpopulation" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="w-1/2 p-12 flex flex-col justify-center bg-parchment">
              <h2 className="font-display text-5xl mb-6 text-cinnabar">The Strain of Life</h2>
              <p className="text-xl text-inkSoft leading-relaxed mb-6">
                Saving millions creates a new crisis: a massive population boom that outpaces food production and infrastructure.
              </p>
              <ul className="text-xl text-inkSoft space-y-4 list-disc pl-6 text-left">
                <li>Urban centers become dangerously overcrowded.</li>
                <li>Famine risk increases as mouths to feed multiply.</li>
                <li>Antibiotic resistance inevitably develops due to misuse.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Slide 10: Artifact 2 - The Pearls */}
        <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-1000 ${slide === 10 ? 'scale-100 opacity-100 pointer-events-auto' : slide < 10 ? 'scale-90 opacity-0 pointer-events-none' : 'scale-110 opacity-0 pointer-events-none'}`}>
          <div className="flex bg-white shadow-2xl rounded overflow-hidden max-w-5xl w-full">
            <div className="w-1/2 p-12 flex flex-col justify-center">
              <div className="seal text-5xl mb-4 text-ink">珠</div>
              <h2 className="font-display text-5xl mb-2">The Pearls</h2>
              <div className="text-xl italic text-cinnabar mb-8">珍珠 · The Pearl</div>
              <p className="text-2xl text-inkSoft leading-relaxed">
                A burlap sack overflowing with large, perfectly spherical, luminous artificial pearls from the future.
              </p>
            </div>
            <div className="w-1/2 relative min-h-[400px]">
              <img src="/bag_of_pearls.png" alt="Bag of Pearls" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Slide 11: The Value of Pearls */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${slide === 11 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <h2 className="font-display text-5xl mb-12 bg-white/90 p-4 rounded shadow">From Commoner to Millionaire</h2>
          <div className="flex gap-8 max-w-6xl w-full">
            <div className="w-1/2 bg-white rounded shadow-xl overflow-hidden flex flex-col p-8 justify-center">
              <h3 className="font-display text-3xl mb-4 text-cinnabar">The Pearl Famine</h3>
              <p className="text-lg">During the Song Dynasty, there was a massive shortage of high-quality pearls. They were reserved for royalty and incredibly expensive. A single large, perfectly spherical pearl could buy an estate.</p>
            </div>
            <div className="w-1/2 bg-white rounded shadow-xl overflow-hidden flex flex-col justify-center p-8">
              <h3 className="font-display text-3xl mb-4">Instant Immense Wealth</h3>
              <ul className="text-xl space-y-4 list-disc pl-6">
                <li>Your modern artificial pearls are flawless and larger than any natural pearl.</li>
                <li>You immediately become one of the wealthiest merchants in Bianjing.</li>
                <li>Access to the highest echelons of Song society and court officials.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Slide 12: Buying Survival */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${slide === 12 ? 'opacity-100 scale-100 pointer-events-auto' : slide < 12 ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-0 scale-110 pointer-events-none'}`}>
          <div className="flex bg-white shadow-2xl rounded overflow-hidden max-w-6xl w-full">
            <div className="w-1/2 relative min-h-[450px]">
              <img src="/vivid_song_dynasty_city.png" alt="Song City" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="w-1/2 p-12 flex flex-col justify-center">
              <h2 className="font-display text-5xl mb-6 text-cinnabar">Buying Survival</h2>
              <p className="text-xl text-inkSoft leading-relaxed mb-6">
                When the Jin invasion begins, wealth is your only shield. If you fail to prepare, you will perish in the sack of the capital.
              </p>
              <p className="text-xl text-inkSoft leading-relaxed font-bold">
                With your limitless funds, you can hire a private mercenary army, bribe officials for safe passage south, or even fund the Song military defense yourself.
              </p>
            </div>
          </div>
        </div>

        
        {/* Slide 13: The Danger of Wealth */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${slide === 13 ? 'opacity-100 scale-100 pointer-events-auto' : slide < 13 ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-0 scale-110 pointer-events-none'}`}>
          <div className="flex bg-white shadow-2xl rounded overflow-hidden max-w-6xl w-full flex-row-reverse">
             <div className="w-1/2 relative min-h-[450px]">
              <img src="/pearls_negative.png" alt="Greed and Corruption" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="w-1/2 p-12 flex flex-col justify-center bg-parchment">
              <h2 className="font-display text-5xl mb-6 text-cinnabar">A Target on Your Back</h2>
              <p className="text-xl text-inkSoft leading-relaxed mb-6">
                Immense, sudden wealth in a feudal society is a beacon for corruption, theft, and fatal political intrigue.
              </p>
              <ul className="text-xl text-inkSoft space-y-4 list-disc pl-6 text-left">
                <li>Corrupt officials will attempt to seize your assets.</li>
                <li>Ruthless criminals will target you and your family.</li>
                <li>Hyperinflation of luxury goods disrupts the local economy.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Slide 14: Artifact 3 - The Tuber */}
        <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-1000 ${slide === 14 ? 'scale-100 opacity-100 pointer-events-auto' : slide < 14 ? 'scale-90 opacity-0 pointer-events-none' : 'scale-110 opacity-0 pointer-events-none'}`}>
          <div className="flex bg-white shadow-2xl rounded overflow-hidden max-w-5xl w-full">
             <div className="w-1/2 p-12 flex flex-col justify-center">
              <div className="seal text-5xl mb-4 text-ink">薯</div>
              <h2 className="font-display text-5xl mb-2">The Tuber</h2>
              <div className="text-xl italic text-cinnabar mb-8">土豆 · The Potato</div>
              <p className="text-2xl text-inkSoft leading-relaxed">
                A burlap sack of seed potatoes. A miracle crop that turns poor, marginal soil into people.
              </p>
            </div>
            <div className="w-1/2 relative min-h-[400px]">
              <img src="/seed_potatoes_1779649692896.png" alt="Seed Potatoes" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Slide 15: Yield Research */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${slide === 15 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <h2 className="font-display text-5xl mb-12 bg-white/90 p-4 rounded shadow">Caloric Yield Comparison</h2>
          <div className="flex gap-8 max-w-6xl w-full">
            <div className="w-1/2 bg-white rounded shadow-xl overflow-hidden flex flex-col">
              <img src="/terraced_farming_1779649705699.png" className="h-64 object-cover" alt="Terraced Farming" />
            </div>
            <div className="w-1/2 bg-white rounded shadow-xl overflow-hidden flex flex-col justify-center p-8">
              <h3 className="font-display text-3xl mb-4 text-cinnabar">The Marginal Soil Miracle</h3>
              <ul className="text-xl space-y-4 list-disc pl-6">
                <li>Potatoes thrive in cold uplands where rice and wheat fail.</li>
                <li>They yield <strong>2x to 4x the calories</strong> per acre compared to traditional grains.</li>
                <li>Hidden underground, protecting them from raiders and harsh weather.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Slide 16: Eradicating Famine */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${slide === 16 ? 'opacity-100 scale-100 pointer-events-auto' : slide < 16 ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-0 scale-110 pointer-events-none'}`}>
          <div className="flex bg-white shadow-2xl rounded overflow-hidden max-w-6xl w-full">
             <div className="w-1/2 relative min-h-[450px]">
              <img src="/bumper_crop_1779649719878.png" alt="Bumper Crop" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="w-1/2 p-12 flex flex-col justify-center bg-parchment">
              <h2 className="font-display text-5xl mb-6 text-cinnabar">Eradicating Famine</h2>
              <p className="text-xl text-inkSoft leading-relaxed mb-6">
                With a steady, reliable food source that doesn't depend on perfect weather or prime riverfront land, famine loses its grip on the empire.
              </p>
              <p className="text-xl text-inkSoft leading-relaxed font-bold">
                A fed population is the foundation of dynastic strength, enabling massive armies, economic surplus, and unshakeable stability.
              </p>
            </div>
          </div>
        </div>

        
        {/* Slide 17: The Blight Threat */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${slide === 17 ? 'opacity-100 scale-100 pointer-events-auto' : slide < 17 ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-0 scale-110 pointer-events-none'}`}>
          <div className="flex bg-white shadow-2xl rounded overflow-hidden max-w-6xl w-full">
             <div className="w-1/2 relative min-h-[450px]">
              <img src="/potato_negative.png" alt="Crop Failure" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="w-1/2 p-12 flex flex-col justify-center bg-parchment">
              <h2 className="font-display text-5xl mb-6 text-cinnabar">The Monoculture Trap</h2>
              <p className="text-xl text-inkSoft leading-relaxed mb-6">
                Relying heavily on a single clone of a new crop leaves the entire food supply vulnerable to devastation.
              </p>
              <ul className="text-xl text-inkSoft space-y-4 list-disc pl-6 text-left">
                <li>A single pathogen (like Late Blight) can wipe out the harvest.</li>
                <li>Lack of genetic diversity guarantees widespread failure if diseased.</li>
                <li>Over-reliance creates a catastrophic famine risk for millions.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Slide 18: Conclusion & Vote */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${slide === 18 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <h2 className="font-display text-6xl mb-6 bg-white/90 p-4 rounded shadow">Conclusion</h2>
          <p className="text-2xl text-inkSoft mb-12 bg-white/90 p-4 rounded shadow text-center max-w-3xl">
            Penicillin saves lives. Pearls buy survival. Potatoes save the future. Which artifact gives you the greatest advantage to survive, acquire immense wealth, and successfully fulfill your mission?
          </p>
          <div className="p-6 bg-white rounded-xl shadow-2xl mb-8 pointer-events-auto">
            <img 
              src="/qr-code-s.png" 
              alt="QR Code to Vote" 
              className="w-64 h-64 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-3xl font-display text-cinnabar bg-white/90 px-6 py-2 rounded shadow">Scan to Cast Your Vote</p>
        </div>

      </div>

      {/* Navigation Controls Overlay */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-20" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={prevSlide}
          className={`px-6 py-3 rounded border border-ink/20 hover:border-cinnabar transition-colors bg-white/50 backdrop-blur ${slide === 1 && !showTitle ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-white'}`}
          disabled={slide === 1 && !showTitle}
        >
          Previous
        </button>
        <button 
          onClick={nextSlide}
          className={`px-6 py-3 rounded border border-ink/20 hover:border-cinnabar transition-colors bg-white/50 backdrop-blur ${slide === totalSlides ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-white'}`}
          disabled={slide === totalSlides}
        >
          Next
        </button>
      </div>
    </div>
  );
}
