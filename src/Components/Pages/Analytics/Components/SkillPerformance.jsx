import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const SKILLS = [
  { name: "Vocabulary", value: 82, color: "#3b82f6" },
  { name: "Grammar", value: 78, color: "#22c55e" },
  { name: "Pronunciation", value: 76, color: "#f59e0b" },
  { name: "Listening", value: 85, color: "#8b5cf6" },
  { name: "Speaking", value: 74, color: "#f97373" },
];

const MOM_DATA = [
  { name: "Vocabulary", value: 82 },
  { name: "Grammar", value: 78 },
  { name: "Pronunciation", value: 76 },
  { name: "Listening", value: 85 },
  { name: "Speaking", value: 74 },
];

const MOM_CARDS = [
  { label: "Vocabulary", change: "+5%" },
  { label: "Grammar", change: "+8%" },
  { label: "Pronunciation", change: "+12%" },
  { label: "Listening", change: "+3%" },
  { label: "Speaking", change: "+15%" },
];

const SkillPerformance = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 h-[600px] flex flex-col">
      {/* Title */}
      <div>
        <h2 className="text-base font-semibold text-slate-900">
          Average Performance by Skill Area
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Individual skill performance metrics and improvements
        </p>
      </div>

      {/* Horizontal bars */}
      <div className="mt-4 space-y-3">
        {SKILLS.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-slate-600">{skill.name}</span>
              <span className="text-slate-700 font-medium">
                {skill.value}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${skill.value}%`,
                  backgroundColor: skill.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mini bar chart */}
      <div className="mt-4 h-28">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={MOM_DATA} barSize={20}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Month-over-Month cards */}
      <div className="mt-3">
        <p className="text-xs font-semibold text-slate-700 mb-2">
          Month-over-Month Improvement
        </p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {MOM_CARDS.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2"
            >
              <span className="text-slate-600">{item.label}</span>
              <span className="text-emerald-600 font-semibold">
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillPerformance;
