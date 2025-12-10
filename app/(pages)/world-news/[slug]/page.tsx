// app/(pages)/world-news/[slug]/page.tsx
import { worldNews } from "@/lib/posts";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = worldNews.find((p) => p.slug.endsWith(slug));

  if (!post) {
    return notFound();
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">{post.header}</h1>
      <article className="prose prose-lg max-w-none">{post.content}</article>
    </main>
  );
}
