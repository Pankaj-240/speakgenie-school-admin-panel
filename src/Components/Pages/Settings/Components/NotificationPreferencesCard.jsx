import React from "react";

const NotificationRow = ({ title, description, defaultChecked }) => (
  <div className="flex items-center justify-between py-2 border-b last:border-b-0">
    <div>
      <p className="text-sm font-medium text-slate-800">{title}</p>
      <p className="text-xs text-slate-500">{description}</p>
    </div>
    <input
      type="checkbox"
      defaultChecked={defaultChecked}
      className="w-4 h-4 accent-[#1992ff]"
    />
  </div>
);

const NotificationPreferencesCard = ({ className = "" }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm p-5 ${className}`}
    >
      <h2 className="text-base font-semibold text-slate-900">
        Notification Preferences
      </h2>
      <p className="text-xs text-slate-500 mt-1 mb-4">
        Manage how and when you receive notifications
      </p>

      <div className="space-y-1">
        <NotificationRow
          title="Email Notifications"
          description="Receive updates via email"
          defaultChecked={true}
        />
        <NotificationRow
          title="Performance Reports"
          description="Weekly performance summaries"
          defaultChecked={true}
        />
        <NotificationRow
          title="New School Alerts"
          description="Notifications for new school registrations"
          defaultChecked={false}
        />
      </div>
    </div>
  );
};

export default NotificationPreferencesCard;
