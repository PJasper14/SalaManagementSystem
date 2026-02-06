import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/news", label: "News" },
  { href: "/emergency", label: "Emergency" },
  { href: "/contact", label: "Contact" },
];

const address = "Barangay Sala, Cabuyao, Laguna";
const copyright = `© ${new Date().getFullYear()} Barangay Sala. All rights reserved.`;

export function Footer() {
  return (
    <footer
      className="bg-zinc-100 border-t border-zinc-200"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-primary w-fit"
              aria-label="Barangay Sala - Home"
            >
              <Image
                src="/images/BrgySala_LOGO_NOBG.png"
                alt="Barangay Sala - Official logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
                loading="lazy"
              />
              <span className="text-lg font-bold">Barangay Sala</span>
            </Link>
            <p className="mt-2 text-sm text-zinc-600 max-w-xs">
              Serving our community with integrity and dedication.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 mb-3">
              Quick links
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-zinc-600 hover:text-primary text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 mb-3">
              Contact
            </h3>
            <address className="not-italic text-sm text-zinc-600">
              {address}
            </address>
            <p className="mt-1 text-sm text-zinc-600">
              Visit our{" "}
              <Link
                href="/contact"
                className="text-primary hover:underline"
              >
                Contact page
              </Link>{" "}
              for more details.
            </p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-zinc-200 text-center text-sm text-zinc-500">
          {copyright}
        </div>
      </div>
    </footer>
  );
}
