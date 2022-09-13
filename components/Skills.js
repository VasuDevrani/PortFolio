import { AiOutlineCode } from "react-icons/ai";
import techs from "../public/tech/tech.js";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="skills flex flex-row justify-around items-center -mt-20 bg-white w-5/6 rounded-3xl mx-auto p-10 py-28 shadow-xl mb-10 max-w-[1350px]">
      <div className="flex flex-col gap-5 items-center justify-center flex-[0.4]">
        <div className="text-textBlack text-6xl rounded-full p-3 bg-sitegreen w-20 flex gap-10 items-center">
          <AiOutlineCode />
        </div>
        <p className="text-2xl font-semibold">Tools & Technologies</p>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-14 flex-[0.6] border-l-2">
        {techs.map((tech, index) => (
          <div key={index} className="border-2 p-3 shadow-md w-24 h-24 relative">
              <Image
                src={tech.src}
                alt="tech"
                layout="responsive"
                width={35}
                height={35}
                objectFit='contain'
              />
          </div>
        ))}
      </div>
    </div>
  );
}
