import { Destination, RegionDivision, SubRegionInfo, ItineraryStop, SavedNode } from "@/types/travel";

export const destinations: Destination[] = [
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    countryCode: "JPN",
    region: "East Asia",
    subRegion: "Kansai",
    subRegionSlug: "kansai",
    locationCode: "LOC-35.0116",
    areaCode: "EA-01",
    coordinates: "35.0116° N, 135.7681° E",
    geoCoordinates: "GEO: 35.0116° N, 135.7681° E",
    indexRef: "INDEX: KIX-KANSAI",
    description: "Historic shrines, bamboo groves, and traditional wooden tea houses.",
    tagline: "Former imperial capital renowned for classical Buddhist temples, Zen gardens, imperial palaces, Shinto shrines, and preserved wooden merchant townhouses.",
    terrainType: "historic",
    elevation: "54m",
    prefectureOrState: "Kyoto (京都府)",
    bestSeason: "Spring (March–May) for cherry blossoms or Autumn (October–November) for foliage",
    knownFor: "Zen gardens, bamboo forests, Kaiseki dining, and historic preservation",
    tripLength: "4 to 6 days",
    transitNotes: "Intercity arrival routes through Kyoto Station via the Tokaido Shinkansen, linking central Tokyo within approximately 135 minutes. Intra-city navigation relies predominantly on integrated municipal bus lines and the Karasuma and Tozai subway networks via standard IC tap cards.",
    spatialZone: "Zone 03 / Historic Core",
    spatialTaxonomy: "West Honshu Basin",
    prefectureNumber: "PREF-26",
    destinationTypeBadge: "Imperial Capital",
  },
  {
    id: "bergen",
    name: "Bergen",
    country: "Norway",
    countryCode: "NOR",
    region: "Scandinavia",
    locationCode: "LOC-60.3913",
    areaCode: "SC-04",
    coordinates: "60.3913° N, 5.3221° E",
    geoCoordinates: "GEO: 60.3913° N, 5.3221° E",
    indexRef: "INDEX: BGO-FJORDS",
    description: "Coastal fjord gateway known for colorful wooden wharfs and mountain funiculars.",
    tagline: "UNESCO-listed Hanseatic wharf Bryggen framed by steep fjords and seven mountains, offering access to dramatic Norwegian water corridors.",
    terrainType: "fjord",
    elevation: "12m",
    prefectureOrState: "Vestland",
    bestSeason: "Summer (June–August) for long daylight hours and open fjord excursions",
    knownFor: "Bryggen timber quarter, Fløibanen funicular, and deep fjord crossings",
    tripLength: "3 to 5 days",
    transitNotes: "Bergen Light Rail (Bybanen) connects Flesland Airport with the city center. Scenic Bergen Line trains offer rail connections across the Hardangervidda plateau directly from Oslo.",
    spatialZone: "Zone 01 / Fjord Rim",
    spatialTaxonomy: "Nordic Coastal Shelf",
  },
  {
    id: "oaxaca",
    name: "Oaxaca",
    country: "Mexico",
    countryCode: "MEX",
    region: "Central America",
    locationCode: "LOC-17.0732",
    areaCode: "CA-02",
    coordinates: "17.0732° N, 96.7266° W",
    geoCoordinates: "GEO: 17.0732° N, 96.7266° W",
    indexRef: "INDEX: OAX-VALLEY",
    description: "Colonial architecture, indigenous craft markets, and renowned culinary traditions.",
    tagline: "Highland sanctuary celebrated for Zapotec archaeological sites, vibrant street markets, seven styles of mole, and artisan mezcal distilleries.",
    terrainType: "colonial",
    elevation: "1,555m",
    prefectureOrState: "Oaxaca State",
    bestSeason: "October to March for mild dry weather and Dia de los Muertos festivities",
    knownFor: "Zapotec ruins, culinary heritage, handmade textiles, and mezcal",
    tripLength: "4 to 7 days",
    transitNotes: "Direct regional flights connect Oaxaca International Airport to Mexico City and regional hubs. Historic center is pedestrian-friendly with registered colectivos serving nearby artisan villages.",
    spatialZone: "Zone 02 / Central Valley",
    spatialTaxonomy: "Sierra Madre del Sur Basin",
  },
  {
    id: "florence",
    name: "Florence",
    country: "Italy",
    countryCode: "ITA",
    region: "Southern Europe",
    locationCode: "LOC-43.7696",
    areaCode: "SE-08",
    coordinates: "43.7696° N, 11.2558° E",
    geoCoordinates: "GEO: 43.7696° N, 11.2558° E",
    indexRef: "INDEX: FLR-TUSCANY",
    description: "Renaissance art museums, terracotta-domed cathedral, and Tuscan wine country.",
    tagline: "Birthplace of the Italian Renaissance, housing world-class galleries, Brunelleschi's iconic Duomo, and the historic Arno riverfront.",
    terrainType: "renaissance",
    elevation: "50m",
    prefectureOrState: "Tuscany",
    bestSeason: "April to May or September to October for pleasant weather and vintage harvests",
    knownFor: "Uffizi Gallery, Ponte Vecchio, Renaissance architecture, and Tuscan cuisine",
    tripLength: "3 to 5 days",
    transitNotes: "Santa Maria Novella station provides high-speed Frecciarossa connections to Rome, Milan, and Venice in under two hours. Center is a strict low-emission pedestrian ZTL zone.",
    spatialZone: "Zone 01 / Arno River Basin",
    spatialTaxonomy: "Central Apennines Foothills",
  },
  {
    id: "essaouira",
    name: "Essaouira",
    country: "Morocco",
    countryCode: "MAR",
    region: "North Africa",
    locationCode: "LOC-31.5085",
    areaCode: "NA-03",
    coordinates: "31.5085° N, 9.7595° W",
    geoCoordinates: "GEO: 31.5085° N, 9.7595° W",
    indexRef: "INDEX: ESU-ATLANTIC",
    description: "Atlantic port ramparts, breezy medina alleyways, and artisan woodcraft.",
    tagline: "Fortified 18th-century Atlantic seaside medina characterized by blue-shuttered white facades, fishing port ramparts, and constant coastal trade winds.",
    terrainType: "port",
    elevation: "6m",
    prefectureOrState: "Marrakech-Safi",
    bestSeason: "May to October for coastal breezes avoiding inland desert heat",
    knownFor: "Skala du Port ramparts, Gnawa music culture, kite surfing, and Thuya woodwork",
    tripLength: "2 to 4 days",
    transitNotes: "Direct express coach lines (CTM and Supratours) run frequent air-conditioned routes between Marrakech and Essaouira in 2.5 hours.",
    spatialZone: "Zone 04 / Maritime Bastion",
    spatialTaxonomy: "Atlantic Coastal Plain",
  },
  {
    id: "queenstown",
    name: "Queenstown",
    country: "New Zealand",
    countryCode: "NZL",
    region: "Oceania",
    locationCode: "LOC-45.0312",
    areaCode: "OC-06",
    coordinates: "45.0312° S, 168.6626° E",
    geoCoordinates: "GEO: 45.0312° S, 168.6626° E",
    indexRef: "INDEX: ZQN-SOUTHERN-ALPS",
    description: "Alpine lake landscapes, glacial valleys, and outdoor trail expeditions.",
    tagline: "Adventure hub set against Lake Wakatipu and the dramatic Remarkables mountain range on New Zealand's South Island.",
    terrainType: "alpine",
    elevation: "310m",
    prefectureOrState: "Otago",
    bestSeason: "December to February for lake hikes; June to August for ski fields",
    knownFor: "Lake Wakatipu cruises, hiking trails, Milford Sound flyovers, and vineyard tours",
    tripLength: "4 to 7 days",
    transitNotes: "Queenstown International Airport provides domestic and trans-Tasman links. Scheduled water taxis and Orbus public buses connect Frankton with Queenstown Central.",
    spatialZone: "Zone 05 / Alpine Glacial Basin",
    spatialTaxonomy: "Southern Alps Fault Zone",
  },
];

