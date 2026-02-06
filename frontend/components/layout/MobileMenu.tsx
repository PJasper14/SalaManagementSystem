"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/news", label: "News" },
  { href: "/emergency", label: "Emergency" },
  { href: "/contact", label: "Contact" },
];

const DURATION_MS = 300;

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [isClosing, setIsClosing] = useState(false);
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current && !open) setIsClosing(true);
    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    if (open) setIsClosing(false);
  }, [open]);

  useEffect(() => {
    if (!isClosing) return;
    const t = setTimeout(() => setIsClosing(false), DURATION_MS);
    return () => clearTimeout(t);
  }, [isClosing]);

  const visible = open || isClosing;
  const showPanel = open && !isClosing;

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-40 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-zinc-900/60 backdrop-blur-sm transition-opacity duration-300",
          showPanel ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
        aria-hidden
      />
      <aside
        className={cn(
          "absolute top-0 right-0 w-full max-w-xs h-full bg-white shadow-xl flex flex-col border-l border-zinc-200 transition-transform duration-300 ease-out",
          showPanel ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-zinc-200">
          <Link href="/" onClick={onClose} className="flex items-center gap-2 min-h-[44px] min-w-[44px] items-center">
            <Image src="/images/BrgySala_LOGO_NOBG.png" alt="Barangay Sala" width={32} height={32} className="h-8 w-8 object-contain" loading="lazy" />
            <span className="font-semibold text-zinc-900">Barangay Sala</span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 rounded-lg hover:bg-zinc-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {links.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={cn(
                  "block min-h-[44px] min-w-[44px] py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-zinc-700 hover:bg-zinc-100"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
