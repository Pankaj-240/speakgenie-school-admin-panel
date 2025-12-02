import React from "react";
import { Search, ChevronDown, Filter } from "lucide-react";

const LeaderboardControls = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(15,23,42,0.08)] px-4 py-3 mt-4">
      <div className="flex items-center gap-3">
        {/* Search input - big pill, takes max width */}
        <div className="flex items-center flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2">
          <Search size={16} className="text-slate-300" />
          <input
            type="text"
            placeholder="Search students..."
            className="bg-transparent outline-none text-xs text-slate-600 ml-2 w-full"
          />
        </div>

        {/* All Classes button */}
        <button className="text-xs px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 flex items-center gap-1">
          All Classes
          <ChevronDown size={14} className="text-slate-400" />
        </button>

        {/* This Month button */}
        <button className="text-xs px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 flex items-center gap-1">
          This Month
          <ChevronDown size={14} className="text-slate-400" />
        </button>

        {/* More Filters button */}
        <button className="text-xs px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 flex items-center gap-2">
          <Filter size={14} className="text-slate-500" />
          More Filters
        </button>
      </div>
    </div>
  );
};

export default LeaderboardControls;
