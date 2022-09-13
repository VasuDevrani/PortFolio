import { AiOutlineFire } from "react-icons/ai";

export default function StartProject() {
  return (
    <div className="bg-textBlack flex flex-row justify-evenly box items-center py-10 rounded-3xl -my-10 gap-5 mb-10 shadow-lg flex-wrap">
      <p className="text-3xl font-bold flex-[1] flex flex-row items-center justify-center">
        Start a project
      </p>
      <p className="text-lg flex-[2] flex flex-row items-center justify-center">
        Interested in working together? We should queue up a time to chat. I'll
        buy the coffee.
      </p>
      <div className="text-lg flex-[1] flex items-center justify-center">
        <div className="border-2 cursor-pointer font-medium p-2 gap-2 flex flex-row items-center justify-center w-1/2 border-sitegreen rounded-2xl hover:bg-sitegreen hover:text-textBlack">
          <AiOutlineFire /> Let's do this
        </div>
      </div>
    </div>
  );
}
