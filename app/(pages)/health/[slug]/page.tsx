// app/world-news/[slug]/page.tsx
import { posts } from "@/public/lib/posts";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>; // Note: Promise!
}) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">{post.header}</h1>
      <article className="prose prose-lg max-w-none">{post.content}</article>
    </main>
  );
}
