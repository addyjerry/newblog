import React from "react";
import Image from "next/image";
import { BiCopyright, BiDroplet } from "react-icons/bi";
import {
  BsInstagram,
  BsLinkedin,
  BsTwitch,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="border-t-3 mt-5 items-center w-full max-w-[1500px] place-self-center">
      {/* my logo */}
      <div className=" items-center justify-center p-10 place-self-center">
        <Image
          src="/icons/header.svg"
          alt="page-logo"
          width={200}
          height={200}
          className=""
        />
      </div>
      <div className="border-t-2 border-b-2 py-4 max-h-20  flex flex-row justify-between ">
        <div className="flex gap-5">
          <BiDroplet />
          <p className="flex gap-2 items-center">
            Copyright <BiCopyright /> 2025 - The News- All rights reserved
          </p>
        </div>
        <ul className="flex flex-row gap-2">
          <BsInstagram />
          <BsLinkedin />
          <BsYoutube />
          <BsTwitter />
          <BsTwitch />
        </ul>
      </div>
    </div>
  );
};

export default Footer;
