import type { DetailedProject } from "@/types/project-detail.interface";
import { CLOUDINARY_IMAGES } from "@/constants/cloudinary";

export const GENDOCS_V3_PROJECT: DetailedProject = {
  id: "gendocs-v3",
  title: "Gendocs V3",
  shortDescription: "Academic Document Management System",
  
  clientInfo: {
    name: "Technical University of Ambato (FISEI)",
    location: "Ambato, Ecuador",
    industry: "Higher Education",
    challenge: "Prior to implementing this system, FISEI faced significant challenges in their administrative processes. Previous versions (GenDocs V1 and V2) failed to fully satisfy the faculty's changing needs. Secretaries had to perform multiple manual interactions, inconsistencies existed in student information between departments, coordination for thesis defenses was problematic, and document organization lacked standardization across different degree programs.",
  },
  
  implementedBenefits: [
    "Process automation: Significant reduction of manual work through bulk data loading and automatic document generation",
    "Centralized management: Updated student information accessible to all secretaries according to their permission level",
    "Document organization: Clear structuring of documents by year, degree program, and module in Google Drive",
    "Administrative simplification: Optimized workflows for generating degree certificates, facilitating coordination between faculty and students",
    "Complete traceability: Tracking of the process from initial registration to final document generation"
  ],
  
  keyFeatures: [
    {
      title: "Student Management System",
      description: "The cornerstone of GenDocs V3 is its comprehensive student management system, which serves as the foundation for nearly all other functions. This module efficiently processes semester-by-semester student information and tracks critical student data throughout their academic career.",
      bulletPoints: [
        "Bulk data import through Excel matrices with automated validation",
        "Profile management tracking credits, internship hours, and community service hours",
        "Academic progression monitoring throughout student careers",
        "Advanced search and filtering across various parameters",
        "History tracking of academic progress with role-based access control"
      ],
      image: CLOUDINARY_IMAGES.GENDOCS_STUDENTS,
      imageAlt: "Student management interface showing student records and academic tracking"
    },
    {
      title: "Degree Certificate Generation",
      description: "The most critical functionality of the system addresses the faculty's primary concern - streamlining the degree certification process. This module provides dynamic certificate creation, automated workflows, and comprehensive tracking throughout the document lifecycle.",
      bulletPoints: [
        "Dynamic certificate creation with standardized templates",
        "Automated workflows across all degree programs",
        "Defense coordination for thesis presentations",
        "Committee management for faculty assignments",
        "Excel-based batch generation capabilities with error notifications"
      ],
      image: CLOUDINARY_IMAGES.GENDOCS_DEGREES,
      imageAlt: "Certificate generation workflow showing document templates and generation process"
    },
    {
      title: "Council Management",
      description: "The administrative backbone of the system facilitates the documentation of critical faculty meetings, tracking resolutions and decisions. This module provides comprehensive organization of council documentation with automated features for reporting.",
      bulletPoints: [
        "Meeting organization with scheduling and documentation",
        "Resolution tracking with implementation status",
        "Automated document compilation for comprehensive reports",
        "Member management with attendance tracking",
        "Historical records with searchable archives"
      ],
      image: CLOUDINARY_IMAGES.GENDOCS_COUNCIL,
      imageAlt: "Council management interface showing meeting records and resolution tracking"
    },
    {
      title: "Template Management System",
      description: "A unique and powerful feature that drives document automation through customizable templates with dynamic variables. This system ensures consistency across all documents while adapting to institutional requirements.",
      bulletPoints: [
        "Variable definition with custom templates (e.g., {{STUDENT_NAME}})",
        "Document standardization across all departments",
        "Customizable formats for changing institutional requirements",
        "System-wide integration across multiple modules",
        "Google Docs integration with version control"
      ],
      image: CLOUDINARY_IMAGES.GENDOCS_TEMPLATES,
      imageAlt: "Template management interface showing variable definition and document creation"
    }
  ],
  
  technicalStack: {
    frontend: [
      {
        name: "Next.js",
        description: "React framework providing routing and server-side capabilities",
      },
      {
        name: "TypeScript",
        description: "Static typing for more robust code development",
      },
      {
        name: "Material UI",
        description: "Component library for consistent design language",
      },
      {
        name: "React Hook Form",
        description: "Form validation and state management",
      },
      {
        name: "Zustand",
        description: "Lightweight state management solution",
      },
      {
        name: "Yup",
        description: "Schema validation for form inputs",
      }
    ],
    backend: [
      {
        name: "NestJS",
        description: "Modular Node.js framework with clean architecture principles",
      },
      {
        name: "TypeORM",
        description: "Type-safe ORM for database interactions",
      },
      {
        name: "PostgreSQL",
        description: "Robust relational database system",
      },
      {
        name: "WebSockets",
        description: "Real-time bidirectional communication for notifications",
      },
      {
        name: "JWT",
        description: "Token-based authentication and authorization",
      },
      {
        name: "Google APIs",
        description: "Document management and authentication (Drive API, OAuth2)",
      }
    ],
    devOps: [
      {
        name: "Docker",
        description: "Application containerization",
      },
      {
        name: "GitHub Actions",
        description: "Continuous integration and deployment",
      },
      {
        name: "ESLint & Prettier",
        description: "Code quality and formatting",
      }
    ],
  },
  
  projectRole: {
    title: "Frontend Development Lead",
    responsibilities: [
      "Creating responsive user interfaces that connected to the backend endpoints",
      "Migrating the application to Material UI (MUI) framework, enhancing the visual consistency and user experience",
      "Implementing state management using Zustand, improving application performance and data flow",
      "Developing role-based interfaces that provided appropriate actions depending on user permissions and process states",
      "Establishing standardized table components that served as the primary views for each module",
      "Designing and implementing pagination, filtering, and state management to enhance user experience across the application",
      "Collaborating closely with backend developers to plan feature implementation and optimize API communication"
    ],
    teamContext: "I worked in a team of 3 people: myself leading frontend development, a backend developer who also served as the primary client liaison, and a fullstack developer with extensive technical knowledge who handled DevOps and deployment tasks. This small, cross-functional team required constant collaboration and clear communication to ensure efficient development and successful feature integration.",
    keyAchievements: [
      "Successfully led the migration to Material UI, implementing a more consistent and professional interface",
      "Established a standardized approach for handling data tables, which formed the core of most module views",
      "Overcame challenges with non-standardized Excel formats for data importation through flexible parsing solutions",
      "Adapted to frequent requirement changes by developing modular, adaptable components",
      "Gained valuable experience with Next.js, Zustand for state management, and Material UI",
      "Created a seamless development workflow through close collaboration with backend and fullstack team members",
      "Implemented complex role-based conditional rendering throughout the application, ensuring appropriate functionality for different administrative users"
    ],
    team: [
      {
        name: "Pablo Villacrés",
        role: "Frontend Lead Developer",
        responsibilities: [
          "Leading frontend architecture and implementation",
          "Material UI component development",
          "State management implementation",
          "Integration with backend APIs",
          "Role-based UI rendering"
        ],
        image: "/images/profile-picture.png"
      },
      {
        name: "Backend Developer",
        role: "Backend Architect & Client Liaison",
        responsibilities: [
          "API development and maintenance",
          "Database design and optimization",
          "Client requirement gathering",
          "Google Drive integration",
          "Authentication system"
        ],
        image: CLOUDINARY_IMAGES.JAIR_PROFILE
      },
      {
        name: "Fullstack Developer",
        role: "Fullstack & DevOps Engineer",
        responsibilities: [
          "Server configuration and deployment",
          "Infrastructure management",
          "Backend support development",
          "Docker containerization",
          "CI/CD pipeline setup"
        ],
        image: CLOUDINARY_IMAGES.LENIN_PROFILE
      }
    ],
  },
  
  challenges: [
    {
      title: "Document Collaboration and Versioning",
      description: "One of the most significant challenges was building a system that could track collaborative work across multiple users while maintaining a comprehensive history of changes. This was particularly critical for official documents that required strict auditing and version control.",
      solution: "We implemented a robust version control system integrated with Google Drive that tracked every document change, who made it, and when. This solution included a custom template variable system that maintained document integrity across revisions while providing clear visualization of the document's state and history."
    },
    {
      title: "Legacy System Migration",
      description: "Adapting functionality from GenDocs V1 and V2 into the new system presented significant hurdles. We needed to ensure data continuity while improving the architecture and user experience, requiring careful migration strategies to prevent data loss.",
      solution: "We developed a phased migration approach that preserved legacy data while incrementally adding new features. This included creating compatibility layers that translated old data formats into the new schema, running parallel systems during transition, and providing extensive training for administrative staff to ensure a smooth transition."
    },
    {
      title: "State Management Optimization",
      description: "Managing application state efficiently across multiple modules proved challenging. We needed to minimize unnecessary API refetching while ensuring data consistency across the application, particularly for complex workflows like certificate generation.",
      solution: "I implemented a comprehensive solution using Zustand that reduced unnecessary API calls by caching data appropriately, improved perceived performance through optimistic UI updates, maintained data consistency across different views, and provided persistence for critical application state through the session storage API.",
      codeExample: `
export const useStudentStore = create<StoreState>(
  persist(
    (set) => ({
      students: DEFAULT_STUDENTS,
      setStudents: (students) => set({ students }),
      get: async (pagination: PaginationDTO) => {
        const result = await StudentUseCasesImpl.getInstance().getAll(pagination)
        set({ students: result.students })
      },
      getByFilter: async (field) => {
        await StudentUseCasesImpl.getInstance()
          .getByFilters({ field }, new PaginationDTO())
          .then((res) => {
            set({ students: res.students })
          })
      }
    }),
    {
      name: STORE_NAME,
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)`
    },
    {
      title: "Excel Format Inconsistencies",
      description: "The lack of standardized Excel formats for data import was a persistent challenge. Each department often used their own formats, requiring adaptable parsing solutions that could handle a wide variety of input structures.",
      solution: "To address this, I implemented a flexible parsing solution that could handle multiple naming conventions for the same data, providing clear error messages for problematic records, maintaining backward compatibility with legacy formats, and gradually encouraging standardization through user feedback.",
      codeExample: `
export const transformData = (data: any[], careers: ICareer[], canton: ICanton[]): any =>
  data
    .map((item: any, index: number) => {
      try {
        // Handle various data formats and field names
        let firstName = ''
        let secondName = ''
        
        if (item['Nombres']) {
          const names = safeToString(item['Nombres'])
          const splitNames = names.split(' ')
          const [first, ...second] = splitNames
          firstName = first && first.trim()
          secondName = second ? second.join(' ').trim() : ''
        } else {
          firstName = safeToString(item['Primer Nombre']).trim()
          secondName = safeToString(item['Segundo Nombre']).trim()
        }
        
        // Transform to standardized model
        return {
          firstName,
          secondName,
          // Additional fields
        }
      } catch (error) {
        enqueueSnackbar(\`Error en los datos \${item['Cédula']}\`, { variant: 'error' })
      }
    })
    .filter((item) => item !== undefined)`
    },
    {
      title: "Role-Based UI Rendering",
      description: "The system needed to present different interfaces and functionality based on user roles, creating a challenge in maintaining a consistent user experience while restricting access appropriately at both frontend and backend levels.",
      solution: "I implemented a comprehensive role-based UI rendering system that provided clear, role-appropriate interfaces, simplified the user experience by showing only relevant options, maintained security through both frontend and backend permission checks, and created intuitive workflows for different administrative roles.",
      codeExample: `
const renderActions = (
  <>
    {user?.role === UserRole.ADMIN && (
      <Button
        component={RouterLink}
        href={\`\${pathname}/templates\`}
        variant="contained"
        startIcon={<Iconify icon="mingcute:document-3-line" />}
      >
        Plantillas
      </Button>
    )}
    
    <Button
      variant="contained"
      startIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}
      onClick={addDegreeCertificatePopover.onOpen}
    >
      Actas de grado
    </Button>
  </>
)`
    }
  ],
  
  learningOutcomes: {
    newSkills: [
      {
        title: "State Management with Zustand",
        description: "This was my first deep experience with Zustand as a state management solution.",
        bulletPoints: [
          "Implementing efficient state storage patterns",
          "Managing persistent state across sessions",
          "Developing modular stores for different application features",
          "Combining multiple state slices for cohesive management"
        ]
      },
      {
        title: "Next.js and Advanced React",
        description: "This project represented my first extensive professional experience with Next.js.",
        bulletPoints: [
          "Mastery of file-based routing system",
          "Implementation of server-side rendering for improved performance",
          "Efficient management of shared layouts and components",
          "Load optimization with React Suspense and lazy loading"
        ]
      },
      {
        title: "Complex Forms with React Hook Form",
        description: "The complex form requirements led me to master React Hook Form for sophisticated data entry.",
        bulletPoints: [
          "Advanced validation with Yup schema validation",
          "Creation of dynamic forms with conditional fields",
          "Handling form arrays for multiple data entries",
          "Performance optimization for extensive forms"
        ]
      },
      {
        title: "Material UI and Design Systems",
        description: "This project deepened my knowledge of the Material UI ecosystem for consistent interface design.",
        bulletPoints: [
          "Implementation of advanced theming and customization",
          "Creation of reusable components based on MUI",
          "Responsive adaptation using the Grid system",
          "Consistent styling across multiple views"
        ]
      }
    ],
    technicalLessons: [
      {
        title: "Technology Prioritization and Evaluation",
        description: "I learned the critical importance of evaluating the application's execution context before selecting technologies.",
        bulletPoints: [
          "Aligning technology decisions with actual requirements rather than trends",
          "Considering deployment environment constraints during architecture planning",
          "Evaluating performance implications of technology choices",
          "Balancing innovation with practical constraints"
        ]
      },
      {
        title: "Adaptable Architecture",
        description: "The experience of adapting a hexagonal architecture to React taught me valuable flexibility lessons.",
        bulletPoints: [
          "Appreciating when complex architectures are beneficial versus when simpler approaches suffice",
          "Adapting patterns from other frameworks (Flutter/Bloc) to React's component model",
          "Implementing Clean Architecture principles in a frontend context",
          "Creating adaptable systems that can evolve with changing requirements"
        ]
      },
      {
        title: "Separation of Concerns",
        description: "The development of various modules reinforced the importance of clear separation of concerns.",
        bulletPoints: [
          "Organizing code by feature domains rather than technical layers",
          "Maintaining clean boundaries between presentation, business logic, and data access",
          "Developing reusable components that encapsulate specific responsibilities",
          "Implementing consistent patterns across different modules"
        ]
      },
      {
        title: "HTTP Communication Patterns",
        description: "Implementing a centralized communication system helped establish consistent patterns for API interaction.",
        bulletPoints: [
          "Creating a centralized Axios client for consistent API access",
          "Implementing standardized error handling across the application",
          "Managing authentication token refresh and storage",
          "Developing reusable patterns for common API operations"
        ]
      }
    ],
    areasForImprovement: [
      {
        title: "More Efficient State Management",
        description: "The extensive use of context and local states generated some inefficiencies in the application. An implementation with TanStack Query (React Query) would have simplified server state management, reduced data duplication, and improved the automatic refetch experience."
      },
      {
        title: "Review and Refactoring",
        description: "Although the code is well-structured, additional refactoring to consolidate common patterns and eliminate duplications would improve long-term maintainability. The pressure to deliver features sometimes limited the time available for refinement."
      },
      {
        title: "Balance Between Complexity and Needs",
        description: "In retrospect, some parts of the system could have been simplified without sacrificing functionality. I learned that sophisticated solutions aren't always necessary, especially when proprietary servers perform well and efficiency isn't a critical issue."
      },
      {
        title: "Collaboration Practices",
        description: "While our collaboration was effective, implementing more formalized code review processes and documentation standards would have facilitated knowledge sharing and long-term maintenance of the codebase."
      }
    ]
  },
  
  visualContent: {
    mainImage: CLOUDINARY_IMAGES.GENDOCS_MAIN,
    screenshots: [
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106302/gd-1_wn5sh7.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106324/gd-2_fu1q4d.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106325/gd-3_cjyu5m.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106326/gd-4_emwuwt.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106326/gd-5_wvnaky.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106327/gd-6_ooc8zc.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106328/gd-7_fcfau1.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106329/gd-8_q2amfa.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106330/gd-9_xxpecf.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106312/gd-10_f7mlvf.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106311/gd-11_movd4y.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106312/gd-12_p1xwgq.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106314/gd-13_xyas5z.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106320/gd-14_i4vuem.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106321/gd-15_jrr8gk.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106321/gd-16_hn0qso.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106322/gd-17_foc0z4.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106323/gd-18_nnb2ec.png",
      
    ]
  },
  
  company: {
    name: "Gendocs V3",
    // icon: NotepadText,
    logo: CLOUDINARY_IMAGES.GENDOCS_MAIN
  },
  
  links: {
    case_study: "/projects/gendocs-v3"
  }
};