import { Card } from "@/components/ui/Card";
import { FileText, Users, Newspaper, Phone, Mail } from "lucide-react";

const features = [
  {
    title: "Services",
    description:
      "Access barangay services such as certificates, clearances, and permits. Submit requests online.",
    href: "/services",
    icon: FileText,
  },
  {
    title: "About Us",
    description:
      "Learn about our history, mission, vision, and meet our barangay officials.",
    href: "/about",
    icon: Users,
  },
  {
    title: "News & Announcements",
    description:
      "Stay updated with the latest news, events, and announcements from the barangay.",
    href: "/news",
    icon: Newspaper,
  },
  {
    title: "Emergency Hotlines",
    description:
      "Important contact numbers for PNP, fire, DILG, BHERT, CDRRMO, and more. Save these numbers.",
    href: "/emergency",
    icon: Phone,
  },
  {
    title: "Contact",
    description:
      "Reach out to us for inquiries, feedback, or assistance. We're here to help.",
    href: "/contact",
    icon: Mail,
  },
];

export function FeaturesGrid() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24"
      aria-labelledby="features-title"
    >
      <div className="text-center mb-12">
        <h2
          id="features-title"
          className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-2"
        >
          What we offer
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Quick access to everything you need from Barangay Sala.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {features.map(({ title, description, href, icon: Icon }) => (
          <Card
            key={title}
            title={title}
            href={href}
            variant="elevated"
          >
            <div className="flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary-light/20 dark:text-primary-light">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
