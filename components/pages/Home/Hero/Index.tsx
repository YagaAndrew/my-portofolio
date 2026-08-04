"use client";
import { Button } from "@/components/ui/button";
import { Download, FolderOpen } from "lucide-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)] flex items-center
    justify-center overflow-hidden dark:bg-[radial-gradient(circle_farthest-corner_at_17.6%_50.7%,rgba(25,0,184,1)_0%,rgba(0,0,0,1)_90%)]"
    >
      {/* content */}
      <div className="relative z-10 text-center">
        {/* sub title */}
        <div data-aos="fade-up" className="sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available for opportunities
          </span>
        </div>
        {/* title */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="text-green-800 dark:text-green-500">
            Andrew Yaga Novianta
          </span>
        </h1>
        {/* Typewrite Effects */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12"
        >
          <TypeAnimation
            sequence={[
              "Junior Software Engineer",
              2000,
              "A Student From TI Global DPS",
              2000,
              "Improving My Skill",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono"
          />
        </div>
        {/* description */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-lg text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10"
        >
          Dedicated software engineering enthusiast focused on mastering
          scalable application development and creating seamless digital
          experiences.
        </p>
        {/* buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="w-fit mx-auto sm:mx-0">
            <a
              href="https://github.com/YagaAndrew"
              className="flex items-center"
            >
              <FolderOpen className="w-5 h-5 mr-2" />
              View Project
            </a>
          </Button>
          <Button size="lg" className="w-fit mx-auto sm:mx-0">
            <a
              href="/CV Andrew Yaga Novianta.pdf"
              download
              className="flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
