import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "default" | "elevated" | "bordered";

const variants: Record<Variant, string> = {
  default:
    "bg-white dark:bg-neutral-900 border border-zinc-200 dark:border-neutral-800",
  elevated: "bg-white dark:bg-neutral-900 shadow-md hover:shadow-card-hover",
  bordered:
    "bg-white dark:bg-neutral-900 border-2 border-zinc-200 dark:border-neutral-700",
};

interface CardProps {
  title?: string;
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
}

export function Card({
  title,
  children,
  variant = "default",
  href,
  className,
}: CardProps) {
  const base =
    "rounded-xl p-6 md:p-8 transition-shadow " + variants[variant];
  const withHover = href ? "hover:shadow-lg cursor-pointer" : "";
  const classes = cn(base, withHover, className);

  const content = (
    <>
      {title && (
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
          {title}
        </h3>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <article className={classes}>{content}</article>;
}
