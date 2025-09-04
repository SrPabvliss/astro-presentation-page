import type { LearningProject } from "@/types/project-detail.interface";
import { CLOUDINARY_IMAGES } from "@/constants/cloudinary";

export const WORKOUT_PLANNER: LearningProject[] = [
  {
    id: "workout-planner",
    title: "WorkoutPlanner Frontend",
    description:
      "Vue.js web application that serves as the user interface for a comprehensive fitness management system tailored for personal trainers and their clients.",
    technologies: ["Vue.js", "JavaScript", "CSS"],
    technicalStack: {
      frontend: [
        {
          name: "Vue.js",
          description: "Progressive JavaScript framework for building user interfaces.",
        },
        {
          name: "JavaScript",
          description: "Programming language for client-side logic and interactions.",
        },
        {
          name: "CSS",
          description: "Stylesheet language for visual presentation and layout.",
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
    imageAlt: "WorkoutPlanner frontend interface screenshot",
    tags: ["frontend", "fitness", "vue", "trainer", "health"],
    visualContent: {
      mainImage: CLOUDINARY_IMAGES.WORKOUT_PLANNER,
      screenshots: [
       "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325154/01_se1adh.png",
       "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325155/02_axmheg.png",
       "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325155/03_ranumr.png",
       "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325157/04_g5kpta.png",
       "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325157/05_b69wd8.png",
       "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325158/06_u1jrpg.png",
       "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325159/07_dih5wd.png",
       "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325160/08_bdfj53.png",
       "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325162/09_jimkrg.png",
       "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325162/10_roias5.png",
       "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325163/11_rw8cuk.png",
       "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325163/12_kcuyig.png",
       "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325164/13_ugqzkv.png",
       "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325165/14_jsdvgu.png",
       "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325165/15_r9bm0k.png",
       "https://res.cloudinary.com/dge98w5ln/image/upload/v1753325166/16_sgmion.png"
      ],
    },
    overview: {
      context:
        "This project was built to complement the Personal Trainer App Backend, offering a responsive and interactive interface for managing fitness routines, client profiles, and workout sessions.",
      objective:
        "To create a practical and professional Vue.js frontend that integrates with a backend API, facilitating the daily workflow of personal trainers and improving the user experience for their clients.",
      highlights: [
        "Seamless integration with the backend API to fetch and manage fitness data.",
        "User-focused design optimized for personal trainers and client accessibility.",
        "Modular Vue.js components enabling maintainability and scalability.",
        "Clean and responsive UI for desktop and mobile devices.",
      ],
    },
  },
];