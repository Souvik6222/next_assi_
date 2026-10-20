import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About Wayfinder | Spatial Index",
  description: "Learn more about Wayfinder cartography, geocodes, and territorial datasets.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar activeTab="about" />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8 pb-4 border-b border-[#e5e7eb]">
            <h1 className="text-3xl font-bold tracking-tight text-[#111827]">
              About Wayfinder Spatial Index
            </h1>
            <p className="mt-1 text-sm text-[#4b5563]">
              Curated cartographic database and itinerary planner for global destinations.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-2xs space-y-6 text-sm text-[#4b5563] leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-[#111827] mb-2">Project Architecture</h2>
              <p>
                Wayfinder organizes geographical entities across coordinate grids (WGS84), continental jurisdictions, nested sub-regions, and multi-modal transit networks. Built with Next.js 16 App Router, TypeScript, and Tailwind CSS.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#f3f4f6]">
              <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                <h3 className="font-semibold text-[#0f172a] mb-1">Spatial Features</h3>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#475569]">
                  <li>Live survey destination directory with category filters</li>
                  <li>Deep nested regional routes: <code>/regions/[continent]/[country]/[subregion]</code></li>
                  <li>Dedicated itinerary planner workspace with pinned nodes</li>
                  <li>Comprehensive 404 router diagnostic fallback</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                <h3 className="font-semibold text-[#0f172a] mb-1">Cartographic Tech</h3>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#475569]">
                  <li>Precision geocoding &amp; spatial index metrics</li>
                  <li>Public transit interconnectivity notes &amp; shinkansen schedules</li>
                  <li>Clean vector SVG iconography (zero emoji degradation)</li>
                  <li>Full SSG static page generation &amp; fast caching</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#f3f4f6] flex items-center justify-between">
              <Link
                href="/"
                className="text-sm font-semibold text-[#0f766e] hover:text-[#115e59]"
              >
                &larr; Explore Destinations
              </Link>
              <Link
                href="/regions"
                className="text-sm font-semibold text-[#0f766e] hover:text-[#115e59]"
              >
                Browse Continental Divisions &rarr;
              </Link>
            </div>
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
