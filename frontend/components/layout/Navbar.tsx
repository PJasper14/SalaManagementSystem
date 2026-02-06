"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/news", label: "News" },
  { href: "/emergency", label: "Emergency" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { open, toggle, close } = useMobileMenu();

  return (
    <>
      <header
        className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-zinc-200"
        role="banner"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              aria-label="Barangay Sala - Home"
            >
              <Image
                src="/images/BrgySala_LOGO_NOBG.png"
                alt="Barangay Sala - Official logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                priority
              />
              <span className="text-xl font-bold hidden sm:inline">Barangay Sala</span>
            </Link>

            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {links.map(({ href, label }) => {
                const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
                return (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      "min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors duration-200",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-zinc-700 hover:bg-zinc-100 hover:text-primary"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="hidden md:inline-flex"
              >
                <Button variant="primary" size="sm">
                  Contact Us
                </Button>
              </Link>
              <button
                type="button"
                onClick={toggle}
                className="md:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 rounded-lg hover:bg-zinc-100"
                aria-label="Open menu"
                aria-expanded={open}
              >
                <Menu className="h-6 w-6 text-zinc-700" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={close} />
    </>
  );
}
