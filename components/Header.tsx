import React from "react";
import TodayDate from "./Date";
import Image from "next/image";
import { BiChevronRight, BiSearch } from "react-icons/bi";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="items-center w-full max-w-[1500px] place-self-center">
      {/* line above */}
      <div className="border-t-2 border-b-2 py-4 max-h-20  flex flex-row justify-between ">
        <TodayDate />

        <div className="flex gap-2 font-bold items-center">
          <h1 className="">The Menu</h1>
          <BiChevronRight className="font-bold text-lg" />
          <BiSearch className="font-bold text-lg" />
        </div>
      </div>
      {/* my logo */}
      <div className=" items-center justify-center p-10 place-self-center">
        <Image
          src="/icons/header.svg"
          alt="page-logo"
          width={300}
          height={300}
          className=""
        />
      </div>
      {/* nav-section */}
      <Navbar />
    </div>
  );
};

export default Header;
