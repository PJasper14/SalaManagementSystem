import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      className="relative min-h-[70vh] flex flex-col justify-center px-4 md:px-8 py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 overflow-hidden border-b border-zinc-200/80"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden" aria-hidden>
        <Image
          src="/images/hero-placeholder.svg"
          alt=""
          width={800}
          height={400}
          className="w-full max-w-md h-auto opacity-[0.12] ] object-contain object-right translate-x-1/4"
          loading="lazy"
        />
      </div>
      <div className="relative max-w-4xl mx-auto text-center space-y-6 z-10">
        <h1
          id="hero-title"
          className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 tracking-tight leading-tight"
        >
          Welcome to Barangay Sala
        </h1>
        <p className="animate-fade-in-up-delay-1 text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
          Your gateway to barangay services, news, and community information. We&apos;re here to serve you.
        </p>
        <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button href="/services" variant="primary" size="lg">
            View Services
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
        <div className="animate-fade-in-up-delay-3 flex flex-wrap justify-center gap-3 mt-6 pt-6 border-t border-zinc-200/60">
          <span className="sr-only">Quick links:</span>
          <a
            href="/emergency"
            className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors min-h-[44px] inline-flex items-center px-4 py-2 rounded-full border border-zinc-200 hover:border-primary/30 hover:bg-primary/5"
          >
            Emergency Hotlines
          </a>
          <a
            href="/news"
            className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors min-h-[44px] inline-flex items-center px-4 py-2 rounded-full border border-zinc-200 hover:border-primary/30 hover:bg-primary/5"
          >
            News & Announcements
          </a>
        </div>
        <div className="animate-fade-in-up-delay-4 flex justify-center items-center gap-6 sm:gap-8 mt-6 pt-4" role="img" aria-label="Barangay Sala and City of Cabuyao logos">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-white border-2 border-zinc-200 shadow-md flex items-center justify-center flex-shrink-0">
            <Image
              src="/images/BrgySalaLOGO.jpg"
              alt=""
              width={112}
              height={112}
              className="w-full h-full object-contain p-1.5"
              aria-hidden
            />
          </div>
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-white border-2 border-zinc-200 shadow-md flex items-center justify-center flex-shrink-0">
            <Image
              src="/images/CabuyaoLOGO.jpg"
              alt=""
              width={112}
              height={112}
              className="w-full h-full object-contain p-1.5"
              aria-hidden
            />
          </div>
        </div>
      </div>
      <p className="relative z-10 text-center text-sm text-zinc-500 mt-6">Barangay Sala, Cabuyao, Laguna</p>
    </section>
  );
}
