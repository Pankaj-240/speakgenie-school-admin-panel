import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Excellent", value: 45 },
  { name: "Average", value: 35 },
  { name: "Needs Attention", value: 20 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f97316"]; // green, blue, orange

const PerformanceSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 h-full">
      {/* Title */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Performance distribution
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Overall student performance categories
          </p>
        </div>

        <span className="text-xs text-slate-400">This week</span>
      </div>

      {/* Chart + legend */}
      <div className="flex items-center gap-6">
        {/* Donut chart */}
        <div className="w-40 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={45}
                outerRadius={70}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend + values */}
        <div className="space-y-3 text-sm">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="text-slate-600">{item.name}</span>
              </div>
              <span className="text-slate-500">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
