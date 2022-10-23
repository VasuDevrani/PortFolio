import Image from "next/image";
import computer from "../public/assets/compDesk.png";

export default function Bio() {
  return (
    <div>
      <div className="box mx-auto w-[80%] mt-10">
        <Image
          alt="avatar"
          priority={true}
          layout="responsive"
          src={computer.src}
          width={250}
          height={100}
        />
      </div>
      <div className="flex flex-col gap-2 justify-center items-center h-[28rem] md:h-[30rem] lg:h-[32rem] bg-siteBg text-white text-center px-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Hi, I'm Vasu Devrani. Nice to meet you.
        </h1>
        <p className="w-[85%] sm:w-[65%] md:w-[60%] font-medium text-[14px] sm:text-base md:text-lg my-3">
          Full Stack Developer, DSA Problem Solver, Learning DevOps.<br/>
          Sophomore at MAIT, Delhi persueing B.Tech. in Information Technology. <br/>
          I like to enthusiastically work in OpenSource, participate in Hackathons and interact with others.
        </p>
      </div>
    </div>
  );
}
