import { useState, useEffect, useRef } from 'react';
import type { IconType } from 'react-icons';


interface Skill {
  icon: IconType;
  title: string;
  description: string;
}

interface UseSkillsCarouselProps {
  skills: Skill[];
  itemsPerPage: number;
}

interface UseSkillsCarouselReturn {
  currentPage: number;
  direction: number;
  totalPages: number;
  currentPageSkills: Skill[];
  handleNext: () => void;
  handlePrev: () => void;
  handlePageChange: (page: number) => void;
}

export const useSkillsCarousel = ({ skills, itemsPerPage }: UseSkillsCarouselProps): UseSkillsCarouselReturn => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalPages = Math.ceil(skills.length / itemsPerPage);
  const pauseTimeout = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && currentPage !== 0) {
        setCurrentPage(0);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage]);


  useEffect(() => {
    const startAutoSlide = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 4000);
    };
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalPages]);


  const pauseAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 4000);
    }, 6000);
  };

  const getPageSkills = (pageIndex: number) => {
    const startIndex = pageIndex * itemsPerPage;
    return skills.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
    pauseAutoSlide();
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    pauseAutoSlide();
  };

  const handlePageChange = (page: number) => {
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
    pauseAutoSlide();
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    };
  }, []);

  return {
    currentPage,
    direction,
    totalPages,
    currentPageSkills: getPageSkills(currentPage),
    handleNext,
    handlePrev,
    handlePageChange,
  };
}; 