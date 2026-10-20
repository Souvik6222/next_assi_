import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  BuildingIcon,
  PencilIcon,
  ChartIcon,
  GraduationCapIcon,
  ArrowRightIcon,
} from "@/components/Icons";

export const metadata = {
  title: "Page Not Found | Campus Directory",
  description: "The requested directory entry or path could not be located.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          {/* Breadcrumb style */}
          <nav className="flex items-center justify-start text-sm text-[#6b7280] mb-12 gap-2">
            <Link href="/" className="hover:text-[#2563eb]">
              Directory
            </Link>
            <span>/</span>
            <span className="text-[#111827] font-medium">Not Found</span>
          </nav>

          <div className="max-w-xl mx-auto">
            {/* Status badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#e5e7eb] bg-white text-xs font-medium text-[#4b5563] mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6b7280]"></span>
              <span>404 &bull; ROUTE NOT FOUND</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
              Student or department not found
            </h1>

            <p className="text-[#4b5563] text-sm mb-8 leading-relaxed">
              The requested directory entry or path could not be located. It may have
              moved or the identifier might be invalid.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <Link
                href="/"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-semibold shadow-xs transition-colors"
              >
                Return to Students Directory
              </Link>
              <Link
                href="/departments"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white border border-[#d1d5db] hover:bg-[#f9fafb] text-[#374151] text-sm font-semibold transition-colors shadow-2xs"
              >
                Browse All Departments
              </Link>
            </div>
          </div>

          {/* Suggested starting points box */}
          <div className="max-w-2xl mx-auto bg-white rounded-xl border border-[#e5e7eb] text-left overflow-hidden shadow-2xs">
            <div className="px-5 py-3 border-b border-[#e5e7eb] bg-[#f9fafb] flex items-center justify-between text-xs">
              <span className="font-semibold uppercase tracking-wider text-[#6b7280]">
                Suggested Starting Points
              </span>
              <span className="text-[#9ca3af]">Internal Routes</span>
            </div>

            <div className="divide-y divide-[#f3f4f6] text-sm">
              <Link
                href="/departments/computer-science"
                className="px-5 py-3.5 flex items-center justify-between hover:bg-[#f9fafb] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <BuildingIcon className="w-4 h-4 text-[#9ca3af] group-hover:text-[#2563eb]" />
                  <span className="font-medium text-[#111827] group-hover:text-[#2563eb]">
                    Computer Science Department
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#9ca3af] group-hover:text-[#2563eb]">
                  <span>/departments/computer-science</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </div>
              </Link>

              <Link
                href="/departments/design"
                className="px-5 py-3.5 flex items-center justify-between hover:bg-[#f9fafb] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <PencilIcon className="w-4 h-4 text-[#9ca3af] group-hover:text-[#2563eb]" />
                  <span className="font-medium text-[#111827] group-hover:text-[#2563eb]">
                    Design Department
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#9ca3af] group-hover:text-[#2563eb]">
                  <span>/departments/design</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </div>
              </Link>

              <Link
                href="/departments/business"
                className="px-5 py-3.5 flex items-center justify-between hover:bg-[#f9fafb] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <ChartIcon className="w-4 h-4 text-[#9ca3af] group-hover:text-[#2563eb]" />
                  <span className="font-medium text-[#111827] group-hover:text-[#2563eb]">
                    Business Department
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#9ca3af] group-hover:text-[#2563eb]">
                  <span>/departments/business</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </div>
              </Link>

              <Link
                href="/"
                className="px-5 py-3.5 flex items-center justify-between hover:bg-[#f9fafb] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <GraduationCapIcon className="w-4 h-4 text-[#9ca3af] group-hover:text-[#2563eb]" />
                  <span className="font-medium text-[#111827] group-hover:text-[#2563eb]">
                    All Enrolled Students Listing
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#9ca3af] group-hover:text-[#2563eb]">
                  <span>/</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>

      <footer className="border-t border-[#e5e7eb] bg-white py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6b7280] gap-2">
          <span>Campus Directory © Academic Records System</span>
          <span>HTTP 404 &bull; Resource Not Located</span>
        </div>
      </footer>
    </div>
  );
}
