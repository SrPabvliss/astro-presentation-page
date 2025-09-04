import { motion } from "@/components/motion";
import Navbar from "@/components/navbar";
import { ArrowLeft } from "lucide-react";
import { PROJECTS_DATA } from "@/constants/projects";
import { LEARNING_PROJECTS_DATA } from "@/constants/learning-projects";
import ProjectCard from "@/components/projects/project-card";
import LearningProjectCard from "@/components/learning/learning-project-card";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-zinc-900">
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-12 px-4"
      >
        <div className="container mx-auto mb-16">
          {/* Header with navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <a
              href="/"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors w-fit mb-8 group"
            >
              <ArrowLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span className="font-medium">Back to Home</span>
            </a>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              My Projects
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 bg-blue-500 mb-4"
            />
            <p className="text-xl text-gray-400 max-w-2xl">
              Take a look at my professional work and personal projects
            </p>
          </motion.div>

          {/* Featured Projects Section */}
          <section id="featured-projects" className="mb-24">
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-2">
                <span className="text-blue-500 font-medium text-lg">/</span>
                <span className="text-white font-medium text-lg">FEATURED PROJECTS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Professional Work
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-1 bg-blue-500"
              />
              <p className="text-gray-400">
                Highlights from my professional career and most significant projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECTS_DATA.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Learning Projects Section */}
          <section id="learning-projects">
            <div className="flex flex-col gap-4 mb-10">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;