"use client";

import { motion } from "@/components/motion";
import type { ClientInfo } from "@/types/project-detail.interface";

export default function ProjectOverview({
  clientInfo,
  benefits,
  id,
}: {
  clientInfo: ClientInfo;
  benefits: string[];
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
        Project Overview
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Client Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-4">
            Client Information
          </h3>

          <div className="space-y-6 bg-zinc-800/50 rounded-xl p-6 border border-white/5">
            <div>
              <h4 className="text-blue-400 text-lg font-medium mb-2">Company</h4>
              <p className="text-white/90 text-lg">{clientInfo.name}</p>
            </div>

            <div>
              <h4 className="text-blue-400 text-lg font-medium mb-2">Location</h4>
              <p className="text-white/90 text-lg">{clientInfo.location}</p>
            </div>

            <div>
              <h4 className="text-blue-400 text-lg font-medium mb-2">Industry</h4>
              <p className="text-white/90 text-lg">{clientInfo.industry}</p>
            </div>

            <div>
              <h4 className="text-blue-400 text-lg font-medium mb-2">Challenge</h4>
              <p className="text-white/80 leading-relaxed">{clientInfo.challenge}</p>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-4">
            Key Benefits Delivered
          </h3>

          <div className="space-y-6 bg-zinc-800/50 rounded-xl p-6 border border-white/5">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  </span>
                  <p className="text-white/90 leading-relaxed">{benefit}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}