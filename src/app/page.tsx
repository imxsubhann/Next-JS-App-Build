import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import { listings } from "@/lib/listings";

const neighborhoods = [
  {
    name: "Maplecrest",
    blurb: "Tree-lined streets and Craftsman houses a walk from the school.",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Foundry District",
    blurb: "Converted mill lofts along the millpond, ten minutes from downtown.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hollis Farms",
    blurb: "Working farmland giving way to restored farmhouses on acreage.",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Lakeshore",
    blurb: "Docks, boathouses, and low-slung houses built to face the water.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Highfield",
    blurb: "Hillside new-construction with valley views on quiet cul-de-sacs.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },
];

const featured = listings.filter((listing) => listing.tag === "Featured");
const rest = listings.filter((listing) => listing.tag !== "Featured").slice(0, 4);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b hairline bg-plaster">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-[1.05fr_1fr]">
          <div className="reveal flex flex-col justify-center px-6 py-20 sm:px-10 lg:py-28">
            <p className="text-sm text-walnut-deep">Ashford &amp; Wren Valley</p>
            <h1 className="mt-5 max-w-xl font-display text-[2.75rem] leading-[1.05] text-ink sm:text-6xl">
              Houses with a history worth continuing.
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-soft">
              Haven Estates represents a small number of distinctive homes
              each year, and works just as closely with the families selling
              them. No megaphone marketing, no generic staging &mdash; just
              houses shown as they actually are.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/listings"
                className="border border-ink bg-ink px-6 py-3 text-[15px] text-paper transition-colors hover:bg-transparent hover:text-ink"
              >
                Browse current homes
              </Link>
              <Link
                href="/sell"
                className="link-underline flex items-center px-1 py-3 text-[15px] text-ink"
              >
                Thinking of selling?
              </Link>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative min-h-[320px] lg:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
              alt="A light-filled Craftsman living room"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overlapping search bar */}
      <div className="relative z-10 mx-auto -mt-7 max-w-5xl px-6 sm:px-10">
        <div className="reveal reveal-delay-3 shadow-[0_18px_44px_-24px_rgba(23,33,29,0.35)]">
          <SearchBar />
        </div>
      </div>

      {/* Featured listings */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-stone">Currently representing</p>
            <h2 className="mt-2 font-display text-4xl text-ink">
              Featured homes
            </h2>
          </div>
          <Link href="/listings" className="link-underline text-[15px] text-ink">
            View all homes
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          {featured.map((listing, index) => (
            <PropertyCard listing={listing} key={listing.slug} large priority={index === 0} />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((listing) => (
            <PropertyCard listing={listing} key={listing.slug} />
          ))}
        </div>
      </section>

      {/* Neighborhoods strip */}
      <section className="border-y hairline bg-plaster py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <p className="text-sm text-stone">Where we work</p>
          <h2 className="mt-2 font-display text-4xl text-ink">Neighborhoods</h2>
        </div>

        <div className="scroll-strip mt-10 flex gap-6 overflow-x-auto px-6 pb-4 sm:px-10">
          {neighborhoods.map((n, index) => (
            <div
              key={n.name}
              className={`relative shrink-0 overflow-hidden ${
                index % 2 === 0 ? "h-80 w-64" : "h-72 w-80"
              }`}
            >
              <Image
                src={n.image}
                alt={n.name}
                fill
                sizes="320px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-5 pt-10">
                <p className="font-display text-xl text-paper">{n.name}</p>
                <p className="mt-1 text-sm text-plaster/85">{n.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-ink py-20 text-plaster">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 sm:px-10 md:grid-cols-4">
          <div>
            <p className="font-display text-5xl">183</p>
            <p className="mt-2 text-sm text-plaster/70">Homes sold since 2009</p>
          </div>
          <div>
            <p className="font-display text-5xl">16</p>
            <p className="mt-2 text-sm text-plaster/70">Days, average time on market</p>
          </div>
          <div>
            <p className="font-display text-5xl">98%</p>
            <p className="mt-2 text-sm text-plaster/70">Of list price, average sale</p>
          </div>
          <div>
            <p className="font-display text-5xl">4.9</p>
            <p className="mt-2 text-sm text-plaster/70">Average client rating</p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-plaster-deep">
          <Image
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80"
            alt="Marisol Ferro, agent at Haven Estates"
            fill
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-display text-3xl italic leading-snug text-ink sm:text-4xl">
            &ldquo;They knew the house needed a slower kind of marketing. No
            open-house circus &mdash; just three families, each shown the
            garden at the right time of day.&rdquo;
          </p>
          <p className="mt-6 text-[15px] text-ink-soft">
            Priya Nandan &mdash; sold 40 Orchard Ridge Road with Marisol Ferro
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t hairline bg-plaster">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-20 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-xl font-display text-4xl text-ink">
            Selling? Start with a conversation, not a listing sheet.
          </h2>
          <Link
            href="/sell"
            className="shrink-0 border border-ink bg-ink px-7 py-3.5 text-[15px] text-paper transition-colors hover:bg-transparent hover:text-ink"
          >
            Request a valuation
          </Link>
        </div>
      </section>
    </>
  );
}
