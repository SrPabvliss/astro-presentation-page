"use client";

import { motion } from "@/components/motion";
import type { LearningOutcome } from "@/types/project-detail.interface";
import type { JSX } from "astro/jsx-runtime";
import { BookOpen, Code, Lightbulb, Zap } from "lucide-react";

// Learning Card Component
const LearningCard = ({ 
  title, 
  description, 
  bulletPoints, 
  index
}: { 
  title: string; 
  description: string; 
  bulletPoints?: string[]; 
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-zinc-800/50 rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition-colors"
    >
      <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
      <p className="text-white/70 mb-4">{description}</p>
      
      {bulletPoints && bulletPoints.length > 0 && (
        <ul className="space-y-2">
          {bulletPoints.map((point, pointIndex) => (
            <li key={pointIndex} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
              <span className="text-white/70 text-sm">{point}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

// Section Component
const LearningSection = ({ 
  title, 
  items, 
  icon 
}: { 
  title: string; 
  items: any[]; 
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <LearningCard
            key={index}
            title={item.title}
            description={item.description}
            bulletPoints={item.bulletPoints}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default function ProjectLearnings({
  learnings,
  id,
}: {
  learnings: LearningOutcome;
  id: string;
}) {
  return (
    <section id={id} className="bg-zinc-800/50 py-24">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Learning Outcomes
        </motion.h2>
        
        {/* New Skills */}
        <LearningSection
          title="New Skills Acquired"
          items={learnings.newSkills}
          icon={<BookOpen className="w-6 h-6 text-blue-400" />}
        />
        
        {/* Technical Lessons */}
        <LearningSection
          title="Technical Lessons"
          items={learnings.technicalLessons}
          icon={<Code className="w-6 h-6 text-blue-400" />}
        />
        
        {/* Areas for Improvement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-blue-500/20">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Areas for Improvement</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learnings.areasForImprovement.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-zinc-800/50 rounded-xl border border-white/10 p-6"
              >
                <h4 className="text-xl font-bold text-white mb-3">{area.title}</h4>
                <p className="text-white/70">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}