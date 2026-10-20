export interface Destination {
  id: string; // e.g., 'kyoto'
  name: string;
  country: string;
  countryCode: string; // e.g., 'JPN'
  region: string; // e.g., 'East Asia'
  subRegion?: string; // e.g., 'Kansai'
  subRegionSlug?: string; // e.g., 'kansai'
  locationCode: string; // e.g., 'LOC-35.0116'
  areaCode: string; // e.g., 'EA-01'
  coordinates: string; // e.g., '35.0116° N, 135.7681° E'
  geoCoordinates: string; // 'GEO: 35.0116° N, 135.7681° E'
  indexRef: string; // e.g., 'INDEX: KIX-KANSAI'
  description: string;
  terrainType: "historic" | "fjord" | "colonial" | "renaissance" | "port" | "alpine";
  tagline: string;
  elevation: string;
  prefectureOrState: string;
  bestSeason: string;
  knownFor: string;
  tripLength: string;
  transitNotes: string;
  spatialZone: string; // e.g., 'Zone 03 / Historic Core'
  spatialTaxonomy: string; // e.g., 'West Honshu Basin'
  prefectureNumber?: string; // e.g., 'PREF-26'
  destinationTypeBadge?: string; // e.g., 'Imperial Capital'
}

export interface RegionDivision {
  slug: string; // e.g., 'east-asia'
  name: string;
  jurisdictionCode: string; // e.g., 'DIV-EA · PACIFIC RIM'
  codeNum: string; // e.g., 'JURISDICTION CODE 01'
  settlementsCount: number;
  terrainSummary: string;
  subRegionsSummary: string;
  imageAlt: string;
  linkText: string;
  path: string;
}

export interface SubRegionInfo {
  slug: string; // 'kansai'
  parentCountry: string; // 'Japan'
  parentCountrySlug: string; // 'japan'
  grandParentContinent: string; // 'Asia'
  grandParentContinentSlug: string; // 'asia'
  name: string;
  description: string;
  spatialIndex: string; // 'LOC-34.6937°N'
  adminDivision: string; // 'Kinki Chiho (近畿地方)'
  totalArea: string; // '33,112.40 km²'
  populationIndex: string; // '~22.4M'
  principalGateway: string; // 'KIX (Kansai Intl Airport)'
  prefecturesList: string[];
  railNotes: string;
  climateNotes: string;
  primaryPass: string;
}

export interface ItineraryStop {
  id: string;
  name: string;
  nights: string;
  description: string;
}

export interface SavedNode {
  id: string;
  name: string;
  country: string;
  coordinates: string;
}
