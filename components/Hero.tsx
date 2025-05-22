"use client";
import {
  motion,
  animate,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

import profilePic from "@/assets/profile picture.jpg";
import { FiArrowRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84F", "#DD335C"];

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className="z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Available for work
        </span>
        <h1 className="text-white/40 text-4xl md:text-6xl font-black">
          Hi, I am
        </h1>
        <h1 className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-4xl md:text-6xl text-center">
          Justine Edward Santos
        </h1>
        <Image
          src={profilePic}
          alt="profile pic"
          width={250}
          className="rounded-full mt-1"
        />
        <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4 mt-1">
          <a href="https://github.com/hyxenon" target="_blank">
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/justine-edward-santos-301036268/"
            target="_blank"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>

        <p className="my-6 max-w-xl md:text-lg text-center">
          Fullstack Developer open to full-time opportunities
        </p>
        <a href="/Justine_Edward_Santos-resume.pdf" target="_blank">
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
          >
            Download CV
            <FiArrowRight className="" />
          </motion.button>
        </a>
      </div>
      <div className="bg-circle-container">
        <div className="bg-circle-background"></div>
        <div className="bg-circle"></div>
      </div>
    </motion.section>
  );
};

export default Hero;
