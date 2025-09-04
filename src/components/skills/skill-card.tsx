import type { IconType } from "react-icons";
import { motion } from "@/components/motion";

interface SkillCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const SkillCard = ({ icon: Icon, title, description }: SkillCardProps) => {
  return (
    <motion.div
      className="h-24 md:h-[500px] rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#2d2d2d] to-[#212121] border border-white/5 overflow-hidden relative group flex flex-col md:block items-center justify-center p-2 md:p-0"
      whileHover={{ 
        borderColor: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.6)"
      }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 20
      }}
    >
      <motion.div 
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 hidden md:block"
        whileHover={{ scale: 1.1 }}
      />
      
      <motion.div 
        className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 hidden md:block"
        whileHover={{ scale: 1.1 }}
      />

      <div className="h-full flex flex-col justify-between relative z-10 w-full items-center md:items-stretch md:w-auto md:block">
        <div className="p-0 md:p-8 pb-0 flex flex-col items-center md:items-start">
          <motion.div
            className="w-14 h-14 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20"
            whileHover={{ 
              rotate: 5, 
              scale: 1.05,
              boxShadow: "0 10px 20px -5px rgba(59, 130, 246, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Icon className="w-10 h-10 md:w-20 md:h-20 text-white" />
          </motion.div>
        </div>
        
        <div className="px-0 md:px-8 pt-1 md:pt-6 flex flex-col items-center md:items-start">
          <motion.h3 
            className="text-xs md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1, x: 3 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="mt-0 md:mt-4 text-gray-400 text-sm md:text-lg leading-relaxed hidden md:block"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </div>
        
        <div className="p-0 md:p-8 pt-0 w-full items-center justify-center md:justify-start hidden md:flex">
          <motion.div 
            className="h-[2px] w-6 md:w-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
            whileHover={{ width: 32 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-300 hidden md:block">
        <div className="relative w-full h-full">
          {Array.from({ length: 4 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-12 h-12 rounded-full border border-white/30"
              style={{ 
                top: `${i * 5}px`, 
                right: `${i * 5}px`,
                opacity: 1 - i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;