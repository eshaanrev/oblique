export type Shot = {
  src: string;
  alt: string;
  caption: string;
  /** object-position, used to re-crop the same negative for a different read */
  focus?: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  place: string;
  year: string;
  typology: string;
  status: string;
  size: string;
  client: string;
  team: string;
  lede: string;
  body: string[];
  facts: { label: string; value: string }[];
  cover: Shot;
  gallery: Shot[];
};

export const projects: Project[] = [
  {
    slug: "kaskad-centre",
    index: "01",
    title: "Kaskad Centre",
    place: "Baku, Azerbaijan",
    year: "2024",
    typology: "Cultural",
    status: "Completed",
    size: "38,400 m²",
    client: "Caspian Culture Foundation",
    team: "N. Adeyemi, S. Kaur, M. Renko",
    lede:
      "A cultural centre with no straight line in its envelope, where the public plaza does not stop at the door but keeps rising until it becomes the roof.",
    body: [
      "The brief asked for an auditorium, three galleries and a library. What the city actually needed was somewhere to stand. Kaskad puts the entire programme underneath a single continuous surface, so that ninety per cent of the site remains walkable, free and open at every hour.",
      "The shell is a doubly curved space frame carrying 16,400 glass-fibre reinforced concrete panels, no two identical. Every panel was cut from a shared parametric master and tagged with its own installation sequence; the façade was closed in fourteen months without a single remade unit.",
      "Inside, the geometry stops. Rooms are orthogonal, quiet and acoustically dead, because the drama belongs to the approach and not to the reading room.",
    ],
    facts: [
      { label: "Envelope", value: "16,400 GFRC panels" },
      { label: "Span", value: "84 m, column-free" },
      { label: "Public realm", value: "90% of site" },
      { label: "Façade programme", value: "14 months" },
      { label: "Award", value: "Aga Khan Award, shortlist" },
    ],
    cover: {
      src: "/images/kaskad-centre.jpg",
      alt: "A sweeping white curved concrete building with a lone figure crossing the stepped plaza in front of it",
      caption: "The plaza rising into the roof, seen from the south approach",
    },
    gallery: [
      {
        src: "/images/aperture-hall.jpg",
        alt: "Looking up the underside of a curved, faceted dark façade against a pale sky",
        caption: "Soffit of the north cantilever",
        focus: "center",
      },
      {
        src: "/images/facet-detail.jpg",
        alt: "Close view of angled metal fins and glazing on a dark façade",
        caption: "Panel junction, typical",
        focus: "center",
      },
      {
        src: "/images/kaskad-centre.jpg",
        alt: "The stepped plaza of the cultural centre in raking light",
        caption: "Plaza treads, 1:1 mock-up approved on site",
        focus: "50% 80%",
      },
    ],
  },
  {
    slug: "halden-tower",
    index: "02",
    title: "Halden Tower",
    place: "Berlin, Germany",
    year: "2025",
    typology: "Residential",
    status: "Completed",
    size: "24,100 m²",
    client: "Halden Wohnbau GmbH",
    team: "M. Renko, J. Okonkwo, T. Vasquez",
    lede:
      "Two hundred and six apartments behind a dark anodised rainscreen, punctured by amber-lined loggias that mark every dwelling from the street.",
    body: [
      "Berlin's Mitte requires that new housing read as a single mass. Halden complies on the outside and disobeys on the inside: behind one flat, dark plane sit eleven different apartment types, from 34 m² studios to five-bedroom maisonettes stacked over two floors.",
      "Each home is given one loggia, lined in anodised amber, cut deep enough to be usable in February. From the street these openings are the only warmth in the elevation and the only way to count the dwellings.",
      "The rainscreen is 3 mm aluminium, dark-anodised rather than painted, chosen because it can be unbolted panel by panel and re-anodised rather than replaced. The building is designed to be re-skinned twice before it is demolished.",
    ],
    facts: [
      { label: "Homes", value: "206 across 11 types" },
      { label: "Envelope", value: "3 mm anodised aluminium" },
      { label: "Loggias", value: "1 per dwelling, 6.5 m² min" },
      { label: "Energy", value: "KfW 40 Plus" },
      { label: "Photography", value: "M. Tryapichnikov" },
    ],
    cover: {
      src: "/images/halden-tower.jpg",
      alt: "A dark apartment tower photographed from below at dusk, with amber-lined recessed panels",
      caption: "North-east corner at blue hour",
      focus: "50% 40%",
    },
    gallery: [
      {
        src: "/images/facet-detail.jpg",
        alt: "Angled metal fins across a dark building façade",
        caption: "Rainscreen fixing, unbolted for re-anodising",
      },
      {
        src: "/images/fold-residences.jpg",
        alt: "A dark and white residential block against a clear blue sky",
        caption: "Courtyard elevation, west range",
      },
      {
        src: "/images/halden-tower.jpg",
        alt: "The amber-lined loggias of the tower seen against grey cloud",
        caption: "Loggia lining, anodised amber",
        focus: "50% 75%",
      },
    ],
  },
  {
    slug: "vantage-house",
    index: "03",
    title: "Vantage House",
    place: "Singapore",
    year: "2023",
    typology: "Mixed-use",
    status: "Completed",
    size: "31,800 m²",
    client: "Marina Vantage Pte Ltd",
    team: "S. Kaur, T. Vasquez",
    lede:
      "A white precast frame in which the upper storeys step out over the street, borrowing eleven metres of shade from the building's own bulk.",
    body: [
      "In a climate where shade is worth more than glass, the section does the work. Each of the upper three floors cantilevers 3.6 metres beyond the one below, so the west elevation shades itself from eleven in the morning until sunset without a single external louvre.",
      "The frame is a repeated precast bay, 7.2 metres wide, cast in a white cement with a local granite aggregate. The mix was tuned across nine trial panels until it read as one material at 200 metres and as stone at arm's length.",
      "Cooling load came in 38% below the code baseline. No part of that saving comes from equipment.",
    ],
    facts: [
      { label: "Cantilever", value: "3.6 m per floor" },
      { label: "Frame", value: "White precast, 7.2 m bay" },
      { label: "Trial panels", value: "9" },
      { label: "Cooling load", value: "−38% vs baseline" },
      { label: "Certification", value: "Green Mark Platinum" },
    ],
    cover: {
      src: "/images/vantage-house.jpg",
      alt: "A white modernist building with a cantilevered upper volume against a pale blue sky",
      caption: "The west cantilever from Marina Link",
    },
    gallery: [
      {
        src: "/images/vantage-house.jpg",
        alt: "The underside of the white cantilevered volume",
        caption: "Soffit of the third-floor cantilever",
        focus: "40% 70%",
      },
      {
        src: "/images/steinweg-arts.jpg",
        alt: "A pale concrete building in low golden light beside an empty street",
        caption: "Podium wall, early morning",
      },
      {
        src: "/images/fold-residences.jpg",
        alt: "A precast residential frame against blue sky",
        caption: "Typical bay, as built",
      },
    ],
  },
  {
    slug: "steinweg-arts",
    index: "04",
    title: "Steinweg Arts Building",
    place: "Winterthur, Switzerland",
    year: "2022",
    typology: "Education",
    status: "Completed",
    size: "9,600 m²",
    client: "Kanton Zürich",
    team: "N. Adeyemi, M. Renko, J. Okonkwo",
    lede:
      "Studios, workshops and a public hall for a school of fine art, built in board-marked concrete and left almost entirely unlined.",
    body: [
      "Art schools are renovated more often than any other public building type, so Steinweg is built to be abused. Every surface a student can reach is concrete, plywood or galvanised steel. There are no plasterboard walls anywhere in the building.",
      "The plan is a loose ring of double-height studios around a top-lit hall, which is used for crits, exhibitions, lunch and, twice a year, as a foundry. Services run exposed at high level on a 600 mm grid so that any room can become any other room.",
      "The one indulgence is the light. Studio glazing is held at high level and faces north-east, and the concrete was cast against rough-sawn spruce specifically so that morning sun would rake across it.",
    ],
    facts: [
      { label: "Structure", value: "In-situ board-marked concrete" },
      { label: "Finishes", value: "None above slab level" },
      { label: "Services", value: "Exposed, 600 mm grid" },
      { label: "Daylight factor", value: "5.4% in studios" },
      { label: "Award", value: "Auszeichnung Guter Bauten" },
    ],
    cover: {
      src: "/images/steinweg-arts.jpg",
      alt: "A pale concrete arts building in low golden light, seen across an empty street",
      caption: "South elevation from Steinweg, 07:20",
    },
    gallery: [
      {
        src: "/images/steinweg-arts.jpg",
        alt: "The long concrete retaining wall of the arts building",
        caption: "Retaining wall and ramp to the workshops",
        focus: "20% 60%",
      },
      {
        src: "/images/vantage-house.jpg",
        alt: "A white concrete volume against pale sky",
        caption: "Studio block, north-east glazing",
        focus: "60% 30%",
      },
      {
        src: "/images/facet-detail.jpg",
        alt: "Detail of metal and glass on a dark façade",
        caption: "Galvanised balustrade to the hall",
      },
    ],
  },
  {
    slug: "fold-residences",
    index: "05",
    title: "Fold Residences",
    place: "Rotterdam, Netherlands",
    year: "2026",
    typology: "Residential",
    status: "In construction",
    size: "18,700 m²",
    client: "Havenstad Ontwikkeling",
    team: "J. Okonkwo, S. Kaur",
    lede:
      "A hundred and forty homes folded around three courtyards, alternating dark brick and white precast so that no two neighbours share an elevation.",
    body: [
      "The site is a single block with four very different edges: a canal, a tram line, a school and a row of 1920s housing. Rather than one façade turning four corners, the building changes material and rhythm at each, so it belongs to four streets at once.",
      "Homes are dual-aspect without exception. The plan folds to make that possible, which costs about four per cent in efficiency and is the single decision the client questioned most and defends most now.",
      "Completion is scheduled for late 2026. The first courtyard is already planted, on the argument that a tree put in during construction is worth ten put in at handover.",
    ],
    facts: [
      { label: "Homes", value: "140, all dual-aspect" },
      { label: "Courtyards", value: "3" },
      { label: "Materials", value: "Dark brick, white precast" },
      { label: "Affordable", value: "45%" },
      { label: "Completion", value: "Q4 2026" },
    ],
    cover: {
      src: "/images/fold-residences.jpg",
      alt: "A residential block of dark and white volumes photographed against a clear blue sky",
      caption: "Canal elevation, nearing completion",
    },
    gallery: [
      {
        src: "/images/fold-residences.jpg",
        alt: "The corner of the residential block against blue sky",
        caption: "The tram-line corner",
        focus: "80% 40%",
      },
      {
        src: "/images/halden-tower.jpg",
        alt: "A dark façade with recessed amber panels",
        caption: "Dark brick range, second courtyard",
        focus: "50% 30%",
      },
      {
        src: "/images/steinweg-arts.jpg",
        alt: "A pale concrete wall in low sun",
        caption: "Precast range, west edge",
      },
    ],
  },
  {
    slug: "aperture-hall",
    index: "06",
    title: "Aperture Hall",
    place: "Basel, Switzerland",
    year: "2021",
    typology: "Cultural",
    status: "Completed",
    size: "12,300 m²",
    client: "Messe Basel",
    team: "M. Renko, N. Adeyemi",
    lede:
      "An exhibition hall lifted clear of the ground, with a circular void cut through its floor plates to give the square below a piece of sky.",
    body: [
      "The hall had to span an existing public square without closing it. The answer was to build over it and then take a twenty-eight metre circle back out, so the square keeps its daylight and gains a ceiling.",
      "The façade is woven aluminium strip, 240 kilometres of it, lapped so that the building reads as solid from the square and dissolves when seen along its length. It also does the work of a brise-soleil, cutting solar gain by roughly half.",
      "It is the studio's most photographed building and the one we would change most. The void should have been larger.",
    ],
    facts: [
      { label: "Void", value: "28 m diameter" },
      { label: "Façade", value: "240 km woven aluminium" },
      { label: "Solar gain", value: "−48%" },
      { label: "Clear span", value: "62 m" },
      { label: "Photography", value: "Victor / Anders Jildén" },
    ],
    cover: {
      src: "/images/aperture-hall.jpg",
      alt: "Looking up through a circular void in a woven metal façade to a pale sky",
      caption: "The void from the square below",
    },
    gallery: [
      {
        src: "/images/facet-detail.jpg",
        alt: "Angled metal fins on a dark building façade",
        caption: "Woven strip, lapped detail",
      },
      {
        src: "/images/aperture-hall.jpg",
        alt: "The curved underside of the woven metal façade",
        caption: "Soffit weave at the void edge",
        focus: "20% 50%",
      },
      {
        src: "/images/kaskad-centre.jpg",
        alt: "A curved white building above a stepped plaza",
        caption: "Square level, looking west",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function adjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}

export const credits = [
  "Mark Tryapichnikov",
  "Joel Filipe",
  "Rufat Mammadov",
  "Paul Menz",
  "Luke van Zyl",
  "Victor",
  "Anders Jildén",
];
