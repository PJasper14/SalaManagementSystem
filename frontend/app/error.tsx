"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md mx-auto p-8 rounded-2xl border border-zinc-200 bg-white/80 shadow-lg text-center">
      <AlertCircle
        className="h-16 w-16 text-red-500 mb-6"
        aria-hidden
      />
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">
        Something went wrong
      </h1>
      <p className="text-zinc-600 text-center max-w-md mb-8">
        We couldn&apos;t load this page. Please try again.
      </p>
      <Button
        onClick={reset}
        variant="primary"
        size="lg"
      >
        Try again
      </Button>
      </div>
    </div>
  );
}
