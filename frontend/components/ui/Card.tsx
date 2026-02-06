import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "default" | "elevated" | "bordered";

const variants: Record<Variant, string> = {
  default:
    "bg-white  border border-zinc-200 ",
  elevated:
    "bg-white  border border-zinc-200  shadow-md hover:shadow-card-hover hover:scale-[1.01] motion-reduce:hover:scale-100 transition-all duration-200",
  bordered:
    "bg-white  border-2 border-zinc-200 ",
};

interface CardProps {
  title?: string;
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Card({
  title,
  children,
  variant = "default",
  href,
  id,
  className,
  style,
}: CardProps) {
  const base =
    "rounded-xl p-6 md:p-8 transition-shadow " + variants[variant];
  const withHover = href ? "hover:shadow-lg cursor-pointer" : "";
  const classes = cn(base, withHover, className);

  const content = (
    <>
      {title && (
        <h3 className="text-lg font-semibold text-zinc-900 mb-3">
          {title}
        </h3>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} id={id} className={classes} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <article id={id} className={classes} style={style}>
      {content}
    </article>
  );
}
