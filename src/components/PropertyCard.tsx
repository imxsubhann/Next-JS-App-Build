import Image from "next/image";
import Link from "next/link";
import { Listing, formatPrice } from "@/lib/listings";

export default function PropertyCard({
  listing,
  priority = false,
  large = false,
}: {
  listing: Listing;
  priority?: boolean;
  large?: boolean;
}) {
  return (
    <Link
      href={`/listings/${listing.slug}`}
      className="group flex h-full flex-col"
    >
      <div
        className={`relative w-full overflow-hidden bg-plaster-deep ${
          large ? "aspect-[4/3]" : "aspect-[5/4]"
        }`}
      >
        <Image
          src={listing.image}
          alt={listing.address}
          fill
          sizes={large ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 30vw, 100vw"}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {listing.tag && (
          <span className="absolute left-4 top-4 bg-paper px-3 py-1 text-xs text-ink">
            {listing.tag}
          </span>
        )}
        {listing.status !== "For sale" && (
          <span className="absolute right-4 top-4 bg-ink px-3 py-1 text-xs text-paper">
            {listing.status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col border-b border-x hairline px-5 py-5">
        <div className="flex items-baseline justify-between gap-3">
          <p className={`font-display text-ink ${large ? "text-3xl" : "text-2xl"}`}>
            {formatPrice(listing.price)}
          </p>
          <p className="text-sm text-stone">{listing.yearBuilt}</p>
        </div>
        <p className="mt-2 text-[15px] text-ink">{listing.address}</p>
        <p className="text-sm text-ink-soft">
          {listing.neighborhood}, {listing.city}
        </p>
        <div className="mt-4 flex gap-4 text-sm text-ink-soft">
          <span>{listing.beds} bed</span>
          <span>{listing.baths} bath</span>
          <span>{listing.sqft.toLocaleString()} sqft</span>
        </div>
      </div>
    </Link>
  );
}
