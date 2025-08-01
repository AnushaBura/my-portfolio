import { FaDownload } from "react-icons/fa";
import profileImg from "../assets/anusha.png";
import profilePDF from "../assets/resume.pdf";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between  px-8 md:px-24 py-16 bg-[#232533] relative">
      {/* Left: Title and Subtitle */}
      <div className="flex-1 flex flex-col justify-center items-start text-left space-y-6 z-10">
        <h2 className="text-4xl text-white leading-tight mb-2">Hello! I'm</h2>
        <h1 className="text-6xl text-white leading-tight mb-2">
          Anusha Bura
          <div className="w-64 h-3 bg-pink-400 rounded-full mt-2" />
        </h1>
        <h3 className="text-xl md:text-2xl text-gray-300 font-medium mb-4">
          Frontend Developer
        </h3>
        <div>
          <a
            href={profilePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 px-8 py-3 rounded-full text-[#858792] flex items-center gap-2"
          >
            <FaDownload />
            Get Resume
          </a>
        </div>
      </div>

      {/* Right: Profile Image */}
      <div className="hidden md:flex flex-1 flex-col items-center md:items-end justify-center relative mt-12 md:mt-0">
        <img
          src={profileImg}
          alt="Anusha Bura"
          className="rounded-2xl object-cover shadow-lg"
          style={{ minHeight: "300px", minWidth: "200px" }}
        />
      </div>
    </div>
  );
};
export default Hero;
