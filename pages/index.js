import Bio from "../components/Bio";
import Collab from "../components/Collab";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="font-poppins text-center">
      <Navbar/>
      <Hero/>
      <Bio/>
      <Skills/>
      <Projects/>
      <Collab/>
      <Footer/>
    </div>
  );
}
