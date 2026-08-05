import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import React from "react";
import { FaGithub } from "react-icons/fa6";

type Props = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
};

const ProjectCard = ({
  description,
  image,
  techStack,
  title,
  demoUrl,
  githubUrl,
}: Props) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Main Content */}
      <div className="p-6">
        <h3 className="text-xl text-black dark:text-white font-semibold mb-2 group-hover:text-green-500 transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => {
            return (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-green-600 text-white font-medium"
              >
                {tech}
              </span>
            );
          })}
        </div>
        {/* Button Links */}
        <div className="flex gap-3 items-center">
          {demoUrl && (
            <Button size={"sm"} className="flex-1">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2 inline-flex items-center" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size={"sm"} className="flex-1">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-4 h-4 mr-2 inline-flex items-center" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
