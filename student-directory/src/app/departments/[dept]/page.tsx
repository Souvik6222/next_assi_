import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import StudentCard from "@/components/StudentCard";
import {
  CodeIcon,
  PencilIcon,
  ChartIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@/components/Icons";
import {
  getAllDepartments,
  getDepartmentBySlug,
  getStudentsByDepartment,
} from "@/data/students";

interface DepartmentDetailPageProps {
  params: Promise<{
    dept: string;
  }>;
}

export async function generateStaticParams() {
  const departments = getAllDepartments();
  return departments.map((d) => ({
    dept: d.slug,
  }));
}

export default async function DepartmentDetailPage({
  params,
}: DepartmentDetailPageProps) {
  const { dept } = await params;
  const department = getDepartmentBySlug(dept);

  if (!department) {
    notFound();
  }

  const deptStudents = getStudentsByDepartment(department.slug);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar activeTab="departments" />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex items-center text-sm text-[#6b7280] mb-6 gap-2">
            <Link href="/departments" className="hover:text-[#2563eb]">
              Departments
            </Link>
            <span>/</span>
            <span className="text-[#111827] font-medium">{department.name}</span>
          </nav>

          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/departments"
              className="text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] inline-flex items-center gap-1.5"
            >
              <ArrowLeftIcon className="w-3.5 h-3.5" />
              <span>Back to Departments</span>
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-[#4b5563] hover:text-[#111827] inline-flex items-center gap-1.5"
            >
              <span>View all students</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Department Overview Banner */}
          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 mb-8 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#f3f4f6]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center font-bold text-xl border border-[#dbeafe]">
                  {department.icon === "code" ? (
                    <CodeIcon className="w-6 h-6 text-[#2563eb]" />
                  ) : department.icon === "pencil" ? (
                    <PencilIcon className="w-6 h-6 text-[#2563eb]" />
                  ) : (
                    <ChartIcon className="w-6 h-6 text-[#2563eb]" />
                  )}
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-[#111827]">
                    {department.name}
                  </h1>
                  <p className="text-sm text-[#6b7280] mt-0.5">
                    Faculty of {department.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 font-semibold rounded-full bg-[#eff6ff] text-[#1d4ed8] border border-[#bfdbfe]">
                  {department.enrolledStudentsCount} Enrolled Students
                </span>
              </div>
            </div>

            <p className="text-sm text-[#4b5563] leading-relaxed mt-6 max-w-3xl">
              {department.description}
            </p>

            {/* Specialization pills / links */}
            {department.specializations.length > 0 && (
              <div className="mt-6 pt-6 border-t border-[#f3f4f6]">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-[#9ca3af] mb-3">
                  Specialization Tracks
                </h2>
                <div className="flex flex-wrap gap-2">
                  {department.specializations.map((spec) => (
                    <Link
                      key={spec.slug}
                      href={`/departments/${department.slug}/${spec.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-medium px-3.5 py-1.5 rounded-lg border border-[#e5e7eb] bg-[#f9fafb] hover:bg-[#eff6ff] hover:text-[#2563eb] hover:border-[#bfdbfe] transition-colors"
                    >
                      <span>{spec.name}</span>
                      <span className="text-[#9ca3af] font-mono text-[10px]">
                        ({spec.code})
                      </span>
                      <ArrowRightIcon className="w-3 h-3 text-[#2563eb]" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Students in Department */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Students in {department.name}
              </h2>
              <span className="text-xs text-gray-500">
                Showing {deptStudents.length} students
              </span>
            </div>

            {deptStudents.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {deptStudents.map((student) => (
                  <StudentCard key={student.id} student={student} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <p className="text-gray-500 text-sm">
                  No active students registered under this department yet.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>

      <footer className="border-t border-gray-200 bg-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <span>Campus Directory © Academic Informatics Core</span>
          <span>Path: /departments/{department.slug}</span>
        </div>
      </footer>
    </div>
  );
}
