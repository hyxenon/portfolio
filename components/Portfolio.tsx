"use client";
import login from "@/assets/login.png";
import admin from "@/assets/admin.png";
import school from "@/assets/schoolmanagement.png";
import usermanagement from "@/assets/usermanagement.png";
import researchmanagement from "@/assets/usermanagement.png";
import projectESIP from "@/assets/PROJECT E-SIP Dashboard.png";
import projectESIPSearch from "@/assets/Project ESIP search.png";
import search2 from "@/assets/search2.png";
import paperdetails from "@/assets/paper details.png";
import comments from "@/assets/comments.png";
import SurveyApp from "@/assets/Survey App.png";
import survey1 from "@/assets/survey1.png";
import survey2 from "@/assets/survey2.png";
import survey3 from "@/assets/survey3.png";
import GradingSystemManagement from "@/assets/Grading System Management.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    year: 2024,
    title:
      "Project E-SIP: Centralized Research Repository with Collaborative Tools and Analytics",
    description:
      "Developed a centralized research repository for schools with STE program in Nueva Ecija. With Messenger, Live Documents and AI analytics and Pay to View paper if private, Built using Next.js, PostgreSQL, Prisma, NextAuth and TailwindCSS to streamline research data access and enhance collaboration.",
    images: [
      login,
      admin,
      school,
      usermanagement,
      researchmanagement,
      projectESIP,
      projectESIPSearch,
      search2,
      paperdetails,
      comments,
    ],
  },
  {
    id: 2,
    year: 2024,
    title: "Social Media Impact Survey Web Application",
    description:
      "Developed a web application featuring a survey focused on analyzing the impact of social media on academic performance, complete with integrated analytics. The application was built using Next.js, TypeScript, MongoDB, Prisma, and Clerk for authentication.",
    images: [SurveyApp, survey1, survey2, survey3],
  },
  {
    id: 3,
    year: 2023,
    title: "Grading System Management",
    description:
      "Developed an LMS for a high school to manage multiple strands (STEM, HUMSS, ABM, GAS, ICT). The system allows grade editing and assignment/quiz distribution. Built with Angular, Express, MongoDB, and TailwindCSS.",
    images: [GradingSystemManagement],
  },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84F", "#DD335C"];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const color = useMotionValue(COLORS_TOP[0]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(selectedProject.images.length);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    setCount(selectedProject.images.length);
    setCurrent(1);
  }, [selectedProject]);

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

        <div className="mx-auto max-w-lg">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {selectedProject.images.map((image, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-0">
                      <Image
                        src={image.src}
                        alt={selectedProject.title}
                        className="rounded-xl shadow-lg"
                        width={800}
                        height={450}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white text-black hidden md:flex" />
            <CarouselNext className="bg-white text-black hidden md:flex" />
          </Carousel>
          <div className="py-2 text-center text-sm text-white">
            Slide {current} of {count}
            <Dialog>
              <DialogTrigger asChild>
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
                  className="flex w-fit items-center gap-2 rounded-full px-4 py-2 mx-auto mt-4"
                >
                  View in Full Screen
                </motion.button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-7xl p-4">
                <DialogHeader>
                  <DialogTitle className="text-gray-800">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                <Carousel className="w-full">
                  <CarouselContent>
                    {selectedProject.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <Image
                          src={image.src}
                          alt={selectedProject.title}
                          className="rounded-lg"
                          width={1600}
                          height={900}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="bg-white text-black" />
                  <CarouselNext className="bg-white text-black" />
                </Carousel>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
