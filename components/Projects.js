import Image from "next/image";
import projectList from "../public/tech/projectList";
import { BsGlobe, BsGithub } from "react-icons/bs";
import sendMail from "../utils/SendEmail";

export default function Projects() {
  return (
    <div
      className="box flex flex-col justify-center items-center my-[7rem] md:my-[10rem]"
      id="projects"
    >
      <p className="text-2xl md:text-3xl font-semibold my-2">My Recent Work</p>
      <p className="text-base sm:text-lg md:text-xl font-medium px-3">
        Here are a few past design projects I've worked on. Want to see more?
        <span className="text-blue-700 cursor-pointer" onClick={sendMail}>
          {" "}
          Email me
        </span>
      </p>
      <div className="box flex flex-col w-[90vw] gap-1 sm:gap-3 mt-10">
        {/* one */}
        <div className="flex flex-row">
          <div className="projectItem shadow-lg gap-5 p-3">
            <div className="w-full sm:w-auto sm:flex-[0.6]">
              <Image
                src={projectList[0].src}
                layout="responsive"
                width={35}
                height={20}
                objectFit="contain"
              />
            </div>
            <div className="sm:flex-[0.4] text-left">
              <h1 className="text-xl md:text-2xl font-semibold uppercase">
                filmoro
              </h1>
              <ul className="unList">
                <li className="techList">TypeScript</li>
                <li className="techList">ReactJS</li>
                <li className="techList">Tailwind CSS</li>
              </ul>
              <ul className="unList">
                <a
                  href="https://filmoro-20491.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="techList">
                    <BsGlobe /> Live
                  </li>
                </a>
                <a
                  href="https://github.com/VasuDevrani/FilmMoro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="techList">
                    <BsGithub /> GitHub
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          {/* two */}
          <div className="projectItem md:ml-auto shadow-lg gap-1 sm:gap-3 px-3">
            <div className="flex-[0.4] text-left">
              <h1 className="text-2xl font-semibold uppercase">solutext</h1>
              <ul className="unList">
                <li className="techList">ReactJS</li>
                <li className="techList">NodeJS</li>
                <li className="techList">Tailwind CSS</li>
              </ul>
              <ul className="unList">
                <a
                  href="https://papaya-biscochitos-c6c5db.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="techList">
                    <BsGlobe /> Live
                  </li>
                </a>
                <a
                  href="https://github.com/VasuDevrani/SoluText-2.0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="techList">
                    <BsGithub /> GitHub
                  </li>
                </a>
              </ul>
            </div>
            <div className="w-full sm:w-auto sm:flex-[0.6]">
              <Image
                src={projectList[1].src}
                layout="responsive"
                width={35}
                height={20}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        {/* three */}
        <div className="flex flex-row">
          <div className="projectItem shadow-lg gap-1 sm:gap-3 px-3">
            <div className="w-full sm:w-auto sm:flex-[0.6]">
              <Image
                src={projectList[2].src}
                layout="responsive"
                width={35}
                height={20}
                objectFit="contain"
              />
            </div>
            <div className="flex-[0.4] text-left">
              <h1 className="text-2xl font-semibold uppercase">buysell</h1>
              <ul className="unList">
                <li className="techList">ReactJS</li>
                <li className="techList">Context API</li>
              </ul>
              <ul className="unList">
                <a
                  href="https://mern-buysell.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="techList">
                    <BsGlobe /> Live
                  </li>
                </a>
                <a
                  href="https://github.com/VasuDevrani/E-Commerce-MERN"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="techList">
                    <BsGithub /> GitHub
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
