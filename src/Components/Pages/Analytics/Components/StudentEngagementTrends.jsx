import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", time: 45, sessions: 30 },
  { month: "Feb", time: 50, sessions: 35 },
  { month: "Mar", time: 47, sessions: 40 },
  { month: "Apr", time: 55, sessions: 48 },
  { month: "May", time: 58, sessions: 52 },
];

const StudentEngagementTrends = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 mt-4">
      {/* Title + subtitle */}
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-900">
          Student Engagement Trends
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Monthly engagement patterns and learning time
        </p>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap={30}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />
            {/* blue = learning time */}
            <Bar
              dataKey="time"
              fill="#3b82f6"
              radius={[6, 6, 0, 0]}
            />
            {/* green = sessions */}
            <Bar
              dataKey="sessions"
              fill="#22c55e"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StudentEngagementTrends;
