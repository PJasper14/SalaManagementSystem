import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md mx-auto p-8 rounded-2xl border border-zinc-200 bg-white/80 shadow-lg text-center">
      <Image
        src="/images/BrgySala_LOGO_NOBG.png"
        alt="Barangay Sala"
        width={80}
        height={80}
        className="mb-6 opacity-90"
      />
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">
        Page not found
      </h1>
      <p className="text-zinc-600 text-center max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button href="/" variant="primary" size="lg">
          <Home className="h-5 w-5 mr-2 inline-block" aria-hidden />
          Back to home
        </Button>
        <Button
          href="/contact"
          variant="outline"
          size="lg"
        >
          Contact us
        </Button>
      </div>
      </div>
    </div>
  );
}
