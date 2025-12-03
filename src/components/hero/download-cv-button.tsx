import { motion } from "@/components/motion";
import { Download } from "lucide-react";

const DownloadCvButton = () => {
	return (
		<motion.a
			href="/Villacres_Pablo_CV.pdf"
			download="Villacres_Pablo_CV.pdf"
			className="px-5 py-2.5 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
		>
			<Download size={20} />
			Download CV
		</motion.a>
	);
};

export default DownloadCvButton;
