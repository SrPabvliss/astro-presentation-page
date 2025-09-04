import { motion } from "@/components/motion";
import ProjectsHeader from "./projects-header";
import { PROJECTS_DATA } from "@/constants/projects";
import ProjectCard from "./project-card";
import ViewAllProjectsCard from "./view-all-card";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.4,
		},
	},
};

const Projects = () => {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			className="w-full bg-zinc-800 py-24"
			id="projects"
		>
			<div className="container mx-auto px-4">
				<div className="hidden md:grid grid-cols-2 gap-12">
					<div className="flex flex-col gap-8">
						<ProjectsHeader />
						{PROJECTS_DATA.filter((_, index) => index % 2 === 1).map(
							(project) => (
								<ProjectCard key={project.id} {...project} />
							),
						)}
					</div>

					<div className="flex flex-col gap-8 pt-20">
						{PROJECTS_DATA.filter((_, index) => index % 2 === 0).map(
							(project) => (
								<ProjectCard key={project.id} {...project} />
							),
						)}
						<ViewAllProjectsCard />
					</div>
				</div>

				<div className="flex flex-col gap-8 md:hidden">
					<ProjectsHeader />
					{PROJECTS_DATA.map((project) => (
						<ProjectCard key={project.id} {...project} />
					))}
					<ViewAllProjectsCard />
				</div>
			</div>
		</motion.div>
	);
};

export default Projects;
