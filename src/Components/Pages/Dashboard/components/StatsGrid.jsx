import React from "react";
import { Users, GraduationCap, TrendingUp, Medal } from "lucide-react";
import StatsCard from "./StatsCard";

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard
        label="Total Students"
        value="245"
        subText="+12% new from last week"
        icon={<Users size={20} className="text-blue-500" />}
        accentBg="bg-blue-50"
      />

      <StatsCard
        label="Total Classes"
        value="18"
        subText="+8% from last month "
        icon={<GraduationCap size={20} className="text-orange-500" />}
        accentBg="bg-orange-50"
      />

      <StatsCard
        label="Avg Performance"
        value="86.2%"
        subText="+5% from last month"
        icon={<TrendingUp size={20} className="text-emerald-500" />}
        accentBg="bg-emerald-50"
      />

      <StatsCard
        label="Top Performer"
        value="830 pts"
        subText="Ahan Kumar · Class 8"
        icon={<Medal size={20} className="text-yellow-500" />}
        accentBg="bg-yellow-50"
      />
    </div>
  );
};

export default StatsGrid;
