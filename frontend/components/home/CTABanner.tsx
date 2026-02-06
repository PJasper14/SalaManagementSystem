import Link from "next/link";
import { FileText } from "lucide-react";

export function CTABanner() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16"
      aria-labelledby="cta-banner-title"
    >
      <div className="rounded-2xl bg-primary text-white px-6 py-10 md:px-12 md:py-12 text-center shadow-lg border border-primary/20">
        <div className="flex justify-center mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
            <FileText className="h-6 w-6" aria-hidden />
          </div>
        </div>
        <h2
          id="cta-banner-title"
          className="text-xl md:text-2xl font-bold mb-2"
        >
          Need a certificate or clearance?
        </h2>
        <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto mb-6">
          Submit a request online. Barangay clearance, certificate of indigency, residency, and more.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] h-12 px-8 text-base font-semibold rounded-lg bg-white text-primary hover:bg-white/90 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
        >
          Request a service
        </Link>
      </div>
    </section>
  );
}
