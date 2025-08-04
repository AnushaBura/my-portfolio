import { useState, useRef } from "react";
import { FiMoreVertical, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../../assets/anusha.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigateTo = useNavigate();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const pageNames = [
    { name: "Home" },
    { name: "Skills" },
    { name: "Projects" },
    { name: "Education" },
    { name: "Contact" },
  ];

  const handleNavigate = (pageName: string) => {
    navigateTo(`/${pageName.toLowerCase()}`);
  };

  return (
    <nav className="w-full flex justify-between items-center px-6 sm:px-8 py-6 bg-[#232533] text-[#858792] sticky top-0 z-50">
      {/* Desktop nav links */}
      <ul className="hidden md:flex gap-24 text-lg font-medium">
        {pageNames.map((page) => (
          <li key={page.name}>
            <button
              className="hover:text-white transition"
              onClick={() => handleNavigate(page.name)}
            >
              {page.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="flex w-full md:w-auto justify-end md:justify-normal items-center gap-4">
        {/* Profile picture desktop only */}
        {/* <div className="hidden md:flex px-6 py-2 rounded-full font-semibold items-center gap-2 transition">
          <img
            src={profileImg}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div> */}

        {/* Hamburger menu button mobile only */}
        <button
          ref={buttonRef}
          onClick={() => setShowMobileMenu((prev) => !prev)}
          className="md:hidden text-2xl"
          aria-label="Toggle Menu"
        >
          <FiMoreVertical />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-full h-full bg-[#2e2f3d] text-sm rounded-lg p-4 shadow-lg md:hidden z-50 transform transition-all duration-500
          ${
            showMobileMenu
              ? "ease-out translate-x-0 opacity-100 pointer-events-auto"
              : "ease-in translate-x-full opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Close button */}
        <div className="flex justify-end m-3">
          <button
            onClick={() => setShowMobileMenu(false)}
            aria-label="Close Menu"
            className=" text-3xl text-[#858792] hover:text-pink-400"
          >
            <FiX />
          </button>
        </div>

        {/* Mobile menu items */}
        <div className="flex flex-col gap-10 items-start ml-20">
          {pageNames.map((page) => (
            <button
              key={page.name}
              onClick={() => {
                handleNavigate(page.name);
                setShowMobileMenu(false);
              }}
              className="text-3xl transition-colors hover:text-pink-400"
            >
              {page.name}
            </button>
          ))}
        </div>

        <div className="flex gap-20 mt-20 justify-center">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 text-white transition"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/anusha-bura-abbaab245/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-600 text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
