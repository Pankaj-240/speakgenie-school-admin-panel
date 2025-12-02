import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Class 5", students: 85 },
  { name: "Class 6", students: 72 },
  { name: "Class 7", students: 64 },
  { name: "Class 8", students: 91 },
  { name: "Class 9", students: 58 },
];

const EnrollmentSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 h-full">
      {/* Title */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Class-wise student enrollment
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Number of students in each class
          </p>
        </div>

        <span className="text-xs text-slate-400">This week</span>
      </div>

      {/* Bar Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={24}>
            {/* Dotted background grid */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            {/* X-axis labels */}
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#64748b" }}
              axisLine={false}
              tickLine={false}
            />

            {/* Bars */}
            <Bar
              dataKey="students"
              fill="#1992ff"
              radius={[8, 8, 0, 0]} // rounded top edges only
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EnrollmentSection;
