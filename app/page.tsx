import {
  headerPost,
  latest,
  latestNews,
  podcast,
  technology,
  worldNews,
} from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowCircle } from "react-icons/bi";

export default function Home() {
  return (
    <main className="items-center w-full max-w-[1500px] place-self-center bg-blue-50">
      {/* header area */}
      <div className="flex md:justify-between flex-1 flex-wrap justify-center">
        {/* blog cards */}
        {headerPost.map((post, index) => (
          <Link
            href={post.slug}
            className="flex cursor-pointer max-w-xs gap-3 items-center"
            key={index}
          >
            <div className="overflow-hidden rounded-lg m-1 w-20 h-20 shrink-0">
              <Image
                src={post.imageUrl}
                width={80}
                height={80}
                alt={post.imageUrl}
                className="rounded-lg transition duration-300 ease-in-out hover:scale-110 w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-bold hover:underline">{post.header}</p>
              <p className="">{post.content}</p>
            </div>
          </Link>
        ))}
      </div>
      {/* major news */}
      <div className="flex flex-col my-5 relative gap-4 mb-15">
        <span className="w-full h-80 md:h-[80vh] relative max-w-[1500px] overflow-hidden">
          <Image
            src={latest.imageUrl}
            fill
            alt={latest.imageUrl}
            className="object-cover absolute transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
          />
        </span>
        <span className="flex md:flex-row flex-col-reverse justify-between  ">
          <div className="flex gap-3 justify-center">
            <button className="p-3 rounded cursor-pointer border-2 font-bold">
              {latest.type}
            </button>
            <button className="p-3 rounded cursor-pointer border-2 font-bold ">
              {latest.reporter}
            </button>
          </div>
          <p className="text-center">Sep 9,2025 - 3 months</p>
        </span>
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <h2 className="font-bold lg:text-5xl md:text-3xl text-2xl md:max-w-3/4 w-full text-center md:text-start">
            {latest.header}
          </h2>
          <Link
            href={latest.slug}
            className="flex gap-1 items-center cursor-pointer hover:text-red-500 justify-center"
          >
            Read article
            <BiRightArrowCircle className="transform hover:-rotate-45 text-2xl " />
          </Link>
        </div>
      </div>
      {/* latest news */}
      <div className="my-10">
        <div className="flex flex-col">
          <span className="flex justify-between p-5 border-b-2 ">
            <h2 className="font-bold text-2xl">LATEST NEWS</h2>
            <Link
              href="/world-news"
              className="flex gap-1 items-center cursor-pointer hover:text-red-500"
            >
              View More
              <BiRightArrowCircle className="transform hover:-rotate-45 text-2xl " />
            </Link>
          </span>
          <div className="flex justify-between flex-col md:flex-row py-5 ">
            <span className="w-full h-60 md:size-150 relative  overflow-hidden">
              <Image
                src="/images/latest/innovation.png"
                fill
                alt={latest.imageUrl}
                className="object-cover absolute transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
              />
            </span>
            <div className="flex flex-col gap-2 py-3 md:py-0 md:justify-between">
              {latestNews.first.map((news) => (
                <div className="flex gap-2  items-center" key={news.slug}>
                  <span className="p-2 max-w-xs">
                    <p className="font-bold text-lg ">{news.header}</p>
                    <p className="text-sm">{news.type} - Sep 9, 2025</p>
                  </span>
                  <span className="w-60 h-60 relative  overflow-hidden">
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
          {/* second */}
          <div className="flex flex-col md:flex-row md:justify-between justify-center py-5 w-full overflow-hidden">
            {latestNews.second.map((news) => (
              <div className="flex flex-col gap-2 max-w-sm" key={news.slug}>
                <span className="w-full h-40  md:w-50 lg:h-80 lg:w-100 relative  overflow-hidden">
                  <Image
                    src={news.imageUrl}
                    fill
                    alt={latest.imageUrl}
                    className="object-cover absolute transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  />
                </span>
                <span className="p-2 ">
                  <p className="font-bold text-lg ">{news.header}</p>
                  <p className="text-sm">{news.type} - Sep 9, 2025</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* world news */}
      <div className="my-10">
        <div className="flex flex-col">
          <span className="flex justify-between p-5 border-b-2 ">
            <h2 className="font-bold text-2xl">WORLD NEWS</h2>
            <Link
              href="/world-news"
              className="flex gap-1 items-center cursor-pointer hover:text-red-500"
            >
              View More
              <BiRightArrowCircle className="transform hover:-rotate-45 text-2xl " />
            </Link>
          </span>
          <div className="flex justify-between flex-col md:flex-row py-5 ">
            <span className="md:w-180 md:h-160 relative  overflow-hidden">
              <Image
                src="/images/worldnews/socialmovement.png"
                fill
                alt={latest.imageUrl}
                className="object-fill absolute transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
              />
            </span>
            <div className="flex flex-col gap-5">
              {worldNews.map((news) => (
                <div className="flex gap-2  items-center" key={news.slug}>
                  <span className="p-2 max-w-xs">
                    <p className="font-bold text-lg ">{news.header}</p>
                    <p className="text-sm">{news.type} - Sep 9, 2025</p>
                  </span>
                  <span className="w-50 h-50 relative  overflow-hidden">
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
      </div>
      {/* technology */}
      <div className="my-10">
        <div className="flex flex-col">
          <span className="flex justify-between p-5 border-b-2 ">
            <h2 className="font-bold text-2xl">TECHNOLOGY</h2>
            <Link
              href="/world-news"
              className="flex gap-1 items-center cursor-pointer hover:text-red-500"
            >
              View More
              <BiRightArrowCircle className="transform hover:-rotate-45 text-2xl " />
            </Link>
          </span>
          <div className="flex md:justify-between justify-center flex-wrap flex-row py-5 ">
            {technology.map((news) => (
              <div
                className="flex gap-2 flex-col-reverse items-center"
                key={news.slug}
              >
                <span className="p-2 max-w-xs">
                  <p className="text-sm">{news.reporter} - Sep 9, 2025</p>
                  <p className="font-bold text-lg ">{news.header}</p>
                </span>
                <span className=" w-full h-30 md:w-90 md:h-60 relative  overflow-hidden">
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
      {/* podcast */}
      <div className="my-10">
        <div className="flex flex-col">
          <span className="flex justify-between p-5 border-b-2 ">
            <h2 className="font-bold text-2xl">PODCAST</h2>
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
