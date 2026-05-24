"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Presentation() {
  const [slide, setSlide] = useState(1);
  const [showTitle, setShowTitle] = useState(false);

  const nextSlide = () => {
    if (slide === 1 && !showTitle) {
      setShowTitle(true);
    } else if (slide < 6) {
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

  return (
    <div 
      className="fixed inset-0 z-50 bg-parchment text-ink overflow-hidden flex items-center justify-center cursor-pointer select-none"
      onClick={nextSlide}
    >
      <div className="absolute top-4 right-6 text-sm text-muted">
        Slide {slide} / 6
      </div>
      <Link href="/" className="absolute top-4 left-6 text-sm text-muted hover:text-cinnabar transition-colors z-10" onClick={(e) => e.stopPropagation()}>
        ← Exit
      </Link>

      {/* Slide 1 */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${slide === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`flex flex-col items-center transition-opacity duration-[2000ms] ease-in-out ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="font-display text-5xl md:text-7xl text-ink text-center mb-4">
            Back to the <span className="text-cinnabar italic">Song Dynasty</span>
          </h1>
          <p className="text-lg md:text-xl text-inkSoft font-serif italic text-center max-w-2xl">
            Top 3 Common Items that Can Make You a Song Dynasty Millionaire
          </p>
        </div>
        {!showTitle && (
          <div className="absolute bottom-12 text-muted text-sm animate-pulse">
            Tap to begin
          </div>
        )}
      </div>

      {/* Slide 2 */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${slide === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <h2 className="font-display text-4xl mb-16 text-center uppercase tracking-widest">The Three Artifacts</h2>
        <div className="flex gap-12 text-center">
          <div>
            <div className="seal text-6xl mb-6 mx-auto">霉</div>
            <h3 className="font-display text-2xl">The Vial</h3>
          </div>
          <div>
            <div className="seal text-6xl mb-6 mx-auto">火</div>
            <h3 className="font-display text-2xl">The Manual</h3>
          </div>
          <div>
            <div className="seal text-6xl mb-6 mx-auto">薯</div>
            <h3 className="font-display text-2xl">The Tuber</h3>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-1000 ${slide === 3 ? 'scale-100 opacity-100' : slide < 3 ? 'scale-90 opacity-0' : 'scale-110 opacity-0 pointer-events-none'}`}>
        <div className="max-w-4xl w-full flex items-center gap-12 px-12 group cursor-default">
          <div className="seal text-[120px] leading-none shrink-0 group-hover:scale-125 transition-transform duration-500 ease-out">霉</div>
          <div>
            <h2 className="font-display text-5xl mb-2">The Vial</h2>
            <div className="text-xl italic text-cinnabar mb-8">青霉 · The Mold</div>
            <p className="text-2xl text-inkSoft leading-relaxed mb-6">
              A frosted glass cylinder containing freeze-dried Penicillium chrysogenum, plus an illustrated wound manual.
            </p>
            <ul className="text-xl text-inkSoft space-y-4 list-disc pl-6">
              <li>Song medicine was empirical and ready for it.</li>
              <li>Battlefield mortality drops ~60%.</li>
              <li>Infant and maternal mortality drops ~30%.</li>
              <li>Population grows by an additional 20 million.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Slide 4 */}
      <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-1000 ${slide === 4 ? 'scale-100 opacity-100' : slide < 4 ? 'scale-90 opacity-0' : 'scale-110 opacity-0 pointer-events-none'}`}>
        <div className="max-w-4xl w-full flex items-center gap-12 px-12 group cursor-default">
          <div className="seal text-[120px] leading-none shrink-0 group-hover:scale-125 transition-transform duration-500 ease-out">火</div>
          <div>
            <h2 className="font-display text-5xl mb-2">The Manual</h2>
            <div className="text-xl italic text-cinnabar mb-8">火药 · The Powder</div>
            <p className="text-2xl text-inkSoft leading-relaxed mb-6">
              A waterproof booklet with the improved black-powder ratio (75% saltpeter, 15% charcoal, 10% sulfur) and matchlock musket diagrams.
            </p>
            <ul className="text-xl text-inkSoft space-y-4 list-disc pl-6">
              <li>Song China already possessed gunpowder & bronze casting.</li>
              <li>The Jin invasion breaks against cannon fire.</li>
              <li>The dynasty survives 1127 CE.</li>
              <li>Changes the shape of warfare for 1,000 years.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Slide 5 */}
      <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-1000 ${slide === 5 ? 'scale-100 opacity-100' : slide < 5 ? 'scale-90 opacity-0' : 'scale-110 opacity-0 pointer-events-none'}`}>
        <div className="max-w-4xl w-full flex items-center gap-12 px-12 group cursor-default">
          <div className="seal text-[120px] leading-none shrink-0 group-hover:scale-125 transition-transform duration-500 ease-out">薯</div>
          <div>
            <h2 className="font-display text-5xl mb-2">The Tuber</h2>
            <div className="text-xl italic text-cinnabar mb-8">土豆 · The Potato</div>
            <p className="text-2xl text-inkSoft leading-relaxed mb-6">
              A burlap sack of seed potatoes. A crop that turns poor, marginal soil into people.
            </p>
            <ul className="text-xl text-inkSoft space-y-4 list-disc pl-6">
              <li>Thrives where rice and wheat fail (cold uplands).</li>
              <li>Yields 2x to 4x the calories per acre of grain.</li>
              <li>Famine loses its grip on the empire.</li>
              <li>A fed population is the foundation of dynastic strength.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Slide 6 */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${slide === 6 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <h2 className="font-display text-5xl mb-12">Cast Your Vote</h2>
        <div className="p-4 bg-white rounded-xl shadow-xl mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://back-to-song-dynasty.vercel.app" 
            alt="QR Code to Vote" 
            className="w-64 h-64"
          />
        </div>
        <p className="text-2xl text-muted italic">Scan to choose your artifact.</p>
      </div>

      {/* Navigation Controls Overlay */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-10" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={prevSlide}
          className={`px-4 py-2 rounded border border-ink/20 hover:border-cinnabar transition-colors ${slide === 1 && !showTitle ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
          disabled={slide === 1 && !showTitle}
        >
          Previous
        </button>
        <button 
          onClick={nextSlide}
          className={`px-4 py-2 rounded border border-ink/20 hover:border-cinnabar transition-colors ${slide === 6 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
          disabled={slide === 6}
        >
          Next
        </button>
      </div>
    </div>
  );
}
