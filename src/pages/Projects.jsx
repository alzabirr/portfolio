import { getConfigData } from "../data/configReader";
import { FaReact, FaPython, FaFigma, FaGitAlt, FaGithub, FaGooglePlay } from "react-icons/fa6";
import { SiDart, SiNetlify, SiFirebase, SiNextdotjs, SiMysql, SiAdobexd, SiJavascript, SiTypescript } from "react-icons/si";

// Import project images
import snapiImg from "../assets/projects/snapi_.png";
import nappyImg from "../assets/projects/nappy.png";
import mediImg from "../assets/projects/Medi reminder.png";
import upgradeImg from "../assets/projects/upgrade.png";

const projectImages = {
  "snapi_.png": snapiImg,
  "nappy.png": nappyImg,
  "Medi reminder.png": mediImg,
  "upgrade.png": upgradeImg
};

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

export default function Projects() {
  const configData = getConfigData();
  return (
    <>
      <div className="px-7 py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          Projects
        </h1>
      </div>
      <div className="px-7 pb-4 flex flex-col gap-y-4">
        <h1 className="text-4xl font-semibold tracking-tighter">
          My Projects
        </h1>
      </div>
      <div className="px-7 pb-7 flex flex-col gap-y-6">
        {configData.projects.map((project, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-5 items-start">
            {project["project-image-url"] && (
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200 shadow-sm flex items-center justify-center p-1">
                <img 
                  src={projectImages[project["project-image-url"]] || project["project-image-url"]} 
                  alt={project["project-name"]} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
            <div className="flex flex-col gap-y-3 flex-grow">
              <h2 className="text-2xl font-semibold text-gray-800">{project["project-name"]}</h2>
              <p className="text-gray-600 text-md leading-relaxed">{project["project-desc"]}</p>
              {project["tech-stack"] && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {project["tech-stack"].map((tech) => {
                    const Icon = iconMap[tech.toLowerCase()];
                    const hoverClass = hoverColors[tech.toLowerCase()] || "hover:text-black";
                    return Icon ? (
                      <div key={tech} className="relative group flex items-center justify-center">
                        <div className={`bg-white p-2 rounded-lg text-gray-700 shadow-sm border border-gray-100 transition-colors duration-200 ${hoverClass}`}>
                          <Icon size={20} />
                        </div>
                        <span className="absolute bottom-full mb-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded shadow-md whitespace-nowrap transition-all duration-200 z-10 pointer-events-none">
                          {tech}
                        </span>
                      </div>
                    ) : (
                      <span key={tech} className="bg-white px-2.5 py-1 rounded-lg text-xs text-gray-600 font-medium border border-gray-100 shadow-sm">
                        {tech}
                      </span>
                    );
                  })}
                </div>
              )}
              {project["download-link"] && (
                <a
                  href={project["download-link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-x-2 bg-[#050708] hover:bg-black text-white font-medium rounded-lg text-xs px-3.5 py-2 mt-2 transition-all w-fit shadow-md"
                >
                  <FaGooglePlay size={14} />
                  Download App
                </a>
              )}
              {project["project-link"] && (
                <a
                  href={project["project-link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-x-2 bg-[#050708] hover:bg-black text-white font-medium rounded-lg text-xs px-3.5 py-2 mt-2 transition-all w-fit shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  View Package
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}