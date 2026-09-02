"use client";

import { useState } from "react";

export default function ContactPageForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex h-fit flex-col justify-center border hairline bg-plaster px-8 py-16 text-center">
        <p className="font-display text-2xl text-ink">Message sent</p>
        <p className="mx-auto mt-3 max-w-sm text-[15px] text-ink-soft">
          Thanks for writing in. We&rsquo;ll be in touch within one business
          day.
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
      className="grid grid-cols-1 gap-6 border hairline bg-plaster p-7 sm:grid-cols-2 sm:p-9"
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
      <label className="flex flex-col gap-1 sm:col-span-2">
        <span className="text-sm text-ink-soft">I&rsquo;m interested in</span>
        <select className="border-b hairline bg-transparent py-2 text-[15px] text-ink outline-none focus:border-ink">
          <option>Buying a home</option>
          <option>Selling a home</option>
          <option>General question</option>
        </select>
      </label>
      <label className="flex flex-col gap-1 sm:col-span-2">
        <span className="text-sm text-ink-soft">Message</span>
        <textarea
          required
          rows={5}
          className="border-b hairline bg-transparent py-2 text-[15px] text-ink outline-none focus:border-ink"
        />
      </label>
      <button
        type="submit"
        className="w-fit border border-ink bg-ink px-6 py-3 text-[15px] text-paper transition-colors hover:bg-transparent hover:text-ink sm:col-span-2"
      >
        Send message
      </button>
    </form>
  );
}
