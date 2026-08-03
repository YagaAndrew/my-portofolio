import React from "react";
import Hero from "./Hero/Hero";
import About from "./About";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Index";
import Project from "./Project/Index";
import Education from "./Education/Index";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Education />
    </div>
  );
};

export default Home;
