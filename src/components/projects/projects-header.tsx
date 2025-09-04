import { motion } from "@/components/motion";

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

const ProjectsHeader = () => {
	return (
		<motion.div variants={itemVariants} className="flex flex-col gap-4">
			<div className="w-40 h-3 bg-blue-500" />
			<h2 className="text-4xl md:text-5xl font-bold text-white">
				My Recent Projects
			</h2>
			<p className="text-gray-400 text-lg">
				Here are some of the projects I&apos;ve worked on recently.
			</p>
		</motion.div>
	);
};

export default ProjectsHeader;
