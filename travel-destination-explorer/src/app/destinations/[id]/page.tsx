import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  CalendarIcon,
  CompassOutlineIcon,
  ClockIcon,
  TrainIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CameraIcon,
} from "@/components/Icons";
import { getAllDestinations, getDestinationById } from "@/data/travelData";

interface DestinationDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export const instant = false;

export async function generateStaticParams() {
  const destinations = getAllDestinations();
  return destinations.map((dest) => ({
    id: dest.id,
  }));
}

export default async function DestinationDetailPage({
  params,
}: DestinationDetailPageProps) {
  const { id } = await params;
  const destination = getDestinationById(id);

  if (!destination) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar activeTab="destinations" />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb matching 3_destination_detail_kyoto.png */}
          <nav className="flex items-center text-sm text-[#6b7280] mb-4 gap-2">
            <Link href="/" className="hover:text-[#0d9488]">
              Destinations
            </Link>
            <span>/</span>
            <span>{destination.region}</span>
            <span>/</span>
            <span>{destination.country}</span>
            <span>/</span>
            <span className="text-[#111827] font-semibold">{destination.name}</span>
          </nav>

          <div className="mb-6">
            <Link
              href="/"
              className="text-sm font-semibold text-[#0f766e] hover:text-[#115e59] inline-flex items-center gap-1.5"
            >
              <ArrowLeftIcon className="w-3.5 h-3.5" />
              <span>Back to destinations</span>
            </Link>
          </div>

          {/* Region Tag */}
          <div className="mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#d1d5db] bg-[#f9fafb] text-xs font-semibold text-[#374151]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]"></span>
              <span>{destination.country} &bull; {destination.region}</span>
            </span>
          </div>

          {/* Destination Header Title & Coordinate badges */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
              {destination.name}
            </h1>

            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-semibold px-3 py-1.5 rounded-md border border-[#d1d5db] bg-[#f9fafb] text-[#374151]">
                {destination.geoCoordinates}
              </span>
              <span className="font-mono text-xs font-semibold px-3 py-1.5 rounded-md border border-[#d1d5db] bg-[#f9fafb] text-[#374151]">
                {destination.indexRef}
              </span>
            </div>
          </div>

          {/* Cartographic Overview Card */}
          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6 sm:p-8 mb-8 shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[11px] font-bold font-mono tracking-wider uppercase text-[#0d9488] block mb-2">
                    Cartographic Overview
                  </span>
                  <p className="text-base text-[#1f2937] leading-relaxed font-medium">
                    {destination.tagline}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#f3f4f6] flex flex-wrap items-center justify-between text-xs font-mono text-[#4b5563] gap-4">
                  <div>
                    <span className="text-[#9ca3af]">Elevation: </span>
                    <span className="font-semibold text-[#111827]">{destination.elevation}</span>
                  </div>
                  <div>
                    <span className="text-[#9ca3af]">Prefecture: </span>
                    <span className="font-semibold text-[#111827]">{destination.prefectureOrState}</span>
                  </div>
                </div>
              </div>

              {/* Spatial Inset Graphic Box */}
              <div className="lg:col-span-5">
                <div className="w-full h-48 rounded-xl border border-[#e5e7eb] relative overflow-hidden shadow-2xs group">
                  <Image
                    src="/kyoto_spatial.jpg"
                    alt={`${destination.name} Spatial Inset`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/90 text-[#334155] backdrop-blur-xs">
                        <CameraIcon className="w-3.5 h-3.5 text-[#334155]" />
                        <span>Spatial Inset</span>
                      </span>
                      <span className="font-mono text-[10px] text-white/90 bg-black/40 px-1.5 py-0.5 rounded">
                        480 &times; 200 Ref
                      </span>
                    </div>

                    <div className="self-end">
                      <span className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded bg-white/95 text-[#1e293b] shadow-2xs">
                        {destination.spatialZone}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          {/* Key Information Box */}
          <div className="mb-8">
            <h2 className="text-base font-bold text-[#111827] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-[#0d9488]"></span>
              <span>Key Information</span>
            </h2>

            <div className="bg-white rounded-xl border border-[#e5e7eb] divide-y divide-[#f3f4f6] overflow-hidden shadow-2xs text-sm">
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 text-[#6b7280] sm:w-1/3">
                  <CalendarIcon className="w-4 h-4 text-[#0d9488]" />
                  <span className="font-medium text-xs uppercase tracking-wider">Best season</span>
                </div>
                <div className="sm:w-2/3 text-[#111827] font-medium text-sm">
                  {destination.bestSeason}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 text-[#6b7280] sm:w-1/3">
                  <CompassOutlineIcon className="w-4 h-4 text-[#0d9488]" />
                  <span className="font-medium text-xs uppercase tracking-wider">Known for</span>
                </div>
                <div className="sm:w-2/3 text-[#111827] font-medium text-sm">
                  {destination.knownFor}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 text-[#6b7280] sm:w-1/3">
                  <ClockIcon className="w-4 h-4 text-[#0d9488]" />
                  <span className="font-medium text-xs uppercase tracking-wider">Typical trip length</span>
                </div>
                <div className="sm:w-2/3 text-[#111827] font-bold text-sm">
                  {destination.tripLength}
                </div>
              </div>
            </div>
          </div>

          {/* Practical Transit Notes Box */}
          <div className="bg-white rounded-xl border border-[#e5e7eb] p-6 mb-8 shadow-2xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#f0fdfa] text-[#0d9488] border border-[#ccfbf1] flex items-center justify-center shrink-0">
              <TrainIcon className="w-5 h-5 text-[#0d9488]" />
            </div>
            <div>
              <h3 className="font-bold text-[#111827] text-base mb-1">
                Practical Transit Notes
              </h3>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                {destination.transitNotes}
              </p>
            </div>
          </div>

          {/* Bottom link row */}
          <div className="flex items-center justify-between text-xs text-[#6b7280] pt-4 border-t border-[#e5e7eb]">
            <span>Spatial Taxonomy Division: {destination.spatialTaxonomy}</span>
            <Link
              href="/regions/asia/japan/kansai"
              className="font-semibold text-[#0f766e] hover:text-[#115e59] inline-flex items-center gap-1 group"
            >
              <span>Explore Kansai Region</span>
              <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </main>
      </div>

      <footer className="border-t border-[#e5e7eb] bg-white py-6 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6b7280] gap-4">
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
