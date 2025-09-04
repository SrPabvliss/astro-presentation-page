import { motion } from "@/components/motion";

const LearningHeader = () => {
	return (
		<div className="flex flex-col gap-4 mb-6">
			<div className="flex items-center gap-2">
				<span className="text-blue-500 font-medium text-lg">/</span>
				<span className="text-white font-medium text-lg">LEARNING ZONE</span>
			</div>
			<h2 className="text-4xl md:text-5xl font-bold text-white">
				Projects that helped me grow
			</h2>
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: "200px" }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="h-1 bg-blue-500"
			/>
			<p className="text-gray-400">
				A collection of personal projects that I have developed during my
				learning journey.
			</p>
		</div>
	);
};

export default LearningHeader;
