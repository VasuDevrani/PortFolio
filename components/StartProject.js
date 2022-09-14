import { AiOutlineFire } from "react-icons/ai";
import sendMail from "../utils/SendEmail";

export default function StartProject() {
  return (
    <div className="bg-textBlack flex flex-col md:flex-row justify-evenly box items-center py-6 md:py-10 rounded-xl sm:rounded-2xl md:rounded-3xl -my-10 gap-5 mb-6 sm:mb-10 shadow-lg flex-wrap">
      <p className="text-xl sm:text-2xl md:text-3xl font-bold flex-[1] flex flex-row items-center justify-center">
        Start a project
      </p>
      <p className="text-[12px] sm:text-base md:text-lg flex-[1] lg:flex-[2] px-10 md:px-0 flex flex-row items-center justify-center">
        Interested in working together? We should queue up a time to chat. I'll
        buy the coffee.
      </p>
      <div className="text-lg flex-[1] flex items-center justify-center">
        <div className="border-2 cursor-pointer font-medium p-1 sm:p-2 gap-2 flex flex-row items-center justify-center lg:w-3/4 border-sitegreen rounded-lg sm:rounded-xl lg:rounded-2xl hover:bg-sitegreen hover:text-textBlack text-[15px] sm:text-base" onClick={sendMail}>
          <AiOutlineFire /> Let's do this
        </div>
      </div>
    </div>
  );
}
