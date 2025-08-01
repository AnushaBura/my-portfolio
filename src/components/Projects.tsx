import React from 'react';

const projectData = [
  {
    title: 'Healthcare Analytics Platform',
    company: 'Baylor Scott & White',
    image: 'https://images.unsplash.com/photo-1588776814546-bcfb0b064a5e?auto=format&fit=crop&w=800&q=80',
    points: [
      'Built responsive React dashboards and Node.js APIs for real-time insights.',
      'Integrated Apache Flink for real-time patient data processing.',
      'Used Azure cloud and Splunk for deployment and monitoring.',
    ],
  },
  {
    title: 'Enterprise Client Portal',
    company: 'Capgemini',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80',
    points: [
      'Developed secure full-stack modules with React and Python.',
      'Collaborated on API integration and automated CI/CD with Azure DevOps.',
      'Maintained responsive UI with accessibility compliance.',
    ],
  },
  {
    title: 'Client Website Suite',
    company: 'Miracle Software Solutions',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    points: [
      'Delivered portfolio and client websites using HTML, CSS, and JavaScript.',
      'Implemented dynamic UIs with React and Vue.js.',
      'Focused on performance, SEO, and mobile responsiveness.',
    ],
  },
];

const Projects = () => {
  return (
    <div className="mx-auto px-4 text-white">
      <h2 className="text-3xl font-bold text-center text-white mb-12">🚀 Projects</h2>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {projectData.map((proj, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
              <p className="text-sm italic text-gray-400 mb-4">{proj.company}</p>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                {proj.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
