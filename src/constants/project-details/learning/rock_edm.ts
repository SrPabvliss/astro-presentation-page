import type { LearningProject } from "@/types/project-detail.interface";
import { CLOUDINARY_IMAGES } from "@/constants/cloudinary";


export const ROCK_EDM_FESTIVAL: LearningProject[] = [
  {
    id: "rock-edm-festival",
    title: "Rock & EDM Festival Frontend",
    description: "A simulated music festival website frontend.",
    technologies: ["Sass", "Gulp", "JavaScript"],
    technicalStack: {
      frontend: [
        {
          name: "Sass",
          description: "Used for efficient and maintainable CSS styling.",
        },
        {
          name: "Gulp",
          description: "Task runner for automating development workflows (e.g., Sass compilation, minification).",
        },
        {
          name: "JavaScript",
          description: "Implemented interactive elements and dynamic content (if any).",
        },
      ],
    },
    imageAlt: "Screenshot of the Rock & EDM Festival website",
    links: {
      demo: "https://pablomusicfestival.netlify.app/"
    },
    tags: ["frontend", "event-website", "UI/UX", "responsive-design", "workflow-automation"],
    visualContent: {
      mainImage: CLOUDINARY_IMAGES.ROCK_EDM_FESTIVAL,
      screenshots: [
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532630/roe1_sbnooh.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532632/roe2_b6sdcn.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532633/roe3_j9arhx.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532635/roe4_tlnkey.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532639/roe5_fwagh4.jpg",
      ],
    },
    overview: {
      context: "This project was a frontend simulation of a music festival website, demonstrating proficiency in build tools and advanced CSS pre-processors.",
      objective: "To create a dynamic and visually engaging event website, focusing on responsive design, modern styling with Sass, and workflow automation using Gulp.",
      highlights: [
        "Responsive & Engaging UI: Designed for optimal viewing across various devices and a vibrant user experience.",
        "Sass Implementation: Utilized Sass for modular, scalable, and efficient CSS development.",
        "Gulp Automation: Integrated Gulp for streamlined development workflows, including asset compilation and optimization.",
        "Event Information Display: Clear presentation of lineup, gallery, and ticket sections.",
        "Frontend Workflow Demonstration: Showcases understanding of modern frontend development tools and practices."
      ]
    },
},
]; 