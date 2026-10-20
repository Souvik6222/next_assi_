"use client";

import { useState } from "react";
import { Student } from "@/types/student";
import StudentCard from "./StudentCard";
import { SearchIcon, ChevronDownIcon } from "./Icons";

interface StudentsListingProps {
  initialStudents: Student[];
}

export default function StudentsListing({ initialStudents }: StudentsListingProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");

  const departments = Array.from(
    new Set(initialStudents.map((s) => s.department))
  );

  const filteredStudents = initialStudents.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.department.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept =
      selectedDept === "all" || student.department === selectedDept;

    return matchesSearch && matchesDept;
  });

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-xl border border-[#e5e7eb] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-md">
          <span className="absolute inset-y-0 left-3 flex items-center text-[#9ca3af] pointer-events-none">
            <SearchIcon className="w-4 h-4 text-[#9ca3af]" />
          </span>
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-[#d1d5db] rounded-lg text-sm placeholder:text-[#9ca3af] text-[#111827] focus:outline-none focus:ring-1 focus:ring-[#2563eb] focus:border-[#2563eb] bg-white transition-all shadow-2xs"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <label className="text-sm text-[#4b5563] whitespace-nowrap font-medium">
            Department:
          </label>
          <div className="relative">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="appearance-none border border-[#d1d5db] rounded-lg px-3.5 py-2 pr-9 text-sm bg-white text-[#111827] font-medium focus:outline-none focus:ring-1 focus:ring-[#2563eb] focus:border-[#2563eb] w-full sm:w-auto cursor-pointer"
            >
              <option value="all">All departments</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#6b7280]">
              <ChevronDownIcon className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <p className="text-gray-500">No students matched your search criteria.</p>
        </div>
      )}

      <div className="flex items-center justify-between pt-6 border-t border-gray-200 text-sm text-gray-500">
        <span>
          Showing <span className="font-semibold text-gray-700">{filteredStudents.length}</span> of{" "}
          <span className="font-semibold text-gray-700">{initialStudents.length}</span> students
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            disabled
            className="px-3.5 py-1.5 border border-gray-300 rounded-md text-xs font-semibold text-gray-400 cursor-not-allowed bg-white shadow-2xs hover:bg-gray-50 transition-colors"
          >
            Previous
          </button>
          <button
            type="button"
            disabled
            className="px-3.5 py-1.5 border border-gray-300 rounded-md text-xs font-semibold text-gray-400 cursor-not-allowed bg-white shadow-2xs hover:bg-gray-50 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
