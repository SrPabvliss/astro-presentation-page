"use client";

import { motion } from "@/components/motion";
import { SKILLS_DATA } from "@/constants/skills";
import { useSkillsCarousel } from "@/hooks/useSkillsCarousel";
import SkillsHeader from "./skills-header";
import SkillsCarousel from "./skills-carousel";
import SkillsPagination from "./skills-pagination";

const ITEMS_PER_PAGE = 3;

const Skills = () => {
  const {
    currentPage,
    direction,
    totalPages,
    currentPageSkills,
    handleNext,
    handlePrev,
    handlePageChange,
  } = useSkillsCarousel({
    skills: SKILLS_DATA,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "200px" }}
      transition={{ duration: 1.2 }}
      className="w-full bg-[#1c1c1c] py-8 md:py-24 min-h-0 md:min-h-screen"
      id="skills"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 md:gap-16">
          <SkillsHeader onPrev={handlePrev} onNext={handleNext} />
          
          <SkillsCarousel
            currentPage={currentPage}
            direction={direction}
            skills={currentPageSkills}
          />

          <SkillsPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;