import type { DetailedProject } from "@/types/project-detail.interface";
import { CLOUDINARY_IMAGES } from "@/constants/cloudinary";


export const GAB_MOTORS_PROJECT: DetailedProject = {
  id: "gab-motors",
  title: "GabMotors Schedule",
  shortDescription: "Auto Shop Management System",
  
  clientInfo: {
    name: "GabMotors",
    location: "Latacunga, Ecuador",
    industry: "Automotive Services",
    challenge: "Before implementing this system, the shop faced significant challenges in coordinating daily activities. Mechanics lacked visibility of scheduled appointments, administrators couldn't effectively track ongoing vehicle inspections, and customer communication was inconsistent.",
  },
  
  implementedBenefits: [
    "Centralized information: Common schedule for all employees",
    "Detailed tracking: Control of tasks performed by each mechanic",
    "Timely communication: Automatic notifications for reminders and changes",
    "Better organization: Efficient assignment of work and resources",
  ],
  
  keyFeatures: [
    {
      title: "Interactive Calendar",
      description: "The heart of the system is an interactive calendar that allows appointment management with multiple views (day, week, month). Each mechanic is assigned a distinctive color, making it easy to visually identify work distribution. Appointments display crucial information such as vehicle data, customer details, and estimated service duration.",
      bulletPoints: [
        "Automatic validation to prevent mechanic overloading",
        "Filters by service type, assigned mechanic, and status",
        "Responsive view adapted to mobile and desktop devices",
        "Drag and drop functionality for appointment reassignment"
      ],
      image: CLOUDINARY_IMAGES.WORK_TRACKING_CALENDAR,
      imageAlt: "Interactive calendar showing monthly view with color-coded appointments"
    },
    {
      title: "Inspection Tracking",
      description: "The inspection tracking panel offers a consolidated view of all ongoing work, allowing administrators and mechanics to record, track, and document all aspects of vehicle inspections.",
      bulletPoints: [
        "Record specific jobs performed in each inspection",
        "Track the progress of each inspection (pending, in process, completed)",
        "Document technical details of each intervention",
        "Generate complete service histories by vehicle"
      ],
      image: CLOUDINARY_IMAGES.WORK_TRACKING,
      imageAlt: "Inspection tracking panel showing vehicle service details and status"
    },
    {
      title: "Notification System",
      description: "A differentiating feature is the real-time notification system implemented using Firebase and Service Workers, which keeps all stakeholders informed of important events and changes.",
      bulletPoints: [
        "Sending automated reminders for upcoming appointments",
        "Alerting about schedule changes",
        "Notifying mechanics when they are assigned new work",
        "Informing administrators about completed inspections"
      ],
      image: CLOUDINARY_IMAGES.WORK_TRACKING_NOTIFICATIONS,
      imageAlt: "Push notification interface showing alerts for mechanics and administrators"
    },
    {
      title: "Administrative Management",
      description: "The administrative module allows comprehensive management of the auto shop's operations, personnel, and history.",
      bulletPoints: [
        "Administrative appointments and internal meetings",
        "Mechanic assignment based on specialty and workload",
        "Advanced search of historical inspections",
        "User and permission control according to roles (administrator, secretary, mechanic)"
      ],
      image: CLOUDINARY_IMAGES.WORK_TRACKING_V3,
      imageAlt: "Administrative dashboard showing management controls and user roles"
    }
  ],
  
  technicalStack: {
    frontend: [
      {
        name: "Next.js",
        description: "React framework for hybrid rendering (SSR/CSR)",
      },
      {
        name: "TypeScript",
        description: "Static typing for robust development",
      },
      {
        name: "Tailwind CSS",
        description: "CSS utility framework for responsive design",
      },
      {
        name: "Shadcn UI",
        description: "Reusable components for the interface",
      },
      {
        name: "React Query",
        description: "State management and server requests",
      },
      {
        name: "Socket.io-client",
        description: "Real-time communication",
      },
      {
        name: "Service Workers",
        description: "Support for push notifications",
      },
      {
        name: "Firebase",
        description: "Integration for messaging and notifications",
      },
      {
        name: "React Hook Form",
        description: "Efficient form handling",
      }
    ],
    backend: [
      {
        name: "NestJS",
        description: "Modular Node.js framework with clean architecture",
      },
      {
        name: "Prisma",
        description: "ORM for database interaction",
      },
      {
        name: "PostgreSQL",
        description: "Relational database",
      },
      {
        name: "Socket.io",
        description: "Bidirectional real-time communication",
      },
      {
        name: "JWT",
        description: "Authentication and access control",
      },
      {
        name: "Firebase Admin",
        description: "Push notification delivery",
      },
      {
        name: "Docker",
        description: "Containerization for consistent deployment",
      }
    ],
    devOps: [
      {
        name: "GitHub Actions",
        description: "Continuous integration and deployment",
      },
      {
        name: "Docker Compose",
        description: "Container orchestration",
      }
    ],
  },
  
  projectRole: {
    title: "Frontend Development Lead",
    responsibilities: [
      "Designing the general frontend architecture following principles of modularity and reusability",
      "Implementing the folder structure and establishing code conventions for the team",
      "Developing core components like the interactive calendar and control panels",
      "Integrating Service Workers to enable push notifications, a crucial aspect for user experience",
      "Establishing real-time communication with the backend using Socket.io",
      "Collaborating closely with the backend team to define API contracts and optimize queries"
    ],
    teamContext: "I worked in a team of 4 people (2 frontend, 2 backend), leading the user interface development while maintaining constant communication with all members to ensure smooth integration.",
    keyAchievements: [
      "Design and implementation of the real-time push notification system, which required mastering technologies such as Service Workers and Firebase",
      "Creation of a custom calendar component that precisely met the business requirements, with intuitive interfaces for managing appointments across different time views",
      "Establishment of effective real-time updates that allowed all staff members to see changes immediately, improving coordination and reducing double-bookings",
      "Implementation of performance optimizations that reduced initial load times by approximately 40% through lazy loading and code splitting"
    ],
    team: [
      {
        name: "Pablo Villacrés",
        role: "Frontend Lead Developer",
        responsibilities: [
          "Frontend architecture design",
          "Core components development",
          "Push notification implementation",
          "WebSocket integration"
        ],
        image: CLOUDINARY_IMAGES.PROFILE_PICTURE
      },
      {
        name: "Patricio Jimenez",
        role: "UI Developer",
        responsibilities: [
          "UI component implementation",
          "Form validation",
          "Responsive design"
        ],
        image: CLOUDINARY_IMAGES.PATRICK_PROFILE_2
      },
      {
        name: "Sebastián Camino",
        role: "Backend Architect",
        responsibilities: [
          "API design",
          "Database schema",
          "Authentication system",
          "WebSocket server"
        ],
        image: CLOUDINARY_IMAGES.SEBAS_PROFILE
      },
      {
        name: "Jair Mera",
        role: "API Developer",
        responsibilities: [
          "API implementation",
          "Data validation",
          "Firebase integration"
        ],
        image: CLOUDINARY_IMAGES.JAIR_PROFILE
      }
    ],
  },
  
  challenges: [
    {
      title: "Custom Calendar Implementation",
      description: "One of the most significant challenges was the lack of a suitable calendar library that met all our requirements. After evaluating several options, we determined that none provided the specific functionality needed for mechanic scheduling and appointment management. This necessitated building a custom calendar solution from scratch.",
      solution: "We addressed the calendar implementation challenge by creating a foundational calendar engine with pure JavaScript date manipulation, building three separate view components (day, week, month) that shared core logic, implementing a custom time slot system with conflict detection, and developing specialized mechanic availability visualization. We used CSS Grid for precise time slot positioning.",
      codeExample: `
const useCalendarWeek = ({ 
  scheduleWithEvents, 
  onChange, 
  onClick 
}: IUseCalendarWeek) => {
  const [week, setWeek] = useState<IDay[]>([]);
  const [date, setDate] = useState(new Date().toISOString());
  const [schedule, setSchedule] = useState<IScheduleWeek[]>(
    scheduleWithEvents.length ? scheduleWithEvents : scheduleWeek
  );

  // Generate week days based on current date
  useEffect(() => {
    setWeek(generateWeek(date));
  }, [date]);

  // Update schedule when events change
  useEffect(() => {
    setSchedule(scheduleWithEvents.length ? scheduleWithEvents : scheduleWeek);
  }, [scheduleWithEvents]);

  // Trigger event handlers when week changes
  useEffect(() => {
    if (week.length) {
      onChange(week[0].date, week[6].date);
    }
  }, [week]);

  // Handle event clicks
  const handleClickEvent = (date: string) => {
    onClick(date);
  };

  return { week, date, setDate, schedule, handleClickEvent };
};`
    },
    {
      title: "Real-Time Notifications System",
      description: "Implementing push notifications presented multiple challenges, particularly around device identification and token management. While Firebase provided a solid foundation, we still faced issues with browser-specific token generation behaviors, token refresh mechanisms, different notification display behaviors between foreground and background states, and creating campaigns to notify specific user groups based on roles.",
      solution: "We implemented a token registration and refresh strategy that stores tokens in the database, subscription management that ties devices to specific users, role-based notification targeting using Firebase Cloud Messaging, different notification templates for foreground and background states, and a persistent notification permission model with recovery options.",
      codeExample: `
async function create(createSubscriptionDto: CreateSubscriptionDto) {
  const encryptedEndpoint = await this.cryptoService.encryptString(
    createSubscriptionDto.token
  );

  // Check for existing subscriptions to prevent duplicates
  const subscriptions = await this.findAllByUser(createSubscriptionDto.userCI);
  if (subscriptions.length > 0) {
    const promise = subscriptions.map(async (subscription) => {
      const decrypted = await this.cryptoService.decryptString(
        subscription.token
      );
      if (decrypted === createSubscriptionDto.token) {
        throw new SubscriptionAlreadyExistsException();
      }
      return subscription;
    });

    await Promise.all(promise);
  }

  // Create new subscription
  const subscription = await this.prisma.subscription.create({
    data: {
      userCI: createSubscriptionDto.userCI,
      token: encryptedEndpoint,
    },
  });

  return {
    id: subscription.id,
    userCI: subscription.userCI,
    available: subscription.available,
  };
}`
    },
    {
      title: "Real-Time Communication Architecture",
      description: "The initial architecture didn't include WebSockets, but as development progressed, it became clear that real-time updates were essential for a collaborative scheduling environment. Implementing Socket.io required significant refactoring to create proper channel structures, establish event patterns, handle connection states, and maintain socket authentication across sessions.",
      solution: "To implement real-time communication, we created separated WebSocket gateways for different features (appointments, reminders), established room-based communication channels for administrators and mechanics, implemented event-driven architecture for notifications, and added reconnection handling with session persistence.",
      codeExample: `
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppointmentsGateway {
  @WebSocketServer()
  server: Server;

  private allowedRoles: Role[] = [
    'ADMIN',
    'SECRETARY',
    'MECHANIC',
    'TECHNICIAN_MECHANIC',
  ];

  async broadcastAppointmentCreation(appointment: IAppointmentWithUser) {
    this.server.to('mechanics').emit('appointments-change');

    const subscriptions = await this.subscriptionsService.findByRoles(
      this.allowedRoles,
    );

    try {
      subscriptions.forEach((subscription) => {
        this.notificationsService.sendPushNotification({
          title: 'New appointment',
          body: \`Client: \${appointment.clientName} - Assigned to: \${appointment.user.firstName} \${appointment.user.lastName} - \${stringLocaleDate(appointment.date)}\`,
          endpoint: subscription.token,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
}`
    },
    {
      title: "Performance Optimization",
      description: "The modular architecture initially caused performance issues as modules were being loaded regardless of whether they were actively used. This resulted in unnecessary network requests and slower initial page loads.",
      solution: "To address performance issues, we implemented lazy loading for non-critical modules, code splitting based on user roles and access patterns, strategic data prefetching for common navigation paths, query result caching with React Query, and optimistic UI updates to improve perceived performance."
    },
    {
      title: "Browser Compatibility",
      description: "iOS Safari presented unique challenges, particularly with push notifications. The token generation and management behaved differently from other browsers, requiring special handling.",
      solution: "For iOS Safari support, we implemented browser detection and conditional token handling, created a notification reactivation feature for recovering lost subscriptions, built fallback notification patterns using local storage and polling, and added detailed logging for troubleshooting device-specific issues."
    }
  ],
  
  learningOutcomes: {
    newSkills: [
      {
        title: "Advanced State Management with TanStack Query",
        description: "Working on this project was my first deep dive into TanStack Query (formerly React Query).",
        bulletPoints: [
          "Implementing sophisticated caching strategies",
          "Managing server state with automatic background refreshing",
          "Handling dependent and parallel queries",
          "Optimizing data fetching with query invalidation patterns",
          "Creating custom query hooks for specific business logic"
        ]
      },
      {
        title: "Firebase Push Notification Service",
        description: "The notification requirements pushed me to master Firebase Cloud Messaging",
        bulletPoints: [
          "Implementing service worker registration and management",
          "Handling browser permission flows",
          "Creating encrypted token storage mechanisms",
          "Building notification delivery pipelines",
          "Developing cross-browser compatible solutions"
        ]
      }
    ],
    technicalLessons: [
      {
        title: "Architecture Flexibility",
        description: "I learned that dynamic solutions aren't always optimal depending on project requirements.",
        bulletPoints: [
          "Our architecture evolved significantly throughout development as we better understood usage patterns and performance implications",
          "Maintaining flexibility in architectural decisions and adapting based on emerging requirements rather than committing to an idealized structure upfront",
          "Balancing engineering elegance with practical constraints"
        ]
      },
      {
        title: "Platform-Specific Considerations",
        description: "The challenges with mobile web, particularly around push notifications, highlighted the importance of platform-specific planning.",
        bulletPoints: [
          "While PWAs offer great flexibility, they come with browser-specific constraints",
          "Understanding the impact of these constraints on development time and user experience",
          "Implementing platform-specific workarounds when necessary"
        ]
      },
      {
        title: "Performance Optimization Strategies",
        description: "Working within the constraints of a modular architecture required a deeper understanding of performance optimization techniques.",
        bulletPoints: [
          "Identifying loading bottlenecks",
          "Implementing targeted solutions like code splitting, lazy loading, and strategic data prefetching",
          "Balancing feature richness with performance considerations"
        ]
      },
      {
        title: "Socket Management Patterns",
        description: "Separating HTTP and WebSocket concerns proved valuable both for code organization and performance.",
        bulletPoints: [
          "Event-based communication architecture",
          "Room-based filtering for targeted updates",
          "Connection management and recovery",
          "Maintaining authentication context across connections"
        ]
      }
    ],
    areasForImprovement: [
      {
        title: "Mobile-First Framework Selection",
        description: "Given the primarily mobile usage of the application, a dedicated mobile framework (like React Native) might have been more effective than a PWA. This would have simplified native integrations like push notifications while still allowing code sharing for business logic."
      },
      {
        title: "Performance Optimization Knowledge",
        description: "While I implemented several performance improvements, the project highlighted the need for deeper knowledge of frontend optimization techniques, particularly around component rendering performance and bundle size management."
      },
      {
        title: "Socket-Data Synchronization",
        description: "The current implementation relies on refetching data after socket notifications, which could be optimized. Implementing a more sophisticated data synchronization pattern could reduce unnecessary network requests while maintaining real-time updates."
      },
      {
        title: "Collaborative Development Practices",
        description: "The project taught me that effective team collaboration requires more than technical solutions. Better documentation, code review processes, and communication practices would improve development efficiency and knowledge sharing."
      }
    ]
  },
  
  visualContent: {
    mainImage: CLOUDINARY_IMAGES.WORK_TRACKING_MAIN,
    screenshots: [
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106115/gm-1_f7fwdq.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106158/gm-2_yadc0a.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106170/gm-3_ppmqey.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106170/gm-4_cotbnp.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106170/gm-5_xijgmy.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106172/gm-6_bpfej6.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106172/gm-7_nscwkc.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106173/gm-8_cturxv.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106182/gm-9_hh3ryv.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106116/gm-10_vs4wof.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106116/gm-11_jmd2ag.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106117/gm-12_ub2xz5.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106126/gm-13_mayau6.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106127/gm-14_nfnykt.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106127/gm-15_smjunr.png"
    ]
  },
  
  company: {
    name: "GabMotors",
    logo: CLOUDINARY_IMAGES.WORK_TRACKING_MONTH_VIEW
  },
  

};