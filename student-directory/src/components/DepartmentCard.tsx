import { Department } from "@/types/student";
import Link from "next/link";
import {
  CodeIcon,
  PencilIcon,
  ChartIcon,
  BuildingIcon,
  UsersIcon,
  ArrowRightIcon,
} from "./Icons";

interface DepartmentCardProps {
  department: Department;
}

export default function DepartmentCard({ department }: DepartmentCardProps) {
  return (
    <div className="bg-white rounded-xl border border-[#e5e7eb] p-6 hover:border-[#d1d5db] transition-all shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="space-y-3">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-[#eff6ff] text-[#2563eb] flex items-center justify-center font-bold shrink-0 mt-0.5 border border-[#dbeafe]">
            {department.icon === "code" ? (
              <CodeIcon className="w-5 h-5 text-[#2563eb]" />
            ) : department.icon === "pencil" ? (
              <PencilIcon className="w-5 h-5 text-[#2563eb]" />
            ) : (
              <ChartIcon className="w-5 h-5 text-[#2563eb]" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#111827]">
              {department.name}
            </h3>
            <p className="text-sm text-[#4b5563] max-w-2xl mt-1 leading-relaxed">
              {department.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-[#6b7280] pl-13">
          <span className="flex items-center gap-1.5">
            <BuildingIcon className="w-3.5 h-3.5 text-[#9ca3af]" />
            <span>{department.specializationsCount} Specializations</span>
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1.5">
            <UsersIcon className="w-3.5 h-3.5 text-[#9ca3af]" />
            <span>{department.enrolledStudentsCount} Enrolled Students</span>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 self-end md:self-center shrink-0">
        <Link
          href={`/departments/${department.slug}`}
          className="text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] inline-flex items-center group whitespace-nowrap gap-1"
        >
          <span>View students</span>
          <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
