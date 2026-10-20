"use client";

import { useState } from "react";
import { Destination } from "@/types/travel";
import DestinationCard from "./DestinationCard";

interface DestinationsListingProps {
  initialDestinations: Destination[];
}

const REGION_TABS = [
  "All Regions",
  "East Asia",
  "Southern Europe",
  "Scandinavia",
  "South America",
  "North Africa",
];

export default function DestinationsListing({ initialDestinations }: DestinationsListingProps) {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  const filteredDestinations = initialDestinations.filter((dest) => {
    if (selectedRegion === "All Regions") return true;
    if (selectedRegion === "South America") {
      return dest.region === "Central America" || dest.region === "South America";
    }
    return dest.region.toLowerCase() === selectedRegion.toLowerCase();
  });

  return (
    <div>
      {/* Category Filter Pills (matching 1_destination_listing.png) */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {REGION_TABS.map((tab) => {
          const isActive = selectedRegion === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setSelectedRegion(tab)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#f0fdfa] text-[#0f766e] border border-[#0d9488]"
                  : "bg-white text-[#4b5563] border border-[#d1d5db] hover:border-[#9ca3af] hover:text-[#111827]"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Grid of destinations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>

      {filteredDestinations.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-[#e5e7eb]">
          <p className="text-[#6b7280] text-sm">
            No destinations found in this region category.
          </p>
        </div>
      )}
    </div>
  );
}
