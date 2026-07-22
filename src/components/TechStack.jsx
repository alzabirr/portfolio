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
  const skills = configData.skills || [];

  return (
    <>
      <div className="px-2 mt-4">
        <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5 ">
          <div className="flex items-center justify-between mb-4">
            <div className="font-medium text-lg flex items-center gap-x-2">
              Tech Stack
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((tech) => {
              const Icon = iconMap[tech.toLowerCase()];
              const hoverClass = hoverColors[tech.toLowerCase()] || "hover:text-black";
              return Icon ? (
                <div key={tech} className="relative group flex items-center justify-center">
                  <div className={`bg-white p-2.5 rounded-lg text-gray-700 shadow-sm border border-gray-200 transition-colors duration-200 cursor-pointer ${hoverClass}`}>
                    <Icon size={20} />
                  </div>
                  <span className="absolute bottom-full mb-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded shadow-md whitespace-nowrap transition-all duration-200 z-10 pointer-events-none">
                    {tech}
                  </span>
                </div>
              ) : (
                <span key={tech} className="bg-white px-2.5 py-1 rounded-lg text-xs text-gray-600 font-medium border border-gray-200 shadow-sm">
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
