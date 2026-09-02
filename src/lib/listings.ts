export type Listing = {
  slug: string;
  address: string;
  neighborhood: string;
  city: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  status: "For sale" | "Pending" | "Sold";
  tag?: string;
  description: string;
  story: string;
  features: string[];
  image: string;
  gallery: string[];
  agent: string;
};

export const listings: Listing[] = [
  {
    slug: "birchwood-hollow",
    address: "214 Birchwood Hollow",
    neighborhood: "Maplecrest",
    city: "Ashford",
    price: 1285000,
    beds: 4,
    baths: 3,
    sqft: 3120,
    yearBuilt: 1998,
    status: "For sale",
    tag: "Featured",
    description:
      "A light-filled Craftsman set back from the road behind a stand of white birch, with a rebuilt kitchen that opens straight onto the garden.",
    story:
      "The current owners spent three years restoring the original woodwork by hand before turning their attention to the kitchen, which now anchors the ground floor. Mornings here start on the screened porch; evenings end around the stone hearth in the front room.",
    features: [
      "Rebuilt chef's kitchen with quartz island",
      "Screened porch overlooking the garden",
      "Original oak floors, refinished 2023",
      "Detached two-car carriage house",
      "Radiant heat in primary bath",
      "Owned solar array",
    ],
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    ],
    agent: "Marisol Ferro",
  },
  {
    slug: "quarry-street-loft",
    address: "88 Quarry Street, Unit 4",
    neighborhood: "Foundry District",
    city: "Ashford",
    price: 649000,
    beds: 2,
    baths: 2,
    sqft: 1480,
    yearBuilt: 1911,
    status: "For sale",
    description:
      "A converted button-factory loft with fourteen-foot ceilings, the original freight-elevator gate, and windows on three sides.",
    story:
      "Quarry Street was rebuilt plank by plank after the mill closed in the 1980s. Unit 4 keeps the original steel columns and brick, paired with a new kitchen and a mezzanine bedroom that looks out over the millpond.",
    features: [
      "14-ft ceilings, exposed brick and steel",
      "Mezzanine primary bedroom",
      "Private storage cage in basement",
      "Building rooftop deck",
      "In-unit washer/dryer",
    ],
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80",
    ],
    agent: "Dev Patel",
  },
  {
    slug: "orchard-ridge-farmhouse",
    address: "40 Orchard Ridge Road",
    neighborhood: "Hollis Farms",
    city: "Wren Valley",
    price: 1875000,
    beds: 5,
    baths: 4,
    sqft: 4460,
    yearBuilt: 1934,
    status: "For sale",
    tag: "Featured",
    description:
      "A restored farmhouse on 3.2 acres with a working orchard, a wraparound porch, and a barn converted into a guest studio.",
    story:
      "The Hollis family planted the first apple trees in 1936; the orchard still bears fruit every September. The house was taken down to the studs in 2019 and rebuilt with period-correct millwork, a new slate roof, and a kitchen built for entertaining.",
    features: [
      "3.2 acres with working apple orchard",
      "Converted barn guest studio with bath",
      "Wraparound porch, new slate roof",
      "Wood-burning kitchen hearth",
      "Heated four-car garage",
      "Whole-property irrigation",
    ],
    image:
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1400&q=80",
    ],
    agent: "Marisol Ferro",
  },
  {
    slug: "cedar-cove-bungalow",
    address: "12 Cedar Cove Lane",
    neighborhood: "Lakeshore",
    city: "Wren Valley",
    price: 895000,
    beds: 3,
    baths: 2,
    sqft: 1960,
    yearBuilt: 1962,
    status: "Pending",
    description:
      "A single-story lakeside bungalow with a private dock, floor-to-ceiling windows facing the water, and a stone fireplace at its center.",
    story:
      "Built for a boat builder in 1962, the bungalow still has its original tongue-and-groove ceilings. The current owners added the dock and replaced the west-facing glass wall to make the most of sunset over the lake.",
    features: [
      "Private dock, 60 ft of lake frontage",
      "Floor-to-ceiling west-facing glass",
      "Original stone fireplace",
      "Detached boathouse",
      "New standing-seam metal roof (2022)",
    ],
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80",
    ],
    agent: "Owen Kessler",
  },
  {
    slug: "linden-square-rowhouse",
    address: "9 Linden Square",
    neighborhood: "Old Linden",
    city: "Ashford",
    price: 742000,
    beds: 3,
    baths: 2,
    sqft: 2010,
    yearBuilt: 1889,
    status: "For sale",
    description:
      "A brick rowhouse three blocks from the square, with the original cast-iron stair rail and a walled garden out back.",
    story:
      "One of six rowhouses built for mill managers in 1889, this one has changed hands only three times. The walled garden was added in the 1950s and still has its original brick paths and a century-old wisteria.",
    features: [
      "Original cast-iron stair rail",
      "Walled garden with century-old wisteria",
      "Wood-burning parlor fireplace",
      "Finished lower level with half bath",
      "Two off-street parking spaces",
    ],
    image:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=80",
    ],
    agent: "Dev Patel",
  },
  {
    slug: "windmere-modern",
    address: "501 Windmere Crest",
    neighborhood: "Highfield",
    city: "Ashford",
    price: 2140000,
    beds: 4,
    baths: 4,
    sqft: 3850,
    yearBuilt: 2021,
    status: "For sale",
    description:
      "A new-construction hillside home in board-formed concrete and white oak, built into the slope with views over the valley.",
    story:
      "Designed by a local architecture studio and completed in 2021, the house steps down the hillside in three levels, each opening onto its own terrace. Every room faces the valley.",
    features: [
      "Board-formed concrete and white oak construction",
      "Three-level terraced design",
      "Home automation and radiant floor heat",
      "Infinity-edge pool cut into the hillside",
      "Attached architect-designed studio",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
    ],
    agent: "Owen Kessler",
  },
];

export function getListingBySlug(slug: string) {
  return listings.find((listing) => listing.slug === slug);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
