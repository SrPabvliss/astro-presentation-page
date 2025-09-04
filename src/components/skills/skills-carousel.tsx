import { motion, AnimatePresence } from "framer-motion";
import type { IconType } from "react-icons";
import SkillCard from "./skill-card";

interface Skill {
  icon: IconType;
  title: string;
  description: string;
}

interface SkillsCarouselProps {
  currentPage: number;
  direction: number;
  skills: Skill[];
}

const SkillsCarousel = ({ currentPage, direction, skills }: SkillsCarouselProps) => {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }),
  };

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentPage}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 100, damping: 25 },
          }}
          className="w-full"
        >
          <div className="grid grid-cols-3 gap-2 md:grid-cols-3 md:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.1, 
                  delay: 0.05,
                  ease: "easeOut" 
                }}
              >
                <SkillCard
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SkillsCarousel; 