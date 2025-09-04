import type { LearningProject } from "@/types/project-detail.interface";
import { CLOUDINARY_IMAGES } from "@/constants/cloudinary";

export const UTA_PROJECT: LearningProject[] = [
  {
    id: "uta-project",
    title: "UTA Web Redesign",
    description: "Redesign of the official website for the Technical University of Ambato",
    technologies: ["Astro", "TailwindCSS", "JavaScript"],
    technicalStack: {
      frontend: [
        {
          name: "Astro",
          description: "A modern static site builder ideal for content-focused websites, offering excellent performance and flexibility.",
        },
        {
          name: "TailwindCSS",
          description: "A utility-first CSS framework that enables rapid UI development with highly customizable styles.",
        },
        {
          name: "JavaScript",
          description: "The core programming language used for interactive elements and dynamic functionalities.",
        },
      ],
    },
    imageAlt: "Screenshot of the UTA Web Redesign project",
    links: {
      demo: "https://uta-web-project.vercel.app/" 
    },
    tags: ["frontend", "university-project", "responsive-design", "redesign", "web-performance"],
    visualContent: {
      mainImage: CLOUDINARY_IMAGES.UTA_WEB, 
      screenshots: [
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532646/utap1_ukjmrg.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532648/utap2_trysjh.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532649/utap3_hswufr.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532651/utap4_xn2mc4.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532652/utap5_rz3uco.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532654/utap6_ielhfm.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532655/utap7_uir7yf.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532657/utap8_mygzda.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532658/utap9_hs5h7f.jpg",
        "https://res.cloudinary.com/dge98w5ln/image/upload/v1750532663/utp10_z6ez6d.jpg",
      ],
    },
    overview: {
      context: "This university project was a challenge to modernize the digital presence of the Technical University of Ambato, emphasizing usability, accessibility, and an enhanced user experience.",
      objective: "To create an improved and fully responsive version of the official UTA website, incorporating a more attractive design, smoother animations, and optimized performance.",
      highlights: [
        "Fully Responsive Design: Ensures an optimal viewing experience across all devices, from desktops to mobile phones.",
        "Intuitive and Enhanced Navigation: Streamlined menus and clear pathways improve user flow and content discovery.",
        "Dynamic Animations: Subtle yet engaging animations were implemented to create a more vibrant and modern interface.",
        "Performance Optimization with Astro: Leveraged Astro's architecture for superior loading speeds and a lightweight build.",
        "Modern and Clean Styling with TailwindCSS: Utilized a utility-first approach for consistent, maintainable, and visually appealing aesthetics.",
        "Improved Accessibility: Focused on best practices to make the website usable for a wider audience."
      ]
    },
  },
]