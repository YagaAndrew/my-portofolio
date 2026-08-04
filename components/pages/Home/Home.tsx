import React from "react";
import Hero from "./hero/Hero";
import About from "./about";
import Contact from "./contact/Contact";
import Skills from "./skills/Index";
import Project from "./project/Index";
import Education from "./education/Index";
import ClientReview from "./clientreview/Index";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Education />
      <ClientReview />
      <Contact />
    </div>
  );
};

export default Home;
