"use client";

import { motion } from "@/components/motion";
import type { Feature } from "@/types/project-detail.interface";

export default function ProjectFeatures({
  features,
  id,
}: {
  features: Feature[];
  id: string;
}) {
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
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 shadow-xl">
                <img
                  src={feature.image as string}
                  alt={feature.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${index % 2 === 0 ? 'from-blue-900/30' : 'from-purple-900/30'} to-transparent`}></div>
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
    </section>
  );
}