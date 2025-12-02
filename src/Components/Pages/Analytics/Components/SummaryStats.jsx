import React from "react";

const SummaryStats = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {/* Total Learning Hours */}
      <div className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(15,23,42,0.08)] px-5 py-4">
        <p className="text-xs text-slate-500 mb-1">Total Learning Hours</p>
        <p className="text-2xl font-bold text-slate-900">2,847</p>
        <p className="text-xs text-emerald-600 mt-1">
          +12% from last month
        </p>
      </div>

      {/* Lessons Completed */}
      <div className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(15,23,42,0.08)] px-5 py-4">
        <p className="text-xs text-slate-500 mb-1">Lessons Completed</p>
        <p className="text-2xl font-bold text-slate-900">1,892</p>
        <p className="text-xs text-emerald-600 mt-1">
          +18% from last month
        </p>
      </div>

      {/* Average Session Time */}
      <div className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(15,23,42,0.08)] px-5 py-4">
        <p className="text-xs text-slate-500 mb-1">Average Session Time</p>
        <p className="text-2xl font-bold text-slate-900">24 min</p>
        <p className="text-xs text-emerald-600 mt-1">
          +8% from last month
        </p>
      </div>

      {/* Active Students */}
      <div className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(15,23,42,0.08)] px-5 py-4">
        <p className="text-xs text-slate-500 mb-1">Active Students</p>
        <p className="text-2xl font-bold text-slate-900">1,156</p>
        <p className="text-xs text-emerald-600 mt-1">
          +5% from last month
        </p>
      </div>
    </div>
  );
};

export default SummaryStats;
