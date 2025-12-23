// lib/strapi.ts

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

// Updated interface for Strapi v5 (no attributes wrapper)
export interface Post {
  id: number;
  documentId: string;
  slug: string;
  header: string;
  content: string;
  imageUrl?: any; // It's an array in your data
  type?: string;
  reporter?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Helper function to make authenticated requests
async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const defaultOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...(STRAPI_API_TOKEN && {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      }),
    },
    next: { revalidate: 60 },
  };

  const mergedOptions: RequestInit = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const res = await fetch(`${STRAPI_URL}${endpoint}`, mergedOptions);

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// Get all posts
export async function getPosts(): Promise<StrapiResponse<Post[]>> {
  return fetchAPI<StrapiResponse<Post[]>>(
    "/api/articles?populate=*&sort=publishedAt:desc"
  );
}

// Get single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const data = await fetchAPI<StrapiResponse<Post[]>>(
    `/api/articles?filters[slug][$eq]=${slug}&populate=*`
  );
  return data.data[0] || null;
}

// Get posts by category/type
export async function getPostsByType(
  type: string
): Promise<StrapiResponse<Post[]>> {
  const typeUpper = type.toUpperCase();
  return fetchAPI<StrapiResponse<Post[]>>(
    `/api/articles?filters[type][$eqi]=${typeUpper}&populate=*&sort=publishedAt:desc`
  );
}

// Get world news posts
export async function getWorldNews(): Promise<StrapiResponse<Post[]>> {
  return getPostsByType("WORLD NEWS");
}

// Get technology posts
export async function getTechnology(): Promise<StrapiResponse<Post[]>> {
  return getPostsByType("TECHNOLOGY");
}

// Get politics posts
export async function getPolitics(): Promise<StrapiResponse<Post[]>> {
  return getPostsByType("POLITICS");
}

// Get health posts
export async function getHealth(): Promise<StrapiResponse<Post[]>> {
  return getPostsByType("HEALTH");
}

// Get culture posts
export async function getCulture(): Promise<StrapiResponse<Post[]>> {
  return getPostsByType("CULTURE");
}

// Get business posts
export async function getBusiness(): Promise<StrapiResponse<Post[]>> {
  return getPostsByType("BUSINESS");
}

// Get podcast posts
export async function getPodcast(): Promise<StrapiResponse<Post[]>> {
  return getPostsByType("PODCAST");
}

// Get sports posts
export async function getSports(): Promise<StrapiResponse<Post[]>> {
  return getPostsByType("SPORTS");
}
