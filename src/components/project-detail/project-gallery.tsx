"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "@/components/motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGallerySectionProps {
  screenshots: string[];
  id: string;
}

export default function ProjectGallery({
  screenshots,
  id,
}: ProjectGallerySectionProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [mainRef, mainApi] = useEmblaCarousel({ loop: true });
  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbApi) return;
    const index = mainApi.selectedScrollSnap();
    setSelectedIndex(index);
    thumbApi.scrollTo(index);
  }, [mainApi, thumbApi]);

  useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    return () => {
      mainApi.off("select", onSelect);
    };
  }, [mainApi, onSelect]);

  const scrollPrev = useCallback(() => mainApi?.scrollPrev(), [mainApi]);
  const scrollNext = useCallback(() => mainApi?.scrollNext(), [mainApi]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi]
  );

  const openLightbox = useCallback((index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const lightboxPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  }, [screenshots.length]);

  const lightboxNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  }, [screenshots.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, lightboxPrev, lightboxNext]);

  // Sync main carousel when lightbox closes
  useEffect(() => {
    if (!lightboxOpen && mainApi) {
      mainApi.scrollTo(selectedIndex);
    }
  }, [lightboxOpen, mainApi, selectedIndex]);

  return (
    <section id={id} className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Project Gallery
      </motion.h2>

      {/* Main Carousel */}
      <div className="relative max-w-7xl mx-auto">
        <div className="overflow-hidden rounded-xl bg-black/40" ref={mainRef}>
          <div className="flex">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 flex items-center justify-center cursor-pointer h-[50vh] md:h-[70vh]"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1} of ${screenshots.length}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Prev/Next Arrows */}
        <button
          onClick={scrollPrev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
      </div>

      {/* Counter */}
      <p className="text-center text-white/60 text-sm mt-4">
        {selectedIndex + 1} / {screenshots.length}
      </p>

      {/* Thumbnail Strip */}
      <div className="max-w-5xl mx-auto mt-4">
        <div className="overflow-hidden" ref={thumbRef}>
          <div className="flex gap-2">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => onThumbClick(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`flex-[0_0_80px] md:flex-[0_0_100px] min-w-0 relative aspect-[3/4] rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === selectedIndex
                    ? "border-blue-500 opacity-100"
                    : "border-transparent opacity-50 hover:opacity-75"
                }`}
              >
                <img
                  src={screenshot}
                  alt={`Thumbnail ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery lightbox"
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Counter */}
            <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm z-10">
              {selectedIndex + 1} / {screenshots.length}
            </span>

            {/* Prev Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                lightboxPrev();
              }}
              aria-label="Previous image"
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                lightboxNext();
              }}
              aria-label="Next image"
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center w-full h-full px-14 md:px-20 py-14"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={screenshots[selectedIndex]}
                alt={`Screenshot ${selectedIndex + 1} of ${screenshots.length}`}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
