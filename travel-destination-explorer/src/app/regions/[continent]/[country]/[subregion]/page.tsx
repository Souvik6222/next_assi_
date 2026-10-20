import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  getKansaiSubRegionInfo,
  getKansaiDestinations,
} from "@/data/travelData";
import { ArrowLeftIcon, ArrowRightIcon, TrainIcon, ThermometerIcon } from "@/components/Icons";

interface SubRegionExplorerPageProps {
  params: Promise<{
    continent?: string;
    country?: string;
    subregion?: string;
  }>;
}

export const instant = false;

export async function generateStaticParams() {
  return [
    { continent: "asia", country: "japan", subregion: "kansai" },
    { continent: "europe", country: "italy", subregion: "tuscany" },
    { continent: "europe", country: "norway", subregion: "vestland" },
    { continent: "americas", country: "mexico", subregion: "oaxaca" },
  ];
}

export default async function SubRegionExplorerPage({
  params,
}: SubRegionExplorerPageProps) {
  const { continent, country, subregion } = await params;
  const kansaiInfo = getKansaiSubRegionInfo();
  const kansaiDestinations = getKansaiDestinations();

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar activeTab="regions" />

        {/* Top technical diagnostic bar matching design 2 */}
        <div className="border-b border-[#e5e7eb] bg-[#f9fafb] px-4 sm:px-6 lg:px-8 py-2 text-xs font-mono text-[#6b7280] flex flex-wrap items-center justify-between gap-2">
          <div>
            URI: <span className="text-[#0f766e] font-semibold">/regions/{continent || "asia"}/{country || "japan"}/{subregion || "kansai"}</span> &bull; TYPE: SUB_REGION_INDEX
          </div>
          <div>
            CRS: EPSG:4326 &bull; INDEX_ID: #7240-KNSI
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb row & Back link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <Link
              href="/regions"
              className="text-xs font-semibold text-[#0f766e] hover:text-[#115e59] inline-flex items-center gap-1.5"
            >
              <ArrowLeftIcon className="w-3.5 h-3.5" />
              <span>Back to Japan overview</span>
            </Link>

            <nav className="flex items-center text-xs text-[#6b7280] gap-1.5 font-mono">
              <Link href="/" className="hover:text-[#0d9488]">Destinations</Link>
              <span>/</span>
              <span>Asia</span>
              <span>/</span>
              <span>Japan</span>
              <span>/</span>
              <span className="text-[#111827] font-bold">Kansai</span>
            </nav>
          </div>

          {/* Region Title Section with Spatial Metrics Sidebar (design 2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 pb-8 border-b border-[#e5e7eb]">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-mono text-[#0d9488] font-semibold">
                ↳ Asia / Japan / Kansai
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
                {kansaiInfo.name}
              </h1>
              <p className="text-sm text-[#4b5563] leading-relaxed max-w-2xl">
                {kansaiInfo.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#f3f4f6] text-[#374151] border border-[#e5e7eb]">
                  Parent: <span className="font-bold text-[#111827]">Japan ↗</span>
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#f3f4f6] text-[#374151] border border-[#e5e7eb]">
                  Grandparent: <span className="font-bold text-[#111827]">Asia ↗</span>
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#f0fdfa] text-[#0f766e] border border-[#99f6e4] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]"></span>
                  <span>Prefectures: 7 (Mie, Shiga, Kyoto, Osaka, Hyogo, Nara, Wakayama)</span>
                </span>
              </div>
            </div>

            {/* Spatial Index Metrics Box (Right side) */}
            <div className="lg:col-span-4 bg-white rounded-xl border border-[#e5e7eb] p-5 shadow-2xs text-xs font-mono">
              <div className="flex items-center justify-between pb-3 border-b border-[#f3f4f6] text-[#6b7280]">
                <span className="uppercase tracking-wider font-semibold">SPATIAL INDEX METRICS</span>
                <span className="text-[#0f766e] font-bold">{kansaiInfo.spatialIndex}</span>
              </div>

              <div className="divide-y divide-[#f3f4f6] text-[#374151]">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#6b7280]">Administrative Division</span>
                  <span className="font-semibold text-right text-[#111827]">{kansaiInfo.adminDivision}</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#6b7280]">Total Area</span>
                  <span className="font-semibold text-[#111827]">{kansaiInfo.totalArea}</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#6b7280]">Population Index</span>
                  <span className="font-semibold text-[#111827]">{kansaiInfo.populationIndex}</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#6b7280]">Principal Gateway</span>
                  <span className="font-semibold text-[#111827]">{kansaiInfo.principalGateway}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Destinations in this region section */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-[#111827]">
                Destinations in this region (4)
              </h2>
              <div className="text-xs font-mono text-[#6b7280]">
                Sort: Hierarchy | <span className="text-[#0f766e]">Density Map</span>
              </div>
            </div>
            <p className="text-xs text-[#6b7280] mb-6">
              Settlement nodes cataloged with active transit corridors and spatial reference points.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {kansaiDestinations.map((dest) => (
                <div
                  key={dest.id}
                  className="bg-white rounded-xl border border-[#e5e7eb] p-5 shadow-2xs hover:border-[#d1d5db] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-[#6b7280]">
                        {dest.code} &bull; {dest.prefNumber}
                      </span>
                      <span className="text-[11px] font-semibold text-[#374151] bg-[#f9fafb] border border-[#e5e7eb] px-2 py-0.5 rounded">
                        {dest.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#111827] mb-1">
                      {dest.name}
                    </h3>

                    <p className="text-xs text-[#4b5563] mb-6 leading-relaxed">
                      {dest.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#f3f4f6] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#6b7280]">{dest.coords}</span>
                    <Link
                      href={`/destinations/${dest.id}`}
                      className="font-semibold text-[#0f766e] hover:text-[#115e59] inline-flex items-center gap-1 group"
                    >
                      <span>View destination</span>
                      <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Spatial Notes & Connectivity Box */}
          <div className="bg-white rounded-xl border border-[#e5e7eb] p-6 mb-12 shadow-2xs">
            <h3 className="text-sm font-bold text-[#111827] mb-4 flex items-center gap-2">
              <span className="text-[#0d9488]">ℹ</span>
              <span>Regional Spatial Notes &amp; Connectivity</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#4b5563] leading-relaxed">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-[#111827]">
                  <TrainIcon className="w-4 h-4 text-[#0d9488]" />
                  <span>Rail Interconnectivity &amp; Transit Arteries</span>
                </div>
                <p>{kansaiInfo.railNotes}</p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-[#111827]">
                  <ThermometerIcon className="w-4 h-4 text-[#0d9488]" />
                  <span>Geographic Microclimates &amp; Topography</span>
                </div>
                <p>{kansaiInfo.climateNotes}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#f3f4f6] flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-[#6b7280] gap-2">
              <div>Primary pass: {kansaiInfo.primaryPass}</div>
              <div>Verified spatial notes (Updated: Autumn cycle)</div>
            </div>
          </div>
        </main>
      </div>

      <footer className="border-t border-[#e5e7eb] bg-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6b7280] gap-4">
          <div>Wayfinder &bull; &copy; 2025 Wayfinder Spatial Index. All rights reserved.</div>
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
