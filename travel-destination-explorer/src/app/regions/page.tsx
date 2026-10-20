import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { getAllDivisions } from "@/data/travelData";
import { ArrowRightIcon, RouteBranchIcon, FolderIcon, MapIcon } from "@/components/Icons";


export const metadata = {
  title: "Geographic Regions | Wayfinder Spatial Index",
  description: "Explore global destinations cataloged by continent, subcontinent, and terrain systems.",
};

export default function RegionsPage() {
  const divisions = getAllDivisions();

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar activeTab="regions" />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb matching 4_regions_landing_optional_path_root.png */}
          <nav className="flex items-center text-xs font-mono text-[#6b7280] mb-4 gap-1.5">
            <span>catalog</span>
            <span>/</span>
            <span className="text-[#111827] font-semibold">Regions</span>
          </nav>

          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#d1d5db] bg-[#f9fafb] text-[11px] font-mono text-[#4b5563]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]"></span>
              <span>INDEX ROOT &bull; LEVEL 0</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-4 border-b border-[#e5e7eb] gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111827]">
                Geographic Regions
              </h1>
              <p className="mt-1 text-sm text-[#4b5563] max-w-2xl">
                Explore global destinations cataloged by continent, subcontinent, and terrain systems. Select a continental division to drill down into nested jurisdictions.
              </p>
            </div>

            <div className="flex items-center gap-6 bg-[#f9fafb] border border-[#e5e7eb] px-5 py-2.5 rounded-xl text-center self-start sm:self-auto">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#6b7280] block">
                  Settlements
                </span>
                <span className="text-lg font-bold font-mono text-[#111827]">
                  70 Indexed
                </span>
              </div>
              <div className="h-8 w-px bg-[#e5e7eb]"></div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#6b7280] block">
                  Jurisdictions
                </span>
                <span className="text-lg font-bold font-mono text-[#111827]">
                  4 Divisions
                </span>
              </div>
            </div>
          </div>

          {/* Route Architecture Diagnostic Banner */}
          <div className="bg-[#f0fdfa]/60 rounded-xl border border-[#ccfbf1] p-4 mb-8 flex items-start justify-between text-xs text-[#374151] shadow-2xs">
            <div className="flex items-start gap-3">
              <RouteBranchIcon className="w-4 h-4 text-[#0d9488] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#111827]">Route Architecture</span>
                  <span className="font-mono text-[10px] bg-white border border-[#99f6e4] px-1.5 py-0.5 rounded text-[#0f766e]">
                    optional catch-all
                  </span>
                </div>
                <div className="font-mono text-[11px] text-[#4b5563]">
                  Optional catch-all route pattern: <span className="text-[#0f766e] font-semibold bg-white px-1.5 py-0.5 rounded border border-[#99f6e4]">/regions/[[...slug]]</span> &mdash; currently at root segment level.
                </div>
                <div className="font-mono text-[10px] text-[#6b7280]">
                  PARAMS: slug: undefined &bull; RESOLUTION: ContinentalDivisionRegistry::Root
                </div>
              </div>
            </div>
            <FolderIcon className="w-3.5 h-3.5 text-[#9ca3af] shrink-0" />
          </div>

          {/* Section Sub-header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-[#111827]">
                Continental Divisions
              </h2>
              <span className="text-xs font-mono font-medium text-[#0f766e] bg-[#f0fdfa] border border-[#ccfbf1] px-2 py-0.5 rounded-full">
                4 systems
              </span>
            </div>

            <div className="text-[11px] font-mono text-[#6b7280] uppercase tracking-wider">
              SORT: CANONICAL GEODESIC
            </div>
          </div>

          {/* Grid of 4 divisions matching design 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {divisions.map((div) => (
              <div
                key={div.slug}
                className="bg-white rounded-xl border border-[#e5e7eb] p-6 shadow-2xs hover:border-[#d1d5db] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#f0fdfa] text-[#0d9488] border border-[#ccfbf1] flex items-center justify-center font-bold text-sm">
                        <MapIcon className="w-4 h-4 text-[#0d9488]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-[#111827]">
                          {div.name}
                        </h3>
                        <span className="font-mono text-[10px] text-[#6b7280]">
                          {div.jurisdictionCode}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-[#4b5563] bg-[#f9fafb] border border-[#e5e7eb] px-2.5 py-1 rounded-md">
                      {div.settlementsCount} settlements
                    </span>
                  </div>

                  {/* Terrain illustration banner with photography */}
                  <div className="w-full h-36 rounded-lg border border-[#e5e7eb] relative overflow-hidden mb-4 flex items-end p-2.5 shadow-2xs group">
                    <Image
                      src={
                        div.slug === "east-asia"
                          ? "/east_asia_terrain.jpg"
                          : div.slug === "southern-europe"
                          ? "/southern_europe_terrain.jpg"
                          : div.slug === "scandinavia"
                          ? "/scandinavia_terrain.jpg"
                          : "/latin_america_terrain.jpg"
                      }
                      alt={div.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                    <span className="relative z-10 font-mono text-[10px] font-bold tracking-wider px-2 py-1 rounded bg-[#0f172a]/85 text-white backdrop-blur-xs">
                      {div.terrainSummary}
                    </span>
                  </div>

                  <p className="text-xs text-[#4b5563] mb-5 leading-relaxed">
                    {div.subRegionsSummary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f3f4f6] flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase text-[#9ca3af]">
                    {div.codeNum}
                  </span>
                  <Link
                    href={div.path}
                    className="text-xs font-semibold text-[#0f766e] hover:text-[#115e59] inline-flex items-center gap-1 group"
                  >
                    <span>{div.linkText}</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Status bar bottom */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#6b7280] pt-4 border-t border-[#e5e7eb] gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
              <span>INDEX STATUS: SYNCED (EP-2025.04.1)</span>
            </div>
            <div>
              PROJECTION: EPSG:4326 &bull; GRANULARITY: SUBREGIONAL
            </div>
          </div>
        </main>
      </div>

      <footer className="border-t border-[#e5e7eb] bg-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6b7280] gap-4">
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
