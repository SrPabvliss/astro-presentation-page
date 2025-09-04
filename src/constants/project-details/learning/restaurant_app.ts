import type { LearningProject } from "@/types/project-detail.interface";
import { CLOUDINARY_IMAGES } from "@/constants/cloudinary";

export const RESTAURANT_APP: LearningProject[] = [
  {
    id: "restaurant-app",
    title: "Restaurant App",
    description:
      "A full-stack restaurant management platform with real-time updates and role-based dashboards for waiters, chefs, cashiers, and admins.",
    technologies: ["Next.js", "NestJS", "TypeScript", "Socket.IO", "PostgreSQL"],
    technicalStack: {
      frontend: [
        {
          name: "Next.js",
          description: "React-based framework with file-based routing and server-side rendering.",
        },
        {
          name: "TypeScript",
          description: "Strongly typed language for scalable and reliable code.",
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework used for responsive UI design.",
        },
        {
          name: "Socket.IO",
          description: "Enables real-time communication between the frontend and backend.",
        },
      ],
      backend: [
        {
          name: "NestJS",
          description: "Node.js framework for building efficient and scalable server-side applications.",
        },
        {
          name: "PostgreSQL",
          description: "Relational database for persistent data storage.",
        },
        {
          name: "WebSockets",
          description: "Used to broadcast order and table status changes in real time.",
        },
      ],
    },
    imageAlt: "Restaurant app interface showing different dashboard views",
    links: {
      demo: "v2-restaurant-app-front.vercel.app",
    },
    tags: ["fullstack", "restaurant", "real-time", "educational"],
    visualContent: {
      mainImage: CLOUDINARY_IMAGES.RESTAURANT_APP,
      screenshots: [
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325167/01_mplcpt.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325168/02_bcu3gb.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325169/03_zww5pu.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325170/04_ff08iq.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325171/05_vt58lz.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325171/06_ucye2n.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325172/07_urf0ni.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325173/08_o8hjdx.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325174/09_xbitg1.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325174/10_bts9oz.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325175/11_jqnevb.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325175/12_ue78dq.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325176/13_lwxmim.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325177/14_jypbwq.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325177/15_zzhwxe.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325178/16_z7yao7.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325179/17_lujczt.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325179/18_wui4bl.png",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325180/19_drwegm.png",
      ],
    },
  overview: {
      context:
        "Built as a full-stack educational project to simulate the operations of a real-world restaurant using modern web technologies.",
      objective:
        "To implement a role-based management system with real-time order tracking and modular architecture using WebSockets, REST APIs, and responsive UI components.",
      highlights: [
        "Real-time updates between waiter, chef, and cashier views via WebSockets.",
        "Role-specific dashboards for efficient task management.",
        "Backend developed with NestJS and PostgreSQL.",
        "Frontend implemented with Next.js and Tailwind CSS.",
      ],
    },
  },
];