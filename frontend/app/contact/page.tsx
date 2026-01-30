import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapPin, Clock, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Barangay Sala",
  description:
    "Get in touch with Barangay Sala. Address, hours, and contact form.",
};

export default function ContactPage() {
  return (
    <>
      <Section
        id="contact"
        title="Contact Us"
        subtitle="Reach out for inquiries, feedback, or assistance. We're here to help."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary-light/20 dark:text-primary-light">
                <MapPin className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  Address
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
                  Barangay Sala, City, Philippines
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary-light/20 dark:text-primary-light">
                <Clock className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  Office hours
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
                  Mon – Fri: 8:00 AM – 5:00 PM
                  <br />
                  Sat: By appointment
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary-light/20 dark:text-primary-light">
                <Phone className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  Phone
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
                  (02) 8XXX-XXXX
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">
              Send a message
            </h3>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
