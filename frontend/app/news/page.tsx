import type { Metadata } from "next";
import { NewsList } from "./NewsList";

export const metadata: Metadata = {
  title: "News & Announcements | Barangay Sala",
  description:
    "Latest news, announcements, and updates from Barangay Sala.",
};

export default function NewsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
            News & Announcements
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
            Stay updated with the latest from Barangay Sala
          </p>
        </div>
      </div>
      <NewsList />
    </section>
  );
}
