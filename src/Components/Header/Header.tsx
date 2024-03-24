import React from "react";
import { RiGithubFill, RiLinkedinLine } from "react-icons/ri";
import "./Header.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="max-width">
        <div className="logo">
          <h2 className="flex text-[#f47150]">
            H <span className="text-[#ffffff]">B</span>
          </h2>
        </div>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/#about"}>About</Link>
          </li>
          <li>
            <Link href={"/#project"}>Projects</Link>
          </li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-4 items-center">
          <div className="w-[35px] h-[35px] flex items-center justify-center bg-[#b2404f] rounded-full">
            <RiLinkedinLine className="text-[2rem]" />
          </div>
          <div className="w-[35px] h-[35px] flex items-center justify-center bg-[#b240b2] rounded-full">
            <RiGithubFill className="text-[2rem]" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
