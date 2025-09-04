"use client"
import { motion } from "@/components/motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SkillsHeaderProps {
  onPrev: () => void;
  onNext: () => void;
}

const SkillsHeader = ({ onPrev, onNext }: SkillsHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-blue-500 font-medium text-lg">/</span>
          <span className="text-white font-medium text-lg">MY SKILLS</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white">My extensive list of skills</h2>
      </div>
      <div className="flex gap-4">
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "#3b82f6", transition: { duration: 0.3 }  }}
          whileTap={{ scale: 0.98 }}
          onClick={onPrev}
          className="p-6 rounded-full bg-[#2d2d2d] "
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "#3b82f6", transition: { duration: 0.3 }  }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          className="p-6 rounded-full bg-[#2d2d2d] "
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </motion.button>
      </div>
    </div>
  );
};

export default SkillsHeader; 