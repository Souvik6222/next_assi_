import Navbar from "@/components/Navbar";
import DepartmentCard from "@/components/DepartmentCard";
import { getAllDepartments } from "@/data/students";

export const metadata = {
  title: "Departments | Campus Directory",
  description: "Explore academic faculties, programs, and enrolled students.",
};

export default function DepartmentsPage() {
  const departments = getAllDepartments();

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar activeTab="departments" />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-4 border-b border-[#e5e7eb]">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#111827]">
                Departments
              </h1>
              <p className="mt-1 text-sm text-[#4b5563]">
                Explore academic faculties, programs, and enrolled students.
              </p>
            </div>
            <div className="mt-2 sm:mt-0 flex items-center text-xs font-medium text-[#4b5563]">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] mr-2"></span>
              {departments.length} Active Academic Faculties
            </div>
          </div>

          <div className="space-y-4">
            {departments.map((dept) => (
              <DepartmentCard key={dept.id} department={dept} />
            ))}
          </div>
        </main>
      </div>

      <footer className="border-t border-gray-200 bg-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <span>Curriculum Year 2024–2025</span>
          <span>Updated daily via Campus Records API</span>
        </div>
      </footer>
    </div>
  );
}
