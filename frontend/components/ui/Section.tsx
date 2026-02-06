import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24",
        className
      )}
    >
      <div className="space-y-8">
        {(title || subtitle) && (
          <div className="space-y-2">
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-zinc-600 text-lg max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
