import Image from "next/image";
import projectList from "../public/tech/projectList";
import { BsGlobe, BsGithub } from "react-icons/bs";
import sendMail from "../utils/SendEmail";
import { motion } from "framer-motion";
import { annotate, annotationGroup } from "rough-notation";
import { useEffect, useRef } from "react";

export default function Projects() {
  const annoOne = useRef(null);

  useEffect(() => {
    const a1 = annotate(annoOne.current, {
      type: "highlight",
      color: "yellow",
    });
    a1.show();
  }, []);

  return (
    <div
      className="box flex flex-col justify-center items-center my-[7rem] md:my-[10rem]"
      id="projects"
    >
      <p className="text-2xl md:text-3xl font-semibold my-2">My Recent Work</p>
      <p className="text-base sm:text-lg md:text-xl font-medium px-3">
        Here are a few past <span ref={annoOne}>projects</span> I've worked on. Want to see more?
        <span
          className="text-blue-700 cursor-pointer hover:underline"
          onClick={sendMail}
        >
          {" "}
          Email me
        </span>
      </p>
      <div className="box flex flex-col w-[90vw] gap-1 sm:gap-3 mt-10">
        {/* one */}
        <motion.div
          className="flex flex-row"
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="projectItem shadow-lg gap-5 p-3">
            <div className="w-full sm:w-auto sm:flex-[0.6]">
              <Image
                src={projectList[0].src}
                alt="filmoro-project"
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
        </motion.div>
        <div className="flex flex-row">
          {/* two */}
          <motion.div
            className="projectItem md:ml-auto shadow-lg gap-1 sm:gap-3 px-3"
            initial={{ opacity: 0, translateX: "100%" }}
            whileInView={{ opacity: 1, translateX: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex-[0.4] text-left">
              <h1 className="text-2xl font-semibold uppercase">Spooky</h1>
              <ul className="unList">
                <li className="techList">ReactJS</li>
                <li className="techList">CSS</li>
                <li className="techList">Design</li>
              </ul>
              <ul className="unList">
                <a
                  href="https://effulgent-custard-63b4a3.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="techList">
                    <BsGlobe /> Live
                  </li>
                </a>
                <a
                  href="https://github.com/VasuDevrani/Halloween"
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
                src={projectList[4].src}
                layout="responsive"
                width={35}
                height={20}
                alt="soluText-project"
                objectFit="contain"
              />
            </div>
          </motion.div>
        </div>
        {/* three */}
        <div className="flex flex-row">
          <motion.div
            className="projectItem shadow-lg gap-1 sm:gap-3 px-3"
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full sm:w-auto sm:flex-[0.6]">
              <Image
                src={projectList[2].src}
                layout="responsive"
                width={35}
                height={20}
                alt="buysell-project"
                objectFit="contain"
              />
            </div>
            <div className="flex-[0.4] text-left">
              <h1 className="text-2xl font-semibold uppercase">buysell</h1>
              <ul className="unList">
                <li className="techList">ReactJS</li>
                <li className="techList">Context API</li>
                <li className="techList">NodeJS</li>
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
          </motion.div>
        </div>
        {/* fourth */}
        <div className="flex flex-row">
          {/* two */}
          <motion.div
            className="projectItem md:ml-auto shadow-lg gap-1 sm:gap-3 px-3"
            initial={{ opacity: 0, translateX: "100%" }}
            whileInView={{ opacity: 1, translateX: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex-[0.4] text-left">
              <h1 className="text-2xl font-semibold uppercase">adminDB</h1>
              <ul className="unList">
                <li className="techList">ReactJS</li>
                <li className="techList">SyncFusion</li>
                <li className="techList">Tailwind CSS</li>
              </ul>
              <ul className="unList">
                <a
                  href="https://admindb.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="techList">
                    <BsGlobe /> Live
                  </li>
                </a>
                <a
                  href="https://github.com/VasuDevrani/SyncFusion-ADMIN_DASHBOARD"
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
                src={projectList[3].src}
                layout="responsive"
                width={35}
                height={20}
                alt="soluText-project"
                objectFit="contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
