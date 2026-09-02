"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [beds, setBeds] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (beds) params.set("beds", beds);
    router.push(`/listings?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 divide-y divide-stone-line border hairline bg-paper sm:grid-cols-[1.5fr_1fr_1fr_auto] sm:divide-x sm:divide-y-0"
    >
      <label className="flex flex-col gap-1 px-5 py-4">
        <span className="text-xs text-stone">Location</span>
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="City or neighborhood"
          className="bg-transparent text-[15px] text-ink outline-none placeholder:text-ink-soft/60"
        />
      </label>

      <label className="flex flex-col gap-1 px-5 py-4">
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

      <label className="flex flex-col gap-1 px-5 py-4">
        <span className="text-xs text-stone">Beds</span>
        <select
          value={beds}
          onChange={(event) => setBeds(event.target.value)}
          className="bg-transparent text-[15px] text-ink outline-none"
        >
          <option value="">Any</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5+</option>
        </select>
      </label>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-ink px-6 py-4 text-[15px] text-paper transition-colors hover:bg-walnut-deep"
      >
        <Search size={16} strokeWidth={1.75} />
        Search homes
      </button>
    </form>
  );
}
