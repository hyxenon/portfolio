"use client";
import projectESIP from "@/assets/PROJECT E-SIP Dashboard.png";
import SurveyApp from "@/assets/Survey App.png";
import GradingSystemManagement from "@/assets/Grading System Management.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const projects = [
  {
    id: 1,
    year: 2024,
    title:
      "Project E-SIP: Centralized Research Repository with Collaborative Tools and Analytics",
    description:
      "Developed a centralized research repository for schools with STE program in Nueva Ecija. Built using Next.js, PostgreSQL, Prisma, NextAuth and TailwindCSS to streamline research data access and enhance collaboration. ",
    image: projectESIP,
  },
  {
    id: 2,
    year: 2024,
    title: "Social Media Impact Survey Web Application",
    description:
      "Developed a web application featuring a survey focused on analyzing the impact of social media on academic performance, complete with integrated analytics. The application was built using Next.js, TypeScript, MongoDB, Prisma, and Clerk for authentication. ",
    image: SurveyApp,
  },
  {
    id: 3,
    year: 2023,
    title: "Grading System Management",
    description:
      "Developed an LMS for a high school to manage multiple strands (STEM, HUMSS, ABM, GAS, ICT). The system allows grade editing and assignment/quiz distribution. Built with Angular, Express, MongoDB, and TailwindCSS.",
    image: GradingSystemManagement,
  },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84F", "#DD335C"];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const color = useMotionValue(COLORS_TOP[0]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.section
      id="portfolio"
      className="py-32 text-white"
      style={{
        backgroundImage,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-6xl font-bold mb-10">
            Selected <span className="text-gray-400">Projects</span>
          </h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-8 group"
            >
              <p className="text-gray-400 text-lg mb-2">{project.year}</p>
              <h3
                className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors ${
                  selectedProject.id === project.id ? "text-purple-200" : ""
                } duration-300`}
              >
                {project.title}
              </h3>
              {selectedProject.id === project.id && (
                <div className="border-b-2 border-purple-200 my-4"></div>
              )}

              {selectedProject.id === project.id && (
                <p className="text-gray-400 transition-all duration-500 ease-in-out">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <Image
          src={selectedProject.image.src}
          alt={selectedProject.title}
          className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
          width={800}
          height={450}
        />
      </div>
    </motion.section>
  );
};

export default Portfolio;
