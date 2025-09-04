import type { DetailedProject } from "@/types/project-detail.interface";
import { Truck } from "lucide-react";
import { CLOUDINARY_IMAGES } from "../cloudinary";

export const TRANSLOGI_PROJECT: DetailedProject = {
  id: "translogi",
  title: "TransLogi",
  shortDescription: "Mobile platform for heavy cargo transport",

  clientInfo: {
    name: "MACOD SAS",
    location: "Ecuador",
    industry: "Transportation & Logistics",
    challenge:
      "The informal heavy cargo transport process lacked transparency and security, and there was low trust in digital platforms for high-value shipments.",
  },

  implementedBenefits: [
    "Direct connections between shippers and verified carriers",
    "Accurate geolocation with Google Maps SDK",
    "Dynamic price negotiation with clear rules",
    "Smart cargo-to-vehicle matching by capacity and availability",
    "Real-time tracking optimized for battery use",
    "Secure delivery verification via OTP/QR",
    "Integrated payments with full traceability",
  ],

  keyFeatures: [
    {
      title: "Location-Based Services",
      description:
        "Google Maps integration for selecting pickup/delivery points, route visualization, and ETA estimation.",
      bulletPoints: [
        "Address search or map pin drop",
        "Route display and time/distance estimate",
        "Geofence notifications",
      ],
      image: CLOUDINARY_IMAGES.TRANSLOGI_LOCATION,
      imageAlt: "Map interface showing route between pickup and delivery",
    },
    {
      title: "Intelligent Matching System",
      description:
        "Algorithm matching shippers with carriers based on proximity, vehicle capacity, and availability.",
      bulletPoints: [
        "Filter by vehicle type and capacity",
        "Configurable radius search",
        "Driver verification checks",
      ],
      image: CLOUDINARY_IMAGES.TRANSLOGI_MATCHING,
      imageAlt: "Interface showing matched carriers for a shipment request",
    },
    {
      title: "Price Negotiation",
      description:
        "Offer/counter-offer workflow with limits and real-time notifications.",
      bulletPoints: [
        "Transparent fare calculation by distance and load",
        "Limited negotiation rounds for quick decisions",
      ],
      image: CLOUDINARY_IMAGES.TRANSLOGI_NEGOTIATION,
      imageAlt: "Price negotiation interface with offer timeline",
    },
    {
      title: "Tracking & Verification",
      description:
        "Continuous shipment tracking and secure delivery confirmation via OTP and QR.",
      bulletPoints: ["Background GPS tracking", "Short-lived OTP for delivery"],
      image: CLOUDINARY_IMAGES.TRANSLOGI_OTP,
      imageAlt: "Real-time cargo tracking interface",
    },
  ],

  technicalStack: {
    frontend: [
      { name: "React Native", description: "Cross-platform mobile app framework" },
      { name: "TypeScript", description: "Static typing for robustness" },
      { name: "Expo", description: "Simplifies React Native development" },
      { name: "Gluestack UI", description: "Customizable UI components" },
      { name: "Zustand", description: "Lightweight state management" },
      { name: "React Hook Form", description: "Efficient form handling" },
      { name: "TanStack Query", description: "Data fetching and caching" },
      { name: "Google Maps SDK", description: "Location and mapping services" },
    ],
    backend: [
      { name: "NestJS", description: "TypeScript-based backend framework" },
      { name: "Prisma ORM", description: "Type-safe database toolkit" },
      { name: "PostgreSQL", description: "Reliable relational database" },
      { name: "PostGIS", description: "Spatial queries and indexing" },
      { name: "JWT", description: "Token-based authentication" },
      { name: "Socket.io", description: "Real-time event communication" },
      { name: "Zod", description: "Schema validation in TypeScript" },
      { name: "Cloudinary", description: "Media and file management" },
    ],
    devOps: [
      { name: "Docker", description: "Containerization for consistent deployment" },
      { name: "GitHub Actions", description: "Automated CI/CD pipelines" },
      { name: "Neon PostgreSQL", description: "Serverless PostgreSQL service" },
    ],
  },

  projectRole: {
    title: "Technical Project Lead",
    responsibilities: [
      "Lead architecture and technical coordination",
      "Define data schemas and API design",
      "Set development standards and workflows",
      "Oversee frontend and backend implementation",
      "Maintain client communication",
    ],
    teamContext:
      "Small team of 3: fullstack technical lead, mobile developer, and backend developer.",
    keyAchievements: [
      "Core architecture delivered within tight MVP timeline",
      "Critical modules (negotiation, geolocation, tracking) launched in production",
      "Established documentation and practices for maintainability",
      "Functional MVP validating business model",
    ],
    team: [
      {
        name: "Pablo Villacrés",
        role: "Technical Project Lead",
        responsibilities: [
          "Architecture design",
          "Client liaison",
          "Development of key features",
        ],
        image: "/images/profile-picture.png",
      },
      {
        name: "Frontend Developer",
        role: "Mobile App Specialist",
        responsibilities: ["Mobile UI implementation", "UX testing"],
        image: CLOUDINARY_IMAGES.ADRIAN_PROFILE,
      },
      {
        name: "Backend Developer",
        role: "API Developer",
        responsibilities: ["Endpoint implementation", "Database schema", "Security integrations"],
        image: CLOUDINARY_IMAGES.SEBAS_PROFILE,
      },
    ],
  },

  challenges: [
    {
      title: "Map Integration & Performance",
      description:
        "Excessive re-renders when moving markers caused poor UX and lag.",
      solution:
        "Implemented a fixed-center pin with the map moving underneath, reducing renders and improving fluidity.",
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
      title: "Geospatial Search with PostGIS",
      description:
        "Needed efficient proximity queries using spatial indexes for driver discovery.",
      solution:
        "Built location service with ST_DWithin queries plus caching and debouncing for fast responses.",
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
      title: "Background Tracking",
      description:
        "Maintain location updates without draining battery across various devices.",
      solution:
        "Used Expo TaskManager with adaptive intervals based on speed, balancing accuracy and power use.",
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
      title: "Negotiation System",
      description:
        "Complex business rules for offer/counter-offer with role-based limits.",
      solution:
        "Developed server and client logic enforcing price ranges and real-time updates via WebSockets.",
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
      description:
        "Generate and validate short-lived OTPs reliably even with intermittent connectivity.",
      solution:
        "Implemented OTPs valid for a brief window with in-app/email delivery and QR fallback, plus automatic cleanup.",
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
    },
  ],

  learningOutcomes: {
    newSkills: [
      {
        title: "Technical Leadership",
        description:
          "Coordinating a small fullstack team and aligning stakeholder expectations in a mobile project.",
        bulletPoints: [
          "Prioritizing tasks and timelines",
          "Translating requirements into technical deliverables",
          "Managing end-to-end development",
        ],
      },
      {
        title: "Mobile Development with Expo",
        description:
          "Deep expertise in React Native, background services, and performance optimization.",
        bulletPoints: [
          "Background location tracking",
          "Cross-platform UI optimization",
          "Handling Expo limitations",
        ],
      },
      {
        title: "Location Services",
        description:
          "Advanced geospatial integration and proximity algorithms.",
        bulletPoints: [
          "Google Maps SDK on mobile",
          "PostGIS queries with caching",
          "Geofencing and power management",
        ],
      },
    ],
    technicalLessons: [
      {
        title: "Architectural Preferences",
        description:
          "Evaluated patterns (DAO vs hexagonal) for maintainability and clarity.",
        bulletPoints: ["Balancing complexity vs simplicity", "Clear domain separation"],
      },
      {
        title: "Requirements Engineering",
        description:
          "Importance of deep questioning and clear documentation with non-technical clients.",
        bulletPoints: ["Validating assumptions", "Presenting options with pros/cons"],
      },
      {
        title: "Mobile-First Development",
        description:
          "Adapting UX and state management to mobile constraints and patterns.",
        bulletPoints: ["Optimizing for low resource use", "Handling intermittent connectivity"],
      },
      {
        title: "Real-Time Systems",
        description:
          "Managing WebSocket connections and state sync in mobile environments.",
        bulletPoints: ["Connection/reconnection handling", "Data transfer optimization"],
      },
    ],
    areasForImprovement: [
      {
        title: "Time Estimation",
        description:
          "Include additional buffers when planning third-party integrations.",
      },
      {
        title: "Expectation Management",
        description:
          "Communicate feature complexity and timeline impacts clearly to clients.",
      },
      {
        title: "Technical Documentation",
        description:
          "Expand architecture documentation to support onboarding and handover.",
      },
      {
        title: "Test Coverage",
        description:
          "Allocate sufficient time for testing critical components in future projects.",
      },
    ],
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
    logo: "/images/projects/translogi/macod-logo.png",
  },

  links: {
    github: "",
    demo: "",
    case_study: "",
  },
};
