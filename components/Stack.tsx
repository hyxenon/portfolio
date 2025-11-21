import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAngular, FaGitAlt, FaLaravel, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiJavascript, SiMongodb, SiMysql, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { FaPython, FaVuejs } from "react-icons/fa";
import { SiNuxtdotjs } from "react-icons/si";

const stackItems = [
  { id: 5, name: "Next.js", icon: TbBrandNextjs, color: "#000000" },
  { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 6, name: "Angular", icon: FaAngular, color: "#dc2626" },
  { id: 12, name: "Vue", icon: FaVuejs, color: "#42b883" },
  { id: 10, name: "Laravel", icon: FaLaravel, color: "#dc2626" },
  { id: 13, name: "Nuxt", icon: SiNuxtdotjs, color: "#00dc82" },
  { id: 2, name: "Node.js", icon: IoLogoNodejs, color: "#339933" },
  { id: 3, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { id: 7, name: "JavaScript", icon: SiJavascript, color: "#facc15" },
  { id: 14, name: "Python", icon: FaPython, color: "#3776AB" },
  { id: 4, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { id: 8, name: "MySQL", icon: SiMysql, color: "#3b82f6" },
  { id: 9, name: "PostgreSQL", icon: BiLogoPostgresql, color: "#075985" },
  { id: 11, name: "Git", icon: FaGitAlt, color: "#ea580c" },
];

const Stack = () => {
  return (
    <section className="py-16 glass" id="stack">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl text-gray-200 font-bold mb-4">My Tech Stack</h2>
        
        {/* UPDATED GRID: grid-cols-2 for mobile, scaling up for larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {stackItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center flex-col rounded-xl p-4"
            >
              <div className="mb-4 bg-white/10 p-6 rounded-xl">
                {React.createElement(item.icon, {
                  // UPDATED SIZING: w-16 h-16 (64px) on mobile, w-32 h-32 (128px) on md screens and up
                  className: "w-16 h-16 md:w-32 md:h-32 transform transition-transform duration-300 hover:scale-110",
                  style: { color: item.color },
                })}
              </div>
              <p className="text-gray-400 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;