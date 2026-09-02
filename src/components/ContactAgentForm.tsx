"use client";

import { useState } from "react";

export default function ContactAgentForm({
  listingAddress,
}: {
  listingAddress: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border hairline bg-plaster px-5 py-6">
        <p className="font-display text-xl text-ink">Message sent</p>
        <p className="mt-2 text-sm text-ink-soft">
          Thanks for reaching out about {listingAddress}. An agent will
          follow up within one business day.
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
      className="flex flex-col gap-4"
    >
      <label className="flex flex-col gap-1">
        <span className="text-sm text-ink-soft">Name</span>
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
      <label className="flex flex-col gap-1">
        <span className="text-sm text-ink-soft">Message</span>
        <textarea
          rows={3}
          defaultValue={`I'd like to schedule a viewing of ${listingAddress}.`}
          className="border-b hairline bg-transparent py-2 text-[15px] text-ink outline-none focus:border-ink"
        />
      </label>
      <button
        type="submit"
        className="mt-2 border border-ink bg-ink px-5 py-3 text-[15px] text-paper transition-colors hover:bg-transparent hover:text-ink"
      >
        Request a viewing
      </button>
    </form>
  );
}
