import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  FaCode,
  FaDatabase,
  FaTools,
  FaCss3Alt,
  FaBug,
  FaCogs,
} from "react-icons/fa";

const SkillsSwiper = () => {
  const sections = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-white text-4xl mb-4" />,
      items: [
        "React.js",
        "Angular (6/8)",
        "Vue.js",
        "AngularJS",
        "JavaScript (ES6+)",
      ],
    },
    {
      title: "Backend Development",
      icon: <FaCode className="text-white text-4xl mb-4" />,
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "MVC Architecture",
      ],
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-white text-4xl mb-4" />,
      items: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "SQL / NoSQL",
        "SQL Joins",
        "Data Modeling",
      ],
    },
    {
      title: "UI / Styling Libraries",
      icon: <FaCss3Alt className="text-white text-4xl mb-4" />,
      items: [
        "Tailwind CSS",
        "Material UI",
        "Bootstrap",
        "Chakra UI",
        "Sass",
        "Figma",
      ],
    },
    {
      title: "Testing & QA",
      icon: <FaBug className="text-white text-4xl mb-4" />,
      items: [
        "Jest",
        "Karma",
        "Jasmine",
        "TDD",
        "Unit Testing",
        "Integration Testing",
        "Code Coverage",
      ],
    },
    {
      title: "DevOps & CI/CD",
      icon: <FaCogs className="text-white text-4xl mb-4" />,
      items: [
        "Azure DevOps",
        "Jenkins",
        "Git / GitHub / Bitbucket",
        "Docker (basic)",
      ],
    },
    {
      title: "Agile & Tools",
      icon: <FaTools className="text-white text-4xl mb-4" />,
      items: [
        "Agile / Scrum",
        "Jira",
        "Confluence",
        "VS Code",
        "Postman",
        "JSON",
        "NPM",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        My Skills
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {sections.map((section, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="bg-[#2a2d3c] rounded-xl w-full min-h-[480px] flex flex-col items-center pt-10 text-center shadow-lg">
              <div className="flex flex-col justify-center items-center h-30">
                {section.icon}
                <h3 className="text-xl font-semibold mb-10 text-white">
                  {section.title}
                </h3>
              </div>
              <ul className="text-lg text-[#858792] space-y-5 px-6">
                {section.items.map((item, i) => (
                  <li key={i}>» {item}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillsSwiper;
