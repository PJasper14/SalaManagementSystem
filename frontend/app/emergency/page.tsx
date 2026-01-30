import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Emergency Hotlines | Barangay Sala",
  description:
    "Barangay Sala emergency hotlines and contact numbers. PNP, Bureau of Fire, DILG, BHERT, CDRRMO, and more. Cabuyao, Laguna.",
};

export default function EmergencyPage() {
  return (
    <>
      <Section
        id="emergency-hotlines"
        title="Emergency Hotlines"
        subtitle="Save these numbers. In case of emergency, contact the appropriate office below."
      >
        <div className="space-y-6">
          <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-zinc-200 dark:border-neutral-800 shadow-lg">
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
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            For urgent concerns, call the numbers shown above. You can also reach us via our{" "}
            <Link href="/contact" className="text-primary dark:text-primary-light font-medium hover:underline">
              Contact page
            </Link>{" "}
            for non-emergency inquiries.
          </p>
        </div>
      </Section>
    </>
  );
}
