import Image from "next/image";
import avatar from "../public/assets/avataaars.png";

export default function Hero() {
  return (
    <div className="box flex flex-col justify-center items-center mt-[20vh] text-textBlack">
      <div className="flex flex-col items-center justify-center">
        <p className="text-5xl font-bold">Developer | Student</p>
        <p className="text-2xl mt-5 font-medium">
          I design and code beautifully simple things, and I love what I do.
        </p>
      </div>
      <div className="mt-10 container w-[250px]">
        <Image alt="avatar" layout="responsive" src={avatar.src} width={250} height={250} />
      </div>
    </div>
  );
}
