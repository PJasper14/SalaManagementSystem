import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ServiceRequestForm } from "@/components/forms/ServiceRequestForm";
import { FileCheck, FileText, Home, Briefcase } from "lucide-react";

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

export default function ServicesPage() {
  return (
    <>
      <Section
        id="services"
        title="Barangay Services"
        subtitle="Request certificates, clearances, and other documents. Submit your request below or visit our office."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map(({ title, description, icon: Icon }) => (
            <Card key={title} variant="elevated">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary-light/20 dark:text-primary-light">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
            Submit a service request
          </h3>
          <ServiceRequestForm />
        </div>
      </Section>
    </>
  );
}
