"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "@/components/motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Feature } from "@/types/project-detail.interface";

export default function ProjectFeatures({
  features,
  id,
}: {
  features: Feature[];
  id: string;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "auto";
  }, []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === 0 ? features.length - 1 : prev - 1
    );
  }, [features.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === features.length - 1 ? 0 : prev + 1
    );
  }, [features.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, goToPrev, goToNext]);

  return (
    <section id={id} className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Key Features
      </motion.h2>

      <div className="space-y-24">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
          >
            {/* Feature Image */}
            <div className="md:w-1/2">
              <div
                className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 shadow-xl cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={feature.image as string}
                  alt={feature.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${index % 2 === 0 ? 'from-blue-900/30' : 'from-purple-900/30'} to-transparent`}></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white/0 group-hover:text-white/90 transition-colors duration-300 font-medium text-sm bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Click to enlarge
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Content */}
            <div className="md:w-1/2 space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <div className="h-1 w-16 bg-blue-500"></div>
              </div>

              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-3 mt-6">
                {feature.bulletPoints.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + pointIndex * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    </span>
                    <p className="text-white/80">{point}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Feature image lightbox"
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm z-10">
              {lightboxIndex + 1} / {features.length}
            </span>

            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              aria-label="Previous image"
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              aria-label="Next image"
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center w-full h-full px-14 md:px-20 py-14"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={features[lightboxIndex].image as string}
                alt={features[lightboxIndex].imageAlt}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
