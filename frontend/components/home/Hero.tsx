import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      className="relative min-h-[70vh] flex flex-col justify-center px-4 md:px-8 py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:via-transparent dark:to-secondary/10"
      aria-labelledby="hero-title"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1
          id="hero-title"
          className="animate-fade-in-up text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight"
        >
          Welcome to Barangay Sala
        </h1>
        <p className="animate-fade-in-up-delay-1 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
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
      </div>
    </section>
  );
}
