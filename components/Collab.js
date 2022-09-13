import { BsFillChatSquareTextFill } from "react-icons/bs";

export default function Collab() {
  return (
    <div className="flex flex-col justify-center items-center box">
      <p className="text-2xl font-semibold my-2">
        Interested in collaborating with me?
      </p>
      <p className="text-lg font-base my-2">
        I'm always open to discussing product design work or partnership
        opportunities.
      </p>
      <div className="border-siteBg rounded-3xl cursor-pointer p-2 px-6 border-2 text-siteBg hover:bg-siteBg hover:text-white flex flex-row items-center justify-center gap-3 my-10 mb-[20vh]">
        <BsFillChatSquareTextFill /> Start a Conversation
      </div>
    </div>
  );
}
