import { BsFillChatSquareTextFill } from "react-icons/bs";
import sendMail from "../utils/SendEmail";

export default function Collab() {
  return (
    <div className="flex flex-col justify-center items-center box px-3">
      <p className="text-xl md:text-2xl font-semibold my-1 sm:my-2">
        Interested in collaborating with me?
      </p>
      <p className="text-[13px] sm:text-base md:text-lg font-base my-1 sm:my-2">
        I'm always open to collaborate, discuss or partnership
        opportunities.
      </p>
      <div className="border-siteBg rounded-xl font-semibold md:rounded-3xl cursor-pointer p-2 px-4 sm:px-6 border-2 text-siteBg hover:bg-siteBg hover:text-white flex flex-row items-center justify-center gap-3 my-6 sm:my-10 mb-[8rem] sm:mb-[10rem] md:mb-[13rem] text-[15px] sm:text-base" onClick={sendMail}>
        <BsFillChatSquareTextFill /> Start a Conversation
      </div>
    </div>
  );
}
