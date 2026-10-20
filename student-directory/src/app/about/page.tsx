import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata = {
  title: "About | Campus Directory",
  description: "Learn more about the Campus Directory project and architecture.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar activeTab="about" />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8 pb-4 border-b border-[#e5e7eb]">
            <h1 className="text-3xl font-bold tracking-tight text-[#111827]">
              About Campus Directory
            </h1>
            <p className="mt-1 text-sm text-[#4b5563]">
              Academic information portal built with Next.js App Router and Tailwind CSS.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-2xs space-y-6 text-sm text-[#4b5563] leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-[#111827] mb-2">Project Overview</h2>
              <p>
                The Campus Directory provides students, faculty, and administration with a unified,
                responsive interface to look up student profiles, academic standing, courses,
                and departmental specializations across campus faculties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#f3f4f6]">
              <div className="p-4 rounded-xl bg-[#f9fafb] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#111827] mb-1">Interactive Features</h3>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#4b5563]">
                  <li>Real-time multi-attribute search (name, ID, department)</li>
                  <li>Department filter dropdowns</li>
                  <li>Static page generation (SSG) with partial pre-rendering</li>
                  <li>Deep nested routes for faculties &amp; specializations</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#f9fafb] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#111827] mb-1">Architecture</h3>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#4b5563]">
                  <li>Next.js 16 (App Router + Turbopack)</li>
                  <li>React 19 Server &amp; Client Components</li>
                  <li>Tailwind CSS styling matching pixel-accurate mockups</li>
                  <li>TypeScript typed entities &amp; robust 404 fallback</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#f3f4f6] flex items-center justify-between">
              <Link
                href="/"
                className="text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] inline-flex items-center gap-1.5"
              >
                <ArrowLeftIcon className="w-3.5 h-3.5" />
                <span>Explore Directory</span>
              </Link>
              <Link
                href="/departments"
                className="text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] inline-flex items-center gap-1.5"
              >
                <span>View Departments</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </main>
      </div>

      <footer className="border-t border-[#e5e7eb] bg-white py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6b7280] gap-2">
          <span>Campus Directory © Academic Records System</span>
          <span>Curriculum Cycle 2024–2025</span>
        </div>
      </footer>
    </div>
  );
}
