"use client";

import { useState } from "react";
import { motion } from "@/components/motion";
import { X } from "lucide-react";

interface ProjectGallerySectionProps {
  screenshots: string[];
  id: string;
}

export default function ProjectGallery({
  screenshots,
  id,
}: ProjectGallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };
  
  return (
    <section id={id} className="container mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Project Gallery
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative aspect-video overflow-hidden rounded-xl border border-white/10 cursor-pointer group"
            onClick={() => openLightbox(screenshot)}
          >
            <img 
              src={screenshot} 
              alt={`Project screenshot ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
              <span className="text-white/90 font-medium">Click to enlarge</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div 
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Enlarged screenshot"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}