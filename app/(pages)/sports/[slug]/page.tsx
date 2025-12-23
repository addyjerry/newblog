// app/(pages)/sports/[slug]/page.tsx
import { getPostBySlug, getSports } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowCircle } from "react-icons/bi";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch the post by slug
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  // Fetch other sports news articles (excluding current one)
  const otherNewsData = await getSports();
  const otherNews = otherNewsData.data
    .filter((news) => news.id !== post.id)
    .slice(0, 6);

  // Construct image URL
  const postImageSrc =
    Array.isArray(post.imageUrl) &&
    post.imageUrl.length > 0 &&
    post.imageUrl[0]?.url
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.imageUrl[0].url}`
      : "/images/placeholder.png";

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="w-full h-60 md:h-150 relative overflow-hidden">
        <Image
          src={postImageSrc}
          fill
          alt={post.header}
          className="object-cover transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
        />
      </div>
      <h1 className="text-4xl font-bold mb-6">{post.header}</h1>

      {/* Article metadata */}
      {post.reporter && (
        <p className="text-gray-600 mb-4">By {post.reporter}</p>
      )}
      {post.type && (
        <p className="text-sm text-gray-500 mb-6">
          {post.type} •{" "}
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      )}

      <article className="prose prose-lg max-w-none">{post.content}</article>

      <div className="my-10">
        <div className="flex flex-col">
          <span className="flex justify-between p-5 border-b-2">
            <h2 className="font-bold text-2xl">OTHER NEWS</h2>
            <Link
              href="/world-news"
              className="flex gap-1 items-center cursor-pointer hover:text-red-500"
            >
              View More
              <BiRightArrowCircle className="transform hover:-rotate-45 text-2xl" />
            </Link>
          </span>
          <div className="block md:flex flex-wrap gap-3 py-5">
            {otherNews.map((news) => {
              const newsImageSrc =
                Array.isArray(news.imageUrl) &&
                news.imageUrl.length > 0 &&
                news.imageUrl[0]?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${news.imageUrl[0].url}`
                  : "/images/placeholder.png";

              return (
                <Link
                  href={`/world-news/${news.slug}`}
                  className="flex flex-row-reverse gap-1 items-center hover:opacity-80 transition"
                  key={news.id}
                >
                  <span className="p-2 max-w-xs">
                    <p className="font-bold text-lg">{news.header}</p>
                    <p className="text-sm line-clamp-2">{news.content}</p>
                    <p className="py-3">
                      {new Date(news.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      - {news.reporter}
                    </p>
                  </span>
                  <span className="w-40 h-40 relative overflow-hidden shrink-0">
                    <Image
                      src={newsImageSrc}
                      fill
                      alt={news.header}
                      className="object-cover absolute transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
