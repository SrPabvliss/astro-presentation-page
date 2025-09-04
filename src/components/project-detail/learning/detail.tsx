"use client";
import { ArrowLeft } from "lucide-react";
import { motion } from "@/components/motion";
import type { LearningProject } from "@/types/project-detail.interface";
import ProjectGallery from "@/components/project-detail/project-gallery";
import ProjectStack from "@/components/project-detail/project-stack";
import OptimizedImage from "@/components/ui/OptimizedImage";
import LearningOverview from "./learning-overview";

export default function LearningProjectDetail({ project }: { project: LearningProject }) {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 mix-blend-multiply z-10" />
        {project.visualContent.mainImage && (
          <OptimizedImage
            src={project.visualContent.mainImage as string}
            alt={project.title}
            className="absolute inset-0 w-full h-full"
            loading="eager"
            priority={true}
            size="large"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-20" />
        <div className="absolute inset-0 flex flex-col justify-end z-30 p-8 container mx-auto">
          <a
            href="/projects"
            className="flex items-center gap-2 text-white/90 hover:text-white mb-8 w-fit group transition-colors"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </a>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {project.title}
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-blue-500 mb-4"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl"
          >
            {project.description}
          </motion.p>
        </div>
      </div>
      {project.overview && (
        <LearningOverview id="overview" overview={project.overview} />
      )}
      {project.technicalStack && (
        <div className="mt-12">
          <ProjectStack id="stack" stack={project.technicalStack} />
        </div>
      )}
      <div className="py-16 space-y-16">
        {project.visualContent.screenshots?.length > 0 && (
          <ProjectGallery screenshots={project.visualContent.screenshots} id="gallery" />
        )}
      </div>
      <div className="container mx-auto px-4 flex flex-wrap gap-5 justify-center items-center mt-8 mb-10">
        {project.links?.demo && (
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 shadow-md text-white font-semibold text-lg transition-all duration-200"
            tabIndex={0}
          >
            View Demo
          </motion.a>
        )}
        {project.links?.github && (
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 shadow-md text-white font-semibold text-lg border border-white/10 transition-all duration-200"
            tabIndex={0}
          >
            View Code
          </motion.a>
        )}
        <motion.a
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          href="/projects"
          className="px-8 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 shadow-md text-white font-semibold text-lg border border-white/10 transition-all duration-200"
          tabIndex={0}
        >
          Back to Projects
        </motion.a>
      </div>
    </div>
  );
} 