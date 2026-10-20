import Link from "next/link";
import { Student } from "@/types/student";
import { ArrowRightIcon } from "./Icons";

interface StudentCardProps {
  student: Student;
}

export default function StudentCard({ student }: StudentCardProps) {
  return (
    <div className="bg-white rounded-xl border border-[#e5e7eb] p-6 shadow-2xs hover:shadow-sm hover:border-[#d1d5db] transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div
            className={`w-11 h-11 rounded-lg flex items-center justify-center font-bold text-sm border ${student.avatarColor}`}
          >
            {student.initials}
          </div>
          <span className="text-xs font-mono font-medium text-[#4b5563] bg-[#f3f4f6] px-2.5 py-0.5 rounded border border-[#e5e7eb]">
            {student.id}
          </span>
        </div>

        <h3 className="font-bold text-[#111827] text-lg mb-2">
          {student.name}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block text-xs font-medium text-[#1d4ed8] bg-[#eff6ff] border border-[#bfdbfe] px-2 py-0.5 rounded">
            {student.department}
          </span>
          <span className="text-xs text-[#6b7280]">
            {student.yearNumber}
            {student.yearNumber === 1
              ? "st"
              : student.yearNumber === 2
              ? "nd"
              : student.yearNumber === 3
              ? "rd"
              : "th"}{" "}
            Year
          </span>
        </div>
      </div>

      <div className="pt-3 border-t border-[#f3f4f6]">
        <Link
          href={`/students/${student.id}`}
          className="text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] inline-flex items-center group gap-1"
        >
          <span>View profile</span>
          <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
