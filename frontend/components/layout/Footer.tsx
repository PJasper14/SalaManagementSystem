import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

const address = "Barangay Sala, City, Philippines";
const copyright = `© ${new Date().getFullYear()} Barangay Sala. All rights reserved.`;

export function Footer() {
  return (
    <footer
      className="bg-zinc-100 dark:bg-neutral-900 border-t border-zinc-200 dark:border-neutral-800"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <Link
              href="/"
              className="text-lg font-bold text-primary dark:text-primary-light"
            >
              Barangay Sala
            </Link>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xs">
              Serving our community with integrity and dedication.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-3">
              Quick links
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-primary dark:hover:text-primary-light text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-3">
              Contact
            </h3>
            <address className="not-italic text-sm text-zinc-600 dark:text-zinc-400">
              {address}
            </address>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Visit our{" "}
              <Link
                href="/contact"
                className="text-primary dark:text-primary-light hover:underline"
              >
                Contact page
              </Link>{" "}
              for more details.
            </p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-zinc-200 dark:border-neutral-800 text-center text-sm text-zinc-500 dark:text-zinc-500">
          {copyright}
        </div>
      </div>
    </footer>
  );
}
