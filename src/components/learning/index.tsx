"use client";

import React from "react";
import { motion } from "@/components/motion";
import { LEARNING_PROJECTS_DATA } from "@/constants/learning-projects";
import LearningHeader from "./learning-header";
import LearningProjectCard from "./learning-project-card";

const LearningProjects = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="w-full bg-zinc-900 py-24"
		>
			<div className="container mx-auto px-4">
				<LearningHeader />

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
					{LEARNING_PROJECTS_DATA.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
						>
							<LearningProjectCard {...project} />
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default LearningProjects;