// Additional Kansai region destinations for 2_nested_region_explorer_kansai.png
export const kansaiRegionDestinations: {
  id: string;
  name: string;
  code: string;
  prefNumber: string;
  badge: string;
  description: string;
  coords: string;
}[] = [
  {
    id: "kyoto",
    name: "Kyoto",
    code: "#KYO",
    prefNumber: "PREF-26",
    badge: "Imperial Capital",
    description: "Historic temples, traditional craft districts, and tea ceremony traditions",
    coords: "35.0116° N, 135.7681° E",
  },
  {
    id: "osaka",
    name: "Osaka",
    code: "#OSA",
    prefNumber: "PREF-27",
    badge: "Metropolis Hub",
    description: "Vibrant canal promenades, commercial neon districts, and street culinary culture",
    coords: "34.6937° N, 135.5023° E",
  },
  {
    id: "nara",
    name: "Nara",
    code: "#NAR",
    prefNumber: "PREF-29",
    badge: "Historical Center",
    description: "Ancient temples, roaming park deer, and early Japanese architecture",
    coords: "34.6851° N, 135.8048° E",
  },
  {
    id: "kobe",
    name: "Kobe",
    code: "#UKB",
    prefNumber: "PREF-28",
    badge: "Port Coastal",
    description: "Harbor city nestled between Mount Rokko and Osaka Bay with maritime heritage",
    coords: "34.6901° N, 135.1955° E",
  },
];

