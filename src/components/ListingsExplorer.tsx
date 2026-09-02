"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import PropertyCard from "@/components/PropertyCard";
import { Listing } from "@/lib/listings";

const sortOptions = [
  { value: "newest", label: "Newest listed" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

export default function ListingsExplorer({ listings }: { listings: Listing[] }) {
  const searchParams = useSearchParams();

  const [location, setLocation] = useState(searchParams.get("location") ?? "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") ?? "");
  const [minBeds, setMinBeds] = useState(searchParams.get("beds") ?? "");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("newest");

  const filtered = useMemo(() => {
    let result = listings.filter((listing) => {
      const matchesLocation =
        !location ||
        `${listing.city} ${listing.neighborhood}`
          .toLowerCase()
          .includes(location.toLowerCase());
      const matchesPrice = !maxPrice || listing.price <= Number(maxPrice);
      const matchesBeds = !minBeds || listing.beds >= Number(minBeds);
      const matchesStatus = !status || listing.status === status;
      return matchesLocation && matchesPrice && matchesBeds && matchesStatus;
    });

    result = [...result].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return b.yearBuilt - a.yearBuilt;
    });

    return result;
  }, [listings, location, maxPrice, minBeds, status, sort]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-px border hairline bg-stone-line sm:grid-cols-2 lg:grid-cols-5">
        <label className="flex flex-col gap-1 bg-paper px-5 py-4">
          <span className="text-xs text-stone">Location</span>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="City or neighborhood"
            className="bg-transparent text-[15px] text-ink outline-none placeholder:text-ink-soft/60"
          />
        </label>

        <label className="flex flex-col gap-1 bg-paper px-5 py-4">
          <span className="text-xs text-stone">Max price</span>
          <select
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
            className="bg-transparent text-[15px] text-ink outline-none"
          >
            <option value="">Any price</option>
            <option value="750000">Up to $750,000</option>
            <option value="1000000">Up to $1,000,000</option>
            <option value="1500000">Up to $1,500,000</option>
            <option value="2500000">Up to $2,500,000</option>
          </select>
        </label>

        <label className="flex flex-col gap-1 bg-paper px-5 py-4">
          <span className="text-xs text-stone">Beds</span>
          <select
            value={minBeds}
            onChange={(event) => setMinBeds(event.target.value)}
            className="bg-transparent text-[15px] text-ink outline-none"
          >
            <option value="">Any</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </label>

        <label className="flex flex-col gap-1 bg-paper px-5 py-4">
          <span className="text-xs text-stone">Status</span>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="bg-transparent text-[15px] text-ink outline-none"
          >
            <option value="">Any status</option>
            <option value="For sale">For sale</option>
            <option value="Pending">Pending</option>
            <option value="Sold">Sold</option>
          </select>
        </label>

        <label className="flex flex-col gap-1 bg-paper px-5 py-4">
          <span className="text-xs text-stone">Sort</span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="bg-transparent text-[15px] text-ink outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-6 text-sm text-ink-soft">
        {filtered.length} {filtered.length === 1 ? "home" : "homes"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((listing) => (
            <PropertyCard listing={listing} key={listing.slug} />
          ))}
        </div>
      ) : (
        <div className="mt-16 border hairline px-8 py-16 text-center">
          <p className="font-display text-2xl text-ink">No homes match yet</p>
          <p className="mt-2 text-[15px] text-ink-soft">
            Try widening your price range or clearing the location filter.
          </p>
        </div>
      )}
    </div>
  );
}
