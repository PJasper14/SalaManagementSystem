"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { fetchNews, type NewsPost } from "@/lib/api";
import { Calendar } from "lucide-react";

const fallback: NewsPost[] = [
  {
    id: 1,
    title: "Barangay Assembly 2025",
    slug: "barangay-assembly-2025",
    excerpt:
      "Join us for the annual Barangay Assembly. We'll discuss accomplishments, projects, and plans for the year.",
    body: "",
    image_url: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: "New Barangay Hall Hours",
    slug: "new-barangay-hall-hours",
    excerpt:
      "Our office will now be open Mondays to Fridays, 8:00 AM – 5:00 PM. Saturdays by appointment.",
    body: "",
    image_url: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    title: "Certificate Request Process",
    slug: "certificate-request-process",
    excerpt:
      "Learn how to request barangay clearance, indigency, and other certificates through our streamlined process.",
    body: "",
    image_url: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

function formatDate(s: string) {
  return new Date(s).toLocaleDateString("en-PH", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function Announcements() {
  const [posts, setPosts] = useState<NewsPost[]>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews(1)
      .then((r) => setPosts(r.data.slice(0, 3)))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const list = posts.length ? posts : fallback;

  return (
    <section
      className="bg-zinc-100 dark:bg-neutral-900/50 py-16 md:py-24"
      aria-labelledby="announcements-title"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2
              id="announcements-title"
              className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white"
            >
              News & Announcements
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">
              Latest updates from Barangay Sala
            </p>
          </div>
          <Link href="/news">
            <Button variant="outline" size="sm">
              View all
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white dark:bg-neutral-900 border border-zinc-200 dark:border-neutral-800 p-6 animate-pulse h-48"
                  aria-hidden
                />
              ))
            : list.map((post) => (
                <Card key={post.id} variant="default" className="flex flex-col p-0 overflow-hidden">
                  <div className="relative w-full aspect-video shrink-0">
                    <ImagePlaceholder
                      src={post.image_url}
                      alt={post.title}
                      fill
                      className="rounded-t-xl"
                      placeholderClassName="rounded-t-xl"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      <Calendar className="h-4 w-4 shrink-0" aria-hidden />
                      {formatDate(post.published_at)}
                    </div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/news/${post.slug}`}
                      className="mt-4 text-primary dark:text-primary-light font-medium text-sm hover:underline"
                    >
                      Read more
                    </Link>
                  </div>
                </Card>
              ))}
        </div>
      </div>
    </section>
  );
}