export const kansaiSubRegionInfo: SubRegionInfo = {
  slug: "kansai",
  parentCountry: "Japan",
  parentCountrySlug: "japan",
  grandParentContinent: "Asia",
  grandParentContinentSlug: "asia",
  name: "Kansai Region",
  description: "The cultural and historical heart of western Honshu, encompassing ancient capitals, mountain pilgrimage routes, and major culinary ports.",
  spatialIndex: "LOC-34.6937°N",
  adminDivision: "Kinki Chiho (近畿地方)",
  totalArea: "33,112.40 km²",
  populationIndex: "~22.4M",
  principalGateway: "KIX (Kansai Intl Airport)",
  prefecturesList: ["Mie", "Shiga", "Kyoto", "Osaka", "Hyogo", "Nara", "Wakayama"],
  railNotes: "The Kansai corridor is bound by one of the densest private and national rail meshes globally. The JR Tokaido-Sanyo Shinkansen anchors the primary east-west spine connecting Kyoto, Shin-Osaka, and Shin-Kobe in under 30 minutes. Hankyu, Hanshin, Keihan, and Kintetsu private networks provide non-JR redundant links serving suburban belts and pilgrimage footpaths into Mount Koya and Yoshino.",
  climateNotes: "Flanked by the Tamba highlands to the north, the Kii mountain spine to the south, and Osaka Bay to the west, Kansai experiences stark microclimates. Kyoto's closed basin results in sharp seasonal temperature deltas (hot humid summers and biting winters), whereas Kobe and southern Osaka benefit from maritime moderations created by the Seto Inland Sea wind tunnels.",
  primaryPass: "JR Kansai Area Pass · Transit interoperability: ICOCA / Suica integrated",
};

export const continentalDivisions: RegionDivision[] = [
  {
    slug: "east-asia",
    name: "East Asia",
    jurisdictionCode: "DIV-EA · PACIFIC RIM",
    codeNum: "JURISDICTION CODE 01",
    settlementsCount: 18,
    terrainSummary: "TERRAIN: ISLAND ARCS & BASINS",
    subRegionsSummary: "Sub-regions: Japan, South Korea, Taiwan · 18 cataloged settlements",
    imageAlt: "East Asia Pagoda & Mountain Architecture",
    linkText: "Browse East Asia",
    path: "/regions/asia/japan/kansai",
  },
  {
    slug: "southern-europe",
    name: "Southern Europe",
    jurisdictionCode: "DIV-SE · MEDITERRANEAN BASIN",
    codeNum: "JURISDICTION CODE 02",
    settlementsCount: 24,
    terrainSummary: "TERRAIN: KARST & MARITIME VALLEYS",
    subRegionsSummary: "Sub-regions: Italy, Spain, Greece, Portugal · 24 cataloged settlements",
    imageAlt: "Southern European Coastal Cliffs",
    linkText: "Browse Southern Europe",
    path: "/regions/europe/italy/tuscany",
  },
  {
    slug: "scandinavia",
    name: "Scandinavia",
    jurisdictionCode: "DIV-SC · BALTIC SHIELD",
    codeNum: "JURISDICTION CODE 03",
    settlementsCount: 12,
    terrainSummary: "TERRAIN: GLACIAL FJORDS & ARCHIPELAGOS",
    subRegionsSummary: "Sub-regions: Norway, Sweden, Denmark, Finland · 12 cataloged settlements",
    imageAlt: "Scandinavian Glacial Fjords",
    linkText: "Browse Scandinavia",
    path: "/regions/europe/norway/vestland",
  },
  {
    slug: "central-south-america",
    name: "Central & South America",
    jurisdictionCode: "DIV-CSA · ANDEAN CORDILLERA",
    codeNum: "JURISDICTION CODE 04",
    settlementsCount: 16,
    terrainSummary: "TERRAIN: HIGHLAND PLATEAUS & CANOPIES",
    subRegionsSummary: "Sub-regions: Mexico, Peru, Colombia, Chile · 16 cataloged settlements",
    imageAlt: "Andean Highland Terraces",
    linkText: "Browse Latin America",
    path: "/regions/americas/mexico/oaxaca",
  },
];

export const sampleItineraryStops: ItineraryStop[] = [
  {
    id: "kyoto",
    name: "Kyoto",
    nights: "3 nights",
    description: "Historic ward corridors, Gion, Arashiyama bamboo path",
  },
  {
    id: "osaka",
    name: "Osaka",
    nights: "2 nights",
    description: "Dotonbori food district, Namba architectural nexus",
  },
  {
    id: "nara",
    name: "Nara",
    nights: "Day trip",
    description: "Todai-ji temple, Kasuga Taisha park preserve",
  },
];

export const sampleSavedNodes: SavedNode[] = [
  {
    id: "kyoto",
    name: "Kyoto, Japan",
    country: "Japan",
    coordinates: "35.0116° N, 135.7681° E",
  },
  {
    id: "bergen",
    name: "Bergen, Norway",
    country: "Norway",
    coordinates: "60.3913° N, 5.3221° E",
  },
  {
    id: "florence",
    name: "Florence, Italy",
    country: "Italy",
    coordinates: "43.7696° N, 11.2558° E",
  },
];

export function getAllDestinations(): Destination[] {
  return destinations;
}

export function getDestinationById(id: string): Destination | undefined {
  const cleanId = decodeURIComponent(id).toLowerCase();
  return destinations.find((d) => d.id.toLowerCase() === cleanId);
}

export function getAllDivisions(): RegionDivision[] {
  return continentalDivisions;
}

export function getKansaiSubRegionInfo(): SubRegionInfo {
  return kansaiSubRegionInfo;
}

export function getKansaiDestinations() {
  return kansaiRegionDestinations;
}
