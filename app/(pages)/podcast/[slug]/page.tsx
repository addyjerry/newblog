// app/(pages)/podcast/[slug]/page.tsx
import { podcast } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowCircle } from "react-icons/bi";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = podcast.find((p) => p.slug.endsWith(slug));

  if (!post) {
    return notFound();
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="w-full h-60 md:h-150 relative overflow-hidden">
        <Image
          src={post.imageUrl}
          fill
          alt={post.imageUrl}
          className="object-cover transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
        />
      </div>
      <h1 className="text-4xl font-bold mb-6">{post.header}</h1>
      <article className="prose prose-lg max-w-none">{post.content}</article>
      <div className="my-10">
        <div className="flex flex-col">
          <span className="flex justify-between p-5 border-b-2 ">
            <h2 className="font-bold text-2xl">OTHER NEWS</h2>
            <Link
              href="/world-news"
              className="flex gap-1 items-center cursor-pointer hover:text-red-500"
            >
              View More
              <BiRightArrowCircle className="transform hover:-rotate-45 text-2xl " />
            </Link>
          </span>
          <div className="block md:flex  flex-wrap gap-3 py-5">
            {podcast.map((news) => (
              <div
                className="flex flex-row-reverse gap-1 items-center"
                key={news.slug}
              >
                <span className="p-2 max-w-xs">
                  <p className="font-bold text-lg ">{news.header}</p>
                  <p className="text-sm">{news.content}</p>
                  <p className="py-3">10 Mins- {news.reporter}</p>
                </span>
                <span className="w-40 h-40 relative  overflow-hidden">
                  <Image
                    src={news.imageUrl}
                    fill
                    alt={news.imageUrl}
                    className="object-cover absolute transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
