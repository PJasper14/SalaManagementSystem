import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchNewsBySlug } from "@/lib/api";
import { sanitizeHtml } from "@/lib/sanitize";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Calendar, ArrowLeft, Clock } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

function formatDate(s: string) {
  return new Date(s).toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatDateTime(s: string) {
  return new Date(s).toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
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

  const showUpdated =
    post.updated_at &&
    post.published_at &&
    new Date(post.updated_at).getTime() >
      new Date(post.published_at).getTime() + 60 * 1000;

  return (
    <article className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "News & Announcements", href: "/news" },
          { label: post.title },
        ]}
        className="pb-4 mb-4"
      />
      <Link
        href="/news"
        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-primary transition-colors mb-8 py-2 px-3 -ml-3 rounded-lg hover:bg-zinc-100"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to News & Announcements
      </Link>
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 border border-zinc-200">
        <ImagePlaceholder
          src={post.image_url}
          alt={post.title}
          fill
          className="object-cover rounded-xl"
          placeholderClassName="rounded-xl"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-500 mb-4">
        <span className="flex items-center gap-2">
          <Calendar className="h-4 w-4" aria-hidden />
          {formatDate(post.published_at)}
        </span>
        {showUpdated && (
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" aria-hidden />
            Updated {formatDateTime(post.updated_at)}
          </span>
        )}
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
        {post.title}
      </h1>
      <p className="text-lg text-zinc-600 mb-8">
        {post.excerpt}
      </p>
      {post.body ? (
        <div
          className="text-zinc-700 space-y-4 [&_p]:mb-3 [&_a]:text-primary [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.body) }}
        />
      ) : (
        <p className="text-zinc-600">
          Content for this announcement is being prepared. Check back soon.
        </p>
      )}
      <div className="mt-10 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row gap-4">
        <Button href="/news" variant="outline" size="md">
          View all news
        </Button>
        <Link
          href="/contact"
          className="inline-flex items-center text-sm text-zinc-600 hover:text-primary hover:underline"
        >
          Questions about this post? Contact us
        </Link>
      </div>
    </article>
  );
}
