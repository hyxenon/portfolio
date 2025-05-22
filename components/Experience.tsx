"use client";
import { motion } from "framer-motion";
import { FaBuilding } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  location: string;
  skills: string;
  responsibilities: string[];
  index: number;
}

const ExperienceItem = ({
  title,
  company,
  date,
  location,
  skills,
  responsibilities,
  index,
}: ExperienceItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative mb-12 md:mb-8 md:grid md:grid-cols-8 md:gap-6"
    >
      {/* Timeline dot and line */}
      <div className="hidden md:col-span-1 md:flex md:justify-center">
        <div className="relative flex h-full w-full flex-col items-center">
          <div className="h-full w-px bg-gray-500/20"></div>
          <div className="absolute top-5 h-4 w-4 rounded-full bg-gradient-to-br from-white to-gray-400"></div>
        </div>
      </div>

      {/* Experience content */}
      <div
        className={`md:col-span-7 ${
          isEven ? "md:col-start-2" : "md:col-start-2"
        }`}
      >
        <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10">
          <div className="mb-1 flex items-center gap-2">
            <FaBuilding className="text-gray-400" />
            <h3 className="font-bold text-xl text-white">{company}</h3>
          </div>

          <h4 className="mb-2 text-lg font-medium text-white/90">{title}</h4>

          <div className="mb-1 flex flex-wrap items-center gap-x-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <BsCalendarDateFill className="h-4 w-4" />
              <span>{date}</span>
            </div>

            <div className="flex items-center gap-1">
              <IoLocationSharp className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>

          <div className="mb-4">
            <span className="text-sm text-gray-400">
              <span className="font-medium text-gray-300">Skills: </span>
              {skills}
            </span>
          </div>

          <ul className="space-y-2">
            {responsibilities.map((responsibility, i) => (
              <li key={i} className="flex gap-2 text-gray-300">
                <span className="text-gray-400">•</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Information Technology Intern",
      company: "Philippine Rice Research Institute (PhilRice)",
      date: "Feb. 2025 - May. 2025",
      location: "Muñoz, Nueva Ecija (Onsite)",
      skills: "Next.js, React, MongoDB, Laravel, MySQL",
      responsibilities: [
        "Developed a weather data visualization application that streamlines access to PAGASA&apos;s forecast data across 1,619 municipalities",
        "Optimized data handling of over 16,000 daily weather records (temperature, humidity, wind, rainfall) using MongoDB",
        "Built an interactive Philippines map with Leaflet.js to visualize municipality-level weather information",
        "Implemented comprehensive historical data analysis tools with custom date range queries and export functionality",
        "Developed an admin page with configurable rule-based recommendation system for 10-day forecast data",
        "Automated data retrieval with cron jobs to synchronize with PAGASA&apos;s bi-weekly forecast updates",
      ],
      year: 2025,
    },
    {
      title: "Freelance Web Developer",
      company: "Freelance",
      date: "Jan. 2024 - Feb. 2025",
      location: "Remote",
      skills: "Next.js, React, MongoDB, Laravel, MySQL",
      responsibilities: [
        "Developed a research repository web application for an educational institution using Next.js",
        "Implemented authentication systems and integrated PayMongo payment processing for client applications",
        "Created custom data visualization components and AI-powered analytics dashboards",
        "Translated client wireframes into fully responsive web solutions with cross-browser compatibility",
      ],
      year: 2024,
    },
  ];

  // Group experiences by year
  const experiencesByYear = experiences.reduce((groups, experience) => {
    const year = experience.year;
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(experience);
    return groups;
  }, {} as Record<number, typeof experiences>);

  // Get years in descending order
  const years = Object.keys(experiencesByYear)
    .map(Number)
    .sort((a, b) => b - a);
  return (
    <motion.section className="relative py-24 px-4 bg-black text-gray-200">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm mb-4">
              My Journey
            </h2>
            <h3 className="max-w-2xl mx-auto text-4xl font-black bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
              Professional Experience
            </h3>
            <p className="mt-4 max-w-xl mx-auto text-gray-400">
              {" "}
              A chronological overview of my professional journey and the
              impactful projects I&apos;ve worked on.
            </p>
          </motion.div>
        </div>

        {years.map((year) => (
          <div key={year} className="mb-12">
            <motion.h3
              className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {year}
            </motion.h3>
            <div className="relative">
              {/* Timeline line for larger screens */}
              <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gray-500/20 md:block"></div>

              {/* Experience items */}
              <div className="space-y-8">
                {experiencesByYear[year].map((experience, index) => (
                  <ExperienceItem
                    key={index}
                    index={index}
                    title={experience.title}
                    company={experience.company}
                    date={experience.date}
                    location={experience.location}
                    skills={experience.skills}
                    responsibilities={experience.responsibilities}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
