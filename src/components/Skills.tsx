import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaLayerGroup, FaCode, FaPenNib } from "react-icons/fa"; // Icons for design, development, illustration

const SkillsSwiper = () => {
  const sections = [
    {
      title: "UI/UX Design",
      icon: <FaLayerGroup className="text-white text-4xl mb-4" />,
      items: [
        "Landing Pages",
        "User Flow",
        "Wireframing",
        "Prototyping",
        "Mobile App Design",
      ],
    },
    {
      title: "Development",
      icon: <FaCode className="text-white text-4xl mb-4" />,
      items: ["HTML/CSS", "JavaScript", "React", "Vue", "Angular", "Node.js"],
    },
    {
      title: "Development1",
      icon: <FaCode className="text-white text-4xl mb-4" />,
      items: ["API Integration", "Responsive Design", "Performance Optimization", "Testing"],
    },
    {
      title: "Illustration",
      icon: <FaPenNib className="text-white text-4xl mb-4" />,
      items: [
        "Character Design",
        "Icon Set",
        "Illustration Guide",
        "Illustration Set",
        "Motion Graphic",
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
            <div className="bg-[#2a2d3c] rounded-xl w-full min-h-[500px] flex flex-col items-center pt-10 text-center shadow-lg">
              <div className=" flex flex-col justify-center items-center h-30">
              {section.icon}
              <h3 className="text-xl font-semibold mb-10 text-white">
                {section.title}
              </h3>
              </div>
              <ul className="text-lg text-gray-300 space-y-5">
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
