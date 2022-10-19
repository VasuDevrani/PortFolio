import Image from "next/image";
import React from "react";
import hackvsit from "../public/assets/hackvsit.webp";
import mait from "../public/assets/mait.webp";
import { GrTechnology } from "react-icons/gr";

const hackData = [
  {
    id: "1",
    image: hackvsit,
    name: "HackVSIT 4.0",
    mode: "Offline - 24hrs",
    project: "Full Stack ml based meeting platform",
    content: "Top 15 among 150 teams, International hackathon",
    link: "https://hackvsit-4.devfolio.co/",
  },
  {
    id: "2",
    image: mait,
    name: "MeloTron",
    mode: "Online - 48hrs",
    content: "Secured 1st place",
    project: "Full Stack ml based e-learning",
    link: "https://indiatourdelhi.devfolio.co/overview",
  },
];

export default function Hackathons() {
  return (
    <div className="box mt-[7rem] md:mt-[10rem] mb-5">
      <h1 className="text-2xl md:text-3xl font-semibold my-2">
        Acheivements 🏆
      </h1>
      <div className="grid grid-cols-16 sm:grid-cols-15 w-[70%] mx-auto mt-10 gap-14 md:text-lg text-sm">
        {hackData.map((item) => (
          <div
            className={`p-3 bg-white flex flex-col items-center relative justify-center gap-2 border-2 rounded-3xl shadow-md cursor-pointer before:absolute before:bg-sitegreen before:w-[100%] before:h-[100%] before:rounded-3xl before:-z-10 before:top-5`}
            key={item.id}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              aria-label="HackVSIT hackathon"
            >
              <div className="w-[7rem] sm:w-[10rem]">
                <Image
                  alt="avatar"
                  layout="responsive"
                  src={item.image}
                  width={50}
                  height={50}
                />
              </div>
            </a>
            <h1 className="text-xl sm:text-2xl font-semibold">{item.name}</h1>
            <p className="text-base">{item.mode}</p>
            <div className="text-2xl my-3">
              <GrTechnology />
            </div>
            <p className="text-base px-3">{item.project}</p>
            <p className="px-4 md:px-10 text-textBlack font-semibold">
              {item.content}
            </p>
            <div className="bg-siteBg w-[100%] h-[100%] rounded-3xl -z-10 top-3 absolute"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
