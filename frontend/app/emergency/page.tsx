import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AlertCircle, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency Hotlines | Barangay Sala",
  description:
    "Barangay Sala emergency hotlines and contact numbers. PNP, Bureau of Fire, DILG, BHERT, CDRRMO, and more. Cabuyao, Laguna.",
};

export default function EmergencyPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-8 pb-2">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Emergency Hotlines" },
          ]}
        />
      </div>
      <Section
        id="emergency-hotlines"
        title="Emergency Hotlines"
        subtitle="Save these numbers. In case of emergency, contact the appropriate office below."
      >
        <p className="text-zinc-600 max-w-3xl mx-auto text-center mb-8">
          In life-threatening emergencies, call 911 or the appropriate hotline immediately. Use the numbers on this page for police, fire, disaster response, and barangay emergency contacts in Cabuyao, Laguna.
        </p>
        <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-4 md:p-5 mb-10 max-w-2xl mx-auto flex gap-3">
          <AlertCircle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" aria-hidden />
          <div>
            <p className="font-semibold text-amber-800 text-sm">
              Life-threatening emergency?
            </p>
            <p className="text-sm text-amber-700 mt-1">
              Call <strong>911</strong> or the nearest emergency number. For barangay and local offices, use the hotlines shown below.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-zinc-200 shadow-lg bg-white print:border print:shadow-none">
            <Image
              src="/images/salaemergencyhotlines.png"
              alt="Barangay Sala Emergency Hotlines - Contact numbers for SMART, Telephone, PNP Cabuyao, Bureau of Fire, DILG, BHERT, CDRRMO, CIDG, CTMO, CSU. Facebook: Barangay Sala Cabuyao Laguna, Brgy Sala Command Center. Email: salacabuyaocity@gmail.com. Kap. Kiko Alimagno."
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
          <p className="text-center text-sm text-zinc-500 max-w-2xl mx-auto">
            For urgent concerns, call the numbers shown above. For non-emergency inquiries, you can reach us via our Contact page.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg font-medium text-primary border-2 border-primary hover:bg-primary/10 transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Contact us (non-emergency)
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <p className="text-center text-xs text-zinc-400 mt-6 print:show">
            Last updated: {new Date().toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </Section>
    </>
  );
}
