import logo from "../public/logo-main.png";
import Image from "next/image";
import {BsInstagram, BsLinkedin, BsTwitter, BsGithub, BsMailbox} from 'react-icons/bs'
import StartProject from "./StartProject";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center text-white bg-siteBg">
      <StartProject/>
      <div className="w-40 h-36 relative">
        <Image
          src={logo.src}
          alt="tech"
          layout="responsive"
          width={40}
          height={40}
          objectFit="contain"
        />
      </div>
      <p className="text-xl text-gray-200">Living, learning, & leveling up</p>
      <p className="text-xl text-gray-200">one day at a time</p>
      <div className="logos flex flex-row items-center justify-center gap-5 my-5 mb-10">
        <div className="footer-icons"><BsInstagram/></div>
        <div className="footer-icons"><BsLinkedin/></div>
        <div className="footer-icons"><BsMailbox/></div>
        <div className="footer-icons"><BsTwitter/></div>
        <div className="footer-icons"><BsGithub/></div>
      </div>
      <p className="text-gray-300 text-lg mt-10 mb-4">Made with 💖 by Vasu Devrani</p>
    </div>
  );
}
