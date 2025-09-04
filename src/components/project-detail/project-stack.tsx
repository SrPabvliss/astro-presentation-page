"use client";

import { motion } from "@/components/motion";
import type { TechnicalStack } from "@/types/project-detail.interface";
import type { JSX } from "astro/jsx-runtime";
import { 
  Code, 
  Server, 
  Terminal,
  Layers,
  Database,
  Braces,
  Workflow,
  RefreshCw,
  Globe,
  Shield
} from "lucide-react";

// Tech icon mapping using Lucide icons instead of react-icons
// This avoids the import issues and provides a consistent look
const getTechIcon = (techName: string) => {
  const techMap: Record<string, JSX.Element> = {
    "Next.js": <Globe className="w-6 h-6 text-blue-400" />,
    "React.js": <RefreshCw className="w-6 h-6 text-blue-400" />,
    "TypeScript": <Braces className="w-6 h-6 text-blue-400" />,
    "Tailwind CSS": <Layers className="w-6 h-6 text-blue-400" />,
    "Node.js": <Server className="w-6 h-6 text-blue-400" />,
    "PostgreSQL": <Database className="w-6 h-6 text-blue-400" />,
    "NestJS": <Terminal className="w-6 h-6 text-blue-400" />,
    "Prisma": <Database className="w-6 h-6 text-blue-400" />,
    "Docker": <Workflow className="w-6 h-6 text-blue-400" />,
    "JWT": <Shield className="w-6 h-6 text-blue-400" />,
    // Add more mappings as needed
    // Default icon for technologies without a specific mapping
    "default": <Code className="w-6 h-6 text-blue-400" />
  };
  
  return techMap[techName] || techMap["default"];
};

// Component for a single technology card
const TechCard = ({ 
  name, 
  description 
}: { 
  name: string; 
  description: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-zinc-800 border border-white/5 rounded-xl p-6 hover:border-blue-500/30 transition-colors"
    >
      <div className="flex items-center gap-4 mb-4">
        {getTechIcon(name)}
        <h4 className="text-xl font-bold text-white">{name}</h4>
      </div>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

// Component for technology category
const TechCategory = ({ 
  title, 
  technologies, 
  icon 
}: { 
  title: string; 
  technologies: Array<{ name: string; description: string; }>; 
  icon: JSX.Element;
}) => {
  return (
    <div className="mb-16">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="p-3 rounded-lg bg-blue-500/20">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <TechCard 
            key={index}
            name={tech.name}
            description={tech.description}
          />
        ))}
      </div>
    </div>
  );
};

export default function ProjectStack({ stack, id }: { stack: TechnicalStack; id: string }) {
  return (
    <section id={id} className="bg-zinc-800/50 py-24">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Technical Stack
        </motion.h2>
        
        {/* Frontend Stack */}
        <TechCategory 
          title="Frontend Technologies" 
          technologies={stack.frontend} 
          icon={<Layers className="w-6 h-6 text-blue-400" />}
        />
        
        {/* Backend Stack */}
        {stack.backend && stack.backend.length > 0 && (
          <TechCategory 
            title="Backend Technologies" 
            technologies={stack.backend} 
            icon={<Server className="w-6 h-6 text-blue-400" />}
          />
        )}
        
        {/* DevOps Stack */}
        {stack.devOps && stack.devOps.length > 0 && (
          <TechCategory 
            title="DevOps & Infrastructure" 
            technologies={stack.devOps} 
            icon={<Terminal className="w-6 h-6 text-blue-400" />}
          />
        )}
      </div>
    </section>
  );
}