import Image from "next/image";
import avatar from "../public/assets/avataaars.png";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="box flex flex-col justify-center items-center mt-[9vh] sm:mt-[12vh] md:mt-[15vh] text-textBlack px-4">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl sm:text-3xl md:text-5xl font-bold">
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
        </p>
        <p className="text-base sm:text-xl md:text-2xl mt-2 sm:mt-5 font-medium">
          I love to code, explore around and helping out others
        </p>
      </div>
      <div className="relative mt-10 container w-[150px] sm:w-[200px] md:w-[250px] mainBox">
        <div className="absolute top-0 left-0 w-[150px] h-[150px] bg-sitegreen shadow-md shadow-siteBg"></div>
        <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-sitegreen shadow-md shadow-siteBg"></div>
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
