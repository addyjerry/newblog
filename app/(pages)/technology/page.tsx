import React from "react";
import { getTechnology } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const technologyNewsData = await getTechnology();
  const technologyNews = technologyNewsData.data;

  console.log("technologyNews array:", technologyNews);

  // Log first item to see imageUrl structure
  if (technologyNews.length > 0) {
    console.log("First news item:", JSON.stringify(technologyNews[0], null, 2));
    console.log("imageUrl structure:", technologyNews[0].imageUrl);
  }

  if (!technologyNews || technologyNews.length === 0) {
    return (
      <main className="items-center w-full max-w-[1500px] place-self-center my-10">
        <h1 className="text-2xl font-bold mb-4">Technology News</h1>
        <p>No technology news articles found.</p>
      </main>
    );
  }

  return (
    <main className="items-center w-full max-w-[1500px] place-self-center my-10">
      <h1 className="text-2xl font-bold mb-4">
        Technology News ({technologyNews.length} articles)
      </h1>

      <div className="flex justify-between flex-wrap gap-4">
        {technologyNews.map((news) => {
          // Safety check
          if (!news) {
            console.error("Undefined news item in array");
            return null;
          }

          console.log("Rendering news:", news.slug);

          return (
            <Link
              href={`/technology/${news.slug}`}
              className="flex flex-col gap-2 max-w-sm"
              key={news.id}
            >
              <span className="w-full h-40 md:w-50 lg:h-80 lg:w-100 relative overflow-hidden">
                <Image
                  src={
                    Array.isArray(news.imageUrl) &&
                    news.imageUrl.length > 0 &&
                    news.imageUrl[0]?.url
                      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${news.imageUrl[0].url}`
                      : "/images/placeholder.png"
                  }
                  fill
                  alt={news.header || "News image"}
                  className="object-cover absolute transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                />
              </span>
              <span className="p-2">
                <p className="font-bold text-lg">{news.header}</p>
                <p className="text-sm">
                  {news.type} -{" "}
                  {new Date(news.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </span>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Page;
