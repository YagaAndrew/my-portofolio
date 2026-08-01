import React from "react";
import Hero from "./Hero/Hero";
import About from "./About";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
