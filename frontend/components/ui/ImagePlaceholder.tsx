"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

/** Tiny blur placeholder (10x10 gray) for Next.js placeholder="blur". */
const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/ALnY22O2tv/Z";

interface ImagePlaceholderProps {
  src: string | null | undefined;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  placeholderClassName?: string;
  sizes?: string;
}

/** Renders image when src is valid; otherwise shows a placeholder. Uses blur placeholder when loading. */
export function ImagePlaceholder({
  src,
  alt,
  fill,
  width = 400,
  height = 300,
  className,
  placeholderClassName,
  sizes = "(max-width: 768px) 100vw, 400px",
}: ImagePlaceholderProps) {
  const validSrc =
    typeof src === "string" &&
    (src.startsWith("http") || src.startsWith("/") || src.startsWith("data:"));

  if (validSrc) {
    return fill ? (
      <Image
        src={src!}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        sizes={sizes}
        loading="lazy"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
    ) : (
      <Image
        src={src!}
        alt={alt}
        width={width}
        height={height}
        className={cn("object-cover", className)}
        sizes={sizes}
        loading="lazy"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-zinc-100  border border-zinc-200  overflow-hidden",
        fill ? "absolute inset-0" : "w-full",
        placeholderClassName,
        className
      )}
      style={!fill ? { aspectRatio: `${width} / ${height}` } : undefined}
    >
      <Image
        src="/images/placeholder.svg"
        alt=""
        width={width}
        height={height}
        className="object-cover w-full h-full opacity-70"
        aria-hidden
        loading="lazy"
      />
    </div>
  );
}
