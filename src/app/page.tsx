"use client";
import { ScrillIndicator } from "@/Components/ScrollIndicator/ScrillIndicator";
import Link from "next/link";
import { CgScrollV } from "react-icons/cg";

import BijliWala from "../../public/Images/bijliwala.png";
import HotelAwadh from "../../public/Images/awadh.png";
import GrandDEurope from "../../public/Images/grandeurope.png";
import Anandain from "../../public/Images/andain.png";

import Image from "next/image";
import { useEffect, useState } from "react";

const ProjectDetails = [
  {
    Name: "HotelAwadhVilasAyoudhya",
    Link: "https://hotelawadhvilasayodhya.com/",
    Image: HotelAwadh,
    Color: "#B2404F",
  },
  {
    Name: "BijliWala",
    Link: "https://hotelawadhvilasayodhya.com/",
    Image: BijliWala,
    Color: "#460074",
  },
  {
    Name: "Grand Hotel D’Europe",
    Link: "https://hotelawadhvilasayodhya.com/",
    Image: GrandDEurope,
    Color: "#288173",
  },
  {
    Name: "Anandha Inn",
    Link: "https://hotelawadhvilasayodhya.com/",
    Image: Anandain,
    Color: "#d14148",
  },
];

const SkillList = [
  "Proficient in HTML5, CSS3, and JavaScript (ES6+)",

  "Expertise in modern frontend frameworks and libraries such as React.js, Tailwind Css and Redux Toolkit",

  "Experience with responsive design and mobile-first development ",

  "Strong understanding of web accessibility standards and SEO best practices",

  "Familiarity with version control systems like Git",
];

export default function Home() {
  const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <main>
      {/* SCROLL INDICATION****** */}
      <ScrillIndicator />

      {/* BANNER SECTION****** */}
      <div className="banner relative">
        <div>
          <h1>Welcome to my portfolio</h1>
          <div>
            <h2>Web Developer || Frontend Developer</h2>
            <h3>Hem Bhadur</h3>
          </div>
          <div className="w-[100%] rounded-full flex items-center justify-center mx-auto absolute bottom-[4%] left-0">
            <Link
              href={"#about"}
              className="scroll-down w-[40px] h-[85px] flex items-center justify-center border-2 border-[#5340B4] rounded-full cursor-pointer"
            >
              <CgScrollV className="text-[4rem] arrow-icon" />
            </Link>
          </div>
        </div>
      </div>

      {/* AOOUT SECTION***** */}
      <section id="about" className="common-section about-section">
        <div className="max-width">
          <h2>About Me</h2>
          <div className="md:mt-10">
            <p>
              I'm a Hem Bhadur. I am enthusiastic, diligent and passionate
              software developer specializing in frontend developer. Having
              strong foundation in React.js, and Node.js. I have worked in both
              front-end and back-end technologies. Additionally, I have working
              experience as a full-stack developer, which enables me to
              understand the entire development lifecycle and bridge the gap
              between frontend and backend functionalities. My proficiency
              extends to backend technologies like Node.js, Express, and
              databases such as MongoDB. Eager to learn something new and
              upgrade my skills for future as well.I'm always interested in
              connecting with fellow developers, designers, and tech
              enthusiasts. Feel free to reach out. Let's build something awesome
              together!
            </p>

            <div className="mt-20 ">
              <h3 className="text-[2.6rem] font-semibold uppercase">
                Key Skills
              </h3>
              <ul className="flex flex-col gap-8 mt-5  list-decimal list-inside">
                {SkillList.map((data: any) => {
                  return (
                    <li className="sm:text-[1.8rem] text-[1.5rem]">{data}</li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SECTION***** */}
      <section id="project" className="common-section project-section">
        <div className="max-width">
          <h2>My Projects</h2>
          <div className="projects sm:mt-[20rem] mt-[10rem]">
            {ProjectDetails.map((Details) => (
              <div className="project-card flex gap-20">
                <div
                  style={{
                    backgroundColor: Details.Color,
                  }}
                  className={`lg:w-[40%] w-[100%] rounded-lg hover:w-[100%] transition-all duration-500 flex items-center justify-center`}
                  onMouseEnter={() => setMouseEnter(true)}
                  onMouseLeave={() => setMouseEnter(false)}
                >
                  {!mouseEnter && (
                    <div className="flex flex-col items-center gap-5">
                      <h1 className="sm:text-[2.6rem] text-[1.8rem] capitalize tracking-[0.2rem] text-center">
                        {Details.Name}
                      </h1>

                      <div className="w-[85%]">
                        <Image
                          src={Details.Image}
                          alt="Prokjects-Image"
                          className="w-full"
                        />
                      </div>
                    </div>
                  )}

                  {mouseEnter && (
                    <div>
                      <div className="flex justify-center py-2">
                        <Link
                          href={"https://hotelawadhvilasayodhya.com/"}
                          target="_blank"
                          className="px-5 py-2 bg-transparent text-white text-[1.5rem] font-semibolds border border-[#ffffff] rounded-md hover:bg-[#B2404F] transition-all"
                        >
                          Visit Website
                        </Link>
                      </div>
                      <Image src={Details.Image} alt="projects-images" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="common-section contact-us-section">
        <div className="max-width">
          <h2>Contact us</h2>
          <div className="grid lg:grid-cols-2 mt-20 gap-8">
            <div>
              <h3 className="md:text-[4rem] text-[2.6rem] font-bold tracking-[0.2rem]">
                Lets Connect Together
              </h3>
              <div className="flex flex-col gap-4 mt-5">
                <Link href="" className="text-[1.6rem]">
                  Gmail: devhem2611@gmail.com
                </Link>
                <Link href="" className="text-[1.6rem]">
                  Phone: +917497042180
                </Link>
                <p className="text-[1.6rem]">Address: Hisar,Haryana</p>

                <div className="mt-10">
                  <p className="md:text-[2.6rem] text-[1.8rem]">
                    I'm always interested in connecting with fellow developers,
                    designers, and tech enthusiasts. Feel free to reach out.
                    Let's build something awesome together!
                  </p>
                </div>
              </div>
            </div>
            <div className="form-control">
              <form action="">
                <div className="input-area">
                  <input type="text" name="" required />
                  <label>Name *</label>
                </div>
                <div className="input-area">
                  <input type="text" name="" required />
                  <label>Eamil *</label>
                </div>
                <div className="input-area">
                  <textarea required rows={8} placeholder="Message*" />
                </div>
                <div>
                  <button className="bg-[#BB5765] px-5 py-4 text-[2rem] w-full font-semibold">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
