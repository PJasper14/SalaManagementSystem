"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { fetchNews, type NewsPost } from "@/lib/api";
import { Calendar, WifiOff } from "lucide-react";

function formatDate(s: string) {
  return new Date(s).toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function NewsList() {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const load = useCallback(() => {
    setLoading(true);
    setError(false);
    fetchNews(page)
      .then((r) => {
        setPosts(r.data);
        setLastPage(r.last_page);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [page]);

  useEffect(() => {
    load();
  }, [load]);

  const isEmpty = !loading && !error && posts.length === 0;

  return (
    <div className="space-y-6">
      {error ? (
        <div
          className="rounded-xl border border-zinc-200 bg-white p-12 text-center"
          role="alert"
        >
          <WifiOff className="h-12 w-12 mx-auto text-zinc-400 mb-4" aria-hidden />
          <p className="text-zinc-700 mb-2">
            Can&apos;t load news. Check your connection and try again.
          </p>
          <p className="text-zinc-500 text-sm mb-4">
            If you&apos;re running locally, make sure the API server is started (e.g. <code className="bg-zinc-100 px-1 rounded">php artisan serve</code> in the backend folder).
          </p>
          <Button type="button" variant="primary" size="md" onClick={load} disabled={loading}>
            Retry
          </Button>
        </div>
      ) : isEmpty ? (
        <div className="rounded-xl border border-zinc-200 bg-white p-12 text-center">
          <p className="text-zinc-600 mb-4">
            No news or announcements yet. Check back later.
          </p>
          <Link
            href="/contact"
            className="text-primary font-medium hover:underline"
          >
            Contact us for inquiries
          </Link>
        </div>
      ) : loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-xl bg-white border border-zinc-200 overflow-hidden animate-pulse"
              aria-hidden
            >
              <div className="w-full aspect-video bg-zinc-200" />
              <div className="p-6 space-y-3">
                <div className="h-4 w-28 bg-zinc-200 rounded" />
                <div className="h-5 w-full bg-zinc-200 rounded" />
                <div className="h-4 w-full bg-zinc-200 rounded" />
                <div className="h-4 w-2/3 bg-zinc-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <Card
              key={post.id}
              variant="default"
              className="flex flex-col p-0 overflow-hidden animate-stagger-item"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
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
                <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                  <Calendar className="h-4 w-4 shrink-0" aria-hidden />
                  {formatDate(post.published_at)}
                </div>
                <h2 className="font-semibold text-zinc-900 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-zinc-600 text-sm flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/news/${post.slug}`}
                  className="mt-4 text-primary font-medium text-sm hover:underline"
                >
                  Read more
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
      {!error && !isEmpty && lastPage > 1 && (
        <nav
          className="flex flex-wrap items-center justify-center gap-3 pt-8 border-t border-zinc-200 mt-8"
          aria-label="News pagination"
        >
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1 || loading}
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-4 py-2 rounded-lg border border-zinc-300 bg-white font-medium disabled:opacity-50 hover:bg-zinc-50 transition-colors"
            aria-label="Previous page"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-sm text-zinc-600" aria-current="page">
            Page {page} of {lastPage}
          </span>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(lastPage, p + 1))}
            disabled={page >= lastPage || loading}
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-4 py-2 rounded-lg border border-zinc-300 bg-white font-medium disabled:opacity-50 hover:bg-zinc-50 transition-colors"
            aria-label="Next page"
          >
            Next
          </button>
        </nav>
      )}
    </div>
  );
}
