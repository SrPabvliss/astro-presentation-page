import type { LearningProject } from "@/types/project-detail.interface";
import { CLOUDINARY_IMAGES } from "@/constants/cloudinary";

export const CAR_RENTAL: LearningProject[] = [
  {
    id: "car-rental",
    title: "Car Rental Management System",
    description:
      "Car Rental is a full-stack vehicle rental management system",
    technologies: ["Vue 3", "Java", "Spring Boot", "PostgreSQL", "Docker"],
    technicalStack: {
      frontend: [
        {
          name: "Vue 3",
          description:
            "Progressive JavaScript framework for building reactive user interfaces.",
        },
        {
          name: "Vite",
          description:
            "Frontend build tool that provides fast development and optimized builds.",
        },
        {
          name: "JavaScript",
          description:
            "Used for client-side logic and interactivity within the application.",
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework for building custom designs efficiently.",
        },
      ],
      backend: [
        {
          name: "Java",
          description:
            "Primary programming language for backend services and application logic.",
        },
        {
          name: "Spring Boot",
          description:
            "Framework for building scalable and production-ready REST APIs.",
        },
        {
          name: "PostgreSQL",
          description:
            "Relational database for managing vehicle, user, and transaction data.",
        },
        {
          name: "Docker",
          description:
            "Containerization tool used to manage and deploy the development environment.",
        },
      ],
    },
    imageAlt: "Car Rental Management System interface screenshots",
    tags: ["fullstack", "car rental", "vue", "spring boot", "dashboard"],
    visualContent: {
      mainImage: CLOUDINARY_IMAGES.CAR_RENTAL,
      screenshots: [
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762338/01_l68lfj.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762343/02_eekmzc.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762355/03_w9ydc5.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762369/04_z7wzxj.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762370/05_lwf6lt.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762371/06_hibnwh.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762372/07_aq9a31.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762373/08_uhpo2t.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762376/09_jodgdd.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762375/10_hyzs4m.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762377/11_hcn3cg.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762376/12_londx2.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762405/13_ss2pnm.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762406/14_vnee1a.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762407/15_g3slrt.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762408/16_dco3sl.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762409/17_ngcplk.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1753762410/18_whibft.png",
      ],
    },
  overview: {
      context:
        "Developed as a complete solution to manage vehicle rental operations, this project showcases full-stack capabilities by integrating a Vue.js frontend with a Spring Boot backend API, offering practical features for customers and administrators.",
      objective:
        "To build a functional and scalable platform that enables users to browse vehicles, make reservations, and manage car rental workflows through an intuitive web interface and reliable backend infrastructure.",
      highlights: [
        "Role-based authentication for customers, agents, and admins.",
        "Fleet management, booking workflows, and payment handling.",
        "Modern frontend architecture using Vue 3 and Vite.",
        "REST API with Spring Boot, PostgreSQL, and Dockerized development setup.",
        "Automated testing using Cypress and Vitest.",
      ],
    },
  },
];