import Image from "next/image";
import projectList from "../public/tech/projectList";

export default function Projects() {
  return (
    <div className="box flex flex-col justify-center items-center my-[10rem]">
      <p className="text-3xl font-semibold my-2">My Recent Work</p>
      <p className="text-xl font-medium">
        Here are a few past design projects I've worked on. Want to see more?
        <span className="text-blue-700 cursor-pointer"> Email me</span>
      </p>
      <div className="flex flex-col w-[90vw] gap-5 mt-10">
        <div className="projectItem shadow-lg gap-5 px-3">
          <div className="flex-[0.6]">
            <Image
              src={projectList[0].src}
              layout="responsive"
              width={35}
              height={20}
              objectFit="contain"
            />
          </div>
          <div className="flex-[0.4] text-left">
            <h1 className="text-2xl font-semibold uppercase">filmoro</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias
              asperiores ex quae fugit soluta aut. Quis deleniti vitae,
              explicabo exercitationem quibusdam alias, voluptates illo saepe
              velit atque obcaecati magni?
            </p>
            <ul className="unList">
              <li className="techList">TypeScript</li>
              <li className="techList">ReactJS</li>
              <li className="techList">Tailwind CSS</li>
            </ul>
          </div>
        </div>
        <div className="flex-end flex flex-row">
          <div className="projectItem ml-auto shadow-lg gap-5 px-3">
            <div className="flex-[0.6]">
              <Image
                src={projectList[1].src}
                layout="responsive"
                width={35}
                height={20}
                objectFit="contain"
              />
            </div>
            <div className="flex-[0.4] text-left">
              <h1 className="text-2xl font-semibold uppercase">solutext</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                alias asperiores ex quae fugit soluta aut. Quis deleniti vitae,
                explicabo exercitationem quibusdam alias, voluptates illo saepe
                velit atque obcaecati magni?
              </p>
              <ul className="unList">
                <li className="techList">ReactJS</li>
                <li className="techList">NodeJS</li>
                <li className="techList">Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="projectItem shadow-lg gap-3 px-3">
            <div className="flex-[0.6]">
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                alias asperiores ex quae fugit soluta aut. Quis deleniti vitae,
                explicabo exercitationem quibusdam alias, voluptates illo saepe
                velit atque obcaecati magni?
              </p>
              <ul className="unList">
                <li className="techList">ReactJS</li>
                <li className="techList">Context API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
