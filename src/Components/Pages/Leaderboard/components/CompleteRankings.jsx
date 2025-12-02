import React from "react";
import { ArrowRight, Eye } from "lucide-react";

const rankings = [
  { rank: 1, name: "Ahan Kumar",       class: "8", points: 830, accuracy: "96%", badges: "🏆⚡💬", lessons: 15 },
  { rank: 2, name: "Hvff",             class: "7", points: 295, accuracy: "94%", badges: "💬💪",   lessons: 12 },
  { rank: 3, name: "Flower Girl",      class: "6", points: 190, accuracy: "93%", badges: "🌸💬",   lessons: 8 },
  { rank: 4, name: "12 June Child Test", class: "5", points: 165, accuracy: "92%", badges: "🌱⭐", lessons: 6 },
  { rank: 5, name: "Hcdff",            class: "4", points: 160, accuracy: "91%", badges: "💫💬",   lessons: 5 },
  { rank: 6, name: "Eva",              class: "3", points: 145, accuracy: "90%", badges: "✨💬",   lessons: 4 },
  { rank: 11, name: "Alex Thompson",   class: "7", points: 118, accuracy: "85%", badges: "⭐",     lessons: 3 },
  { rank: 12, name: "Maya Singh",      class: "6", points: 115, accuracy: "84%", badges: "🌟",    lessons: 2 },
];

const getInitials = (name) => {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0] || "";
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

const getRowBg = (rank) => {
  if (rank === 1 || rank === 2 || rank === 3) {
    // top 3 have soft yellow bg
    return "bg-gradient-to-r from-yellow-50 to-white border-yellow-100";
  }
  return "bg-[#f5f7fb] border-transparent";
};

const getRankBadgeColor = (rank) => {
  if (rank === 1) return "bg-yellow-400 text-white";
  if (rank === 2) return "bg-slate-300 text-slate-800";
  if (rank === 3) return "bg-amber-400 text-white";
  return "bg-blue-500 text-white";
};

const CompleteRankings = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 mt-4">
      {/* Title */}
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-[#1992ff]">
          Complete Rankings
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          All students ranked by points earned this month.
        </p>
      </div>

      <div className="space-y-3">
        {rankings.map((student) => (
          <div
            key={student.rank}
            className={`rounded-2xl border px-4 py-3 flex items-center justify-between ${getRowBg(
              student.rank
            )}`}
          >
            {/* Left side: rank + avatar + info */}
            <div className="flex items-center gap-4">
              {/* Rank badge */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold ${getRankBadgeColor(
                  student.rank
                )}`}
              >
                #{student.rank}
              </div>

              {/* Avatar + name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center text-xs font-semibold text-slate-800">
                  {getInitials(student.name)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {student.name}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Class {student.class}
                  </div>
                  {/* tiny emoji badges row */}
                  <div className="text-[11px] mt-1">{student.badges}</div>
                </div>
              </div>
            </div>

            {/* Right side: points + accuracy + button */}
            <div className="flex items-center gap-6">
              {/* Points */}
              <div className="text-right">
                <div className="text-sm font-semibold text-orange-500">
                  {student.points}
                </div>
                <div className="text-[11px] text-slate-500">points</div>
              </div>

              {/* Accuracy + lessons */}
              <div className="flex flex-col items-end gap-1">
                <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-[2px] text-[11px] font-medium text-emerald-600">
                  {student.accuracy}
                </div>
                <div className="text-[11px] text-slate-500 flex items-center gap-1">
                  <span className="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center text-[10px]">
                    ⚡
                  </span>
                  <span>{student.lessons}</span>
                </div>
              </div>

              {/* View button */}
              <button className="flex items-center gap-1 text-xs px-3 py-1 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600">
                <Eye size={14} />
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompleteRankings;
