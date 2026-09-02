import { Suspense } from "react";
import type { Metadata } from "next";
import ListingsExplorer from "@/components/ListingsExplorer";
import { listings } from "@/lib/listings";

export const metadata: Metadata = {
  title: "Browse homes | Haven Estates",
  description:
    "Every home Haven Estates currently represents in Ashford and Wren Valley.",
};

export default function ListingsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
      <p className="text-sm text-stone">Ashford &amp; Wren Valley</p>
      <h1 className="mt-2 font-display text-5xl text-ink">Homes for sale</h1>
      <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-ink-soft">
        Every house currently on our books, shown as they are &mdash; no
        wide-angle lenses, no staged furniture that isn&rsquo;t staying.
      </p>

      <div className="mt-10">
        <Suspense fallback={null}>
          <ListingsExplorer listings={listings} />
        </Suspense>
      </div>
    </section>
  );
}
