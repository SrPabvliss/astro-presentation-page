"use client";

import { motion } from "framer-motion";

interface ProjectHeroProps {
  title: string;
  shortDescription: string;
  mainImage: string;
}

export const ProjectHero = ({ title, shortDescription, mainImage }: ProjectHeroProps) => {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0 z-0">
        <img
          src={mainImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div 
          className="max-w-4xl px-4 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            {title}
          </h1>
          <p className="text-xl md:text-2xl">
            {shortDescription}
          </p>
        </motion.div>
      </div>
    </section>
  );
}; 