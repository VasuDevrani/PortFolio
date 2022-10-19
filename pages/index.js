import { useEffect, useRef, useState } from "react";
import Bio from "../components/Bio";
import Collab from "../components/Collab";
import Footer from "../components/Footer";
import Hackathons from "../components/Hackathons";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  const project = useRef();
  const bio = useRef();

  const handleScroll = (val) => {
    let node = val === "project" ? project.current : bio.current;
    node.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <div className="font-poppins text-center">
      <Navbar handleScroll={handleScroll} />
      <Hero />
      <div ref={bio}>
        <Bio />
      </div>
      <Skills />
      <div ref={project}>
        <Projects />
      </div>
      <Hackathons/>
      <Collab />
      <Footer />
    </div>
  );
}
