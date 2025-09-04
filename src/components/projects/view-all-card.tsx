"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
};

const ViewAllProjectsCard = () => {
  return (
    <a href="/projects">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="group relative rounded-3xl overflow-hidden bg-[#1e1e1e] border border-white/5 h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Ver Todos</h3>
              <p className="text-gray-400">Explora todos mis proyectos</p>
            </div>
          </div>

          <p className="text-gray-400 hidden md:block">
            Descubre mi portafolio completo de proyectos profesionales y personales
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-sm bg-white/10 text-white">
              Ver más
            </span>
          </div>
        </div>
        <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
          <ArrowRight className="w-16 h-16 text-white/20" />
        </div>
      </motion.div>
    </a>
  );
};

export default ViewAllProjectsCard;