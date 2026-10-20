import Navbar from "@/components/Navbar";
import StudentsListing from "@/components/StudentsListing";
import { getAllStudents } from "@/data/students";

export default function HomePage() {
  const students = getAllStudents();

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTab="students" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Students
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Browse students and view their academic profiles.
          </p>
        </div>

        <StudentsListing initialStudents={students} />
      </main>
    </div>
  );
}
