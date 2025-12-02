import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Excellent (85–100%)", value: 45 },
  { name: "Good (70–84%)", value: 35 },
  { name: "Needs Improvement (<70%)", value: 20 },
];

const COLORS = ["#22c55e", "#fbbf24", "#f97373"]; // green, yellow, red

const StudentPerformance = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 h-[600px] flex flex-col">
      {/* Title + subtitle */}
      <div>
        <h2 className="text-base font-semibold text-slate-900">
          Student Performance Distribution
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Overall accuracy breakdown across all students
        </p>
      </div>

      {/* Pie chart centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={0}
                outerRadius={80}
                stroke="none"
                isAnimationActive={true}
              >
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Legend under chart, left aligned */}
      <div className="mt-2 space-y-1 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[0] }} />
          <span className="text-slate-600">Excellent (85–100%)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[1] }} />
          <span className="text-slate-600">Good (70–84%)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[2] }} />
          <span className="text-slate-600">Needs Improvement (&lt;70%)</span>
        </div>
      </div>
    </div>
  );
};

export default StudentPerformance;
