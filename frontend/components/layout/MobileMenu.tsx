"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { DarkModeToggle } from "@/components/shared/DarkModeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/news", label: "News" },
  { href: "/emergency", label: "Emergency" },
  { href: "/contact", label: "Contact" },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
    >
      <div
        className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <aside className="absolute top-0 right-0 w-full max-w-xs h-full bg-white dark:bg-neutral-900 shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-neutral-800">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <Image src="/images/BrgySala_LOGO_NOBG.png" alt="Barangay Sala" width={32} height={32} className="h-8 w-8 object-contain" loading="lazy" />
            <span className="font-semibold text-zinc-900 dark:text-white">Barangay Sala</span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="block py-3 px-4 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-zinc-200 dark:border-neutral-800">
          <DarkModeToggle />
        </div>
      </aside>
    </div>
  );
}
