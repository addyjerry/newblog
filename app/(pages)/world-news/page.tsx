import React from "react";
import { posts } from "@/public/lib/posts";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <main className="items-center w-full max-w-[1500px] place-self-center">
      {/* header area */}
      <div className="flex justify-between ">
        {/* blog cards */}
        {posts.map((post, index) => (
          <Link
            href={`/world-news/${post.slug}`}
            className="flex cursor-pointer"
            key={index}
          >
            <Image
              src={post.imageUrl}
              width={50}
              height={50}
              alt={post.imageUrl}
            />
            <p className="hover:underline">{post.header}</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Page;
