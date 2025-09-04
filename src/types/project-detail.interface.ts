import type { IconType } from "react-icons";

export interface Technology {
  name: string;
  description: string;
  icon?: IconType;
}

export interface TeamMember {
  name: string;
  role: string;
  responsibilities: string[];
  image?: string;
}

export interface Feature {
  title: string;
  description: string;
  bulletPoints: string[];
  image: string;
  imageAlt: string;
}

export interface TechnicalStack {
  frontend: Technology[];
  backend?: Technology[];
  devOps?: Technology[];
}

export interface Challenge {
  title: string;
  description: string;
  solution: string;
  codeExample?: string;
}

export interface ProjectRole {
  title: string;
  responsibilities: string[];
  teamContext: string;
  keyAchievements: string[];
  team: TeamMember[];
}

export interface LearningOutcome {
  newSkills: {
    title: string;
    description: string;
    bulletPoints: string[];
  }[];
  technicalLessons: {
    title: string;
    description: string;
    bulletPoints: string[];
  }[];
  areasForImprovement: {
    title: string;
    description: string;
  }[];
}

export interface ClientInfo {
  name: string;
  location: string;
  industry: string;
  challenge: string;
}

export interface CompanyInfo {
  name: string;
  icon?: IconType;
  logo: string;
}

export interface AdditionalLinks {
  github?: string;
  demo?: string;
  case_study?: string;
}

export interface VisualContent {
  mainImage: string;
  screenshots: (string)[];
}

export interface DetailedProject {
  id: string;
  title: string;
  shortDescription: string;
  clientInfo: ClientInfo;
  implementedBenefits: string[];
  keyFeatures: Feature[];
  technicalStack: TechnicalStack;
  projectRole: ProjectRole;
  challenges: Challenge[];
  learningOutcomes: LearningOutcome;
  visualContent: VisualContent;
  company: CompanyInfo;
  links?: AdditionalLinks;
}

export interface LearningProject {
  id: string;
  title: string;
  description: string;
  technologies?: string[];         // opcional: "HTML", "CSS", "JS", etc.
  technicalStack?: TechnicalStack;
  imageAlt?: string;               // descripción accesible
  links?: AdditionalLinks;
  overview?: {
    context: string;
    objective: string;
    highlights?: string[];
  };
  tags?: string[];                // opcional: ["frontend", "educational"]
  visualContent: VisualContent;
}
