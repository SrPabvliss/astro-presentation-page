import type { DetailedProject } from "@/types/project-detail.interface";
import { CLOUDINARY_IMAGES } from "@/constants/cloudinary";

export const GAB_MOTORS_PROJECT: DetailedProject = {
    id: "gab-motors",
    title: "GabMotors Schedule",
    shortDescription: "Auto Shop Management Platform",
  
    clientInfo: {
      name: "GabMotors",
      location: "Latacunga, Ecuador",
      industry: "Automotive Services",
      challenge: "The shop lacked a unified system to coordinate appointments, inspections, and internal communication, leading to disorganization and delays."
    },
  
    implementedBenefits: [
      "Unified calendar for team coordination",
      "Real-time task updates and mechanic tracking",
      "Automated reminders and alerts",
      "Improved resource and personnel management"
    ],
  
    keyFeatures: [
      {
        title: "Interactive Calendar",
        description: "Dynamic scheduling with multi-view modes, drag-and-drop, and filters by service or mechanic.",
        bulletPoints: [
          "Mechanic color coding",
          "Responsive design",
          "Appointment validation"
        ],
        image: CLOUDINARY_IMAGES.WORK_TRACKING_CALENDAR,
        imageAlt: "Calendar view with color-coded appointments"
      },
      {
        title: "Inspection Tracking",
        description: "Panel to log and monitor inspections with task history and technical notes.",
        bulletPoints: [
          "Progress status per inspection",
          "Service history by vehicle"
        ],
        image: CLOUDINARY_IMAGES.WORK_TRACKING,
        imageAlt: "Service tracking panel"
      },
      {
        title: "Real-Time Notifications",
        description: "Push notifications for appointments, changes, and task assignments via Firebase and Service Workers.",
        bulletPoints: [
          "Role-based alerts",
          "Foreground/background compatibility"
        ],
        image: CLOUDINARY_IMAGES.WORK_TRACKING_NOTIFICATIONS,
        imageAlt: "Push notification interface"
      },
      {
        title: "Admin Dashboard",
        description: "Centralized control for meetings, personnel, inspection records, and permissions.",
        bulletPoints: [
          "Role-based access",
          "Advanced inspection search"
        ],
        image: CLOUDINARY_IMAGES.WORK_TRACKING_V3,
        imageAlt: "Admin dashboard"
      }
    ],
  
    technicalStack: {
        frontend: [
          { name: "Next.js", description: "React framework for server-side and static site generation" },
          { name: "TypeScript", description: "Strongly typed language for scalable JavaScript development" },
          { name: "Tailwind CSS", description: "Utility-first CSS framework for responsive UI" },
          { name: "Shadcn UI", description: "Prebuilt accessible React components styled with Tailwind" },
          { name: "React Query", description: "Data-fetching library with smart caching and synchronization" },
          { name: "Socket.io-client", description: "Client-side WebSocket library for real-time communication" },
          { name: "React Hook Form", description: "Optimized form management for React apps" },
          { name: "Firebase", description: "Platform for messaging, auth, and cloud services" },
          { name: "Service Workers", description: "Background scripts enabling offline support and push notifications" }
        ],
        backend: [
          { name: "NestJS", description: "Modular Node.js framework with strong TypeScript support" },
          { name: "Prisma", description: "Type-safe ORM for relational databases" },
          { name: "PostgreSQL", description: "Reliable open-source relational database" },
          { name: "Socket.io", description: "WebSocket library for real-time bidirectional communication" },
          { name: "JWT", description: "Token-based authentication standard for secure access control" },
          { name: "Firebase Admin", description: "Server-side SDK for Firebase services" },
          { name: "Docker", description: "Container platform for reproducible deployments" }
        ],
        devOps: [
          { name: "GitHub Actions", description: "CI/CD pipelines for automated testing and deployment" },
          { name: "Docker Compose", description: "Service orchestration tool for multi-container apps" }
        ]
      },
  
    projectRole: {
      title: "Frontend Development Lead",
      responsibilities: [
        "Frontend architecture and codebase setup",
        "Core component development (calendar, tracking, notifications)",
        "Real-time integration with backend APIs"
      ],
      teamContext: "Led frontend in a 4-person team (2 FE, 2 BE), coordinating UI and real-time features.",
      keyAchievements: [
        "Custom calendar component tailored to business needs",
        "Full real-time sync with push notifications",
        "Load optimization via lazy loading and code splitting"
      ],
      team: [
        { name: "Pablo Villacrés", role: "Frontend Lead Developer", responsibilities: ["UI architecture", "Push notifications", "WebSocket integration"], image: CLOUDINARY_IMAGES.PROFILE_PICTURE },
        { name: "Patricio Jimenez", role: "UI Developer", responsibilities: ["Form validation", "Responsive design"], image: CLOUDINARY_IMAGES.PATRICK_PROFILE_2 },
        { name: "Sebastián Camino", role: "Backend Architect", responsibilities: ["API design", "WebSocket server"], image: CLOUDINARY_IMAGES.SEBAS_PROFILE },
        { name: "Jair Mera", role: "API Developer", responsibilities: ["Firebase integration", "Data validation"], image: CLOUDINARY_IMAGES.JAIR_PROFILE }
      ]
    },
  
    challenges: [
        {
          title: "Custom Calendar",
          description: "Built from scratch to handle mechanic schedules, time slots, and availability with dynamic views.",
          solution: "Implemented a custom calendar engine with reusable logic for day, week, and month views, ensuring intuitive scheduling and conflict detection.",
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
          title: "Push Notifications",
          description: "Token management, device targeting, and role-based notification strategies via Firebase.",
          solution: "Integrated Firebase Cloud Messaging with role-based logic, persistent tokens, and cross-browser compatibility using Service Workers.",
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
          title: "WebSocket Communication",
          description: "Real-time event-driven updates across users, rooms, and system modules.",
          solution: "Structured channels by roles and features using Socket.io, with authentication and reconnection handling across sessions.",
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
          title: "Performance Tuning",
          description: "Reduced load times by 40% with code splitting, lazy loading, and smart prefetching.",
          solution: "Optimized module loading based on user roles, deferred non-critical scripts, and cached query responses with React Query."
        },
        {
          title: "Browser Compatibility",
          description: "Handled iOS-specific issues with fallback strategies and detailed logging.",
          solution: "Implemented browser-specific handling, fallback notification patterns for iOS, and reactive logging for debugging edge cases."
        }
      ],
      
  
      learningOutcomes: {
        newSkills: [
          {
            title: "React Query (TanStack)",
            description: "Hands-on experience managing server state and optimizing data fetching.",
            bulletPoints: [
              "Caching strategies",
              "Background refresh",
              "Parallel queries"
            ]
          },
          {
            title: "Firebase Cloud Messaging",
            description: "Deep dive into real-time messaging and push notification systems.",
            bulletPoints: [
              "Token encryption",
              "Permission flows",
              "Cross-browser delivery"
            ]
          }
        ],
        technicalLessons: [
          {
            title: "Flexible Architecture",
            description: "Adapting technical decisions as project needs evolve.",
            bulletPoints: [
              "Adapting structure to evolving needs",
              "Balancing flexibility with clarity"
            ]
          },
          {
            title: "Socket Design",
            description: "Designing a robust real-time communication layer with Socket.io.",
            bulletPoints: [
              "Room-based channels",
              "Session persistence",
              "Secure authentication"
            ]
          }
        ],
        areasForImprovement: [
          {
            title: "Mobile-First Framework",
            description: "React Native might have simplified native features like notifications."
          },
          {
            title: "Socket-Data Synchronization",
            description: "Reducing the reliance on refetching with more efficient local state updates."
          }
        ]
      },
      
      visualContent: {
        mainImage: CLOUDINARY_IMAGES.WORK_TRACKING_MAIN,
        screenshots: [
          "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1749106115/gm-1_f7fwdq.png",
          "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1749106158/gm-2_yadc0a.png",
          "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1749106170/gm-3_ppmqey.png",
          "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1749106170/gm-4_cotbnp.png",
          "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1749106170/gm-5_xijgmy.png",
          "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1749106172/gm-6_bpfej6.png",
          "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1749106172/gm-7_nscwkc.png",
          "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1749106173/gm-8_cturxv.png",
          "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1749106182/gm-9_hh3ryv.png",
          "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1749106116/gm-10_vs4wof.png",
          "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1749106116/gm-11_jmd2ag.png",
          "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1749106117/gm-12_ub2xz5.png",
          "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1749106126/gm-13_mayau6.png",
          "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1749106127/gm-14_nfnykt.png",
          "https://res.cloudinary.com/dge98w5ln/image/upload/f_auto,q_auto/v1749106127/gm-15_smjunr.png"
        ]
      },
  
    company: {
      name: "GabMotors",
      logo: CLOUDINARY_IMAGES.WORK_TRACKING_MONTH_VIEW
    }
  };
  