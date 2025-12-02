import React from "react";

const TopHeader = () => {
  return (
    <div className="flex items-center justify-between mb-6">

      <div>
        <h1 className="text-3xl font-bold text-[#1992ff]">
          Greenwood Elementary School
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Welcome back, School Admin! Here&apos;s your school&apos;s overview.
        </p>
      </div>
      <div className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 bg-white text-xs text-slate-500 shadow-sm">
        <span className="font-medium text-slate-600">CBSE Board</span>
        <span className="mx-1">•</span>
        <span>Last updated: 12/08/2025, 15:46:57</span>
      </div>
    </div>
  );
};

export default TopHeader;
