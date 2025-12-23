import React from "react";
import { getPolitics } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const politicsNewsData = await getPolitics();
  const politicsNews = politicsNewsData.data;

  console.log("politicsNews array:", politicsNews);

  // Log first item to see imageUrl structure
  if (politicsNews.length > 0) {
    console.log("First news item:", JSON.stringify(politicsNews[0], null, 2));
    console.log("imageUrl structure:", politicsNews[0].imageUrl);
  }

  if (!politicsNews || politicsNews.length === 0) {
    return (
      <main className="items-center w-full max-w-[1500px] place-self-center my-10">
        <h1 className="text-2xl font-bold mb-4">Politics News</h1>
        <p>No Politics news articles found.</p>
      </main>
    );
  }

  return (
    <main className="items-center w-full max-w-[1500px] place-self-center my-10">
      <h1 className="text-2xl font-bold mb-4">
        Politics News ({politicsNews.length} articles)
      </h1>

      <div className="flex justify-between flex-wrap gap-4">
        {politicsNews.map((news) => {
          // Safety check
          if (!news) {
            console.error("Undefined news item in array");
            return null;
          }

          console.log("Rendering news:", news.slug);

          return (
            <Link
              href={`/politics/${news.slug}`}
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
