import React from "react";
import { Trophy, Flame, Zap, Star } from "lucide-react";

const champions = [
  {
    rank: 1,
    name: "Ahan Kumar",
    class: "8",
    points: 830,
    accuracy: "96%",
    streak: 15,
    lessons: 68,
  },
  {
    rank: 2,
    name: "Hvff",
    class: "7",
    points: 295,
    accuracy: "94%",
    streak: 12,
    lessons: 45,
  },
  {
    rank: 3,
    name: "Flower Girl",
    class: "6",
    points: 190,
    accuracy: "93%",
    streak: 8,
    lessons: 30,
  },
  {
    rank: 4,
    name: "12 June Child Test",
    class: "5",
    points: 165,
    accuracy: "92%",
    streak: 6,
    lessons: 32,
  },
  {
    rank: 5,
    name: "Hcdff",
    class: "4",
    points: 160,
    accuracy: "91%",
    streak: 5,
    lessons: 30,
  },
  {
    rank: 6,
    name: "Eva",
    class: "3",
    points: 145,
    accuracy: "90%",
    streak: 4,
    lessons: 28,
  },
  {
    rank: 7,
    name: "Sophia Kim",
    class: "2",
    points: 138,
    accuracy: "89%",
    streak: 7,
    lessons: 26,
  },
  {
    rank: 8,
    name: "James Wilson",
    class: "6",
    points: 132,
    accuracy: "88%",
    streak: 3,
    lessons: 24,
  },
  {
    rank: 9,
    name: "Olivia Davis",
    class: "5",
    points: 128,
    accuracy: "87%",
    streak: 2,
    lessons: 22,
  },
  {
    rank: 10,
    name: "Liam Garcia",
    class: "1",
    points: 120,
    accuracy: "86%",
    streak: 2,
    lessons: 20,
  },
];

const getRankColor = (rank) => {
  if (rank === 1) return "bg-yellow-400 text-white";
  if (rank === 2) return "bg-slate-300 text-slate-800";
  if (rank === 3) return "bg-amber-400 text-white";
  return "bg-blue-100 text-blue-700";
};

const getBadgeText = (rank) => {
  if (rank === 1) return "#1";
  if (rank === 2) return "#2";
  if (rank === 3) return "#3";
  return `#${rank}`;
};

const getInitials = (name) => {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0] || "";
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

const TopChampions = () => {
  const topScorer = champions[0];

  const longestStreak = champions.reduce((max, curr) =>
    curr.streak > max.streak ? curr : max
  );

  const mostLessons = champions.reduce((max, curr) =>
    curr.lessons > max.lessons ? curr : max
  );

  return (
    <div className="bg-transparent space-y-4">
      {/* Section header */}
      <div className="bg-white rounded-2xl shadow-sm px-5 pt-4 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Trophy className="text-[#1992ff]" size={18} />
          <h2 className="text-sm font-semibold text-slate-900">
            School Leaderboard - Top 10 Champions
          </h2>
        </div>
        <p className="text-xs text-slate-500">
          Our highest performing students this month with points and achievements.
        </p>
      </div>

      {/* Grid of champion cards */}
      <div className="bg-white rounded-2xl shadow-sm p-5 space-y-5">
        <div className="grid grid-cols-5 gap-4">

          {champions.map((student) => (
            <div
              key={student.rank}
              className="relative bg-white rounded-2xl shadow-[0_10px_30px_rgba(15,23,42,0.06)] px-4 pt-4 pb-3 flex flex-col items-center text-center"
            >
              {/* Rank badge in top-right */}
              <div className="absolute top-3 right-3">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold ${getRankColor(
                    student.rank
                  )}`}
                >
                  {getBadgeText(student.rank)}
                </div>
              </div>

              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-200 to-blue-200 flex items-center justify-center text-lg font-semibold text-slate-800 mb-2">
                {getInitials(student.name)}
              </div>

              {/* Name + Class */}
              <div className="mb-2">
                <p className="text-sm font-semibold text-slate-900">
                  {student.name}
                </p>
                <p className="text-xs text-slate-500">Class {student.class}</p>
              </div>

              {/* Points pill */}
              <div className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold mb-2">
                {student.points} pts
              </div>

              {/* Accuracy */}
              <div className="text-xs text-emerald-500 font-medium mb-1">
                {student.accuracy} Accuracy
              </div>

              {/* Streak + Lessons row */}
              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 mb-3">
                <div className="flex items-center gap-1">
                  <Flame size={12} className="text-orange-400" />
                  <span>{student.streak} day streak</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={12} className="text-yellow-400" />
                  <span>{student.lessons} lessons</span>
                </div>
              </div>

              {/* View profile button */}
              <button className="mt-auto border border-slate-200 rounded-full px-4 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50">
                View Profile
              </button>
            </div>
          ))}
        </div>

        {/* Bottom summary strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="rounded-2xl bg-amber-50 border border-amber-100 px-4 py-3 flex flex-col items-center text-center">
            <Trophy size={18} className="text-amber-500 mb-1" />
            <p className="text-xs font-semibold text-amber-700">Top Scorer</p>
            <p className="text-xs text-amber-600 mt-1">
              {topScorer.name} - {topScorer.points} pts
            </p>
          </div>

          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 px-4 py-3 flex flex-col items-center text-center">
            <Flame size={18} className="text-emerald-500 mb-1" />
            <p className="text-xs font-semibold text-emerald-700">
              Longest Streak
            </p>
            <p className="text-xs text-emerald-600 mt-1">
              {longestStreak.name} - {longestStreak.streak} days
            </p>
          </div>

          <div className="rounded-2xl bg-blue-50 border border-blue-100 px-4 py-3 flex flex-col items-center text-center">
            <Zap size={18} className="text-blue-500 mb-1" />
            <p className="text-xs font-semibold text-blue-700">Most Lessons</p>
            <p className="text-xs text-blue-600 mt-1">
              {mostLessons.name} - {mostLessons.lessons} lessons
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopChampions;
