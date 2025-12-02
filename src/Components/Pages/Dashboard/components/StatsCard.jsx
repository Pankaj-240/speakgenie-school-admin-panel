import React from "react";

const StatsCard = ({ label, value, subText, icon, accentBg }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 flex items-start justify-between">
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-400">
          {label}
        </p>
        <p className="text-2xl font-bold text-slate-900 mt-2">{value}</p>
        {subText && (
          <p className="text-xs text-slate-500 mt-1">
            {subText}
          </p>
        )}
      </div>

      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${accentBg}`}>
        {icon}
      </div>
    </div>
  );
};

export default StatsCard;
