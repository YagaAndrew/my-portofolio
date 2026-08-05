import SectionHeading from "@/components/Helper/SectionHeading";
import { educations } from "@/data";
import { Briefcase, GraduationCap } from "lucide-react";
import React from "react";

const EducationSection = () => {
  return (
    <div className="py-30 bg-gray-100 dark:bg-gray-950">
      <SectionHeading
        title1="Experience"
        title2="Education"
        description="Here is my academic background."
      />
      <div className="relative px-6 max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-green-400 to-green-900 md:-translate-px"></div>
        {educations.map((item, index) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-anchor-placement="top-center"
              key={index}
              className={`relarive flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline node */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-white border-2 border-green-500 flex items-center justify-center z-10">
                {item.type === "work" ? (
                  <Briefcase className="w-4 h-4 text-green-500" />
                ) : (
                  <GraduationCap className="w-4 h-4 text-green-500" />
                )}
              </div>
              {/* Content */}
              <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)]">
                <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2 text-sm text-green-500 mb-2">
                    <span className="px-3 py-1 rounded-full bg-green-600/10 font-medium">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {item.company}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => {
                      return (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-md bg-green-500 text-white"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationSection;
