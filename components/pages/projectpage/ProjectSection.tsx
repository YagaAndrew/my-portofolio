import SectionHeading from "@/components/Helper/SectionHeading";
import { projects } from "@/data";
import React from "react";
import ProjectCard from "../Home/project/ProjectCard";

const ProjectSection = () => {
  return (
    <div className="py-30 bg-gray-100 dark:bg-gray-900">
      <SectionHeading
        title1="My"
        title2="Projects"
        description="Here are some of my recent projects."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
        {projects.map((project, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-anchor-placement="top-center"
              key={index}
            >
              <ProjectCard {...project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
