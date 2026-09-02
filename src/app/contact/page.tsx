import type { Metadata } from "next";
import ContactPageForm from "@/components/ContactPageForm";

export const metadata: Metadata = {
  title: "Contact | Haven Estates",
  description: "Get in touch with Haven Estates in Ashford, PA.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm text-stone">Get in touch</p>
        <h1 className="mt-2 font-display text-5xl text-ink">Contact us</h1>
        <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-ink-soft">
          Whether you&rsquo;re looking to buy, sell, or just want to talk
          through what a house is worth, someone will get back to you within
          one business day.
        </p>

        <div className="mt-10 space-y-6 border-t hairline pt-8 text-[15px]">
          <div>
            <p className="text-stone">Office</p>
            <p className="mt-1 text-ink">118 Founders Street, Ashford</p>
          </div>
          <div>
            <p className="text-stone">Phone</p>
            <p className="mt-1 text-ink">(555) 014-2398</p>
          </div>
          <div>
            <p className="text-stone">Email</p>
            <p className="mt-1 text-ink">hello@havenestates.example</p>
          </div>
          <div>
            <p className="text-stone">Hours</p>
            <p className="mt-1 text-ink">Tuesday &ndash; Saturday, 9am &ndash; 6pm</p>
          </div>
        </div>
      </div>

      <ContactPageForm />
    </section>
  );
}
