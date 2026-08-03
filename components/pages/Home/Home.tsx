import React from "react";
import Hero from "./Hero/Hero";
import About from "./About";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Index";
import Project from "./Project/Index";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Project />
    </div>
  );
};

export default Home;
