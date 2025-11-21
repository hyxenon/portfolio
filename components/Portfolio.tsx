"use client";
import pic1 from "@/assets/1.png";
import pic2 from "@/assets/2.png";
import pic3 from "@/assets/3.png";
import pic4 from "@/assets/4.png";
import pic5 from "@/assets/5.png";
import pic6 from "@/assets/6.png";
import comments from "@/assets/comments.png";
import GradingSystemManagement from "@/assets/Grading System Management.png";
import login from "@/assets/login.png";
import paperdetails from "@/assets/paper details.png";
import projectESIP from "@/assets/PROJECT E-SIP Dashboard.png";
import projectESIPSearch from "@/assets/Project ESIP search.png";
import school from "@/assets/schoolmanagement.png";
import search2 from "@/assets/search2.png";
import SurveyApp from "@/assets/Survey App.png";
import survey1 from "@/assets/survey1.png";
import survey2 from "@/assets/survey2.png";
import survey3 from "@/assets/survey3.png";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog"; // UPDATED IMPORT
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { X } from "lucide-react"; // Import X icon for closing
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

// Define interface for mixed media (images and videos)
interface ProjectSlide {
  type: "image" | "video";
  src: StaticImageData | string;
}

interface Project {
  id: number;
  year: number;
  title: string;
  description: string;
  slides: ProjectSlide[];
}

