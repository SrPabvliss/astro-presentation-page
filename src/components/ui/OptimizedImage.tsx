"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "@/components/motion";
import { getOptimizedImage, getBlurPlaceholder, type CloudinaryImageKey } from "@/constants/cloudinary";

interface OptimizedImageProps {
  imageKey?: CloudinaryImageKey;
  src?: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
  size?: "medium" | "large";
}

export default function OptimizedImage({ 
  imageKey, 
  src, 
  alt, 
  className = "", 
  loading = "lazy",
  priority = false,
  size = "large"
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);
  const timeoutRef = useRef<number | null>(null);

  // Usar imageKey de Cloudinary o src directo
  const imageSrc = imageKey 
    ? getOptimizedImage(imageKey, size === "medium" ? "f_auto,q_auto,w_800,h_600,c_fill" : "f_auto,q_auto,w_1200,h_800,c_fill")
    : src;
  
  const blurSrc = imageKey ? getBlurPlaceholder(imageKey) : undefined;

  // Timeout para evitar loading infinito
  useEffect(() => {
    if (isLoading && !isLoaded && !hasError) {
      timeoutRef.current = window.setTimeout(() => {
        console.warn('Image loading timeout:', imageSrc);
        setIsLoading(false);
        setIsLoaded(true); // Mostrar imagen aunque no haya disparado onLoad
      }, 10000); // 10 segundos timeout
    }

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [isLoading, isLoaded, hasError, imageSrc]);

  // Verificar si la imagen ya está en cache
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
      setIsLoading(false);
    }
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    setIsLoading(false);
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  if (hasError || !imageSrc) {
    return (
      <div className={`bg-zinc-800 flex items-center justify-center ${className}`}>
        <span className="text-zinc-400 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blur placeholder */}
      {blurSrc && !isLoaded && (
        <img
          src={blurSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110"
          aria-hidden="true"
        />
      )}
      
      {/* Placeholder background */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 animate-pulse" />
      )}

      {/* Main image */}
      <motion.img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        loading={priority ? "eager" : loading}
        className="w-full h-full object-cover"
        onLoad={handleLoad}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Loading overlay */}
      {isLoading && !hasError && (
        <motion.div 
          className="absolute inset-0 bg-black/20 flex items-center justify-center z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </motion.div>
      )}
    </div>
  );
}
