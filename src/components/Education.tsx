import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    year: "2023 – 2024",
    degree: "Master of Science ",
    institution: "Webster University,Saint Louis, MO, USA",
  },
  {
    year: "2017 – 2021",
    degree: "Bachelor of Technology",
    institution: "Miracle Educational Society Group of Institutions, India",
  },
  {
    year: "2015 – 2017",
    degree: "Intermediate",
    institution: "Srinivasa Junior College, India",
  },
  {
    year: "2007 – 2015",
    degree: "High School (SSC)",
    institution: "Saint. Ann`s Girls High School, India",
  },
];

const Education = () => {
  return (
    <section id="education" className="mx-auto px-4 text-white">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        🎓 Education
      </h2>
      <div className="relative border-l-[3px]  max-w-3xl mx-auto space-y-12">
        {educationData.map((edu, idx) => (
          <div key={idx} className="relative pl-10 group">
            {/* Icon */}
            <span className="absolute -left-[22px] top-1 w-11 h-11 rounded-full bg-[#858792] shadow-lg flex items-center justify-center text-white text-xl">
              <FaGraduationCap />
            </span>
            {/* Content */}
            <div className="bg-[#2a2d3c] p-6 rounded-xl shadow-md transition-transform transform group-hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <span className="text-sm  font-mono">{edu.year}</span>
              </div>
              <p className="text-sm text-gray-400 italic mb-2">
                {edu.institution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