const projects: Project[] = [
  {
    id: 1,
    year: 2025,
    title: "PAGASA 10 Day Weather Forecast Web Application",
    description:
      "Developed a web application that scrapes PAGASA's 10-day weather forecast data and stores it in MongoDB. Built with Next.js, it features a WebGIS interface for filtering Philippine municipalities, visualizing humidity, temperature, and rainfall on an interactive map. Includes a 10-day analytics chart, admin-managed agricultural recommendations for farmers, and a historical data viewer allowing users to analyze specific date ranges.",
    slides: [{ type: "video", src: "/weather-forecast.mp4" }],
  },
  {
    id: 2,
    year: 2024,
    title:
      "Project E-SIP: Centralized Research Repository with Collaborative Tools and Analytics",
    description:
      "Developed a centralized research repository for schools with STE program in Nueva Ecija. With Messenger, Live Documents and AI analytics and Pay to View paper if private, Built using Next.js, PostgreSQL, Prisma, NextAuth and TailwindCSS to streamline research data access and enhance collaboration.",
    slides: [
      { type: "video", src: "project-esip.mp4" },
      { type: "image", src: login },
      { type: "image", src: school },
      { type: "image", src: projectESIP },
      { type: "image", src: projectESIPSearch },
      { type: "image", src: search2 },
      { type: "image", src: paperdetails },
      { type: "image", src: comments },
    ],
  },
  {
    id: 3,
    year: 2024,
    title: "School Management System",
    description:
      "Developed a comprehensive educational platform supporting 6 user roles (HR, Registrar, Treasurer, Program Head, Professor, Student) with tailored dashboards and permissions. Implemented enrollment management, academic scheduling, grade calculation system with breakdown by quarter and assessment type. Built integrated financial modules for tuition payment processing, payroll management, and miscellaneous fee tracking. Created facility management features including classroom allocation, building assignment, and faculty/department organization. Built using React, Laravel, Inertia, MySQL, and Git.",
    slides: [
      { type: "image", src: pic1 },
      { type: "image", src: pic2 },
      { type: "image", src: pic6 },
      { type: "image", src: pic3 },
      { type: "image", src: pic4 },
      { type: "image", src: pic5 },
    ],
  },
  {
    id: 4,
    year: 2024,
    title: "Social Media Impact Survey Web Application",
    description:
      "Developed a web application featuring a survey focused on analyzing the impact of social media on academic performance, complete with integrated analytics. The application was built using Next.js, TypeScript, MongoDB, Prisma, and Clerk for authentication.",
    slides: [
      { type: "image", src: SurveyApp },
      { type: "image", src: survey1 },
      { type: "image", src: survey2 },
      { type: "image", src: survey3 },
    ],
  },
  {
    id: 5,
    year: 2023,
    title: "Grading System Management",
    description:
      "Developed an LMS for a high school to manage multiple strands (STEM, HUMSS, ABM, GAS, ICT). The system allows grade editing and assignment/quiz distribution. Built with Angular, Express, MongoDB, and TailwindCSS.",
    slides: [{ type: "image", src: GradingSystemManagement }],
  },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const color = useMotionValue(COLORS_TOP[0]);
  const [api, setApi] = useState<CarouselApi>();
  const [modalApi, setModalApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(selectedProject.slides.length);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoTime, setVideoTime] = useState(0);

  // Refs to access video elements
  const previewVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const modalVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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
  }, [color]);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!modalApi) return;
    // Sync modal carousel to current slide when it opens
    if (isModalOpen) {
      modalApi.scrollTo(current - 1);
    }
  }, [modalApi, isModalOpen, current]);

  useEffect(() => {
    setCount(selectedProject.slides.length);
    setCurrent(1);
    // Reset refs when project changes
    previewVideoRefs.current = [];
    modalVideoRefs.current = [];
  }, [selectedProject]);

  // Function to handle opening modal and syncing video
  const handleOpenModal = () => {
    const currentIndex = current - 1;
    const currentSlide = selectedProject.slides[currentIndex];

    if (currentSlide.type === "video") {
      const previewVideo = previewVideoRefs.current[currentIndex];
      if (previewVideo) {
        setVideoTime(previewVideo.currentTime); // Save current time
        previewVideo.pause(); // Pause background video
      }
    }
    setIsModalOpen(true);
  };

  // Effect to resume video in modal
  useEffect(() => {
    if (isModalOpen && modalVideoRefs.current[current - 1]) {
        const modalVideo = modalVideoRefs.current[current - 1];
        if(modalVideo) {
            modalVideo.currentTime = videoTime;
            modalVideo.play().catch(e => console.log("Autoplay blocked", e));
        }
    }
  }, [isModalOpen, modalApi]); // Run when modal opens

  // Function to handle closing modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Optional: If you want the background video to resume when closing, add logic here
  };

  return (
    <motion.section
      id="portfolio"
      className="py-32 text-white"
      style={{
        backgroundImage,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* Left Side: Text Content */}
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

        {/* Right Side: Carousel */}
        <div className="mx-auto max-w-lg">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {selectedProject.slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-0">
                      {slide.type === "video" ? (
                        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                          <video
                            ref={(el) => {
                                previewVideoRefs.current[index] = el;
                            }}
                            src={slide.src as string}
                            controls
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <Image
                          src={slide.src as StaticImageData}
                          alt={selectedProject.title}
                          className="rounded-xl shadow-lg object-cover w-full h-auto"
                          width={800}
                          height={450}
                        />
                      )}
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
            {/* ALERT DIALOG START */}
            <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <AlertDialogTrigger asChild>
                <motion.button
                  onClick={handleOpenModal} // Replaces default trigger behavior
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
              </AlertDialogTrigger>
              
              {/* Modal Content */}
              <AlertDialogContent className="w-full max-w-7xl p-0 bg-black/90 border-none text-white overflow-hidden">
                <div className="relative w-full h-full p-4">
                  {/* Custom Close Button */}
                  <button 
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full hover:bg-white/20 transition"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>

                  <AlertDialogHeader className="mb-4 px-4 pt-4">
                    <AlertDialogTitle className="text-white text-2xl">
                      {selectedProject.title}
                    </AlertDialogTitle>
                  </AlertDialogHeader>

                  <Carousel setApi={setModalApi} className="w-full">
                    <CarouselContent>
                      {selectedProject.slides.map((slide, index) => (
                        <CarouselItem key={index}>
                          {slide.type === "video" ? (
                            <div className="w-full h-[50vh] md:h-[80vh] flex items-center justify-center">
                              <video
                                ref={(el) => {
                                    modalVideoRefs.current[index] = el;
                                }}
                                src={slide.src as string}
                                controls
                                className="max-h-full max-w-full rounded-lg"
                              />
                            </div>
                          ) : (
                            <div className="flex items-center justify-center w-full h-full">
                              <Image
                                src={slide.src as StaticImageData}
                                alt={selectedProject.title}
                                className="rounded-lg object-contain max-h-[80vh] w-auto"
                                width={1600}
                                height={900}
                              />
                            </div>
                          )}
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-white text-black left-4" />
                    <CarouselNext className="bg-white text-black right-4" />
                  </Carousel>
                </div>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;