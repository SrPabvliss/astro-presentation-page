import type { DetailedProject } from "@/types/project-detail.interface";
import { Truck } from "lucide-react";
import { CLOUDINARY_IMAGES } from "../cloudinary";

export const TRANSLOGI_PROJECT: DetailedProject = {
  id: "translogi",
  title: "TransLogi",
  shortDescription: "Heavy Cargo Transportation Platform",
  
  clientInfo: {
    name: "MACOD SAS",
    location: "Ecuador",
    industry: "Transportation & Logistics",
    challenge: "Prior to TransLogi, arranging heavy cargo transportation in Ecuador was predominantly an informal process requiring personal connections to truck owners. This system lacked transparency, reliability, and security, particularly problematic given the valuable nature of the cargo being transported. The cultural resistance to trusting digital platforms with high-value shipments presented a unique challenge for market adoption.",
  },
  
  implementedBenefits: [
    "Streamlined Connections: Direct matching between cargo owners and transporters based on specific needs",
    "Location-Based Services: Google Maps integration for precise pickup and delivery point selection",
    "Dynamic Pricing: Transparent negotiation system with offer and counter-offer capabilities",
    "Capacity Matching: Intelligent cargo-to-vehicle matching based on weight and volume requirements",
    "Real-Time Tracking: Live location monitoring of cargo throughout the transportation journey",
    "Secure Deliveries: OTP verification and QR code confirmation system for validated handovers",
    "Integrated Payments: Secure payment gateway for seamless financial transactions",
  ],
  
  keyFeatures: [
    {
      title: "Location-Based Services",
      description: "The cornerstone of TransLogi is its comprehensive Google Maps integration that enables precise location management for origin and destination points, providing route visualization and distance estimation for both users and transporters.",
      bulletPoints: [
        "Intuitive address selection with search or direct map pin dropping",
        "Route visualization between pickup and delivery points",
        "Distance and time estimation for accurate planning",
        "Geofencing capabilities for pickup/delivery zone notifications",
        "Location history tracking for complete journey documentation"
      ],
      image: CLOUDINARY_IMAGES.TRANSLOGI_LOCATION,
      imageAlt: "TransLogi map interface showing route visualization between pickup and delivery points"
    },
    {
      title: "Intelligent Matching System",
      description: "TransLogi employs a sophisticated matching algorithm connecting cargo owners with the most suitable transporters based on multiple factors like proximity, vehicle capacity, and availability.",
      bulletPoints: [
        "Vehicle classification system (heavy, medium, and light load)",
        "Proximity-based search within customizable radius",
        "Compatibility filtering matching cargo with appropriate vehicles",
        "Availability scheduling for coordinated pickups and deliveries",
        "Driver verification system with background checks"
      ],
      image: CLOUDINARY_IMAGES.TRANSLOGI_MATCHING,
      imageAlt: "Driver matching interface showing available transporters for a cargo request"
    },
    {
      title: "Dynamic Price Negotiation",
      description: "The application features an advanced pricing and negotiation system that generates fair estimates and facilitates transparent price discussions between cargo owners and transporters.",
      bulletPoints: [
        "Multi-variable price calculation (distance, weight, vehicle type)",
        "Structured offer/counter-offer workflow with clear progression",
        "Limited negotiation rounds to encourage efficient decision-making",
        "Price range enforcement preventing excessive variations",
        "Real-time notifications for new offers"
      ],
      image: CLOUDINARY_IMAGES.TRANSLOGI_NEGOTIATION,
      imageAlt: "Price negotiation interface showing offer timeline and negotiation controls"
    },
    {
      title: "Real-Time Tracking & Verification",
      description: "TransLogi provides comprehensive real-time tracking throughout the journey and secure delivery verification, ensuring complete transparency and security for valuable cargo.",
      bulletPoints: [
        "Live GPS tracking with background location services",
        "Battery-optimized tracking with intelligent adjustment",
        "Standardized status definitions with milestone notifications",
        "Time-sensitive OTP for secure delivery verification",
        "QR code scanning for additional verification"
      ],
      image: CLOUDINARY_IMAGES.TRANSLOGI_OTP,
      imageAlt: "Real-time tracking interface showing cargo location and status timeline"
    }
  ],
  
  technicalStack: {
    frontend: [
      {
        name: "React Native",
        description: "Framework for building cross-platform mobile applications",
      },
      {
        name: "TypeScript",
        description: "Strongly-typed language extending JavaScript",
      },
      {
        name: "Expo",
        description: "Platform for simplifying React Native development",
      },
      {
        name: "Gluestack UI",
        description: "Component library for consistent design",
      },
      {
        name: "Zustand",
        description: "Lightweight state management solution",
      },
      {
        name: "React Hook Form",
        description: "Performant form management with Zod validation",
      },
      {
        name: "TanStack Query",
        description: "Data fetching and server state management",
      },
      {
        name: "Google Maps SDK",
        description: "Location services and mapping functionality",
      }
    ],
    backend: [
      {
        name: "NestJS",
        description: "Progressive Node.js framework with TypeScript",
      },
      {
        name: "Prisma ORM",
        description: "Next-generation database toolkit",
      },
      {
        name: "PostgreSQL",
        description: "Advanced open-source relational database",
      },
      {
        name: "PostGIS",
        description: "Spatial database extension for PostgreSQL",
      },
      {
        name: "JWT",
        description: "JSON Web Tokens for authentication",
      },
      {
        name: "Socket.io",
        description: "Real-time bidirectional event-based communication",
      },
      {
        name: "Zod",
        description: "TypeScript-first schema validation",
      },
      {
        name: "Cloudinary",
        description: "Cloud-based image and file management"
      }
    ],
    devOps: [
      {
        name: "Docker",
        description: "Containerization for consistent deployment",
      },
      {
        name: "GitHub Actions",
        description: "CI/CD pipeline automation",
      },
      {
        name: "Neon PostgreSQL",
        description: "Serverless PostgreSQL service",
      }
    ],
  },
  
  projectRole: {
    title: "Technical Project Lead",
    responsibilities: [
      "Directing the entire technical development while serving as the primary client liaison",
      "Gathering, analyzing, and translating client needs into actionable technical specifications",
      "Establishing database schema, API structure, and application architecture for both frontend and backend",
      "Creating development workflows and coding standards for the team",
      "Leading a small cross-functional team while actively contributing to both codebases",
      "Ensuring code quality and feature implementation aligned with project requirements",
      "Selecting appropriate technologies and frameworks to achieve project objectives within timeline constraints"
    ],
    teamContext: "I worked in a small, focused team of 3 people: myself as Technical Lead contributing to both frontend and backend development, one dedicated frontend developer focusing on the mobile application interface, and one dedicated backend developer building the API infrastructure. The compact team size required maintaining clear communication channels, providing detailed specifications, and establishing unambiguous priorities.",
    keyAchievements: [
      "Successfully designed and implemented the core architecture for both frontend and backend codebases",
      "Developed critical system components including the negotiation module, location services, and tracking functionality",
      "Managed tight MVP development timelines while maintaining code quality and feature integrity",
      "Facilitated seamless collaboration between frontend and backend development efforts",
      "Established clear documentation practices for long-term code sustainability",
      "Delivered a functional MVP that demonstrated the platform's potential to revolutionize Ecuador's heavy cargo transportation market"
    ],
    team: [
      {
        name: "Pablo Villacrés",
        role: "Technical Project Lead",
        responsibilities: [
          "Overall project architecture",
          "Client communication and requirements",
          "Core feature development",
          "Team coordination",
          "Both frontend and backend development"
        ],
        image: "/images/profile-picture.png"
      },
      {
        name: "Frontend Developer",
        role: "Mobile Application Specialist",
        responsibilities: [
          "Mobile UI implementation",
          "UI/UX optimization",
          "Component development",
          "User experience testing"
        ],
        image: CLOUDINARY_IMAGES.ADRIAN_PROFILE
      },
      {
        name: "Backend Developer",
        role: "API Infrastructure Developer",
        responsibilities: [
          "API endpoint implementation",
          "Database schema implementation",
          "Security implementation",
          "Service integrations"
        ],
        image: CLOUDINARY_IMAGES.SEBAS_PROFILE
      }
    ],
  },
  
  challenges: [
    {
      title: "Map Integration and Performance",
      description: "The map functionality initially suffered from excessive re-rendering issues, particularly when trying to implement an interactive marker for location selection. This created performance problems and a jarring user experience.",
      solution: "I implemented a fixed-pin approach where the marker remains static in the center of the screen while the map moves underneath it. This significantly improved performance while maintaining the same functionality, creating a smoother user experience without requiring constant re-renders of both the map and marker components.",
      codeExample: `
const LocationSelectorView = () => {
  const [currentRegion, setCurrentRegion] = useState(initialRegion);
  
  // Map moves under a fixed center pin
  const handleRegionChangeComplete = (region) => {
    // Only update coordinates when user stops moving the map
    setLastCoordinates({
      latitude: region.latitude,
      longitude: region.longitude,
    });
  };
  
  return (
    <View style={styles.container}>
      <CustomMap
        initialRegion={currentRegion}
        onRegionChangeComplete={handleRegionChangeComplete}
      />
      
      {/* Fixed pin in center of screen */}
      <View style={styles.fixedPinContainer}>
        <Ionicons name="location" size={34} color="orange" />
      </View>
      
      <Button onPress={confirmLocation}>Confirm Location</Button>
    </View>
  );
};`
    },
    {
      title: "Geospatial Search Implementation",
      description: "Implementing location-based search functionality required working with PostGIS for the first time, necessitating understanding of geographical queries and spatial indexing to enable efficient driver discovery based on proximity.",
      solution: "We developed a custom location service that combined PostGIS spatial queries with efficient caching strategies. This implementation provided a responsive search experience while minimizing unnecessary API calls through debouncing and intelligent radius calculations based on location density.",
      codeExample: `
@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  async findTransportersNearby(params: NearbySearchParams): Promise<Transporter[]> {
    const { latitude, longitude, radius = 10, limit = 20 } = params;
    
    // Using PostGIS ST_DWithin for efficient radius search with spatial index
    const transporters = await this.prisma.$queryRaw\`
      SELECT 
        t.*, 
        ST_Distance(
          ST_SetSRID(ST_MakePoint(t.last_longitude, t.last_latitude), 4326)::geography, 
          ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::geography
        ) / 1000 AS distance_km
      FROM "Transporter" t
      WHERE 
        t.is_active = true 
        AND t.available_for_work = true
        AND ST_DWithin(
          ST_SetSRID(ST_MakePoint(t.last_longitude, t.last_latitude), 4326)::geography,
          ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::geography,
          radius * 1000
        )
      ORDER BY distance_km ASC
      LIMIT limit
    \`;
    
    return transporters as Transporter[];
  }
}`
    },
    {
      title: "Real-Time Tracking with Background Services",
      description: "Implementing reliable background location tracking that could maintain connection with the server while respecting battery life was a significant challenge, especially with the varying background processing limitations across different mobile devices.",
      solution: "For the real-time tracking functionality, we implemented Expo's TaskManager to handle background location updates with dynamic intervals based on movement speed. This implementation optimized battery usage while maintaining reliable tracking data for active trips.",
      codeExample: `
TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.error('Error in location task:', error);
    return;
  }
  try {
    const { locations } = data as { locations: Location.LocationObject[] };
    const location = locations[0];
    
    // Calculate optimal update interval based on speed
    if (trackingOptions?.speedThreshold && location.coords.speed != null) {
      const newInterval = calculateUpdateInterval(location.coords.speed);
      await updateTrackingInterval(newInterval);
    }
    
    // Emit location to socket server
    const socket = socketClient.getSocket(SOCKET_NAMESPACE.TRACKING);
    socket.emit('updateLocation', {
      id_viaje: activeTrip,
      latitud: location.coords.latitude,
      longitud: location.coords.longitude,
      timestamp: new Date(location.timestamp).toISOString(),
    });
  } catch (error) {
    console.error('Error processing location:', error);
  }
});`
    },
    {
      title: "Negotiation System with Business Rules",
      description: "Building a negotiation system that enforced business rules while providing flexibility was complex. The system needed to allow cargo owners and transporters to negotiate prices within constrained parameters while preventing exploitation.",
      solution: "I implemented a negotiation system with clear business rules that enforced pricing constraints based on user role and initial offer, limiting negotiation rounds to prevent endless back-and-forth, and providing real-time updates through WebSockets.",
      codeExample: `
export const useRespondToOffer = () => {
  const queryClient = useQueryClient();
  const repository = NegotiationRepositoryImpl.getInstance();
  
  return useMutation({
    mutationFn: ({
      negotiationId,
      action,
      price,
    }: {
      negotiationId: number;
      action: NegotiationAction;
      price?: number;
    }) => {
      // Validate price constraints based on role
      if (action === 'CONTRAOFERTA' && price) {
        const currentNegotiation = queryClient.getQueryData(
          NEGOTIATION_KEYS.detail(negotiationId)
        );
        
        // Apply business rules: 
        // - Driver cannot offer more than initial offer
        // - Client cannot offer less than initial offer
        // - Both limited to ±5% from base price
        if (!isValidOffer(currentNegotiation, price, userRole)) {
          throw new Error('Invalid offer amount');
        }
      }
      
      return repository.respondToOffer(negotiationId, action, price);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: NEGOTIATION_KEYS.detail(data.id),
      });
      queryClient.invalidateQueries({
        queryKey: NEGOTIATION_KEYS.list(data.id_solicitud),
      });
    },
  });
};`
    },
    {
      title: "Secure Delivery Verification",
      description: "Developing a proprietary OTP system for delivery verification presented challenges in terms of secure generation, storage, and validation of time-sensitive codes, especially with the need to handle potential network issues during the verification process.",
      solution: "We implemented a comprehensive OTP solution with automatic cleanup that generated time-sensitive codes (valid for only 2 minutes), sent them through multiple channels (in-app and email), and included QR code verification as a backup method when network connectivity was limited.",
      codeExample: `
// Backend OTP generation
@Injectable()
export class OtpService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
    private emailService: EmailService,
  ) {}

  async generateDeliveryOtp(tripId: number, userId: number): Promise<OtpResponse> {
    // Generate random 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Hash code for storage
    const hashedCode = await bcrypt.hash(code, 10);
    
    // Set expiration (2 minutes)
    const expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() + 2);
    
    // Store in database
    await this.prisma.otpViajes.create({
      data: {
        id_viaje: tripId,
        codigo: hashedCode,
        fecha_expiracion: expirationDate,
        generado_por: userId,
        activo: true,
      },
    });
    
    // Send notifications
    await this.sendOtpNotifications(tripId, code);
    
    return { 
      success: true,
      message: 'OTP generated successfully',
      expiresAt: expirationDate
    };
  }
  
  // Scheduled cleanup job
  @Cron('0 * * * *') // Run hourly
  async cleanupExpiredOTPs() {
    try {
      const result = await this.prisma.otpViajes.updateMany({
        where: {
          OR: [
            { fecha_expiracion: { lt: new Date() } },
            { usado: true, fecha_expiracion: { lt: new Date(Date.now() - 24 * 60 * 60 * 1000) } }
          ],
          activo: true
        },
        data: {
          activo: false
        }
      });
      
      this.logger.log(\`Cleaned up \${result.count} expired or used OTPs\`);
    } catch (error) {
      this.logger.error('Error cleaning up OTPs', error);
    }
  }
}`
    }
  ],
  
  learningOutcomes: {
    newSkills: [
      {
        title: "Team Leadership",
        description: "This project marked a substantial step in my journey as a technical leader, requiring new skills in team coordination and client communication.",
        bulletPoints: [
          "Coordinating effectively between developers, designers, and marketing teams",
          "Establishing clear communication channels with clients and stakeholders",
          "Transforming client meetings into actionable tasks with realistic timelines",
          "Balancing technical implementation with team management responsibilities"
        ]
      },
      {
        title: "Mobile Development with Expo",
        description: "The project provided deeper expertise with React Native and Expo for mobile application development.",
        bulletPoints: [
          "Background location tracking implementation",
          "Cross-platform UI optimization",
          "Expo's module ecosystem and limitations",
          "Performance optimization for resource-intensive features",
          "Mobile-specific authentication flows"
        ]
      },
      {
        title: "Location-Based Services",
        description: "I gained hands-on experience with geospatial technologies and location-based services.",
        bulletPoints: [
          "Google Maps API integration for mobile",
          "PostGIS spatial queries and indexing",
          "Efficient proximity search algorithms",
          "Background location tracking with battery optimization",
          "Geofencing implementation"
        ]
      }
    ],
    technicalLessons: [
      {
        title: "Architecture Preferences",
        description: "Through this experience with the DAO pattern, I discovered that I personally prefer the Hexagonal Architecture approach for long-term maintainability.",
        bulletPoints: [
          "Practical comparison between different architectural patterns",
          "Understanding the trade-offs between architectural approaches",
          "Importance of clean separation between domain and infrastructure",
          "Long-term maintainability considerations in architecture decisions"
        ]
      },
      {
        title: "Requirements Engineering",
        description: "One of the most significant lessons was the importance of detailed requirements gathering, especially with clients who have limited technical understanding.",
        bulletPoints: [
          "Asking more probing questions during initial project discussions",
          "Documenting assumptions and getting explicit confirmation",
          "Providing multiple alternatives with clear pros and cons",
          "Establishing realistic expectations about technical feasibility"
        ]
      },
      {
        title: "Mobile-First Development",
        description: "Developing primarily for mobile required rethinking many UI/UX patterns and state management approaches.",
        bulletPoints: [
          "Performance considerations specific to mobile devices",
          "Managing limited screen real estate effectively",
          "Handling intermittent connectivity gracefully",
          "Balancing battery usage with feature requirements"
        ]
      },
      {
        title: "Real-Time Systems",
        description: "Implementing WebSockets and real-time tracking required careful consideration of connection management and state synchronization.",
        bulletPoints: [
          "WebSocket connection management in mobile environments",
          "Handling reconnection scenarios gracefully",
          "Optimizing data transfer for real-time updates",
          "Maintaining consistent state across multiple connected clients"
        ]
      }
    ],
    areasForImprovement: [
      {
        title: "Time Estimation",
        description: "I learned that my time estimates for complex features, especially those involving third-party integrations, were often too optimistic. Future projects would benefit from more conservative estimates with appropriate buffers."
      },
      {
        title: "Client Expectation Management",
        description: "I could improve at setting clear expectations with clients from the beginning, especially regarding the complexity of certain features and their impact on timelines."
      },
      {
        title: "Technical Documentation",
        description: "While we maintained good code documentation, our system architecture documentation could have been more comprehensive, which would have aided onboarding and knowledge transfer."
      },
      {
        title: "Test Coverage",
        description: "Due to time constraints, our test coverage wasn't as comprehensive as I would have liked. In future projects, I would advocate more strongly for adequate time allocation for testing critical components."
      }
    ]
  },
  
  visualContent: {
    mainImage: "/optimized-images/projects/translogi/main-image-4-medium.webp",
    screenshots: [
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106360/tl-1_kmedhz.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106393/tl-2_dbn3cm.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106394/tl-3_znhrxe.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106411/tl-4_qd8iuw.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106411/tl-5_vgj2c2.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106412/tl-6_wahsrr.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106412/tl-7_khat05.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106414/tl-8_sxmabq.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106414/tl-9_zs0dr6.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106361/tl-10_tmrezt.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106366/tl-11_kv80kg.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106390/tl-12_ger3oi.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106390/tl-13_tpyi8k.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106391/tl-14_boceur.png",
      "https://res.cloudinary.com/dge98w5ln/image/upload/v1749106391/tl-15_weqqsw.png"
    ]
  },
  
  company: {
    name: "MACOD SAS",
    // icon: Truck,
    logo: "/images/projects/translogi/macod-logo.png"
  },
  
  links: {
    github: "",
    demo: "",
    case_study: ""
  }
};