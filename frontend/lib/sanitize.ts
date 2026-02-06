/**
 * Sanitize HTML for news/article body. Strips script, iframe, object, embed,
 * and event handler attributes. Backend should also sanitize; this is defense in depth.
 * Works in both Node (SSR) and browser.
 */
const DANGEROUS_TAGS = /<\/?(script|iframe|object|embed|form|input|button)\b[^>]*>/gi;
const ON_ATTRS = /\s+on\w+\s*=\s*["'][^"']*["']/gi;
const ON_ATTRS_2 = /\s+on\w+\s*=\s*[^\s>]*/gi;
const JAVASCRIPT_URL = /\s*href\s*=\s*["']\s*javascript:[^"']*["']/gi;

export function sanitizeHtml(html: string): string {
  if (typeof html !== "string" || !html.trim()) return "";
  let out = html
    .replace(DANGEROUS_TAGS, "")
    .replace(ON_ATTRS, "")
    .replace(ON_ATTRS_2, "")
    .replace(JAVASCRIPT_URL, "");
  return out;
}
