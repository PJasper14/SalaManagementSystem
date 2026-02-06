import Link from "next/link";
import { Users, FileCheck, Calendar, MapPin } from "lucide-react";

const stats = [
  {
    label: "Residents served",
    value: "10K+",
    icon: Users,
  },
  {
    label: "Certificates issued",
    value: "5K+",
    icon: FileCheck,
  },
  {
    label: "Years serving",
    value: "30+",
    icon: Calendar,
  },
];

export function StatsStrip() {
  return (
    <section
      className="border-y border-zinc-200/80 bg-white"
      aria-label="Barangay at a glance"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-center">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-zinc-900 tabular-nums">
                {value}
              </p>
              <p className="text-sm text-zinc-600">
                {label}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-sm text-zinc-500">
          Barangay Sala, Cabuyao, Laguna —{" "}
          <Link
            href="/contact"
            className="text-primary font-medium hover:underline inline-flex items-center gap-1"
          >
            <MapPin className="h-4 w-4" aria-hidden />
            Visit us
          </Link>
        </p>
      </div>
    </section>
  );
}
