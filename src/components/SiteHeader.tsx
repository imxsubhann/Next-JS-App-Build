import Link from "next/link";

const navLinks = [
  { href: "/listings", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/agents", label: "Agents" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b hairline bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-ink">
            Haven
          </span>
          <span className="font-display text-2xl italic text-walnut">
            Estates
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline text-[15px] text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/sell"
          className="hidden shrink-0 border border-ink bg-ink px-5 py-2.5 text-[15px] text-paper transition-colors hover:bg-transparent hover:text-ink sm:inline-block"
        >
          Request a valuation
        </Link>

        <details className="md:hidden">
          <summary className="cursor-pointer list-none text-[15px] text-ink-soft">
            Menu
          </summary>
          <div className="absolute left-0 right-0 top-full flex flex-col gap-1 border-b hairline bg-paper px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-[15px] text-ink-soft"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/sell" className="py-2 text-[15px] text-walnut">
              Request a valuation
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
