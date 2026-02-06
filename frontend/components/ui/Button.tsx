"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90  ",
  secondary:
    "bg-secondary text-white hover:bg-secondary/90  ",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white    ",
  ghost:
    "text-zinc-700  hover:bg-zinc-100 ",
};

const sizes: Record<Size, string> = {
  sm: "min-h-[44px] min-w-[44px] h-9 px-4 py-2.5 text-sm",
  md: "min-h-[44px] min-w-[44px] h-11 px-6 text-base",
  lg: "min-h-[44px] min-w-[44px] h-12 px-8 text-lg",
};

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
