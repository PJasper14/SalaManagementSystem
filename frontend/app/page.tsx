import { Hero } from "@/components/home/Hero";
import { StatsStrip } from "@/components/home/StatsStrip";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { Announcements } from "@/components/home/Announcements";
import { CTABanner } from "@/components/home/CTABanner";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <FeaturesGrid />
      <Announcements />
      <CTABanner />
      <Testimonials />
    </>
  );
}
