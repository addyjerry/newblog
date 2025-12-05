"use client";
import * as React from "react";
import { navOptions } from "./config/navConfig";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      {/* desktop nav */}
      <ul className="lg:flex justify-center flex-row-reverse hidden gap-5 p-5 border-t-2 border-b-2 py-5 ">
        {navOptions.map((navMenu) => (
          <li
            key={navMenu.navTitle}
            className="m-auto font-bold text-xl hover:text-red-400 cursor-pointer"
          >
            <Link href={navMenu.navUrl}>{navMenu.navTitle}</Link>
          </li>
        ))}
      </ul>
      {/* mobile nav */}
      <div className="flex flex-col gap-3 lg:hidden">
        {isMenuOpen ? (
          <CgClose
            className="absolute z-10 self-center text-xl"
            onClick={handleMenu}
          />
        ) : (
          <BiMenu className="z-10 self-center text-xl" onClick={handleMenu} />
        )}
        <ul
          className={` flex-col-reverse lg:hidden gap-1 items-center justify-center z-5 bg-white fixed w-full pt-5 mb-10  ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          {navOptions.map((navMenu) => (
            <li
              className="w-full p-3 text-lg font-bold border-b text-center border-gray-500"
              key={navMenu.navTitle}
            >
              <Link href={navMenu.navUrl}>{navMenu.navTitle}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
