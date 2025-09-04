"use client";

import { motion } from "@/components/motion";
import { ArrowUpRight } from "lucide-react";
import { CLOUDINARY_IMAGES } from "@/constants/cloudinary";

import type { ProjectProps } from "@/types/projects.interface";

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
		},
	},
};

const ProjectCard = ({
	id,
	title,
	description,
	image,
	technologies,
	company,
}: ProjectProps) => {
	// Create the card content
	const cardContent = (
		<motion.div
			variants={itemVariants}
			whileHover={{ scale: 1.02 }}
			className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#1e1e1e] border border-white/5 h-full p-2 md:p-0"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

			<div className="flex flex-col gap-2 md:gap-4 p-2 md:p-6">
				<div className="flex items-center gap-2 md:gap-4">
					<div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center">
						{company.icon}
					</div>
					<div>
						<h3 className="text-base md:text-2xl font-bold text-white">{company.name}</h3>
						<p className="text-gray-400 text-xs md:text-base">{title}</p>
					</div>
				</div>

				<p className="text-gray-400 hidden md:block">{description}</p>

				<div className="flex flex-wrap gap-1 md:gap-2">
					{technologies.map((tech, index) => (
						<span
							key={index}
							className="px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm bg-white/10 text-white"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
			<div className="relative w-full aspect-[16/9]">
				<img
					src={image}
					alt={title}
					className="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
				/>
			</div>
		</motion.div>
	);

	
	if (id) {
		return <a href={`/projects/${id}`}>{cardContent}</a>;
	}

	return cardContent;
};

export default ProjectCard;