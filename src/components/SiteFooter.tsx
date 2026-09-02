import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-plaster">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl">
              Haven <span className="italic text-walnut">Estates</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-plaster/70">
              A boutique brokerage in Ashford and Wren Valley, working with
              buyers and sellers who care about the story behind a house, not
              just the square footage.
            </p>
          </div>

          <div>
            <p className="text-sm text-plaster/50">Explore</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/listings" className="link-underline">
                  Browse homes
                </Link>
              </li>
              <li>
                <Link href="/sell" className="link-underline">
                  Sell your home
                </Link>
              </li>
              <li>
                <Link href="/agents" className="link-underline">
                  Our agents
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm text-plaster/50">Company</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/agents" className="link-underline">
                  About Haven
                </Link>
              </li>
              <li>
                <Link href="/contact" className="link-underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm text-plaster/50">Visit</p>
            <address className="mt-4 space-y-1 text-sm not-italic text-plaster/80">
              <p>118 Founders Street</p>
              <p>Ashford</p>
              <p className="pt-2">
                <a href="tel:+15550142398" className="link-underline">
                  (555) 014-2398
                </a>
              </p>
              <p>
                <a href="mailto:hello@havenestates.example" className="link-underline">
                  hello@havenestates.example
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-plaster/15 pt-6 text-xs text-plaster/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Haven Estates. All rights reserved.</p>
          <p>Equal Housing Opportunity</p>
        </div>
      </div>
    </footer>
  );
}
