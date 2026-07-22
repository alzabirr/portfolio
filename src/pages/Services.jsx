import { getConfigData } from "../data/configReader";
import { FaMobileScreen, FaCode, FaFigma } from "react-icons/fa6";
import CopyEmailButton from "../components/CopyEmailButton";

const serviceIcons = [
  FaMobileScreen,
  FaCode,
  FaFigma
];

export default function Services() {
  const configData = getConfigData();
  const services = configData.services || [];

  return (
    <>
      <div className="px-7 py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          Services
        </h1>
      </div>
      <div className="px-7 pb-4 flex flex-col gap-y-2">
        <h1 className="text-4xl font-semibold tracking-tighter">
          What I Offer
        </h1>
        <p className="text-gray-500 text-lg">
          High-quality development services tailored to your needs.
        </p>
      </div>
      <div className="px-7 pb-7 grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => {
          const Icon = serviceIcons[index % serviceIcons.length];
          return (
            <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col gap-y-3">
              <div className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center shadow-sm">
                <Icon size={20} />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold">Let's work together.</h1>
        <p className="text-md font-normal text-gray-500 text-center px-3">
          Have an idea? Let's build something amazing together.
        </p>
      </div>
      <div className="flex items-center justify-center py-8 gap-x-2">
        <a href={configData.hireMeLink}><button
          type="button"
          className="gap-x-1 before:ease relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
          Hire Me
        </button></a>
        <CopyEmailButton />
      </div>
    </>
  );
}
