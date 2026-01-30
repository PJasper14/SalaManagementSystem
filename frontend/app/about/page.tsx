import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { MapPin, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Barangay Sala",
  description:
    "Learn about Barangay Sala's history, mission, vision, officials, and location.",
};

const officials = [
  { name: "Barangay Captain", role: "Punong Barangay" },
  { name: "Barangay Secretary", role: "Secretary" },
  { name: "Barangay Treasurer", role: "Treasurer" },
  { name: "Kagawad 1–7", role: "Barangay Councilors" },
];

const faqs = [
  {
    question: "What is Barangay Sala?",
    answer:
      "Barangay Sala is a local government unit serving our community. We provide various services including certificates, clearances, and support for residents.",
  },
  {
    question: "Where is the Barangay Hall?",
    answer:
      "The Barangay Hall is located in Barangay Sala. Visit our Contact page for the full address and map. We are open Mondays to Fridays, 8:00 AM – 5:00 PM.",
  },
  {
    question: "How can I request a certificate?",
    answer:
      "You can submit a service request through our Services page or visit the Barangay Hall in person. Bring valid ID and any required documents.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section
        id="about"
        title="About Barangay Sala"
        subtitle="Our history, mission, and the people who serve our community."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card variant="elevated" className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Mission & Vision
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              We are committed to transparent, responsive governance and to
              improving the quality of life of every resident. Our vision is a
              united, progressive, and resilient Barangay Sala.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Through accessible services, community engagement, and sustainable
              initiatives, we strive to serve with integrity and dedication.
            </p>
          </Card>
          <Card variant="default" title="Barangay Officials">
            <ul className="space-y-2">
              {officials.map(({ name, role }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300"
                >
                  <Users className="h-4 w-4 text-primary dark:text-primary-light shrink-0" />
                  <span>
                    <strong>{name}</strong> — {role}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
          <Card variant="default" title="Location">
            <div className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
              <MapPin
                className="h-4 w-4 text-primary dark:text-primary-light shrink-0 mt-0.5"
                aria-hidden
              />
              <div>
                <p>Barangay Sala</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  Full address and map are available on the Contact page.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
      <section className="bg-zinc-100 dark:bg-neutral-900/50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
            Frequently asked questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
