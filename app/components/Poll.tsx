"use client";

import { useState } from "react";

export default function Poll() {
  const [voted, setVoted] = useState(false);
  const [results, setResults] = useState({
    penicillin: 42,
    pearls: 15,
    potatoes: 89,
  });

  const handleVote = (choice: "penicillin" | "pearls" | "potatoes") => {
    setResults((prev) => ({
      ...prev,
      [choice]: prev[choice] + 1,
    }));
    setVoted(true);
  };

  const totalVotes = results.penicillin + results.pearls + results.potatoes;

  return (
    <div className="max-w-2xl mx-auto p-8 paper-card rounded-sm text-center">
      <h3 className="font-display text-2xl text-ink mb-6">Make Your Choice</h3>
      {!voted ? (
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleVote("penicillin")}
            className="p-4 border border-ink/20 hover:border-cinnabar hover:text-cinnabar transition-colors rounded-sm text-lg"
          >
            霉 Penicillin
          </button>
          <button
            onClick={() => handleVote("pearls")}
            className="p-4 border border-ink/20 hover:border-cinnabar hover:text-cinnabar transition-colors rounded-sm text-lg"
          >
            珠 Pearls
          </button>
          <button
            onClick={() => handleVote("potatoes")}
            className="p-4 border border-ink/20 hover:border-cinnabar hover:text-cinnabar transition-colors rounded-sm text-lg"
          >
            薯 Potatoes
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-muted italic mb-6">Thank you for voting. Here are the choices of other travelers:</p>
          <div className="space-y-3">
            <div className="flex flex-col text-left">
              <div className="flex justify-between text-sm mb-1">
                <span>霉 Penicillin</span>
                <span>{Math.round((results.penicillin / totalVotes) * 100)}%</span>
              </div>
              <div className="w-full bg-ink/10 h-2 rounded-full overflow-hidden">
                <div className="bg-cinnabar h-full" style={{ width: `${(results.penicillin / totalVotes) * 100}%` }} />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <div className="flex justify-between text-sm mb-1">
                <span>珠 Pearls</span>
                <span>{Math.round((results.pearls / totalVotes) * 100)}%</span>
              </div>
              <div className="w-full bg-ink/10 h-2 rounded-full overflow-hidden">
                <div className="bg-cinnabar h-full" style={{ width: `${(results.pearls / totalVotes) * 100}%` }} />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <div className="flex justify-between text-sm mb-1">
                <span>薯 Potatoes</span>
                <span>{Math.round((results.potatoes / totalVotes) * 100)}%</span>
              </div>
              <div className="w-full bg-ink/10 h-2 rounded-full overflow-hidden">
                <div className="bg-cinnabar h-full" style={{ width: `${(results.potatoes / totalVotes) * 100}%` }} />
              </div>
            </div>
          </div>
        
          <div className="mt-8 pt-6 border-t border-ink/10">
            <h4 className="font-display text-xl text-ink mb-4">Phase 2: The Wealth Simulation</h4>
            <p className="text-sm text-inkSoft mb-4">You have made your choice. Now, can you amass a fortune before the Jurchen army arrives?</p>
            <a 
              href="/game.html" 
              className="inline-block px-8 py-3 bg-cinnabar text-white hover:bg-red-700 transition-colors uppercase tracking-widest text-sm font-display rounded-sm shadow-lg"
            >
              Start Simulation
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
