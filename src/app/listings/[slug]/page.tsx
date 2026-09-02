import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getListingBySlug, listings, formatPrice } from "@/lib/listings";
import PropertyCard from "@/components/PropertyCard";
import ContactAgentForm from "@/components/ContactAgentForm";

export function generateStaticParams() {
  return listings.map((listing) => ({ slug: listing.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) return {};
  return {
    title: `${listing.address} | Haven Estates`,
    description: listing.description,
  };
}

export default async function ListingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) notFound();

  const related = listings
    .filter((item) => item.slug !== listing.slug)
    .slice(0, 3);

  return (
    <article>
      <div className="mx-auto max-w-7xl px-6 pt-10 sm:px-10">
        <Link href="/listings" className="link-underline text-sm text-ink-soft">
          &larr; Back to all homes
        </Link>
      </div>

      <header className="mx-auto max-w-7xl px-6 pb-8 pt-4 sm:px-10">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            {listing.tag && (
              <span className="inline-block bg-plaster-deep px-3 py-1 text-xs text-ink-soft">
                {listing.tag}
              </span>
            )}
            <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
              {listing.address}
            </h1>
            <p className="mt-2 text-[17px] text-ink-soft">
              {listing.neighborhood}, {listing.city}
            </p>
          </div>
          <div className="text-right">
            <p className="font-display text-4xl text-ink">
              {formatPrice(listing.price)}
            </p>
            <p className="mt-1 text-sm text-stone">{listing.status}</p>
          </div>
        </div>
      </header>

      {/* Gallery */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 sm:px-10 md:h-[560px] md:grid-cols-4 md:grid-rows-2">
        <div className="relative aspect-[4/3] overflow-hidden bg-plaster-deep md:col-span-2 md:row-span-2 md:aspect-auto md:h-full">
          <Image
            src={listing.gallery[0]}
            alt={`${listing.address} primary photo`}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        {listing.gallery.slice(1, 5).map((src, index) => (
          <div
            key={src}
            className="relative aspect-[4/3] overflow-hidden bg-plaster-deep md:aspect-auto md:h-full"
          >
            <Image
              src={src}
              alt={`${listing.address} photo ${index + 2}`}
              fill
              sizes="(min-width: 768px) 25vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-16 sm:px-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <div className="grid grid-cols-3 gap-6 border-y hairline py-6 sm:w-fit sm:grid-cols-4">
            <div>
              <p className="font-display text-2xl text-ink">{listing.beds}</p>
              <p className="text-sm text-ink-soft">Bedrooms</p>
            </div>
            <div>
              <p className="font-display text-2xl text-ink">{listing.baths}</p>
              <p className="text-sm text-ink-soft">Bathrooms</p>
            </div>
            <div>
              <p className="font-display text-2xl text-ink">
                {listing.sqft.toLocaleString()}
              </p>
              <p className="text-sm text-ink-soft">Sq. ft.</p>
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-2xl text-ink">{listing.yearBuilt}</p>
              <p className="text-sm text-ink-soft">Year built</p>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-ink">
            {listing.description}
          </p>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-ink-soft">
            {listing.story}
          </p>

          <h2 className="mt-12 font-display text-2xl text-ink">Features</h2>
          <ul className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
            {listing.features.map((feature) => (
              <li
                key={feature}
                className="border-t hairline pt-3 text-[15px] text-ink-soft"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit border hairline p-7">
          <p className="text-sm text-stone">Listed by</p>
          <p className="mt-1 font-display text-2xl text-ink">{listing.agent}</p>
          <p className="mt-1 text-sm text-ink-soft">Haven Estates</p>
          <div className="mt-6">
            <ContactAgentForm listingAddress={listing.address} />
          </div>
        </aside>
      </div>

      {/* Related */}
      <section className="border-t hairline bg-plaster py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <h2 className="font-display text-3xl text-ink">Other homes to consider</h2>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
            {related.map((item) => (
              <PropertyCard listing={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
