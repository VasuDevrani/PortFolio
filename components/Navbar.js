import Image from "next/image";
import logo from "../public/logo.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
// import resume from '/assets/Vasu.pdf'

export default function Navbar({ handleScroll }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className="sticky top-0 bg-white z-[100]">
      <div className="box flex flex-row mt-4 sm:mt-6 justify-between items-center px-5 ">
        <div className="w-[7rem] md:w-[10rem]">
          <Image
            src={logo.src}
            alt="logo image"
            layout="responsive"
            width={53}
            height={20}
          />
        </div>
        <div
          className="block sm:hidden text-3xl cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          <HiMenuAlt1 />
        </div>
        <div className="nav-links hidden sm:flex sm:flex-row items-center gap-5 sm:text-lg text-textBlack font-medium">
          <p className="cursor-pointer" onClick={() => handleScroll("bio")}>
            About Me
          </p>
          <p className="cursor-pointer" onClick={() => handleScroll("project")}>
            Projects
          </p>
          <a className="border-siteBg rounded-2xl md:rounded-3xl cursor-pointer p-1 px-3 md:px-4 border-2 text-siteBg hover:bg-siteBg hover:text-white" href='/assets/Vasu.pdf'
            download='VasuDevrani.pdf'>
            RESUME
          </a>
        </div>
        <div
          className={`sm:hidden flex flex-col ${
            menu ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"
          } bg-white absolute top-0 left-0 w-[100%] duration-300 gap-4 p-3 py-10 items-center justify-center shadow-2xl text-sm`}
        >
          <div className="text-xl cursor-pointer" onClick={() => setMenu(!menu)}>
            <FaArrowLeft />
          </div>
          <p
            className="cursor-pointer"
            onClick={() => {
              handleScroll("bio");
              setMenu(false);
            }}
          >
            About Me
          </p>
          <div
            className="cursor-pointer"
            onClick={() => {
              handleScroll("project");
              setMenu(false);
            }}
          >
            Projects
          </div>
          <a
            className="border-siteBg rounded-2xl md:rounded-3xl cursor-pointer p-1 px-3 md:px-4 border-2 text-siteBg hover:bg-siteBg hover:text-white w-1/3"
            href='/assets/Vasu.pdf'
            download='VasuDevrani.pdf'
          >
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
}
