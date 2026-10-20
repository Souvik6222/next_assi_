import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowRightIcon, FolderIcon } from "@/components/Icons";

export const metadata = {
  title: "Destination or Region Not Found | Wayfinder",
  description: "The requested geographic route identifier could not be resolved within the Wayfinder spatial database.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Header path indicator matching design 6 */}
          <div className="text-xs font-mono text-[#6b7280] mb-8">
            Wayfinder / <span className="text-[#0f766e] font-semibold">Error 404</span>
          </div>

          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6 sm:p-10 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#f3f4f6]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#d1d5db] bg-[#f9fafb] text-xs font-mono text-[#374151]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]"></span>
                <span>404 &bull; Unresolved Destination Path</span>
              </span>

              <span className="text-xs font-mono text-[#9ca3af]">
                REF: ERR_PATH_UNRESOLVED
              </span>
            </div>

            <div className="py-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111827] mb-3">
                Destination or region not found
              </h1>
              <p className="text-sm text-[#4b5563] leading-relaxed max-w-2xl mb-8">
                The requested geographic route identifier could not be resolved within the Wayfinder spatial database. The path may have changed or the slug syntax is invalid.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/"
                  className="px-4 py-2.5 rounded-lg bg-[#0f766e] hover:bg-[#115e59] text-white text-xs font-semibold shadow-2xs inline-flex items-center gap-2 transition-colors"
                >
                  <span>↗</span>
                  <span>Return to Destinations</span>
                </Link>
                <Link
                  href="/regions"
                  className="px-4 py-2.5 rounded-lg bg-white border border-[#d1d5db] hover:bg-[#f9fafb] text-[#374151] text-xs font-semibold shadow-2xs inline-flex items-center gap-2 transition-colors"
                >
                  <span>⊞</span>
                  <span>Browse All Regions</span>
                </Link>
              </div>
            </div>

            {/* Suggested Directory Shortcuts Box */}
            <div className="pt-8 border-t border-[#f3f4f6]">
              <div className="flex items-center justify-between text-xs font-mono text-[#6b7280] mb-3 uppercase tracking-wider">
                <span className="font-semibold text-[#374151]">Suggested Directory Shortcuts</span>
                <span>SPATIAL INDEX VERIFIED</span>
              </div>

              <div className="border border-[#e5e7eb] rounded-xl overflow-hidden divide-y divide-[#f3f4f6] text-xs font-mono">
                <Link
                  href="/destinations/kyoto"
                  className="p-3.5 flex items-center justify-between hover:bg-[#f9fafb] transition-colors group"
                >
                  <span className="font-bold text-[#111827] group-hover:text-[#0f766e]">
                    Kyoto, Japan
                  </span>
                  <div className="flex items-center gap-3 text-[#6b7280]">
                    <span>/destinations/kyoto</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>

                <Link
                  href="/destinations/bergen"
                  className="p-3.5 flex items-center justify-between hover:bg-[#f9fafb] transition-colors group"
                >
                  <span className="font-bold text-[#111827] group-hover:text-[#0f766e]">
                    Bergen, Norway
                  </span>
                  <div className="flex items-center gap-3 text-[#6b7280]">
                    <span>/destinations/bergen</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>

                <Link
                  href="/regions/asia/japan/kansai"
                  className="p-3.5 flex items-center justify-between hover:bg-[#f9fafb] transition-colors group"
                >
                  <span className="font-bold text-[#111827] group-hover:text-[#0f766e]">
                    Kansai Region
                  </span>
                  <div className="flex items-center gap-3 text-[#6b7280]">
                    <span>/regions/asia/japan/kansai</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Router Diagnostic Note box (design 6) */}
            <div className="mt-8 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4 text-xs font-mono text-[#334155] space-y-1">
              <div className="text-[10px] uppercase font-bold text-[#64748b] tracking-wider mb-2 flex items-center justify-between">
                <span>ROUTER DIAGNOSTIC NOTE</span>
                <FolderIcon className="w-3.5 h-3.5 text-[#94a3b8]" />
              </div>
              <div>query_target: <span className="text-[#0f766e] font-semibold">srcdoc</span></div>
              <div>resolution_tree: null [index match fail at root:destinations/]</div>
              <div>dispatch_timestamp: 2026-10-12T11:50:44.686Z</div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between text-xs text-[#6b7280]">
            <span className="flex items-center gap-1.5">
              <span>ℹ</span>
              <span>Persistent path error?</span>
            </span>
            <a href="#" className="underline hover:text-[#111827]">
              Contact Spatial Index Support
            </a>
          </div>
        </main>
      </div>

      <footer className="border-t border-[#e5e7eb] bg-white py-6 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6b7280] gap-4">
          <div>&copy; 2025 Wayfinder Spatial Index. All rights reserved.</div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-[#111827]">Index</a>
            <a href="#" className="hover:text-[#111827]">Cartography</a>
            <a href="#" className="hover:text-[#111827]">Data Sources</a>
            <a href="#" className="hover:text-[#111827]">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
