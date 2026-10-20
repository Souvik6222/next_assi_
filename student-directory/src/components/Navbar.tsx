import Link from "next/link";
import { GraduationCapIcon } from "./Icons";

interface NavbarProps {
  activeTab?: "students" | "departments" | "about";
}

export default function Navbar({ activeTab = "students" }: NavbarProps) {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2.5 font-bold text-gray-900 text-[17px] hover:opacity-90">
            <span className="w-6 h-6 rounded bg-[#2563eb] text-white flex items-center justify-center shadow-xs">
              <GraduationCapIcon className="w-3.5 h-3.5 text-white" />
            </span>
            <span className="tracking-tight font-bold text-[#111827]">Campus Directory</span>
          </Link>

          <nav className="flex space-x-1 sm:space-x-3">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-semibold transition-colors relative ${
                activeTab === "students"
                  ? "text-[#2563eb] border-b-2 border-[#2563eb]"
                  : "text-[#4b5563] hover:text-[#111827]"
              }`}
            >
              Students
            </Link>
            <Link
              href="/departments"
              className={`px-3 py-2 text-sm font-semibold transition-colors relative ${
                activeTab === "departments"
                  ? "text-[#2563eb] border-b-2 border-[#2563eb]"
                  : "text-[#4b5563] hover:text-[#111827]"
              }`}
            >
              Departments
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-semibold transition-colors relative ${
                activeTab === "about"
                  ? "text-[#2563eb] border-b-2 border-[#2563eb]"
                  : "text-[#4b5563] hover:text-[#111827]"
              }`}
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-xs px-2.5 py-1 font-medium bg-[#f9fafb] text-[#4b5563] rounded-md border border-[#e5e7eb]">
            Frontend Practice
          </span>
        </div>
      </div>
    </header>
  );
}
