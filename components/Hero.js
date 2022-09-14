import Image from "next/image";
import avatar from "../public/assets/avataaars.png";

export default function Hero() {
  return (
    <div className="box flex flex-col justify-center items-center mt-[9vh] sm:mt-[12vh] md:mt-[15vh] text-textBlack px-4">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl sm:text-3xl md:text-5xl font-bold">Developer | Student</p>
        <p className="text-base sm:text-xl md:text-2xl mt-2 sm:mt-5 font-medium">
          I design and code beautifully simple things, and I love what I do.
        </p>
      </div>
      <div className="mt-10 container w-[150px] sm:w-[200px] md:w-[250px]">
        <Image alt="avatar" layout="responsive" src={avatar.src} width={250} height={250} />
      </div>
    </div>
  );
}
