import type { LearningProject } from "@/types/project-detail.interface";
import { CLOUDINARY_IMAGES } from "@/constants/cloudinary";

export const COFFEE_BLOG: LearningProject[] = [
  {
    id: "cafe-blog",
    title: "Coffee Blog Simulation",
    description: "A simulated blog focused on coffee culture",
    technologies: ["HTML", "CSS", "JavaScript"],
    technicalStack: {
      frontend: [
        {
          name: "HTML",
          description: "Structured content and page layout.",
        },
        {
          name: "CSS",
          description: "Styled the aesthetic and responsive design.",
        },
        {
          name: "JavaScript",
          description: "Implemented basic interactive elements (if any).",
        },
      ],
    },
    imageAlt: "Screenshot of the Coffee Blog Simulation",
    links: {
      demo: "https://blog-cafe-pablov.netlify.app/"
    },
    tags: ["frontend", "blog", "educational", "responsive-design"],
    visualContent: {
      mainImage: CLOUDINARY_IMAGES.COFFEE_BLOG_MAIN,
      screenshots: [
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532595/bc1_t1dim5.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532595/bc2_zz1gfc.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532596/bc3_enk39n.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532597/bc4_ykjgfs.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532598/bc5_tgovti.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532599/bc6_siqjo6.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532600/bc7_demnsv.jpg",
      ],
    },
    overview: {
      context: "This project served as an academic exercise to practice frontend development fundamentals, focusing on creating a visually appealing and navigable content platform.",
      objective: "To design and implement a responsive blog layout with clear navigation, engaging content sections, and a functional contact form, demonstrating core HTML, CSS, and JavaScript skills.",
      highlights: [
        "Clean & Responsive Layout: Ensures optimal viewing across various screen sizes.",
        "Intuitive Navigation System: Easy-to-use menus for smooth user experience.",
        "Engaging Content Presentation: Structured articles and course listings for clear information delivery.",
        "Contact Form Integration: Basic form structure for user interaction (without backend functionality).",
        "Focus on UI/UX Principles: Prioritized visual hierarchy and user flow."
      ]
    },
  },
]