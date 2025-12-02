import React from "react";
import { Flame, Trophy } from "lucide-react";

const podiumData = [
  // order: 2nd, 1st, 3rd so center is tallest like the design
  {
    rank: 2,
    name: "Hvff",
    class: "7",
    points: 295,
    color: "#9ca3af", // grey
  },
  {
    rank: 1,
    name: "Ahan Kumar",
    class: "8",
    points: 830,
    color: "#facc15", // yellow
  },
  {
    rank: 3,
    name: "Flower Girl",
    class: "6",
    points: 190,
    color: "#fb923c", // orange
  },
];

const getInitials = (name) => {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0] || "";
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

const getPodiumHeight = (rank) => {
  if (rank === 1) return "9rem"; // tallest center
  if (rank === 2) return "7rem";
  return "6.5rem";
};

const getRankLabel = (rank) => {
  if (rank === 1) return "1st";
  if (rank === 2) return "2nd";
  return "3rd";
};

const ChampionPodium = () => {
  return (
    <div className=" border border-[#1f1e1e22] rounded-2xl shadow-sm overflow-hidden pb-3 ">
     <div className="bg-amber-50 px-5 py-4">

      <div className=" w-full  flex  flex-col items-center ">
        <div className="flex ">
          <Flame size={18} className="text-orange-400" />
          <h2 className="text-sm font-semibold text-slate-900">
            Champions Podium
          </h2>
          <Flame size={18} className="text-orange-400" />
        </div>
        <div>
          {" "}
          <p className="text-xs text-[#d59724]">
            This month&apos;s top 3 achievers.
          </p>
        </div>
      </div>
     </div>

      {/* Podium row */}
      <div className="flex items-end justify-center gap-10 mt-3">
        {podiumData.map((student) => (
          <div key={student.rank} className="flex flex-col items-center">
            {/* Avatar + name above block */}
            <div className="flex flex-col items-center mb-3">
              {/* circular avatar (use initials for now) */}
              <div className="w-16 h-16 rounded-full border-4 border-white shadow-md bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center text-sm font-semibold text-slate-800">
                {getInitials(student.name)}
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-900 text-center">
                {student.name}
              </p>
              <p className="text-[11px] text-slate-500">
                Class {student.class}
              </p>
            </div>

            {/* Podium block */}
            <div
              className="w-28 rounded-2xl flex flex-col items-center justify-center text-white text-xs font-semibold shadow-md"
              style={{
                backgroundColor: student.color,
                height: getPodiumHeight(student.rank),
              }}
            >
              <div className="flex items-center gap-1 mb-1">
                <Trophy size={14} className="text-white/90" />
                <span>{getRankLabel(student.rank)} place</span>
              </div>
              <span className="text-[11px] opacity-90">
                {student.points} pts
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChampionPodium;
