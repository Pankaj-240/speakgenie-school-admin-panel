import React from "react";
import { Search, Eye, ChevronDown } from "lucide-react";

const students = [
  { name: "Ahan Kumar",   class: "8", accuracy: "96%", xp: 830 },
  { name: "Hvff",         class: "7", accuracy: "94%", xp: 295 },
  { name: "Flower Girl",  class: "6", accuracy: "93%", xp: 190 },
  { name: "12 June C...", class: "5", accuracy: "92%", xp: 165 },
  { name: "Hcdff",        class: "4", accuracy: "91%", xp: 160 },
  { name: "Eva",          class: "3", accuracy: "90%", xp: 145 },
  { name: "Sophia Kim",   class: "2", accuracy: "89%", xp: 138 },
  { name: "James Wilson", class: "6", accuracy: "88%", xp: 132 },
  { name: "Olivia Davis", class: "5", accuracy: "87%", xp: 128 },
  { name: "Liam Garcia",  class: "1", accuracy: "86%", xp: 120 },
  { name: "Ava Martin",   class: "4", accuracy: "85%", xp: 1400 },
  { name: "Noah Thomas",  class: "3", accuracy: "83%", xp: 3950 },
];

const getInitials = (name) => {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0] || "";
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

const AllStudentsSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 space-y-4">

      <div className="flex flex-wrap items-center justify-between gap-4">
       
        <div>
          <h2 className="text-sm font-semibold text-[#1992ff]">
            All Students
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Complete student directory with performance details.
          </p>
        </div>

 
        <div className="flex flex-wrap gap-3">
  
          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-full px-3 py-1 min-w-[220px]">
            <Search size={16} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search students..."
              className="bg-transparent outline-none text-xs text-slate-600 ml-2 w-full"
            />
          </div>

         
          <button className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-3 py-1 text-xs text-slate-600">
            All Classes
            <ChevronDown size={14} className="text-slate-400" />
          </button>
        </div>
      </div>

    
     <div className="grid grid-cols-4 gap-4">

        {students.map((student, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)] px-4 py-3"
          >

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center text-xs font-semibold text-slate-800">
                {getInitials(student.name)}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 truncate max-w-[120px]">
                  {student.name}
                </p>
                <p className="text-[11px] text-slate-500">
                  Class {student.class}
                </p>

             
                <div className="inline-flex items-center mt-1 rounded-full bg-emerald-50 px-2 py-[2px] text-[10px] font-medium text-emerald-600">
                  {student.accuracy} Accuracy
                </div>
              </div>
            </div>

            
            <div className="flex flex-col items-end gap-2">
              <div className="text-[11px] text-slate-500">
                <span className="font-semibold text-slate-800">
                  {student.xp}
                </span>{" "}
                XP
              </div>
              <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50">
                <Eye size={16} className="text-slate-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex justify-center pt-2">
        <button className="px-6 py-2 rounded-full border border-slate-200 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100">
          Load More Students (233 remaining)
        </button>
      </div>
    </div>
  );
};

export default AllStudentsSection;
