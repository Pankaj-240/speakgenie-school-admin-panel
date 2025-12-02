import React from "react";

const LeaderboardHighlights = () => {
  // all data is static for now – you can later calculate from real data
  const cards = [
    {
      label: "Current Champion",
      name: "Ahan Kumar",
      value: "830 points",
      color: "text-orange-500",
      icon: "👑",
    },
    {
      label: "Longest Streak",
      name: "Ahan Kumar",
      value: "15 days",
      color: "text-orange-500",
      icon: "🔥",
    },
    {
      label: "Most Active",
      name: "Ahan Kumar",
      value: "68 lessons",
      color: "text-blue-600",
      icon: "⚡",
    },
    {
      label: "Highest Accuracy",
      name: "Ahan Kumar",
      value: "96%",
      color: "text-emerald-600",
      icon: "🎯",
    },
  ];

  return (
    <div className="bg-transparent mt-4">
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="bg-white rounded-3xl shadow-[0_12px_30px_rgba(15,23,42,0.08)] px-6 py-5 flex flex-col items-center text-center"
          >
            <div className="text-2xl mb-2">{card.icon}</div>
            <div className="text-sm font-semibold text-slate-900">
              {card.label}
            </div>
            <div className="text-xs text-slate-500 mt-1">{card.name}</div>
            <div
              className={`mt-3 text-lg font-bold ${card.color}`}
            >
              {card.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardHighlights;
