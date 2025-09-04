import type { ProjectProps } from "@/types/projects.interface";
import { CodeIcon, BookOpen, GraduationCap, Music } from "lucide-react";
import { CLOUDINARY_IMAGES } from "@/constants/cloudinary";

export const LEARNING_PROJECTS_DATA: ProjectProps[] = [
  {
    id: "fopymes",
    title: "Fopymes",
    description:
      "FOPYMES is a full-stack personal finance management application that helps users set and achieve financial goals. It features a unique voice-based chat assistant named Fopy, allowing users to interact using natural language. The platform combines a modern backend architecture with a responsive frontend to deliver an engaging and intelligent user experience.",
    image: CLOUDINARY_IMAGES.FOPYMES,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bun",
      "PostgreSQL",
    ],
    company: {
      name: "Personal Project",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
  },
  {
    id: "car-rental",
    title: "Car Rental",
    description:
      "Car Rental is a full-stack web application built with Vue.js and NestJS. It allows users to search, book, and manage car rental reservations with ease. Designed to streamline the rental experience, the platform offers responsive design, real-time availability, and intuitive booking tools for a smooth user journey.",
    image: CLOUDINARY_IMAGES.CAR_RENTAL,
    technologies: ["Vue 3", "Java", "Spring Boot", "PostgreSQL", "Docker"],
    company: {
      name: "Personal Project",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
  },

  {
    id: "salesforce",
    title: "Salesforce",
    description:
      "Sales Force Frontend is a Next.js and React web application that serves as the user interface for a comprehensive business management and sales system. It enables users to efficiently manage consumers, employees, products, services, tasks, transactions, reports, and more—streamlining business operations and supervision in a centralized platform.",
    image: CLOUDINARY_IMAGES.SALESFORCE,
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    company: {
      name: "Personal Project",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
  },
  {
    id: "workout-planner",
    title: "Workout Planner",
    description:
      "Workout Planner is a responsive web application designed to help users plan, organize, and track their fitness routines. It offers intuitive tools to create custom workout plans, monitor progress, and maintain consistency—supporting a healthier and more structured fitness journey.",
    image: CLOUDINARY_IMAGES.WORKOUT_PLANNER,
    technologies: ["Vue.js", "JavaScript", "CSS", "NestJS"],
    company: {
      name: "Personal Project",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
  },
  {
    id: "restaurant-app",
    title: "Restaurant App",
    description:
      "A full-stack restaurant app with real-time features and multiple role-based dashboards.",
    image: CLOUDINARY_IMAGES.RESTAURANT_APP,
    technologies: ["Next.js", "NestJS", "TypeScript"],
    company: {
      name: "Personal Project",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
  },
  {
    id: "frontend-store",
    title: "Frontend E-commerce",
    description:
      "A simulated e-commerce frontend project, built for educational purposes to practice core web development skills.",
    image: CLOUDINARY_IMAGES.FRONTEND_STORE,
    technologies: ["HTML", "CSS", "JavaScript"],
    company: {
      name: "Personal Project",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
  },
  {
    id: "uta-project",
    title: "UTA Website Redesign",
    description:
      "A university project focused on revamping the Technical University of Ambato's website, utilizing Astro for a modern and fully responsive design.",
    image: CLOUDINARY_IMAGES.UTA_WEB,
    technologies: ["Astro", "TailwindCSS", "JavaScript"],
    company: {
      name: "University Project",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
    },
  },
  {
    id: "cafe-blog",
    title: "Coffee Blog Simulation",
    description:
      "A responsive blog simulation showcasing frontend development skills, featuring articles, courses, and a contact form.",
    image: CLOUDINARY_IMAGES.COFFEE_BLOG,
    technologies: ["HTML", "CSS", "JavaScript"],
    company: {
      name: "Personal Project",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
  },
  {
    id: "rock-edm-festival",
    title: "Rock & EDM Festival",
    description:
      "A simulated music festival website frontend demonstrating modern web development workflows with Sass and Gulp.",
    image: CLOUDINARY_IMAGES.ROCK_EDM_FESTIVAL,
    technologies: ["Sass", "Gulp", "JavaScript"],
    company: {
      name: "Personal Project",
      icon: <Music className="w-6 h-6 text-white" />,
    },
  },
];
