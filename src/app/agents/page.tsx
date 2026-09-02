import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our agents | Haven Estates",
  description: "Meet the small team behind Haven Estates in Ashford and Wren Valley.",
};

const agents = [
  {
    name: "Marisol Ferro",
    role: "Founding agent",
    bio: "Marisol started Haven Estates in 2009 after eight years restoring houses herself. She still walks every listing before it goes live.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dev Patel",
    role: "Agent, Foundry District & Old Linden",
    bio: "Dev grew up two blocks from the Foundry District and specializes in the converted mill buildings and rowhouses downtown.",
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Owen Kessler",
    role: "Agent, Lakeshore & Highfield",
    bio: "Owen spent a decade in architecture before becoming an agent, and works closely with buyers building or renovating.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
];

export default function AgentsPage() {
  return (
    <>
      <section className="border-b hairline bg-plaster px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-walnut-deep">Since 2009</p>
          <h1 className="mt-4 font-display text-5xl text-ink">
            A small team, on purpose.
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
            Haven Estates has never grown past three agents. That&rsquo;s
            deliberate &mdash; it means every house we represent gets an
            agent who actually knows the block it&rsquo;s on, and every
            buyer gets someone who has time to answer the phone.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-3">
          {agents.map((agent) => (
            <div key={agent.name}>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-plaster-deep">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  sizes="(min-width: 640px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-5 font-display text-2xl text-ink">{agent.name}</p>
              <p className="text-sm text-walnut-deep">{agent.role}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {agent.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
