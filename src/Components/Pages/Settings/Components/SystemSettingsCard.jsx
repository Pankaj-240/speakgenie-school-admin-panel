import React from "react";

const SystemSettingsCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">
      <h2 className="text-base font-semibold text-slate-900">
        System Settings
      </h2>
      <p className="text-xs text-slate-500 mt-1 mb-4">
        Configure system preferences and default options
      </p>

      {/* Default language */}
      <div className="mb-3">
        <label className="block text-xs text-slate-600 mb-1">
          Default Language
        </label>
        <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-500">
          <option>English</option>
          <option>Hindi</option>
          <option>Spanish</option>
        </select>
      </div>

      {/* Time zone */}
      <div className="mb-4">
        <label className="block text-xs text-slate-600 mb-1">
          Time Zone
        </label>
        <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-500">
          <option>UTC-5 (Eastern Time)</option>
          <option>UTC+5:30 (India Standard Time)</option>
          <option>UTC (GMT)</option>
        </select>
      </div>

      <button className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#1992ff] text-white text-sm font-medium hover:bg-blue-600">
        Save Settings
      </button>
    </div>
  );
};

export default SystemSettingsCard;
