import { Hero } from "@/components/home/Hero";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { Announcements } from "@/components/home/Announcements";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <Announcements />
      <Testimonials />
    </>
  );
}
