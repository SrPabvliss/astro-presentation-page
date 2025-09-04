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
      challenge:
        "Administrative staff struggled with manual document handling, outdated workflows, and data inconsistency across departments. Previous systems (V1 and V2) were limited in flexibility and scalability."
    },
  
    implementedBenefits: [
      "Automated document generation with bulk data imports",
      "Centralized student records with role-based access",
      "Standardized Google Drive document structuring",
      "Simplified degree certification workflows",
      "Full process traceability from registration to document delivery"
    ],
  
    keyFeatures: [
      {
        title: "Student Management System",
        description: "Tracks student academic progress and personal data with automated data import and historical records.",
        bulletPoints: [
          "Excel-based bulk uploads with validation",
          "Progress tracking and internship logging",
          "Advanced filters and profile search"
        ],
        image: CLOUDINARY_IMAGES.GENDOCS_STUDENTS,
        imageAlt: "Student management interface"
      },
      {
        title: "Degree Certificate Generation",
        description: "Automates certificate workflows and committee coordination across programs.",
        bulletPoints: [
          "Standard templates with dynamic variables",
          "Batch generation with error feedback",
          "Defense coordination and faculty assignment"
        ],
        image: CLOUDINARY_IMAGES.GENDOCS_DEGREES,
        imageAlt: "Certificate generation interface"
      },
      {
        title: "Council Management",
        description: "Manages faculty meeting documentation, decisions, and resolution tracking.",
        bulletPoints: [
          "Meeting records and attendance tracking",
          "Automated reporting and searchable archives"
        ],
        image: CLOUDINARY_IMAGES.GENDOCS_COUNCIL,
        imageAlt: "Council management view"
      },
      {
        title: "Template Management System",
        description: "Centralized template control with dynamic fields and Google Docs integration.",
        bulletPoints: [
          "Custom variables (e.g., {{STUDENT_NAME}})",
          "Cross-module template consistency",
          "Version control with Google Drive"
        ],
        image: CLOUDINARY_IMAGES.GENDOCS_TEMPLATES,
        imageAlt: "Template editor interface"
      }
    ],
  
    technicalStack: {
      frontend: [
        { name: "Next.js", description: "Routing and SSR/CSR for React apps" },
        { name: "TypeScript", description: "Typed JavaScript for safer code" },
        { name: "Material UI", description: "Component library with consistent design" },
        { name: "React Hook Form", description: "Robust form validation and control" },
        { name: "Zustand", description: "Minimal state management library" },
        { name: "Yup", description: "Schema-based input validation" }
      ],
      backend: [
        { name: "NestJS", description: "Structured backend framework with modules" },
        { name: "TypeORM", description: "ORM for PostgreSQL with decorators" },
        { name: "PostgreSQL", description: "Relational database system" },
        { name: "WebSockets", description: "Real-time updates and alerts" },
        { name: "JWT", description: "Authentication and route protection" },
        { name: "Google APIs", description: "Docs and Drive automation, OAuth2 auth" }
      ],
      devOps: [
        { name: "Docker", description: "Container-based deployment" },
        { name: "GitHub Actions", description: "Automated CI/CD pipelines" },
        { name: "ESLint & Prettier", description: "Code formatting and linting" }
      ]
    },
  
    projectRole: {
      title: "Frontend Development Lead",
      responsibilities: [
        "Frontend migration to Material UI",
        "Role-based UI component design",
        "State management with Zustand",
        "Optimized tables with pagination and filtering",
        "Close collaboration with backend for API coordination"
      ],
      teamContext:
        "Worked in a team of 3: myself (frontend lead), a backend developer (client liaison), and a fullstack/DevOps engineer.",
      keyAchievements: [
        "Successful UI migration to Material UI",
        "Modular component system for reusability",
        "Flexible data import parser for Excel inconsistencies",
        "Role-based interface logic with permission checks",
        "Established consistent UI/UX standards across modules"
      ],
      team: [
        {
          name: "Pablo Villacrés",
          role: "Frontend Lead Developer",
          responsibilities: [
            "Frontend architecture and Material UI integration",
            "Zustand store design",
            "Role-based UI rendering"
          ],
          image: "/images/profile-picture.png"
        },
        {
          name: "Backend Developer",
          role: "Backend Architect & Client Liaison",
          responsibilities: ["API development", "DB schema", "Drive integration"],
          image: CLOUDINARY_IMAGES.JAIR_PROFILE
        },
        {
          name: "Fullstack Developer",
          role: "Fullstack & DevOps Engineer",
          responsibilities: ["Docker, CI/CD, infrastructure"],
          image: CLOUDINARY_IMAGES.LENIN_PROFILE
        }
      ]
    },
  
    challenges: [
      {
        title: "Document Collaboration and Versioning",
        description: "Maintaining history and traceability of shared documents.",
        solution: "Used Google Drive versioning with audit trails and custom dynamic variable system."
      },
      {
        title: "Legacy System Migration",
        description: "Integrating old data formats and features into a modern UI.",
        solution: "Implemented compatibility layers, phased migration, and parallel system testing."
      },
      {
        title: "State Management Optimization",
        description: "Managing multi-module data flow with performance in mind.",
        solution: "Built unified Zustand stores with persistent session storage and lazy updates.",
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
        description: "Handling non-standard Excel imports from various departments.",
        solution: "Created a parsing utility with fallback logic and dynamic field resolution.",
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
        description: "Displaying proper actions per role while ensuring security.",
        solution: "Developed a UI logic system based on roles with backend permission alignment.",
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
          description: "Mastery of modular and persistent state control.",
          bulletPoints: [
            "Session-persistent storage",
            "Slice combination techniques",
            "Optimistic UI updates"
          ]
        },
        {
          title: "Next.js and Advanced React",
          description: "Built experience with server-rendered and modular React apps.",
          bulletPoints: [
            "File-based routing and layouts",
            "Suspense and lazy loading",
            "Server-side data fetching"
          ]
        },
        {
          title: "React Hook Form",
          description: "Implemented dynamic, schema-validated complex forms.",
          bulletPoints: [
            "Nested form arrays",
            "Yup integration",
            "Conditional rendering"
          ]
        },
        {
          title: "Material UI Design System",
          description: "Professional UI construction using MUI components and themes.",
          bulletPoints: [
            "Custom theme extension",
            "Responsive design with Grid",
            "Reusable UI components"
          ]
        }
      ],
      technicalLessons: [
        {
          title: "Technology Prioritization",
          description: "Aligning choices with scope and actual needs.",
          bulletPoints: [
            "Evaluating tradeoffs early",
            "Focusing on deployment context"
          ]
        },
        {
          title: "Adaptable Architecture",
          description: "Balancing complexity with flexibility.",
          bulletPoints: [
            "Clean architecture in frontend",
            "Reusable domain-based logic"
          ]
        },
        {
          title: "Separation of Concerns",
          description: "Keeping logic and UI well-isolated.",
          bulletPoints: [
            "Domain-driven structure",
            "Reusable atomic components"
          ]
        },
        {
          title: "HTTP Communication",
          description: "Consistent and secure API interaction patterns.",
          bulletPoints: [
            "Centralized Axios client",
            "Token refresh logic",
            "Standard error handling"
          ]
        }
      ],
      areasForImprovement: [
        {
          title: "State Management Efficiency",
          description: "TanStack Query could have improved server state handling and reduced duplication."
        },
        {
          title: "Code Review & Refactoring",
          description: "More time for review would enhance maintainability."
        },
        {
          title: "Complexity Balance",
          description: "Some parts could have been simpler without affecting value."
        },
        {
          title: "Team Collaboration Practices",
          description: "Better documentation and formal reviews would support scalability."
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
      logo: CLOUDINARY_IMAGES.GENDOCS_MAIN
    },
  
    links: {
      case_study: "/projects/gendocs-v3",
    }
  };
  