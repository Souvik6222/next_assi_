import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";
import {
  getAllDepartments,
  getDepartmentBySlug,
  getAllStudents,
} from "@/data/students";

interface NestedSpecializationPageProps {
  params: Promise<{
    dept: string;
    specialization: string;
  }>;
}

export async function generateStaticParams() {
  const departments = getAllDepartments();
  const paths: { dept: string; specialization: string }[] = [];

  for (const dept of departments) {
    for (const spec of dept.specializations) {
      paths.push({
        dept: dept.slug,
        specialization: spec.slug,
      });
    }
  }

  return paths;
}

export default async function NestedDepartmentSpecializationPage({
  params,
}: NestedSpecializationPageProps) {
  const { dept, specialization: specSlug } = await params;
  const department = getDepartmentBySlug(dept);

  if (!department) {
    notFound();
  }

  const spec = department.specializations.find(
    (s) => s.slug.toLowerCase() === specSlug.toLowerCase()
  );

  if (!spec) {
    notFound();
  }

  const allStudents = getAllStudents();
  // Filter students who belong to this specialization
  const matchedStudents = allStudents.filter(
    (s) =>
      s.specializationSlug.toLowerCase() === spec.slug.toLowerCase() ||
      spec.studentIds.includes(s.id)
  );

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar activeTab="departments" />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-[#6b7280] mb-6 gap-2">
            <Link href="/departments" className="hover:text-[#2563eb]">
              Departments
            </Link>
            <span>/</span>
            <Link
              href={`/departments/${department.slug}`}
              className="hover:text-[#2563eb]"
            >
              {department.name}
            </Link>
            <span>/</span>
            <span className="text-[#111827] font-medium">{spec.name}</span>
          </nav>

          {/* Action row */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href={`/departments/${department.slug}`}
              className="text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] inline-flex items-center gap-1.5"
            >
              <ArrowLeftIcon className="w-3.5 h-3.5" />
              <span>Return to {department.name} Department</span>
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-[#4b5563] hover:text-[#111827] inline-flex items-center gap-1.5"
            >
              <span>View all students</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Specialization Card (matches 4_nested_department_page.png) */}
          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 mb-8 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#f3f4f6]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-bold tracking-tight text-[#111827]">
                    {spec.name}
                  </h1>
                  <span className="text-xs font-semibold text-[#1d4ed8] bg-[#eff6ff] border border-[#bfdbfe] px-2.5 py-1 rounded-md">
                    Specialization under {department.name}
                  </span>
                </div>
                <p className="mt-3 text-sm text-[#4b5563] max-w-3xl leading-relaxed">
                  {spec.description}
                </p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9ca3af] block mb-1">
                  Department Track
                </span>
                <span className="inline-block font-mono text-sm font-semibold bg-[#f9fafb] border border-[#d1d5db] text-[#1f2937] px-3 py-1 rounded-md">
                  {spec.code}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 text-sm">
              <div>
                <span className="text-xs font-semibold text-[#9ca3af] block mb-1">
                  Academic Lead
                </span>
                <span className="font-semibold text-[#111827]">
                  {spec.academicLead}
                </span>
              </div>

              <div>
                <span className="text-xs font-semibold text-[#9ca3af] block mb-1">
                  Primary Core Lab
                </span>
                <span className="font-semibold text-[#111827]">
                  {spec.coreLab}
                </span>
              </div>

              <div>
                <span className="text-xs font-semibold text-[#9ca3af] block mb-1">
                  Total Enrollment
                </span>
                <span className="font-semibold text-[#111827]">
                  {matchedStudents.length} Active Enrollees
                </span>
              </div>

              <div>
                <span className="text-xs font-semibold text-[#9ca3af] block mb-1">
                  Curriculum Cycle
                </span>
                <span className="font-semibold text-[#111827]">
                  {spec.curriculumCycle}
                </span>
              </div>
            </div>
          </div>

          {/* Students in this specialization list header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-gray-900">
                Students in this Specialization
              </h2>
              <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full border border-gray-200">
                {matchedStudents.length}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Filtered by Track:</span>
              <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-md font-medium">
                {spec.name}
              </span>
            </div>
          </div>

          {/* Student Cards in Specialization (matching 4_nested_department_page.png design) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {matchedStudents.map((student) => (
              <div
                key={student.id}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs hover:border-gray-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-lg flex items-center justify-center font-bold text-sm border ${student.avatarColor}`}
                      >
                        {student.initials}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base">
                          {student.name}
                        </h3>
                        <span className="text-xs font-mono text-gray-500">
                          {student.id}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-0.5 rounded-md">
                      Year {student.yearNumber}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mt-2 mb-4 line-clamp-1">
                    {student.subjects[0]?.name || student.specialization}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#f3f4f6] flex justify-end">
                  <Link
                    href={`/students/${student.id}`}
                    className="text-xs font-semibold text-[#2563eb] hover:text-[#1d4ed8] inline-flex items-center group gap-1"
                  >
                    <span>View profile</span>
                    <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <footer className="border-t border-gray-200 bg-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <span>Campus Directory © Academic Informatics Core</span>
          <span className="flex items-center gap-1.5">
            <span>Path: /departments/{department.slug}/{spec.slug}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
          </span>
        </div>
      </footer>
    </div>
  );
}
