"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
    {
    title: "Full Stack Developer",
    company: "Leads Agricultural Products Corporation",
    date: "Jul. 2025 – Dec. 2025",
    location: "Binan, Laguna",
    skills: "Next.js, TypeScript, PostgreSQL, PayMongo, NextAuth, Express, Solana, Rust Anchor",
    responsibilities: [
      "Built a modern landing page using Next.js with optimized performance and modern design",
      "Developed a system using Next.js, TypeScript, and PostgreSQL with PayMongo integration for transaction processing",
      "Implemented blockchain transparency features using Solana and secure authentication with NextAuth",
      "Assisted in blockchain backend project utilizing TypeScript, Express, SQL, Solana, and Rust Anchor",
    ],
    year: 2025,
  },
  {
    title: "Software Developer Intern",
    company: "Philippine Rice Research Institute (PhilRice)",
    date: "Feb. 2025 - May. 2025",
    location: "Muñoz, Nueva Ecija (Onsite)",
    skills: "Next.js, React, MongoDB, Laravel, MySQL",
    responsibilities: [
      "Developed a weather data visualization application that streamlines access to PAGASA's forecast data across 1,619 municipalities",
      "Optimized data handling of over 16,000 daily weather records (temperature, humidity, wind, rainfall) using MongoDB",
      "Built an interactive Philippines map with Leaflet.js to visualize municipality-level weather information",
      "Implemented comprehensive historical data analysis tools with custom date range queries and export functionality",
      "Developed an admin page with configurable rule-based recommendation system for 10-day forecast data",
      "Automated data retrieval with cron jobs to synchronize with PAGASA's bi-weekly forecast updates",
    ],
    year: 2025,
  },
  {
    title: "Freelance Web Developer",
    company: "Freelance",
    date: "Jan. 2024 - Feb. 2025",
    location: "Remote",
    skills: "Next.js, React, MongoDB, Laravel, PostgresSQL, AI Integration",
    responsibilities: [
      "Developed a research repository web application for an educational institution using Next.js",
      "Implemented authentication systems and integrated PayMongo payment processing for client applications",
      "Created custom data visualization components and AI-powered analytics dashboards",
      "Converted client UI/UX designs into fully functional, responsive web applications",
    ],
    year: 2024,
  },
];

const Experience = () => {
  return (
    <section className="py-20 text-white" id="experience">
      <div className="container mx-auto flex flex-col xl:flex-row px-4">
        {/* Left Column: Sticky Title */}
        <div className="xl:w-1/4 pr-8 mb-12 xl:mb-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold sticky top-20 text-gray-200"
          >
            Work <br /> <span className="text-purple-300">Experience</span>
          </motion.h2>
        </div>

        {/* Right Column: Content */}
        <div className="xl:w-3/4 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              // GLASS CARD DESIGN from design.json
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-xl hover:bg-white/10 transition-colors duration-300"
            >
              {/* Header: Date & Company */}
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-purple-200 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right text-gray-400 flex flex-col items-start xl:items-end gap-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Badges */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider font-semibold">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.split(", ").map((skill, i) => (
                    <span
                      key={i}
                      // BADGE DESIGN from design.json
                      className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-gray-200 hover:bg-purple-500/20 hover:text-purple-200 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;