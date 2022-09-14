import logo from "../public/logo-main.png";
import Image from "next/image";
import {
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
  BsMailbox,
} from "react-icons/bs";
import StartProject from "./StartProject";
import sendMail from "../utils/SendEmail";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center text-white bg-siteBg">
      <StartProject />
      <div className="w-28 sm:w-36 md:w-40 h-26 sm:h-32 md:h-36 relative">
        <Image
          src={logo.src}
          alt="logo"
          layout="responsive"
          width={40}
          height={40}
          objectFit="contain"
        />
      </div>
      <p className="text-base sm:text-xl text-gray-200">
        Living, learning, & leveling up
      </p>
      <p className="text-base sm:text-xl text-gray-200">one day at a time</p>
      <div className="logos flex flex-row items-center justify-center gap-5 my-5 mb-10">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/vasudevrani2002/"
          aria-label="Instagram"
        >
          <div className="footer-icons">
            <BsInstagram />
          </div>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/vasu-devrani/"
          aria-label="Linkedin"
        >
          <div className="footer-icons">
            <BsLinkedin />
          </div>
        </a>
        <div className="footer-icons" onClick={sendMail}>
          <BsMailbox />
        </div>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/si_vasu" aria-label="Twitter">
          <div className="footer-icons">
            <BsTwitter />
          </div>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/VasuDevrani"
          aria-label="Github"
        >
          <div className="footer-icons">
            <BsGithub />
          </div>
        </a>
      </div>
      <p className="text-gray-300 text-base sm:text-lg mt-10 mb-4">
        Made with 💖 by Vasu Devrani
      </p>
    </div>
  );
}
