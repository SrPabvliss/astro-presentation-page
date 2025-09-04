import type { LearningProject } from "@/types/project-detail.interface";
import { CLOUDINARY_IMAGES } from "@/constants/cloudinary";

export const SALESFORCE: LearningProject[] = [
  {
    id: "salesforce",
    title: "Sales Force",
    description:
      "A full-stack business and sales management platform developed with a strong focus on clean code architecture.",
    technologies: ["Next.js", "React", "NestJS", "TypeScript", "PostgreSQL"],
    technicalStack: {
      frontend: [
        {
          name: "Next.js",
          description: "React-based framework for building performant web apps with routing and SSR.",
        },
        {
          name: "React",
          description: "JavaScript library for building user interfaces based on components.",
        },
        {
          name: "TypeScript",
          description: "A statically typed language that enhances code quality and readability.",
        },
        {
          name: "Tailwind CSS",
          description: "CSS utility framework used for building modern and responsive layouts.",
        },
      ],
      backend: [
        {
          name: "NestJS",
          description: "Node.js framework focused on scalability and clean architectural patterns.",
        },
        {
          name: "TypeScript",
          description: "Used throughout the backend for consistent typing and maintainability.",
        },
        {
          name: "PostgreSQL",
          description: "Relational database for managing structured business and sales data.",
        },
      ],
    },
    imageAlt: "Sales Force web application showing management dashboards",
    tags: ["fullstack", "business", "clean-code", "educational"],
    visualContent: {
      mainImage: CLOUDINARY_IMAGES.SALESFORCE,
      screenshots: [
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325140/01_mfnbw4.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325141/02_nwsqly.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325141/03_y8vpmj.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325142/04_s6hcdm.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325143/05_m4vlj0.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325144/06_cz7ldf.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325144/07_v4aua5.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325145/08_jz3de6.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325146/09_gvbuz6.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325146/10_xazkg3.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325147/11_zwgi2x.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325148/12_x3vrio.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325148/13_pgl9es.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325149/14_h194fy.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325150/15_wspwiq.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325151/16_rwwial.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325151/17_zmyej5.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325152/18_inno5n.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325153/19_wcivvp.png"
      ],
    },
 overview: {
      context:
        "Created as a full-stack project for managing sales operations and business data in an organized, scalable, and maintainable way.",
      objective:
        "To apply clean code principles and layered architecture in a real-world application that covers the full cycle of business and sales management.",
      highlights: [
        "Role-based dashboards to manage clients, employees, quotas, and reports.",
        "Use of NestJS with clean architecture practices and service layers.",
        "Component-based UI with Tailwind and React for maintainability.",
        "Strict typing and modular design using TypeScript across frontend and backend.",
      ],
    },
  },
];