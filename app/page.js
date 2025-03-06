"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import jsPDF from "jspdf";

const portfolioData = {
  name: "Sagar Patil",
  title: "Software Engineer | React & Next.js Developer",
  email: "sagarpatil23399@gmail.com",
  phone: "+91-9822913404",
  github: "https://github.com/sagar-sp",
  linkedin: "https://linkedin.com/in/sagar-patil-89326b1b3",
  medium: "https://medium.com/@sagarpatil",
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Redux",
    "Material UI",
    "Chakra UI",
    "Ant Design",
    "Tailwind CSS",
    "Node.js",
    "MySQL",
    "GA4",
    "MixPanel",
    "Mapbox",
    "Stripe",
    "Three.js",
  ],
  experience: [
    {
      company: "Apptware Solutions LLP, Pune",
      role: "Software Engineer",
      duration: "March 2022 – Present",
      description: [
        "Developed and deployed scalable web applications using React.js and Next.js.",
        "Reduced page load time by 30% through performance optimizations.",
        "Implemented third-party integrations like GA4, MixPanel, Mapbox, Stripe, and Three.js for enhanced functionality.",
        "Collaborated with cross-functional teams in an Agile environment.",
      ],
    },
  ],
  projects: [
    {
      name: "i2i Therapy",
      description:
        "Built a HIPAA-compliant platform supporting 5,000+ therapy sessions monthly.",
      tools: ["React.js", "Material UI", "Webrtc"],
    },
    {
      name: "Mfund Plus",
      description:
        "Contributed to a wealth management platform handling $10M+ in client investments.",
      tools: ["React.js", "Redux", "Ant Design"],
    },
    {
      name: "Roomie",
      description:
        "Developed an e-commerce platform for universities to personalize virtual rooms.",
      tools: [
        "Next.js",
        "React.js",
        "Material UI",
        "Chakra UI",
        "Stripe",
        "Three.js",
        "GA4",
        "MixPanel",
        "Mapbox",
      ],
    },
  ],
  education: [
    "M.Sc. (Computer Science) - Dr. D. Y. Patil ACS College Pimpri, Pune",
    "B.Sc. (Computer Science) - Dr. D. Y. Patil ACS College Pimpri, Pune",
  ],
  achievements: [
    "Published technical articles on Medium about React and Next.js.",
    "Mentored junior developers in React best practices.",
    "Achieved high client satisfaction scores in project evaluations.",
    "Successfully integrated third-party tools like GA4, MixPanel, Mapbox, Stripe, and Three.js into large-scale applications.",
  ],
};

const Portfolio = () => {

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-white">{portfolioData.name}</h1>
        <p className="text-lg text-gray-300">{portfolioData.title}</p>
        <div className="mt-4 flex space-x-6 text-gray-400">
          <a href={portfolioData.github} target="_blank">
            <FaGithub size={30} />
          </a>
          <a href={portfolioData.linkedin} target="_blank">
            <FaLinkedin size={30} />
          </a>
          <a href={portfolioData.medium} target="_blank">
            <FaMedium size={30} />
          </a>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-white">Skills</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {portfolioData.skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-white">Experience</h2>
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="mt-4 p-4 bg-gray-700 rounded-lg">
              <h3 className="text-lg font-bold text-white">{exp.company}</h3>
              <p className="text-sm text-gray-300">
                {exp.role} ({exp.duration})
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-white">Projects</h2>
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="mt-4 p-4 bg-gray-700 rounded-lg">
              <h3 className="text-lg font-bold text-white">{project.name}</h3>
              <p className="text-gray-300">{project.description}</p>
              <p className="text-sm text-gray-400">
                Tools: {project.tools.join(", ")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-white">Education</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-300">
            {portfolioData.education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-white">Achievements</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-300">
            {portfolioData.achievements.map((ach, index) => (
              <li key={index}>{ach}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
