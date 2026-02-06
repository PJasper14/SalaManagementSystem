import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceRequestForm } from "@/components/forms/ServiceRequestForm";
import { FileCheck, FileText, Home, Briefcase, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Barangay Sala",
  description:
    "Barangay services: clearances, certificates, permits. Submit a request online.",
};

const services = [
  {
    title: "Barangay Clearance",
    description:
      "Required for various transactions. Request online or visit the office.",
    icon: FileCheck,
  },
  {
    title: "Certificate of Indigency",
    description:
      "Issued to qualified residents for availing government programs.",
    icon: FileText,
  },
  {
    title: "Certificate of Residency",
    description: "Proof of residence for IDs, school, and other purposes.",
    icon: Home,
  },
  {
    title: "Business Permit",
    description:
      "For businesses operating within Barangay Sala. Inquire for requirements.",
    icon: Briefcase,
  },
];

const onThisPage = [
  { href: "#services-list", label: "Our services" },
  { href: "#submit-request", label: "Submit a request" },
];

export default function ServicesPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-8 pb-2">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services" },
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
        id="services"
        title="Barangay Services"
        subtitle="Request certificates, clearances, and other documents. Submit your request below or visit our office."
      >
        <p className="text-zinc-600 max-w-3xl mx-auto text-center mb-12">
          We offer barangay clearance, certificates of indigency and residency, and business permit assistance. Request online using the form below or visit the Barangay Hall during office hours with valid ID and required documents.
        </p>
        <div id="services-list" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map(({ title, description, icon: Icon }) => (
            <Card key={title} variant="elevated">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-zinc-600">
                    {description}
                  </p>
                  <p className="text-xs text-zinc-500 mt-2">
                    Select in the form below to request.
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-200 mb-8">
          <Clock className="h-5 w-5 text-primary shrink-0" aria-hidden />
          <div className="flex-1">
            <p className="font-medium text-zinc-900 text-sm">
              Office hours
            </p>
            <p className="text-sm text-zinc-600">
              Mon – Fri: 8:00 AM – 5:00 PM · Sat: By appointment. Bring valid ID and any required documents when visiting.
            </p>
          </div>
        </div>
        <div id="submit-request" className="p-6 md:p-8 rounded-xl border border-zinc-200 bg-white">
          <h3 className="text-xl font-semibold text-zinc-900 mb-2">
            Submit a service request
          </h3>
          <p className="text-sm text-zinc-600 mb-6">
            Fill out the form below. We&apos;ll get back to you soon. For urgent or complex requests, visit us in person.
          </p>
          <ServiceRequestForm />
          <p className="mt-6 text-sm text-zinc-500">
            Need help?{" "}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-primary font-medium hover:underline"
            >
              Contact us
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
