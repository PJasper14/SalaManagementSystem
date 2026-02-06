import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapPin, Clock, Phone, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Barangay Sala",
  description:
    "Get in touch with Barangay Sala. Address, hours, and contact form.",
};

const onThisPage = [
  { href: "#contact-info", label: "Address & hours" },
  { href: "#send-message", label: "Send a message" },
];

export default function ContactPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-8 pb-2">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
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
        id="contact"
        title="Contact Us"
        subtitle="Reach out for inquiries, feedback, or assistance. We're here to help."
      >
        <p className="text-zinc-600 max-w-3xl mx-auto text-center mb-12">
          Visit the Barangay Hall during office hours, call us, or send a message using the form below. For certificate or service requests, use the{" "}
          <Link href="/services" className="text-primary font-medium hover:underline">
            Services page
          </Link>
          . For emergencies, see our{" "}
          <Link href="/emergency" className="text-primary font-medium hover:underline">
            Emergency Hotlines
          </Link>
          .
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div id="contact-info" className="lg:col-span-1 space-y-4">
            <div className="flex gap-4 p-4 rounded-xl border border-zinc-200 bg-white">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                <MapPin className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">
                  Address
                </h3>
                <p className="text-zinc-600 text-sm mt-1">
                  Barangay Sala, Cabuyao, Laguna
                </p>
                <p className="text-xs text-zinc-500 mt-2">
                  Visit us during office hours.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl border border-zinc-200 bg-white">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                <Clock className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">
                  Office hours
                </h3>
                <p className="text-zinc-600 text-sm mt-1">
                  Mon – Fri: 8:00 AM – 5:00 PM
                  <br />
                  Sat: By appointment
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl border border-zinc-200 bg-white">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                <Phone className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">
                  Phone
                </h3>
                <p className="text-zinc-600 text-sm mt-1">
                  (02) 8XXX-XXXX
                </p>
              </div>
            </div>
            <Link
              href="/emergency"
              className="flex gap-3 p-4 rounded-xl border border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100 transition-colors"
            >
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" aria-hidden />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">Emergency?</p>
                <p className="text-xs text-amber-700 mt-0.5 flex items-center gap-1">
                  See hotlines
                  <ArrowRight className="h-3 w-3 shrink-0" aria-hidden />
                </p>
              </div>
            </Link>
          </div>
          <div id="send-message" className="lg:col-span-2 p-6 rounded-xl border border-zinc-200 bg-white">
            <h3 className="font-semibold text-zinc-900 mb-2">
              Send a message
            </h3>
            <p className="text-sm text-zinc-500 mb-2">
              Secure form. Your message is sent securely.
            </p>
            <p className="text-sm text-zinc-500 mb-6">
              We typically respond within 1–2 business days. For certificate or service requests, use the{" "}
              <Link href="/services" className="text-primary font-medium hover:underline">
                Services page
              </Link>
              .
            </p>
            <ContactForm />
            <p className="text-xs text-zinc-400 mt-4 print:show">
              Last updated: {new Date().toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
