"use client";

import Link from "next/link";

interface SmoothScrollProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function SmoothScroll({ href, children, className }: SmoothScrollProps) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
