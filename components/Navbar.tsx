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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* desktop nav */}
      <ul className="lg:flex justify-center flex-row-reverse hidden gap-5 p-5 border-t-2 border-b-2 py-5">
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
      <div className="lg:hidden">
        {/* Menu Toggle Button */}
        <div className="flex justify-center items-center p-4 border-t-2 border-b-2">
          {isMenuOpen ? (
            <CgClose
              className="text-3xl cursor-pointer z-50 -mt-35"
              onClick={handleMenu}
            />
          ) : (
            <BiMenu
              className="text-3xl cursor-pointer z-50"
              onClick={handleMenu}
            />
          )}
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center">
            <ul className="flex flex-col-reverse gap-4 w-full px-4">
              {navOptions.map((navMenu) => (
                <li
                  className="w-full p-4 text-lg font-bold border-b text-center border-gray-300 hover:bg-gray-100 transition"
                  key={navMenu.navTitle}
                  onClick={closeMenu}
                >
                  <Link href={navMenu.navUrl}>{navMenu.navTitle}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
