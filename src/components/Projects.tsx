import React from "react";

const projectData = [
  {
    title: "Healthcare Analytics Platform",
    company: "Baylor Scott & White",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
    ],
    description:
      "Led the UI modernization of a large-scale healthcare patient portal, creating reusable React components and implementing a WCAG 2.1 AA-compliant design system with Tailwind CSS. Integrated multiple REST APIs for real-time lab result views and appointment scheduling. Developed secure RBAC logic using Redux Toolkit and ensured HIPAA compliance. Boosted release reliability with >90% unit test coverage and CI/CD pipelines via Azure.",
  },
  {
    title: "Banking Platform",
    company: "Capgemini",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
    ],
    description:
      "Contributed to the development of a secure and scalable user permissions management module for ABN AMRO’s internal banking platform. Implemented role-based access control (RBAC) using Redux to manage complex permission hierarchies and ensure secure user actions based on roles and entitlements. Built dynamic forms and modals using Material UI for admin workflows. Worked closely with backend and security teams to enforce compliance and perform rigorous testing with Jest to maintain high reliability across user flows.",
  },
  {
    title: "Healthcare",
    company: "Capgemini",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
    ],
    description:
      "Developed a web-based clinical dashboard integrated with a healthcare device used by doctors to view real-time patient vitals, medical history, and diagnostic reports. Created a custom UI component library that adhered to WCAG 2.1 AA accessibility standards, ensuring usability in clinical settings with varied lighting and accessibility needs. Designed responsive, cross-browser layouts optimized for both desktop monitors and medical tablets. Worked closely with backend teams to fetch and render secure patient data in compliance with HIPAA regulations. Focused on maintaining UI consistency and data clarity, enabling physicians to make quick, informed decisions at the point of care. Ensured application stability and test reliability through robust unit testing with Jest.",
  },
  {
    title: "Web-based Online Food Ordering and Delivery Platform",
    company: "Miracle Software Solutions",
    images: [
      "https://angular.io/assets/images/logos/angular/angular.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
    ],
    description:
      "Contributed to the development of MealVillage, a meal delivery platform serving local kitchens and users across multiple U.S. cities. Designed and implemented modular, reusable UI components using AngularJS and modern JavaScript (ES6+). Improved front-end performance and reduced page load times by 15% through code optimization and refactoring. Delivered a fully responsive, mobile-first user interface using Bootstrap and CSS3. Ensured cross-browser compatibility and created a suite of unit and integration tests with Jest, Karma, and Jasmine to maintain stability during Agile sprint cycles.",
  },
];

const Projects = () => {
  return (
    <div className="mx-auto px-4 text-white">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        🚀 Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-1 max-w-6xl mx-auto">
        {projectData.map((proj, index) => (
          <div
            key={index}
            className="bg-[#2a2d3c] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-3 bg-white/50 p-2 rounded mb-4">
                <h3 className="text-xl font-semibold text-black">
                  {proj.title}
                </h3>
                <div className="flex flex-wrap gap-2 md:ml-4">
                  {proj.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt=""
                      className="h-9 w-auto p-1 rounded shadow-sm"
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm italic text-gray-400 mb-4">
                {proj.company}
              </p>
              <p>{proj.description}</p>
              {/* <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                {proj.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
