"use client";

import React, { useState } from "react";
import { RiGithubFill, RiLinkedinLine } from "react-icons/ri";
import "./Header.scss";
import Link from "next/link";
import { SiCodeproject } from "react-icons/si";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="max-width">
        <div className="logo" onClick={() => setOpen(!open)}>
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
          <li>
            <Link href="/#skills">Skills</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
        <div className="flex gap-4 items-center">
          <Link
            href="https://www.linkedin.com/in/hem-bhadur-b2182b26a"
            target="_blank"
            className="w-[35px] h-[35px] flex items-center justify-center bg-[#b2404f] rounded-full"
          >
            <span className="sr-only">LinkedInIcon</span>
            <RiLinkedinLine className="text-[2rem]" />
          </Link>
          <Link
            href={"https://github.com/SushilKc00"}
            target="_blank"
            className="w-[35px] h-[35px] flex items-center justify-center bg-[#b240b2] rounded-full"
          >
            <span className="sr-only">githubIcon</span>
            <RiGithubFill className="text-[2rem]" />
          </Link>
        </div>
      </nav>
      {/* <MobileNav open={open} setOpen={setOpen} /> */}
    </header>
  );
};

const MobileNav = ({ open, setOpen }: any) => {
  return (
    <div
      className="fixed top-[-0%] left-[-30%] h-[220px] bg-gray-400 rounded-full"
      style={{
        scale: open ? 1 : 0,
        transition: "all 0.5s",
        width: "80%",
      }}
    >
      <div className="absolute right-0">
        <SiCodeproject size={30} />
      </div>
      <div className="absolute top-0 right-0">
        <SiCodeproject size={30} />
      </div>
      <div className="absolute right-0">
        <SiCodeproject size={30} />
      </div>
      <div className="absolute right-0">
        <SiCodeproject size={30} />
      </div>
      {/* <h1>helo</h1> */}
    </div>
  );
};

export default Header;
