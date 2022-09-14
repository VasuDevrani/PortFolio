import { AiOutlineCode } from "react-icons/ai";
import techs from "../public/tech/tech.js";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="skills flex flex-col md:flex-row justify-around items-center -mt-12 sm:-mt-17 md:-mt-20 bg-white w-5/6 md:rounded-3xl rounded-xl mx-auto p-7 md:p-10 py-20 sm:py-24 md:py-28 shadow-xl mb-10 max-w-[1350px]">
      <div className="flex flex-col gap-5 items-center justify-center flex-[0.4] px-3">
        <div className="text-textBlack text-3xl sm:text-4xl md:text-6xl rounded-full p-2 md:p-3 bg-sitegreen w-12 sm:w-13 md:w-20 flex gap-10 items-center">
          <AiOutlineCode />
        </div>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold">Tools & Technologies</p>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-14 flex-[0.6] md:border-l-2 px-2 md:px-4 mt-10 md:mt-0">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="border-2 p-2 md:p-3 shadow-md w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 relative hover:bg-sitegreen"
          >
            <Image
              src={tech.src}
              alt="tech"
              layout="responsive"
              width={35}
              height={35}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
