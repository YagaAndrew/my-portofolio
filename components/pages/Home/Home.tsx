"use client";
import React, { useEffect } from "react";
import Hero from "./hero/Index";
import About from "./about";
import Contact from "./contact/Index";
import Skills from "./skills/Index";
import Project from "./project/Index";
import Education from "./education/Index";
import ClientReview from "./clientreview/Index";
import Footer from "./footer/index";

import AOS, { init } from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Education />
      <ClientReview />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
