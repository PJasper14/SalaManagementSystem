const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function fetchApi<T>(
  path: string,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...init?.headers,
    },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { message?: string }).message || res.statusText);
  }
  return res.json() as Promise<T>;
}

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function submitContact(data: ContactPayload) {
  return fetchApi<{ message: string }>("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export interface ServiceRequestPayload {
  service_type: string;
  requester_name: string;
  requester_email: string;
  details: string;
}

export function submitServiceRequest(data: ServiceRequestPayload) {
  return fetchApi<{ message: string }>("/api/service-requests", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export interface NewsPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  image_url: string | null;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface NewsListResponse {
  data: NewsPost[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export function fetchNews(page = 1): Promise<NewsListResponse> {
  return fetchApi<NewsListResponse>(`/api/news?page=${page}`);
}

export function fetchNewsBySlug(slug: string): Promise<NewsPost> {
  return fetchApi<NewsPost>(`/api/news/${slug}`);
}
