import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    year: '2017 – 2019',
    degree: 'High School (SSC)',
    institution: 'Sai Vidyanikethan High School, India',
    details: 'Graduated with GPA of 8.2. Foundation in Mathematics and Sciences.',
  },
  {
    year: '2019 – 2021',
    degree: 'Intermediate (MPC)',
    institution: 'Sri Surya Junior College, India',
    details: 'Completed Mathematics, Physics & Chemistry with GPA of 6.2.',
  },
  {
    year: '2021 – 2024',
    degree: 'Bachelor of Computer Applications',
    institution: 'Aditya Degree College, India',
    details: 'Graduated with GPA of 8.4. Gained strong programming and database skills.',
  },
  {
    year: '2024 – Present',
    degree: 'Master of Science in IT',
    institution: 'Webster University, USA',
    details: 'Currently pursuing. Focused on full-stack development, cloud, and data engineering.',
  },
];

const Education = () => {
  return (
    <section id="education" className="mx-auto px-4 text-white">
      <h2 className="text-3xl font-bold text-center text-white mb-12">🎓 Education Timeline</h2>

      <div className="relative border-l-[3px] border-purple-500 max-w-3xl mx-auto space-y-12">
        {educationData.map((edu, idx) => (
          <div key={idx} className="relative pl-10 group">
            {/* Icon */}
            <span className="absolute -left-[22px] top-1 w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg flex items-center justify-center text-white text-xl">
              <FaGraduationCap />
            </span>

            {/* Content */}
            <div className="bg-[#1e293b] p-6 rounded-xl shadow-md transition-transform transform group-hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <span className="text-sm text-pink-400 font-mono">{edu.year}</span>
              </div>
              <p className="text-sm text-gray-400 italic mb-2">{edu.institution}</p>
              <p className="text-sm text-gray-300">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
