import Image from "next/image";
import avatar from "../public/assets/avataaars.png";
import Typewriter from "typewriter-effect";
import { annotate, annotationGroup } from "rough-notation";
import { useEffect, useRef } from "react";

export default function Hero() {
  const annoOne = useRef(null);
  const annoTwo = useRef(null);
  const annoThree = useRef(null);

  useEffect(() => {
    const a1 = annotate(annoOne.current, { type: "highlight", color: "yellow" });
    const a2 = annotate(annoTwo.current, { type: "highlight", color: "#5BE9B9" });
    const a3 = annotate(annoThree.current, { type: "highlight", color: "lightblue" });

    const ag = annotationGroup([a1, a2, a3]);
    ag.show();
  }, []);

  return (
    <div className="box flex flex-col justify-center items-center mt-[7rem] sm:mt-[12rem] lg:mt-[15rem] text-textBlack px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl sm:text-3xl md:text-5xl font-bold">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Developer | Student")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="text-base sm:text-xl md:text-2xl mt-2 sm:mt-5 font-medium">
          I love to <span ref={annoTwo}>code</span>, <span ref={annoOne}>explore</span> around and <span ref={annoThree}>helping</span> out others
        </p>
      </div>
      <div className="relative mt-10 container w-[150px] sm:w-[200px] md:w-[250px] mainBox">
        {/* <div className="absolute top-0 left-0 w-[150px] h-[150px] bg-sitegreen shadow-md shadow-siteBg"></div>
        <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-sitegreen shadow-md shadow-siteBg"></div> */}
        <Image
          alt="avatar"
          layout="responsive"
          src={avatar.src}
          width={250}
          height={250}
        />
      </div>
    </div>
  );
}
// Developer | Student
