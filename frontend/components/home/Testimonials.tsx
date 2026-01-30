import { Card } from "@/components/ui/Card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The barangay staff were very helpful when I requested my clearance. Quick and professional service.",
    author: "Maria S.",
    role: "Resident",
  },
  {
    quote:
      "I always check the news section for updates. It's easy to find what I need.",
    author: "Juan D.",
    role: "Resident",
  },
  {
    quote:
      "A transparent process from start to finish. Thank you, Barangay Sala!",
    author: "Rosa L.",
    role: "Resident",
  },
];

export function Testimonials() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24"
      aria-labelledby="testimonials-title"
    >
      <div className="text-center mb-12">
        <h2
          id="testimonials-title"
          className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-2"
        >
          What residents say
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Feedback from our community.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(({ quote, author, role }, i) => (
          <Card key={i} variant="bordered">
            <Quote
              className="h-8 w-8 text-primary/40 dark:text-primary-light/40 mb-3"
              aria-hidden
            />
            <p className="text-zinc-700 dark:text-zinc-300 italic mb-4">
              &ldquo;{quote}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-zinc-900 dark:text-white">
                {author}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{role}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
