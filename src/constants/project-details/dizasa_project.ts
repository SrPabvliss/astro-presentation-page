import type { DetailedProject } from "@/types/project-detail.interface";
import { Wrench } from "lucide-react";
import { CLOUDINARY_IMAGES } from "@/constants/cloudinary";

export const DIZASA_PROJECT: DetailedProject = {
  id: "dizasa",
  title: "Dizasa",
  shortDescription: "Workshop Management System for Diesel Intelligence",
  
  clientInfo: {
    name: "Dizasa Diesel Intelligence",
    location: "Latacunga, Ecuador",
    industry: "Automotive & Mechanical Services",
    challenge: "Prior to the digital system, Dizasa operated with entirely manual processes for work orders. Orders were written by hand, leading to human errors, lost documentation, and lack of standardized processes. The company needed a comprehensive digital solution to standardize their workflow, reduce manual errors, and provide better service tracking for their clients.",
  },
  
  implementedBenefits: [
    "Process Standardization: Complete digitization of work order creation and management",
    "Error Reduction: Eliminated manual transcription errors through guided step-by-step forms",
    "Document Management: Secure digital storage and retrieval of all work orders and reports",
    "Client Transparency: Real-time order tracking through dedicated client portal",
    "Mobile Accessibility: Full workshop management capabilities on mobile devices",
    "PDF Generation: Professional reports for both initial orders and final work summaries",
    "QR Code Integration: Quick order access for mechanics through QR scanning",
    "Multi-platform Solution: Integrated mobile app with web admin panel and client portal",
  ],
  
  keyFeatures: [
    {
      title: "Step-by-Step Work Order Creation",
      description: "A comprehensive 8-step guided process that ensures complete information capture while preventing user errors through intelligent validation and contextual guidance.",
      bulletPoints: [
        "Intuitive wizard interface with progress tracking and step validation",
        "Smart form pre-population based on client history and equipment data",
        "Real-time validation with helpful error messages and suggestions",
        "Draft saving capability allowing users to resume incomplete orders",
        "Role-based access controls ensuring appropriate permissions per user type"
      ],
      image: CLOUDINARY_IMAGES.DIZASA_STEPPER,
      imageAlt: "Dizasa step-by-step work order creation interface showing progress tracker"
    },
    {
      title: "Dual PDF Generation System",
      description: "Professional document generation system creating both initial work orders and comprehensive final reports with consistent branding and detailed technical information.",
      bulletPoints: [
        "Initial PDF generation with client signature capture and equipment photos",
        "Final technical reports including work performed, parts used, and conclusions",
        "Cross-platform compatibility using Expo Print for mobile and React PDF for web",
        "Consistent formatting and branding across all generated documents",
        "Automatic file naming and organization for easy retrieval"
      ],
      image: CLOUDINARY_IMAGES.DIZASA_PDF,
      imageAlt: "Generated PDF reports showing professional formatting and comprehensive work order details"
    },
    {
      title: "QR Code Integration & Mobile Optimization",
      description: "Seamless QR code system enabling mechanics to quickly access work orders while providing optimized mobile experience for field work.",
      bulletPoints: [
        "Automatic QR code generation for each work order with embedded tracking data",
        "Camera-based QR scanning with instant order retrieval and validation",
        "Offline-capable mobile interface for workshop environments with poor connectivity",
        "Touch-optimized UI components designed specifically for workshop conditions",
        "Digital signature capture with stylus and finger support"
      ],
      image: CLOUDINARY_IMAGES.DIZASA_QR,
      imageAlt: "QR code scanning interface and generated QR codes for work order access"
    },
    {
      title: "Multi-Platform Ecosystem",
      description: "Complete workshop ecosystem including mobile application for field work, web admin panel for management, and client portal for order tracking and transparency.",
      bulletPoints: [
        "Native mobile app for mechanics and workshop staff with full offline capabilities",
        "Comprehensive web admin panel for order management, reporting, and user administration",
        "Client-facing web portal for real-time order status tracking and history",
        "Role-based dashboards tailored to mechanics, secretaries, and administrators",
        "Synchronized data across all platforms with real-time updates"
      ],
      image: CLOUDINARY_IMAGES.DIZASA_PORTAL,
      imageAlt: "Multi-platform interface showing mobile app, admin panel, and client portal"
    }
  ],
  
  technicalStack: {
    frontend: [
      {
        name: "React Native",
        description: "Cross-platform mobile application framework",
      },
      {
        name: "Expo",
        description: "Platform for React Native development with managed workflow",
      },
      {
        name: "TypeScript",
        description: "Strongly-typed language for enhanced development experience",
      },
      {
        name: "React.js",
        description: "Web application framework for admin panel and client portal",
      },
      {
        name: "Gluestack UI",
        description: "Component library providing consistent design system",
      },
      {
        name: "TailwindCSS",
        description: "Utility-first CSS framework for rapid UI development",
      },
      {
        name: "React Hook Form",
        description: "Form management with Zod validation integration",
      },
      {
        name: "TanStack Query",
        description: "Data fetching and server state management",
      },
      {
        name: "Zustand",
        description: "Lightweight state management for React applications",
      },
      {
        name: "Expo Print",
        description: "PDF generation capabilities for mobile platform",
      },
      {
        name: "React PDF",
        description: "PDF generation for web platform applications",
      }
    ],
    backend: [
      {
        name: "Ruby on Rails",
        description: "Full-stack web application framework",
      },
      {
        name: "PostgreSQL",
        description: "Advanced open-source relational database",
      },
      {
        name: "JWT",
        description: "JSON Web Tokens for secure authentication",
      },
      {
        name: "Active Storage",
        description: "Rails attachment framework for file management",
      },
      {
        name: "Blackblaze B2",
        description: "S3-compatible cloud storage for files and images",
      }
    ],
    devOps: [
      {
        name: "Docker",
        description: "Containerization for consistent deployment",
      },
      {
        name: "Contabo VPS",
        description: "Virtual private server for backend hosting",
      },
      {
        name: "Kamal",
        description: "Rails deployment tool for containerized applications",
      }
    ],
  },
  
  projectRole: {
    title: "Full-Stack Developer & Frontend Lead",
    responsibilities: [
      "Leading the complete frontend development for both mobile and web platforms",
      "Implementing the entire mobile application using React Native and Expo",
      "Developing the web admin panel and client portal using React.js",
      "Designing and implementing the step-by-step work order creation system",
      "Creating the dual PDF generation system for both mobile and web platforms",
      "Establishing consistent UI/UX patterns across all three platforms",
      "Collaborating with backend team to design API structure and data flow",
      "Optimizing application performance and user experience across platforms"
    ],
    teamContext: "I worked in a focused team of 3 developers: José Camino handling the entire backend infrastructure with Ruby on Rails, Patricio Jiménez contributing to mobile development, and myself leading the frontend development across all platforms. The team maintained close collaboration through regular communication and shared technical decisions.",
    keyAchievements: [
      "Successfully delivered a complete multi-platform ecosystem with consistent user experience",
      "Implemented an intuitive step-by-step process that significantly reduced user errors",
      "Created a robust PDF generation system working seamlessly across mobile and web",
      "Achieved excellent user experience optimization resulting in high client satisfaction",
      "Delivered the project within timeline while maintaining high code quality standards",
      "Established a scalable architecture that allows for future feature expansion"
    ],
    team: [
      {
        name: "Pablo Villacrés",
        role: "Full-Stack Developer & Frontend Lead",
        responsibilities: [
          "Mobile application development",
          "Web admin panel development",
          "Client portal development",
          "UI/UX implementation",
          "PDF generation systems"
        ],
        image: CLOUDINARY_IMAGES.PROFILE_PICTURE
      },
      {
        name: "José Camino",
        role: "Backend Developer",
        responsibilities: [
          "Rails API development",
          "Database design and optimization",
          "Authentication system",
          "File storage integration",
          "Server deployment and maintenance"
        ],
        image: CLOUDINARY_IMAGES.SEBAS_PROFILE
      },
      {
        name: "Patricio Jiménez",
        role: "Mobile Developer",
        responsibilities: [
          "Mobile UI components",
          "Camera and QR integration",
          "Mobile-specific optimizations",
          "Cross-platform testing"
        ],
        image: CLOUDINARY_IMAGES.PATRICK_PROFILE_2
      }
    ],
  },
  
  challenges: [
    {
      title: "Multi-Step Form State Management with Navigation Persistence",
      description: "Creating a complex 8-step work order creation process that maintains state across navigation, allows users to return to their last completed step, and handles draft saving while ensuring data integrity.",
      solution: "I implemented a robust state management system using Zustand that persists step progress and form data. The system tracks completion status for each step and automatically redirects users to their last incomplete step when resuming a draft order.",
      codeExample: `
const useWorkOrderStore = create<WorkOrderState>((set, get) => ({
  currentStep: 1,
  workOrder: null,
  
  setProgressStep: () => {
    const state = get()
    const { workOrder } = state
    
    // Determine the furthest step user can access based on completed data
    if (!workOrder?.workOrderType) return set({ currentStep: 1 })
    if (!workOrder?.client) return set({ currentStep: 2 })
    if (!workOrder?.contact) return set({ currentStep: 3 })
    if (!workOrder?.workItem) return set({ currentStep: 4 })
    if (!workOrder?.equipmentPhotos?.length) return set({ currentStep: 5 })
    if (!workOrder?.diagnosis) return set({ currentStep: 6 })
    if (!workOrder?.signature) return set({ currentStep: 7 })
    
    set({ currentStep: 8 }) // Summary step
  },
  
  setAllOrder: (order: WorkOrder) => {
    set({
      workOrder: order,
      clientId: order.client?.id,
      contactId: order.contact?.id,
      workItemId: order.workItem?.itemId,
      diagnosisId: order.diagnosis?.id,
      equipmentPhotos: order.equipmentPhotos,
      signature: order.signature?.url,
    })
  },
  
  getCurrentStepInfo: () => {
    const currentStep = get().currentStep
    const stepInfo = Object.values(CREATE_WORK_ORDER_STEPS)
      .find(step => step.step === currentStep)
    
    return {
      title: stepInfo?.title || '',
      description: stepInfo?.description || '',
      currentStep,
      totalSteps: Object.keys(CREATE_WORK_ORDER_STEPS).length,
    }
  },
}));`
    },
    {
      title: "Cross-Platform PDF Generation with Consistent Formatting",
      description: "Implementing PDF generation that works consistently across mobile (using Expo Print) and web (using React PDF) while maintaining identical formatting, styling, and functionality.",
      solution: "I created a modular template system using HTML/CSS that works with both Expo Print and React PDF. The system uses shared template functions that generate consistent HTML structures while handling platform-specific optimizations.",
      codeExample: `
// Shared template generation
export const generateWorkOrderTemplate = ({
  workOrder,
  orderNumber,
  createdDate,
  itemInfo,
  orderType,
  signatureUrl,
}: TemplateProps) => {
  return \`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Orden de Trabajo - \${orderNumber}</title>
        <style>\${getPdfStyles()}</style>
      </head>
      <body>
        \${renderHeader({ orderNumber, createdDate, orderType })}
        \${renderClientSection({ client: workOrder.client, contact: workOrder.contact, itemInfo, orderType })}
        \${renderDiagnosticSection({ diagnosis: workOrder.diagnosis })}
        \${renderSignatureSection({ signatureUrl })}
        \${renderTermsSection()}
      </body>
    </html>
  \`;
};

// Mobile implementation (Expo Print)
export const generateWorkOrderPDF = async (workOrder: WorkOrder) => {
  const html = generateWorkOrderTemplate({ /* template props */ });
  
  const { uri } = await Print.printToFileAsync({
    html,
    base64: false,
  });
  
  await shareAsync(uri, { mimeType: 'application/pdf' });
};

// Web implementation would use the same template with React PDF`
    },
    {
      title: "Expo Router Performance Optimization",
      description: "Initial implementation using nested Stack navigators throughout the app caused significant performance issues and rendering delays, particularly noticeable on lower-end devices.",
      solution: "I redesigned the navigation architecture to use Stack components more judiciously, implementing a flatter navigation structure and optimizing screen transitions. This included removing unnecessary nested stacks and implementing proper screen options for performance.",
      codeExample: `
// Before: Multiple nested stacks causing performance issues
<Stack>
  <Stack>
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  </Stack>
</Stack>

// After: Optimized flat structure with strategic Stack usage
export default function AppLayout() {
  return (
    <ProtectedRoute>
      <Stack
        screenOptions={{ 
          headerShown: false, 
          fullScreenGestureEnabled: false,
          // Performance optimizations
          animation: 'slide_from_right',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="work-orders" options={{ presentation: 'modal' }} />
      </Stack>
    </ProtectedRoute>
  );
}

// Eliminated unnecessary wrapper stacks and implemented proper screen options
export default function WorkOrdersLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      fullScreenGestureEnabled: false,
    }} />
  );
}`
    },
    {
      title: "User Experience Optimization Across Multiple Platforms",
      description: "Ensuring consistent and intuitive user experience across mobile app, web admin panel, and client portal while maintaining platform-specific best practices and optimizations.",
      solution: "I implemented a design system with platform-aware components and established UX patterns that work naturally on each platform while maintaining visual and functional consistency. This included touch-optimized interfaces for mobile and mouse-optimized interactions for web.",
      codeExample: `
// Platform-aware component implementation
const PlatformOptimizedButton = ({ children, onPress, ...props }) => {
  const platformStyles = Platform.select({
    ios: 'rounded-lg shadow-sm',
    android: 'rounded-md elevation-2',
    web: 'rounded hover:shadow-lg transition-shadow',
  });
  
  return (
    <Pressable
      className={\`bg-primary-600 p-4 \${platformStyles}\`}
      onPress={onPress}
      // Web-specific optimizations
      onHoverIn={Platform.OS === 'web' ? () => setHovered(true) : undefined}
      onHoverOut={Platform.OS === 'web' ? () => setHovered(false) : undefined}
      // Mobile-specific optimizations
      android_ripple={Platform.OS === 'android' ? { color: 'rgba(0,0,0,0.1)' } : undefined}
      {...props}
    >
      <Text className="text-white font-semibold text-center">
        {children}
      </Text>
    </Pressable>
  );
};

// Responsive design implementation
const ResponsiveContainer = ({ children }) => {
  const isWeb = Platform.OS === 'web';
  
  return (
    <View className={clsx(
      'flex-1 p-4',
      isWeb && 'max-w-4xl mx-auto',
      isWeb && 'lg:p-8'
    )}>
      {children}
    </View>
  );
};`
    }
  ],
  
  learningOutcomes: {
    newSkills: [
      {
        title: "Multi-Platform Development",
        description: "This project significantly expanded my capabilities in developing cohesive experiences across mobile and web platforms.",
        bulletPoints: [
          "Mastering React Native with Expo for mobile development",
          "Building responsive web applications with platform-specific optimizations",
          "Creating consistent design systems across different platforms",
          "Understanding platform-specific user experience patterns and limitations"
        ]
      },
      {
        title: "Complex State Management",
        description: "Implementing sophisticated state management for multi-step forms and cross-platform data synchronization.",
        bulletPoints: [
          "Advanced Zustand patterns for complex application state",
          "Form state persistence and recovery mechanisms",
          "Cross-platform data synchronization strategies",
          "Navigation state management in React Native applications"
        ]
      },
      {
        title: "PDF Generation Systems",
        description: "Developing robust document generation systems that work across different platforms and use cases.",
        bulletPoints: [
          "Template-based PDF generation using HTML/CSS",
          "Cross-platform compatibility between Expo Print and React PDF",
          "Dynamic content rendering and formatting",
          "File management and sharing across platforms"
        ]
      }
    ],
    technicalLessons: [
      {
        title: "User Experience Design Principles",
        description: "This project reinforced the critical importance of user-centered design in complex workflow applications.",
        bulletPoints: [
          "Step-by-step processes significantly reduce user errors and confusion",
          "Visual progress indicators improve user confidence and completion rates",
          "Platform-specific design patterns enhance user familiarity and adoption",
          "Consistent feedback and validation prevent user frustration"
        ]
      },
      {
        title: "Performance Optimization Strategies",
        description: "Learning to identify and resolve performance bottlenecks in React Native applications.",
        bulletPoints: [
          "Navigation architecture has significant impact on app performance",
          "Proper component optimization and memoization strategies",
          "Image optimization and lazy loading techniques",
          "Memory management in mobile applications"
        ]
      },
      {
        title: "Cross-Platform Development Best Practices",
        description: "Understanding the nuances and trade-offs of multi-platform development approaches.",
        bulletPoints: [
          "Code sharing strategies between mobile and web applications",
          "Platform-specific optimization without compromising consistency",
          "Testing strategies for multi-platform applications",
          "Deployment and maintenance considerations for multiple platforms"
        ]
      }
    ],
    areasForImprovement: [
      {
        title: "Project Management and Client Relations",
        description: "The project highlighted the need for better client boundary management and contract enforcement. While we delivered excellent technical results, clearer project scope definition and firmer contract adherence would have prevented scope creep."
      },
      {
        title: "Communication Processes",
        description: "Establishing more structured communication protocols with both team members and clients would have improved project efficiency and reduced misunderstandings about requirements and timelines."
      },
      {
        title: "Testing Strategy",
        description: "While the application works well, implementing a more comprehensive testing strategy from the beginning would have caught edge cases earlier and improved overall code quality."
      },
      {
        title: "Documentation Standards",
        description: "Although the code is well-structured, more comprehensive API documentation and user guides would have facilitated better knowledge transfer and future maintenance."
      }
    ]
  },
  
  visualContent: {
    mainImage: CLOUDINARY_IMAGES.DIZASA_MAIN_ALT,
    screenshots: [
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938564/d1_ecn2x8.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938570/d2_jnvvew.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938614/d3_hwwf0s.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938614/d4_f17m7e.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938620/d5_wowro8.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938621/d6_sxnlmw.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938622/d7_lwjsbm.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938622/d8_d0qzsu.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938622/d9_cygfcs.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938564/d10_wvyfq7.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938564/d11_ypohtr.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938564/d12_ajhwd9.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938566/d13_pshujk.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938565/d14_gkb7zf.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938565/d15_qxxsv6.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938565/d16_foi2ix.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938566/d17_gutcvb.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938567/d18_ai3jwi.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938569/d19_eayri2.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938568/d20_jufb3d.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938570/d21_d3xyhf.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938570/d22_hd53ym.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938603/d23_gka1jt.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938611/d24_hrubrq.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938611/d25_ryjljj.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938612/d26_zxjolo.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938613/d27_b7glpo.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938613/d28_hpya9f.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938652/web1_clxq8d.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938653/web2_fxzex9.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938662/web3_qdwkyt.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1753938671/web4_retone.png"
]
  },
  
  company: {
    name: "Dizasa Diesel Intelligence",
    logo: "/images/projects/dizasa/dizasa-logo.png"
  },
  
  links: {
    github: "",
    demo: "",
    case_study: ""
  }
};