import Link from "next/link";
import { CompassLogoIcon, UserCircleIcon } from "./Icons";

interface NavbarProps {
  activeTab?: "destinations" | "regions" | "about" | "planner";
  isPlannerMode?: boolean;
}

export default function Navbar({ activeTab = "destinations", isPlannerMode = false }: NavbarProps) {
  if (isPlannerMode) {
    return (
      <header className="border-b border-[#e5e7eb] bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2 font-bold text-[#111827] text-base hover:opacity-90">
              <span className="w-5 h-5 rounded bg-[#0d9488] text-white flex items-center justify-center font-bold text-xs">
                W
              </span>
              <span className="font-bold tracking-tight text-base">Wayfinder</span>
            </Link>

            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#0d9488]/30 bg-[#f0fdfa] text-xs font-medium text-[#0f766e]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]"></span>
              Trip Planner
            </span>

            <span className="text-xs text-[#9ca3af] font-mono">
              / (planner)/overview
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 text-xs text-[#6b7280]">
              <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
              <span>Synced local index</span>
            </div>

            <div className="h-4 w-px bg-[#e5e7eb]"></div>

            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0f766e] text-white text-xs font-semibold hover:bg-[#115e59] shadow-2xs transition-colors"
            >
              <span>+</span>
              <span>New Route</span>
            </button>

            <button type="button" className="text-[#6b7280] hover:text-[#111827]">
              <UserCircleIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="border-b border-[#e5e7eb] bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2 font-bold text-[#111827] text-lg hover:opacity-90">
            <span className="w-5 h-5 rounded bg-[#0d9488] text-white flex items-center justify-center font-bold text-xs">
              W
            </span>
            <span className="font-extrabold tracking-tight text-[#111827] text-lg">Wayfinder</span>
          </Link>

          <nav className="flex space-x-1 sm:space-x-3">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-semibold transition-colors relative ${
                activeTab === "destinations"
                  ? "text-[#0d9488] border-b-2 border-[#0d9488]"
                  : "text-[#4b5563] hover:text-[#111827]"
              }`}
            >
              Destinations
            </Link>
            <Link
              href="/regions"
              className={`px-3 py-2 text-sm font-semibold transition-colors relative ${
                activeTab === "regions"
                  ? "text-[#0d9488] border-b-2 border-[#0d9488]"
                  : "text-[#4b5563] hover:text-[#111827]"
              }`}
            >
              Regions
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-semibold transition-colors relative ${
                activeTab === "about"
                  ? "text-[#0d9488] border-b-2 border-[#0d9488]"
                  : "text-[#4b5563] hover:text-[#111827]"
              }`}
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-xs px-2.5 py-1 font-mono font-medium text-[#6b7280] bg-[#f9fafb] border border-[#e5e7eb] rounded-md">
            GEO.INDEX <span className="text-[#0d9488]">v2.4</span>
          </span>

          <Link
            href="/planner"
            className="px-3.5 py-1.5 rounded-md bg-[#0f766e] hover:bg-[#115e59] text-white text-xs font-semibold shadow-2xs transition-colors"
          >
            Plan Trip
          </Link>

          <button type="button" className="text-[#6b7280] hover:text-[#111827]">
            <UserCircleIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
