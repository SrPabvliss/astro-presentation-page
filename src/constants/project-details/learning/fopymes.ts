import type { LearningProject } from "@/types/project-detail.interface";
import { CLOUDINARY_IMAGES } from "@/constants/cloudinary";

export const FOPYMES: LearningProject[] = [
  {
    id: "fopymes",
    title: "Fopymes",
    description:
      "FOPYMES is a full-stack personal finance management application that helps users set and achieve financial goals.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bun",
      "Hono",
      "PostgreSQL",
    ],
    technicalStack: {
      frontend: [
        {
          name: "Next.js",
          description:
            "React framework for building fast and modern web applications.",
        },
        {
          name: "TypeScript",
          description:
            "Strongly typed JavaScript used throughout the application.",
        },
        {
          name: "Tailwind CSS",
          description:
            "Utility-first CSS framework for building custom designs efficiently.",
        },
      ],
      backend: [
        {
          name: "Bun",
          description:
            "High-performance JavaScript runtime and package manager.",
        },
        {
          name: "Hono",
          description: "Minimalistic and fast web framework for Bun.",
        },
        {
          name: "PostgreSQL",
          description:
            "Reliable relational database used for storing financial and user data.",
        },
        {
          name: "Drizzle ORM",
          description:
            "Type-safe ORM used for managing database schema and queries.",
        },
        {
          name: "Zod",
          description: "TypeScript-first schema validation library.",
        },
        {
          name: "n8n",
          description:
            "Workflow automation platform used to power the voice assistant logic.",
        },
      ],
    },
    imageAlt: "FOPYMES frontend interface screenshot",
    tags: [
      "finance",
      "nextjs",
      "bun",
      "tailwind",
      "chatbot",
      "n8n",
      "personal project",
    ],
    visualContent: {
      mainImage: CLOUDINARY_IMAGES.FOPYMES_ALT,
      screenshots: [
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762251/01_wwmnyk.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762252/02_s4hfym.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762252/03_xdplgv.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762252/04_ky2vwg.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762253/05_pdmw6y.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762255/06_jdibjv.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762256/07_rqsilz.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762259/08_pbnklu.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762260/09_s2w4ez.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762277/10_s1xuji.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762305/11_cdl5ml.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762306/12_oda4rf.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762307/13_jfylxb.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762308/14_kywmgg.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762330/15_pr197z.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762334/16_uwonuk.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762335/17_vcjpbb.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753762336/18_nd9oer.png",
      ],
    },
    overview: {
      context:
        "This project was built to empower users in managing their personal finances effectively with goal-setting, tracking tools, and an AI-powered voice assistant for natural interaction.",
      objective:
        "To create an engaging and intelligent finance platform that integrates modern frontend tools with a scalable backend architecture, and introduces conversational finance management through voice using n8n.",
      highlights: [
        "Voice assistant 'Fopy' built with n8n for natural language interactions.",
        "Hexagonal backend architecture using Hono, Bun, and Drizzle ORM.",
        "Full REST API with OpenAPI documentation.",
        "Next.js and Tailwind frontend for modern and responsive UI.",
        "Real-time financial goal tracking and planning.",
      ],
    },
  },
];
