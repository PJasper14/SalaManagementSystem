import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchNewsBySlug, fetchNews } from "@/lib/api";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

function formatDate(s: string) {
  return new Date(s).toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await fetchNewsBySlug(slug);
    return {
      title: `${post.title} | Barangay Sala`,
      description: post.excerpt,
      openGraph: { title: post.title, description: post.excerpt },
    };
  } catch {
    return { title: "News | Barangay Sala" };
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = await fetchNewsBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <Link
        href="/news"
        className="inline-flex items-center gap-2 text-primary dark:text-primary-light font-medium mb-6 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to News
      </Link>
      <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-4">
        <Calendar className="h-4 w-4" aria-hidden />
        {formatDate(post.published_at)}
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
        {post.title}
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        {post.excerpt}
      </p>
      {post.body ? (
        <div
          className="text-zinc-700 dark:text-zinc-300 space-y-4 [&_p]:mb-3 [&_a]:text-primary dark:[&_a]:text-primary-light [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      ) : (
        <p className="text-zinc-600 dark:text-zinc-400">
          Content for this announcement is being prepared. Check back soon.
        </p>
      )}
      <div className="mt-10">
        <Button href="/news" variant="outline" size="md">
          View all news
        </Button>
      </div>
    </article>
  );
}
