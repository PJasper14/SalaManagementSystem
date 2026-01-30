"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { DarkModeToggle } from "@/components/shared/DarkModeToggle";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const { open, toggle, close } = useMobileMenu();

  return (
    <>
      <header
        className="sticky top-0 left-0 right-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur border-b border-zinc-200 dark:border-neutral-800"
        role="banner"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="text-xl font-bold text-primary dark:text-primary-light"
            >
              Barangay Sala
            </Link>

            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="px-4 py-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-primary dark:hover:text-primary-light font-medium transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <DarkModeToggle />
              </div>
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
                className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                aria-label="Open menu"
                aria-expanded={open}
              >
                <Menu className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={close} />
    </>
  );
}
