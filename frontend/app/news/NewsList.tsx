"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
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
    body: "Full content here...",
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
      "Our office will now be open Mondays to Fridays, 8:00 AM – 5:00 PM.",
    body: "Full content here...",
    image_url: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

function formatDate(s: string) {
  return new Date(s).toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function NewsList() {
  const [posts, setPosts] = useState<NewsPost[]>(fallback);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchNews(page)
      .then((r) => {
        setPosts(r.data);
        setLastPage(r.last_page);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [page]);

  const list = posts.length ? posts : fallback;

  return (
    <div className="space-y-6">
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-xl bg-white dark:bg-neutral-900 border border-zinc-200 dark:border-neutral-800 p-6 h-40 animate-pulse"
              aria-hidden
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {list.map((post) => (
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
                <h2 className="font-semibold text-zinc-900 dark:text-white mb-2 line-clamp-2">
                  {post.title}
                </h2>
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
      )}
      {lastPage > 1 && (
        <div className="flex justify-center gap-2 pt-4">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1 || loading}
            className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 font-medium disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-zinc-600 dark:text-zinc-400">
            Page {page} of {lastPage}
          </span>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(lastPage, p + 1))}
            disabled={page >= lastPage || loading}
            className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 font-medium disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
