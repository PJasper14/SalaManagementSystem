"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

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

/** Renders image when src is valid; otherwise shows a placeholder. */
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
      />
    );
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 overflow-hidden",
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
