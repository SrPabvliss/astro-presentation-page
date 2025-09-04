import type { LearningProject } from "@/types/project-detail.interface";
import { CLOUDINARY_IMAGES } from "@/constants/cloudinary";

export const FRONTEND_STORE: LearningProject[] = [
  {
    id: "frontend-store",
    title: "Frontend E-commerce Store",
    description: "A simulated frontend for an e-commerce platform",
    technologies: ["HTML", "CSS", "JavaScript"],
    technicalStack: {
      frontend: [
        {
          name: "HTML",
          description: "Markup language for structuring web pages.",
        },
        {
          name: "CSS",
          description: "Stylesheet language for styling web pages.",
        },
        {
          name: "JavaScript",
          description: "Programming language for interactive web elements.",
        },
      ],
    },
    imageAlt: "Frontend E-commerce Store screenshot",
    links: {
      demo: "https://tiendapablo.netlify.app/" // Keep your actual demo link here
    },
    tags: ["frontend", "educational", "e-commerce"],
    visualContent: {
      mainImage: CLOUDINARY_IMAGES.FRONTEND_STORE,
      screenshots: [
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750425965/fs1_idlkks.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750425965/fs2_mkncni.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750425965/fs3_j4vnph.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750425974/fs4_jypgul.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750425971/fs5_w0gcxc.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750425967/fs6_qqz2us.jpg",
      ],
    },
    overview: {
      context: "Developed as a practical exercise to implement responsive layouts and dynamic product displays, focusing on foundational frontend technologies.",
      objective: "To apply concepts of modern web design, semantic HTML, modular CSS, and basic JavaScript interactions to build a simulated e-commerce interface.",
      highlights: [
        "Fully responsive design ensuring adaptability across various devices.",
        "Clean, organized, and semantic HTML structure.",
        "Effective use of CSS for visual presentation and animations.",
        "Interactive elements implemented with vanilla JavaScript.",
      ]
    },
  },
]