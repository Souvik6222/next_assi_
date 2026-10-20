import Link from "next/link";
import { Destination } from "@/types/travel";
import {
  ShintoShrineIcon,
  WaveIcon,
  MountainIcon,
  BuildingColumnIcon,
  SailboatIcon,
  ArrowRightIcon,
} from "./Icons";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const renderTerrainIcon = () => {
    switch (destination.terrainType) {
      case "historic":
        return <ShintoShrineIcon className="w-4 h-4 text-[#4b5563]" />;
      case "fjord":
        return <WaveIcon className="w-4 h-4 text-[#4b5563]" />;
      case "colonial":
        return <MountainIcon className="w-4 h-4 text-[#4b5563]" />;
      case "renaissance":
        return <BuildingColumnIcon className="w-4 h-4 text-[#4b5563]" />;
      case "port":
        return <SailboatIcon className="w-4 h-4 text-[#4b5563]" />;
      case "alpine":
      default:
        return <MountainIcon className="w-4 h-4 text-[#4b5563]" />;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-[#e5e7eb] p-6 shadow-2xs hover:shadow-sm hover:border-[#d1d5db] transition-all flex flex-col justify-between">
      <div>
        {/* Top coordinate banner */}
        <div className="bg-[#eff6ff]/70 border border-[#dbeafe] rounded-lg px-3 py-2 flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            {renderTerrainIcon()}
            <span className="font-mono text-xs text-[#374151] font-semibold">
              {destination.locationCode}
            </span>
          </div>
          <span className="font-mono text-[11px] font-bold text-[#4b5563] bg-white px-2 py-0.5 rounded border border-[#bfdbfe]">
            {destination.areaCode}
          </span>
        </div>

        <div className="flex items-baseline justify-between mb-1">
          <h3 className="font-bold text-xl text-[#111827]">
            {destination.name}
          </h3>
          <span className="font-mono text-xs font-bold text-[#6b7280]">
            {destination.countryCode}
          </span>
        </div>

        <div className="text-xs text-[#6b7280] mb-3">
          <span>{destination.country}</span>
          <span className="mx-1.5">&bull;</span>
          <span>{destination.region}</span>
        </div>

        <p className="text-sm text-[#4b5563] leading-relaxed mb-6">
          {destination.description}
        </p>
      </div>

      <div className="pt-4 border-t border-[#f3f4f6] flex items-center justify-between">
        <Link
          href={`/destinations/${destination.id}`}
          className="text-xs font-semibold text-[#111827] hover:text-[#0d9488] inline-flex items-center gap-1.5 group"
        >
          <span>View destination</span>
          <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
        <span className="w-1.5 h-1.5 rounded-full bg-[#9ca3af]"></span>
      </div>
    </div>
  );
}
