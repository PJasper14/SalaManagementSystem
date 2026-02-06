import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { MapPin, Users, ArrowRight } from "lucide-react";

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

const skPersonnel = [
  { name: "SK Chairperson", role: "Sangguniang Kabataan Chairperson" },
  { name: "SK Secretary", role: "Secretary" },
  { name: "SK Treasurer", role: "Treasurer" },
  { name: "SK Kagawad 1–7", role: "SK Councilors" },
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

const onThisPage = [
  { href: "#mission", label: "Mission & Vision" },
  { href: "#officials", label: "Barangay Officials" },
  { href: "#sk", label: "SK Personnel" },
  { href: "#location", label: "Location" },
  { href: "#faq", label: "FAQs" },
];

export default function AboutPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-8 pb-2">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pb-4">
        <nav aria-label="On this page" className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <span className="text-zinc-500 font-medium">On this page:</span>
          {onThisPage.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-primary hover:underline"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <Section
        id="about"
        title="About Barangay Sala"
        subtitle="Our history, mission, and the people who serve our community."
      >
        <p className="text-zinc-600 max-w-3xl mx-auto text-center mb-12">
          Barangay Sala is one of the barangays of Cabuyao City, Laguna. We work with the City Government and the Sangguniang Kabataan to deliver services, support, and programs for our residents.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card variant="elevated" id="mission" className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-zinc-900 mb-2">
              Mission & Vision
            </h3>
            <p className="text-zinc-600 mb-4">
              We are committed to transparent, responsive governance and to
              improving the quality of life of every resident. Our vision is a
              united, progressive, and resilient Barangay Sala.
            </p>
            <p className="text-zinc-600">
              Through accessible services, community engagement, and sustainable
              initiatives, we strive to serve with integrity and dedication.
            </p>
          </Card>
          <Card variant="default" id="officials" title="Barangay Officials">
            <ul className="space-y-2">
              {officials.map(({ name, role }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 text-zinc-700"
                >
                  <Users className="h-4 w-4 text-primary shrink-0" />
                  <span>
                    <strong>{name}</strong> — {role}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
          <Card variant="default" id="sk" title="Sangguniang Kabataan (SK) Personnel">
            <ul className="space-y-2">
              {skPersonnel.map(({ name, role }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 text-zinc-700"
                >
                  <Users className="h-4 w-4 text-primary shrink-0" />
                  <span>
                    <strong>{name}</strong> — {role}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
          <Card variant="default" id="location" title="Location">
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-zinc-700">
                <MapPin
                  className="h-4 w-4 text-primary shrink-0 mt-0.5"
                  aria-hidden
                />
                <div>
                  <p>Barangay Sala, Cabuyao, Laguna</p>
                  <p className="text-sm text-zinc-500 mt-1">
                    Full address, map, and office hours on the Contact page.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mt-2"
              >
                View address & contact
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Card>
        </div>
      </Section>
      <section
        id="faq"
        className="bg-zinc-100 py-16 md:py-24 border-t border-zinc-200/80"
      >
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            Frequently asked questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
