import type { Metadata } from "next";
import Image from "next/image";
import ValuationForm from "@/components/ValuationForm";

export const metadata: Metadata = {
  title: "Sell your home | Haven Estates",
  description:
    "Request a no-pressure valuation and learn how Haven Estates approaches selling a home in Ashford and Wren Valley.",
};

const steps = [
  {
    title: "A walk-through, not a pitch",
    body: "An agent visits in person, learns what matters about the house, and gives you an honest read on value and timing before anything is written down.",
  },
  {
    title: "A plan built around your house",
    body: "Photography, staging, and pricing decisions are made for this specific house and this specific market, not copied from a template.",
  },
  {
    title: "A short, focused showing period",
    body: "We show the house to a small number of qualified buyers rather than running an open-door circus every weekend.",
  },
  {
    title: "Close on your timeline",
    body: "We negotiate for terms that work for your move, not just the highest number on paper.",
  },
];

export default function SellPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b hairline bg-plaster">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-[1fr_0.9fr]">
          <div className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:py-28">
            <p className="text-sm text-walnut-deep">For homeowners</p>
            <h1 className="mt-5 max-w-lg font-display text-[2.5rem] leading-[1.08] text-ink sm:text-5xl">
              Selling starts with a conversation, not a sign in the yard.
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-soft">
              Every house we take on gets an agent who has sold in your
              neighborhood before, a plan built for that specific house, and
              a straight answer about what it&rsquo;s worth.
            </p>
          </div>
          <div className="relative min-h-[280px] lg:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80"
              alt="A restored kitchen ready to be shown"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
        <h2 className="font-display text-3xl text-ink">How it works</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step.title} className="border-t hairline pt-5">
              <p className="text-sm text-stone">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-2 font-display text-xl text-ink">{step.title}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t hairline bg-ink py-20 text-plaster">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:px-10 md:grid-cols-3">
          <div>
            <p className="font-display text-4xl">98%</p>
            <p className="mt-2 text-sm text-plaster/70">
              Of asking price, average final sale
            </p>
          </div>
          <div>
            <p className="font-display text-4xl">16 days</p>
            <p className="mt-2 text-sm text-plaster/70">
              Average time from listing to accepted offer
            </p>
          </div>
          <div>
            <p className="font-display text-4xl">1 agent</p>
            <p className="mt-2 text-sm text-plaster/70">
              You work with the same person start to finish
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 sm:px-10">
        <h2 className="font-display text-3xl text-ink">
          Request a no-pressure valuation
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">
          Tell us a little about the house. An agent will follow up to talk
          through what it&rsquo;s worth and whether now is the right time
          &mdash; there&rsquo;s no obligation to list with us.
        </p>
        <div className="mt-8">
          <ValuationForm />
        </div>
      </section>
    </>
  );
}
