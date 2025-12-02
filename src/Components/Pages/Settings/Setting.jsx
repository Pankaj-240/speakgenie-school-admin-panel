import React from "react";
import SettingsHeader from "./Components/SettingsHeader";
import ProfileSettingsCard from "./Components/ProfileSettingsCard";
import SystemSettingsCard from "./Components/SystemSettingsCard";
import NotificationPreferencesCard from "./Components/NotificationPreferencesCard";
import DataManagementCard from "./Components/DataManagementCard";


const Setting = () => {
  return (
    <div className="space-y-6">
      <SettingsHeader />

      <div className="grid grid-cols-2 gap-4">
        {/* top row */}
        <ProfileSettingsCard  />
        <SystemSettingsCard/>

        {/* bottom row */}
        <NotificationPreferencesCard  />
        <DataManagementCard />
      </div>
    </div>
  );
};

export default Setting;

