import React from "react";

const PillButton = ({ children }) => (
  <button className="px-3 py-1 rounded-full border border-slate-200 bg-white text-xs text-slate-700 hover:bg-slate-50">
    {children}
  </button>
);

const DataManagementCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">
      <h2 className="text-base font-semibold text-slate-900">
        Data Management
      </h2>
      <p className="text-xs text-slate-500 mt-1 mb-4">
        Export data and manage system backups
      </p>

      {/* Export data */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-slate-700 mb-2">
          Export Data
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          <PillButton>Export Student Data</PillButton>
          <PillButton>Export School Reports</PillButton>
          <PillButton>Export Analytics</PillButton>
        </div>
      </div>

      {/* Backup */}
      <div>
        <p className="text-xs font-semibold text-slate-700 mb-2">
          Backup
        </p>
        <button className="px-4 py-2 rounded-lg bg-[#1992ff] text-white text-xs font-medium hover:bg-blue-600">
          Create Backup
        </button>
        <p className="text-[11px] text-slate-400 mt-2">
          Last backup: March 15, 2024
        </p>
      </div>
    </div>
  );
};

export default DataManagementCard;
