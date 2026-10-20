"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  sampleItineraryStops,
  sampleSavedNodes,
} from "@/data/travelData";
import {
  PinIcon,
  ArrowLeftIcon,
  FolderIcon,
  SettingsIcon,
  BookOpenIcon,
  ClockIcon,
  RouteBranchIcon,
  TrainIcon,
} from "@/components/Icons";

export default function PlannerPage() {
  const [stops, setStops] = useState(sampleItineraryStops);
  const [savedNodes, setSavedNodes] = useState(sampleSavedNodes);
  const [activeTab, setActiveTab] = useState<"overview" | "saved" | "preferences">("overview");

  const removeSavedNode = (id: string) => {
    setSavedNodes((prev) => prev.filter((node) => node.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-between">
      <div>
        <Navbar activeTab="planner" isPlannerMode={true} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar Menu (design 5) */}
            <aside className="lg:col-span-3 space-y-6">
              <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 shadow-2xs">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#94a3b8] mb-2 flex items-center justify-between">
                  <span>WORKSPACE</span>
                  <span className="font-semibold text-[#0d9488]">v1.2</span>
                </div>
                <div className="text-base font-bold text-[#0f172a] mb-4">
                  Field Workspace
                </div>

                <nav className="space-y-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab("overview")}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      activeTab === "overview"
                        ? "bg-[#f0fdfa] text-[#0f766e] border border-[#ccfbf1]"
                        : "text-[#475569] hover:bg-[#f1f5f9]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <FolderIcon className="w-4 h-4 text-[#0d9488]" />
                      <span>Overview</span>
                    </div>
                    {activeTab === "overview" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]"></span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("saved")}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      activeTab === "saved"
                        ? "bg-[#f0fdfa] text-[#0f766e] border border-[#ccfbf1]"
                        : "text-[#475569] hover:bg-[#f1f5f9]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <PinIcon className="w-4 h-4 text-[#0d9488]" />
                      <span>Saved Places</span>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-[#f1f5f9] text-[#64748b]">
                      {savedNodes.length}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("preferences")}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      activeTab === "preferences"
                        ? "bg-[#f0fdfa] text-[#0f766e] border border-[#ccfbf1]"
                        : "text-[#475569] hover:bg-[#f1f5f9]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <SettingsIcon className="w-4 h-4 text-[#0d9488]" />
                      <span>Preferences</span>
                    </div>
                  </button>
                </nav>
              </div>

              {/* Index Resources Box */}
              <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 shadow-2xs space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#94a3b8]">
                  INDEX RESOURCES
                </div>
                <div className="space-y-2 text-xs">
                  <a href="#" className="flex items-center gap-2 text-[#475569] hover:text-[#0d9488]">
                    <BookOpenIcon className="w-4 h-4 text-[#64748b]" />
                    <span>Documentation</span>
                  </a>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-[#0f766e] font-semibold hover:text-[#115e59]"
                  >
                    <ArrowLeftIcon className="w-3.5 h-3.5" />
                    <span>Exit to Public Explorer</span>
                  </Link>
                </div>
              </div>

              {/* Cartographic Mesh Active Box */}
              <div className="bg-[#f0fdfa] rounded-xl border border-[#ccfbf1] p-4 text-xs">
                <div className="flex items-center gap-2 font-bold text-[#0f766e] mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
                  <span>Cartographic Mesh</span>
                </div>
                <p className="text-[11px] text-[#475569] leading-relaxed">
                  Japan Rail &amp; Regional Sub-grids active. No conflicts found.
                </p>
              </div>
            </aside>

            {/* Right Main Content Panel (matches design 5) */}
            <main className="lg:col-span-9 space-y-6">
              <div>
                <nav className="flex items-center text-xs font-mono text-[#64748b] mb-2 gap-1.5">
                  <span>Planner</span>
                  <span>/</span>
                  <span className="text-[#0f172a] font-bold">Overview</span>
                </nav>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h1 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">
                    Trip Overview
                  </h1>
                  <span className="text-xs font-mono text-[#64748b] flex items-center gap-1.5">
                    <ClockIcon className="w-3.5 h-3.5 text-[#64748b]" />
                    <span>Updated 42m ago</span>
                  </span>
                </div>
                <p className="text-sm text-[#475569] mt-1">
                  Your current route draft and curated spatial bookmarks.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Draft Itinerary Card (Left) */}
                <div className="lg:col-span-7 bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-2xs space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#f0fdfa] text-[#0f766e] border border-[#ccfbf1]">
                      Active Draft
                    </span>
                    <span className="text-xs font-mono font-medium text-[#64748b]">
                      8 Days Total
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0f172a]">
                      Autumn in Honshu
                    </h2>
                    <p className="text-xs font-mono text-[#64748b] mt-1">
                      Dates: Oct 14–22 &bull; 3 Destinations
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#94a3b8]">
                      ITINERARY STOPS
                    </div>

                    <div className="space-y-3 relative pl-6 border-l-2 border-[#ccfbf1]">
                      {stops.map((stop) => (
                        <div
                          key={stop.id}
                          className="bg-[#f8fafc] border border-[#e2e8f0] p-4 rounded-xl relative hover:border-[#cbd5e1] transition-all"
                        >
                          <span className="absolute -left-[31px] top-5 w-3 h-3 rounded-full bg-[#0d9488] ring-4 ring-white"></span>
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-bold text-[#0f172a] text-sm">
                              {stop.name}
                            </h3>
                            <span className="text-xs font-mono text-[#0f766e] font-semibold bg-white px-2 py-0.5 rounded border border-[#e2e8f0]">
                              {stop.nights}
                            </span>
                          </div>
                          <p className="text-xs text-[#64748b] leading-relaxed">
                            {stop.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#f1f5f9] flex items-center justify-between text-xs">
                    <span className="font-mono text-[#64748b] flex items-center gap-1.5">
                      <RouteBranchIcon className="w-3.5 h-3.5 text-[#0d9488]" />
                      <span>Tokaido-Sanyo Main Corridor</span>
                    </span>
                    <button type="button" className="text-[#0f766e] font-semibold hover:text-[#115e59]">
                      Edit Schedule &rarr;
                    </button>
                  </div>
                </div>

                {/* Right Side Column (Saved Places + Transit Notes) */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Saved Nodes Card */}
                  <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-2xs space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-sm text-[#0f172a]">
                          Saved Destination Nodes
                        </h3>
                        <p className="text-[11px] text-[#64748b]">
                          {savedNodes.length} indexed locations pinned
                        </p>
                      </div>
                      <span className="w-5 h-5 rounded-full bg-[#f1f5f9] text-[#475569] font-mono text-xs flex items-center justify-center font-bold">
                        {savedNodes.length}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {savedNodes.map((node) => (
                        <div
                          key={node.id}
                          className="border border-[#e2e8f0] rounded-lg p-3 hover:bg-[#f8fafc] transition-colors flex items-center justify-between text-xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <PinIcon className="w-4 h-4 text-[#0d9488]" />
                            <div>
                              <div className="font-bold text-[#0f172a]">{node.name}</div>
                              <div className="font-mono text-[10px] text-[#94a3b8]">{node.coordinates}</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Link
                              href={`/destinations/${node.id}`}
                              className="text-[#0f766e] hover:underline font-semibold"
                            >
                              Details
                            </Link>
                            <button
                              type="button"
                              onClick={() => removeSavedNode(node.id)}
                              className="text-[#94a3b8] hover:text-[#ef4444]"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 text-right">
                      <Link
                        href="/"
                        className="text-xs font-semibold text-[#0f766e] hover:text-[#115e59]"
                      >
                        Browse Spatial Bookmarks &rarr;
                      </Link>
                    </div>
                  </div>

                  {/* Transit & Route Notes Box */}
                  <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-2xs space-y-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0f172a]">
                      <TrainIcon className="w-4 h-4 text-[#0d9488]" />
                      <span>Transit &amp; Route Notes</span>
                    </div>

                    <p className="text-xs text-[#64748b] leading-relaxed">
                      Static synthesis of transit infrastructure across regional links. Optimized for minimal connections and standard gauge lines.
                    </p>

                    <div className="bg-[#f8fafc] border border-[#e2e8f0] p-3 rounded-lg text-xs font-mono space-y-1.5 text-[#334155]">
                      <div className="flex items-center justify-between font-bold">
                        <span>JR Kansai W. Pass</span>
                        <span className="text-[#10b981]">Valid (Days 1–5)</span>
                      </div>
                      <div className="flex items-center justify-between text-[#64748b] text-[11px]">
                        <span>Kyoto &harr; Osaka Express</span>
                        <span>28m via Tokaido Line</span>
                      </div>
                      <div className="flex items-center justify-between text-[#64748b] text-[11px]">
                        <span>Osaka &harr; Nara Rapid</span>
                        <span>39m via Yamatoji Line</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-[#64748b] flex items-start gap-1.5">
                      <span className="text-[#0d9488]">ℹ</span>
                      <span>Luggage forwarding available between Kyoto &amp; Osaka terminals.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Spatial Topology Bar */}
              <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs shadow-2xs">
                <div className="flex items-center gap-3">
                  <PinIcon className="w-4 h-4 text-[#0d9488] shrink-0" />
                  <div>
                    <span className="font-bold text-[#0f172a] block">
                      Spatial Topology Index: Clean
                    </span>
                    <span className="text-[#64748b]">
                      All geocodes and route links are verified against catalog definitions.
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="px-3 py-1.5 border border-[#cbd5e1] rounded-md text-xs font-semibold text-[#334155] bg-white hover:bg-[#f8fafc] shadow-2xs cursor-pointer"
                  >
                    Export GeoJSON
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1.5 border border-[#cbd5e1] rounded-md text-xs font-semibold text-[#334155] bg-white hover:bg-[#f8fafc] shadow-2xs cursor-pointer"
                  >
                    Print Spatial Index
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <footer className="border-t border-[#e2e8f0] bg-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748b] gap-4">
          <div>Wayfinder &bull; &copy; 2025 Wayfinder Spatial Index. All rights reserved.</div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-[#0f172a]">Index</a>
            <a href="#" className="hover:text-[#0f172a]">Cartography</a>
            <a href="#" className="hover:text-[#0f172a]">Data Sources</a>
            <a href="#" className="hover:text-[#0f172a]">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
