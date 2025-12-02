import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Trophy,
  Users,
  BarChart3,
  Settings as SettingsIcon,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "bg-[#1992ff] text-white shadow-md"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900";

  return (
    <aside className="w-64 bg-white border-r border-slate-200 p-4 min-h-screen flex flex-col justify-between">
      {/* TOP: Logo + nav links */}
      <div>
        {/* Logo / brand */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-2xl bg-[#1992ff] flex items-center justify-center text-white font-bold">
            S
          </div>
          <div>
            <div className="font-semibold text-slate-900">SpeakGenie</div>
            <div className="text-xs text-slate-500 -mt-1">Admin Panel</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          <Link
            to="/"
            className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm ${isActive(
              "/"
            )}`}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/leaderboard"
            className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm ${isActive(
              "/leaderboard"
            )}`}
          >
            <Trophy size={20} />
            <span>Leaderboard</span>
          </Link>

          <Link
            to="/students"
            className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm ${isActive(
              "/students"
            )}`}
          >
            <Users size={20} />
            <span>Students</span>
          </Link>

          <Link
            to="/analytics"
            className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm ${isActive(
              "/analytics"
            )}`}
          >
            <BarChart3 size={20} />
            <span>Analytics</span>
          </Link>

          <Link
            to="/settings"
            className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm ${isActive(
              "/settings"
            )}`}
          >
            <SettingsIcon size={20} />
            <span>Settings</span>
          </Link>
        </nav>
      </div>

      {/* BOTTOM: School admin card */}
      <div className="mt-6 border-t border-slate-100 pt-4">
        <div className="flex items-center justify-between bg-slate-50 rounded-2xl px-3 py-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1992ff] text-white flex items-center justify-center text-sm font-semibold">
              S
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">
                School Admin
              </div>
              <button className="text-[11px] text-[#1992ff] hover:underline">
                Greenwood Elementary
              </button>
            </div>
          </div>

          <button className="p-1 rounded-full hover:bg-slate-100">
            <LogOut size={16} className="text-slate-400" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
