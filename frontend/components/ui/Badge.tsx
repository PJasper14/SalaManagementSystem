import { cn } from "@/lib/utils";

type Variant = "default" | "primary" | "success" | "error";

const variants: Record<Variant, string> = {
  default:
    "bg-zinc-100 text-zinc-700  ",
  primary: "bg-primary/10 text-primary  ",
  success:
    "bg-green-100 text-green-800  ",
  error: "bg-red-100 text-red-800  ",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
