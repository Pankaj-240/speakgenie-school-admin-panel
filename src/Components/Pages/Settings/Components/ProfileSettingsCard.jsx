import React from "react";

const ProfileSettingsCard = ({ className = "" }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm p-5 ${className}`}
    >
      <h2 className="text-base font-semibold text-slate-900">
        Profile Settings
      </h2>
      <p className="text-xs text-slate-500 mt-1 mb-4">
        Update your personal information and contact details
      </p>

      <div className="space-y-3 text-sm">
        {/* Full name */}
        <div>
          <label className="block text-xs text-slate-600 mb-1">
            Full Name
          </label>
          <input
            type="text"
            defaultValue="Admin User"
            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs text-slate-600 mb-1">
            Email
          </label>
          <input
            type="email"
            defaultValue="admin@example.com"
            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs text-slate-600 mb-1">
            Phone
          </label>
          <input
            type="tel"
            defaultValue="+1-555-0123"
            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <button className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#1992ff] text-white text-sm font-medium hover:bg-blue-600">
        Update Profile
      </button>
    </div>
  );
};

export default ProfileSettingsCard;
