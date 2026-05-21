"use client";

import { useState } from "react";

export default function Poll() {
  const [voted, setVoted] = useState(false);
  const [results, setResults] = useState({
    penicillin: 42,
    firearms: 15,
    potatoes: 89,
  });

  const handleVote = (choice: "penicillin" | "firearms" | "potatoes") => {
    setResults((prev) => ({
      ...prev,
      [choice]: prev[choice] + 1,
    }));
    setVoted(true);
  };

  const totalVotes = results.penicillin + results.firearms + results.potatoes;

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
            onClick={() => handleVote("firearms")}
            className="p-4 border border-ink/20 hover:border-cinnabar hover:text-cinnabar transition-colors rounded-sm text-lg"
          >
            火 Firearms
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
                <span>火 Firearms</span>
                <span>{Math.round((results.firearms / totalVotes) * 100)}%</span>
              </div>
              <div className="w-full bg-ink/10 h-2 rounded-full overflow-hidden">
                <div className="bg-cinnabar h-full" style={{ width: `${(results.firearms / totalVotes) * 100}%` }} />
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
        </div>
      )}
    </div>
  );
}
