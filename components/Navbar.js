import logo from "../public/logo.png";

export default function Navbar() {
  return (
    <div className="box navbar flex flex-row mt-6 justify-between items-center">
      <img src={logo.src} alt="logo image" className="w-[10rem] cursor-pointer" />
      <div className="nav-links flex flex-row items-center gap-5 text-lg text-textBlack font-medium">
        <p className="cursor-pointer">About Me</p>
        <p className="cursor-pointer">Projects</p>
        <p className="border-siteBg rounded-3xl cursor-pointer p-1 px-4 border-2 text-siteBg hover:bg-siteBg hover:text-white">Say Hello</p>
      </div>
    </div>
  );
}
