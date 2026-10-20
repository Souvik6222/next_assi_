import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeftIcon } from "@/components/Icons";
import { getAllStudents, getStudentByIdOrSlug } from "@/data/students";

interface StudentDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const students = getAllStudents();
  return students.map((student) => ({
    id: student.id,
  }));
}

export default async function StudentDetailPage({ params }: StudentDetailPageProps) {
  const { id } = await params;
  const student = getStudentByIdOrSlug(id);

  if (!student) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTab="students" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center text-sm text-[#6b7280] mb-6 gap-2">
          <Link href="/" className="hover:text-[#2563eb]">
            Students
          </Link>
          <span>/</span>
          <span className="text-[#111827] font-medium">{student.name}</span>
        </nav>

        <div className="mb-6">
          <Link
            href="/"
            className="text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] inline-flex items-center gap-1.5"
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <span>Back to students</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-[#e5e7eb] shadow-2xs overflow-hidden p-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 pb-8 border-b border-gray-100">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl border ${student.avatarColor}`}
            >
              {student.initials}
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {student.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="text-xs font-mono font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">
                  {student.id}
                </span>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
                  {student.status}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 border-b border-gray-100 text-sm">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Department
              </span>
              <p className="mt-1 font-medium text-gray-900">
                {student.department}
              </p>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Study Year
              </span>
              <p className="mt-1 font-medium text-gray-900">{student.studyYear}</p>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Email
              </span>
              <p className="mt-1 font-medium text-blue-600">
                <a href={`mailto:${student.email}`}>{student.email}</a>
              </p>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Enrolled
              </span>
              <p className="mt-1 font-medium text-gray-900">
                {student.enrolledSemester}
              </p>
            </div>
          </div>

          <div className="py-8 border-b border-gray-100">
            <h2 className="text-base font-semibold text-gray-900 mb-2">About</h2>
            <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
              {student.about}
            </p>
          </div>

          <div className="pt-8">
            <h2 className="text-base font-semibold text-gray-900 mb-4">
              Academic Details
            </h2>

            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500">Department</span>
                <span className="font-medium text-gray-900">
                  {student.department}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500">Current Academic Standing</span>
                <span className="font-medium text-gray-900">
                  {student.academicStanding}
                </span>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-3">
                Enrolled Subjects
              </span>
              <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
                {student.subjects.map((sub) => (
                  <div
                    key={sub.code}
                    className="flex items-center justify-between px-4 py-3 text-sm bg-gray-50/30 hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">
                      {sub.code}: {sub.name}
                    </span>
                    <span className="text-gray-500 text-xs font-mono">
                      {sub.credits.toFixed(1)} Credits
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-xs text-gray-400 mt-6 px-1">
          <span>System Record ID: {student.systemRecordId}</span>
          <span>Last validated: {student.lastValidated}</span>
        </div>
      </main>
    </div>
  );
}
