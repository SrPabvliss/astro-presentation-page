import { motion } from "@/components/motion";

interface SkillsPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const SkillsPagination = ({ totalPages, currentPage, onPageChange }: SkillsPaginationProps) => {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <motion.div
          key={index}
          className={`h-2 rounded-full ${
            currentPage === index ? "w-8 bg-blue-500" : "w-2 bg-gray-600"
          }`}
          initial={false}
          animate={{ 
            width: currentPage === index ? 32 : 8,
            backgroundColor: currentPage === index ? "#3b82f6" : "#4b5563"
          }}
          transition={{ duration: 0.3 }}
          onClick={() => onPageChange(index)}
          whileHover={{ 
            scale: 1.2,
            backgroundColor: currentPage === index ? "#3b82f6" : "#6b7280"
          }}
          style={{ cursor: "pointer" }}
        />
      ))}
    </div>
  );
};

export default SkillsPagination; 