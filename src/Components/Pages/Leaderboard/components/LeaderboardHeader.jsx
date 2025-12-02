import React from "react";
import { Trophy } from "lucide-react";

const LeaderboardHeader = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1992ff] flex items-center gap-2">
          <Trophy size={22} />
          School Leaderboard
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Celebrating out top performers and encouraging healthy competition
        </p>
      </div>

      <div className="inline-flex items-center rounded-full bg-white border border-slate-200 px-3 py-1 text-xs text-slate-600 shadow-sm">
        <span className="text-slate-400">•</span>
        <span className="ml-1">Updated: 12/08/2025</span>
      </div>
    </div>
  );
};

export default LeaderboardHeader;
