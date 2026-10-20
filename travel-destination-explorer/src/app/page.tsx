import Navbar from "@/components/Navbar";
import DestinationsListing from "@/components/DestinationsListing";
import { getAllDestinations } from "@/data/travelData";

export const metadata = {
  title: "Explore Destinations | Wayfinder Spatial Index",
  description: "Browse curated travel places organized by geographic region and terrain.",
};

export default function HomePage() {
  const destinations = getAllDestinations();

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar activeTab="destinations" />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Header section matching 1_destination_listing.png */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-4 border-b border-[#e5e7eb] gap-4">
            <div>
              <div className="text-[11px] font-mono tracking-wider text-[#6b7280] uppercase mb-1">
                CATALOGUE // 01 &bull; <span className="text-[#0d9488]">LIVE SURVEY</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111827]">
                Explore destinations
              </h1>
              <p className="mt-1 text-sm text-[#4b5563]">
                Browse curated travel places organized by geographic region and terrain.
              </p>
            </div>

            <div className="sm:text-right">
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#6b7280] block">
                TOTAL RECORDED ENTITIES
              </span>
              <span className="text-xl sm:text-2xl font-mono font-bold text-[#111827]">
                06 NODES ACTIVE
              </span>
            </div>
          </div>

          <DestinationsListing initialDestinations={destinations} />

          {/* Bottom terrain note banner */}
          <div className="mt-12 bg-white rounded-xl border border-[#e5e7eb] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#4b5563] shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="text-[#0d9488] font-bold">ℹ</span>
              <span>Destinations are systematically validated against public cartographic terrain datasets.</span>
            </div>
            <div className="font-mono text-[11px] text-[#6b7280]">
              COORDINATE FORMAT: WGS84
            </div>
          </div>
        </main>
      </div>

      {/* Global Explorer Footer */}
      <footer className="border-t border-[#e5e7eb] bg-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6b7280] gap-4">
          <div>
            &copy; 2025 Wayfinder Spatial Index. All rights reserved.
          </div>
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
