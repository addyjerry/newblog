import React from "react";
import { posts, technology, worldNews } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <main className="items-center w-full max-w-[1500px] place-self-center my-10">
      {/* header area */}
      <div className="flex justify-between flex-wrap">
        {/* blog cards */}
        {technology.map((news) => (
          <Link
            href={news.slug}
            className="flex flex-col gap-2 max-w-sm"
            key={news.slug}
          >
            <span className="w-full h-40  md:w-50 lg:h-80 lg:w-100 relative  overflow-hidden">
              <Image
                src={news.imageUrl}
                fill
                alt={news.imageUrl}
                className="object-cover absolute transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
              />
            </span>
            <span className="p-2 ">
              <p className="font-bold text-lg ">{news.header}</p>
              <p className="text-sm">{news.type} - Sep 9, 2025</p>
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Page;
