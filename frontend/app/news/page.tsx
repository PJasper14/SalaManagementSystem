import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { NewsList } from "./NewsList";

export const metadata: Metadata = {
  title: "News & Announcements | Barangay Sala",
  description:
    "Latest news, announcements, and updates from Barangay Sala.",
};

export default function NewsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "News & Announcements" },
        ]}
        className="pt-8 pb-4"
      />
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900">
          News & Announcements
        </h1>
        <p className="text-zinc-600 mt-1">
          Stay updated with the latest from Barangay Sala
        </p>
        <p className="text-zinc-600 mt-4 max-w-2xl">
          Official announcements, events, and updates from the barangay. Check back regularly for new posts.
        </p>
      </div>
      <NewsList />
    </section>
  );
}
