"use client";

import { useState } from "react";

export default function ValuationForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border hairline bg-paper px-7 py-10 text-center">
        <p className="font-display text-2xl text-ink">Request received</p>
        <p className="mx-auto mt-3 max-w-sm text-[15px] text-ink-soft">
          An agent who knows your neighborhood will call within one business
          day to talk through timing and next steps &mdash; no pressure, no
          scripted pitch.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="grid grid-cols-1 gap-6 border hairline bg-paper p-7 sm:grid-cols-2 sm:p-9"
    >
      <label className="flex flex-col gap-1">
        <span className="text-sm text-ink-soft">Full name</span>
        <input
          required
          type="text"
          className="border-b hairline bg-transparent py-2 text-[15px] text-ink outline-none focus:border-ink"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm text-ink-soft">Email</span>
        <input
          required
          type="email"
          className="border-b hairline bg-transparent py-2 text-[15px] text-ink outline-none focus:border-ink"
        />
      </label>
      <label className="flex flex-col gap-1 sm:col-span-2">
        <span className="text-sm text-ink-soft">Property address</span>
        <input
          required
          type="text"
          placeholder="Street, city"
          className="border-b hairline bg-transparent py-2 text-[15px] text-ink outline-none placeholder:text-ink-soft/50 focus:border-ink"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm text-ink-soft">Timeline</span>
        <select className="border-b hairline bg-transparent py-2 text-[15px] text-ink outline-none focus:border-ink">
          <option>Just curious about value</option>
          <option>Within 3 months</option>
          <option>Within a month</option>
          <option>As soon as possible</option>
        </select>
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm text-ink-soft">Phone (optional)</span>
        <input
          type="tel"
          className="border-b hairline bg-transparent py-2 text-[15px] text-ink outline-none focus:border-ink"
        />
      </label>
      <button
        type="submit"
        className="sm:col-span-2 mt-2 w-fit border border-ink bg-ink px-6 py-3 text-[15px] text-paper transition-colors hover:bg-transparent hover:text-ink"
      >
        Request my valuation
      </button>
    </form>
  );
}
