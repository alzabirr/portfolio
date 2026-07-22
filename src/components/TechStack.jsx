import { useState } from "react";
import { getConfigData } from "../data/configReader";
import { FaReact, FaPython, FaFigma, FaGitAlt, FaGithub } from "react-icons/fa6";
import { SiDart, SiNetlify, SiFirebase, SiNextdotjs, SiMysql, SiAdobexd, SiJavascript, SiTypescript } from "react-icons/si";

const iconMap = {
  "dart": SiDart,
  "react": FaReact,
  "python": FaPython,
  "netlify": SiNetlify,
  "firebase": SiFirebase,
  "next js": SiNextdotjs,
  "next.js": SiNextdotjs,
  "mysql": SiMysql,
  "figma": FaFigma,
  "adobe xd": SiAdobexd,
  "git": FaGitAlt,
  "github": FaGithub,
  "javascript": SiJavascript,
  "typescript": SiTypescript
};

const hoverColors = {
  "dart": "hover:text-[#0175C2]",
  "react": "hover:text-[#61DAFB]",
  "python": "hover:text-[#3776AB]",
  "netlify": "hover:text-[#00C7B7]",
  "firebase": "hover:text-[#FFCA28]",
  "next js": "hover:text-[#000000]",
  "next.js": "hover:text-[#000000]",
  "mysql": "hover:text-[#4479A1]",
  "figma": "hover:text-[#F24E1E]",
  "adobe xd": "hover:text-[#FF61F6]",
  "git": "hover:text-[#F05032]",
  "github": "hover:text-[#181717]",
  "javascript": "hover:text-[#F7DF1E]",
  "typescript": "hover:text-[#3178C6]"
};

export default function Card() {
  const configData = getConfigData();
  const projects = configData.projects;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const svgClass = isHovered
    ? "w-6 h-6 text-gray-500 transition delay-150"
    : "w-6 h-6 text-gray-300";

  return (
    <>
      <div className="px-2">
        <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5 ">
          <div className="flex items-center justify-between mb-5">
            <div className="font-medium text-lg flex items-center gap-x-2">
              Tech Stack
            </div>
          </div>
          <div className="flex flex-col">
            {projects.map((project, index) => (
              <div
                key={index}
                className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row border border-gray-200"
              >

                <div className="flex flex-col justify-center">
                  <h1 className="font-medium text-lg">
                    {project["project-name"]}
                  </h1>
                  <p className="text-gray-500 text-md">
                    {project["project-desc"]}
                  </p>
                  {project["tech-stack"] && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project["tech-stack"].map((tech) => {
                        const Icon = iconMap[tech.toLowerCase()];
                        const hoverClass = hoverColors[tech.toLowerCase()] || "hover:text-black";
                        return Icon ? (
                          <div key={tech} className="relative group flex items-center justify-center">
                            <div className={`bg-gray-100 p-1.5 rounded-md text-gray-700 transition-colors duration-200 ${hoverClass}`}>
                              <Icon size={18} />
                            </div>
                            <span className="absolute bottom-full mb-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded shadow-md whitespace-nowrap transition-all duration-200 z-10 pointer-events-none">
                              {tech}
                            </span>
                          </div>
                        ) : (
                          <span key={tech} className="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-600 font-medium">
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
