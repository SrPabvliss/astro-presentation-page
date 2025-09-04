import { LEARNING_PROJECTS_DETAILS } from "@/constants/project-details/learning/learning-projects-details";

const projectsMap = Object.fromEntries(
  LEARNING_PROJECTS_DETAILS.map((project) => [project.id, project])
);

export function getStaticPaths() {
  return Object.keys(projectsMap).map((id) => ({
    params: { id },
  }));
}

export function getLearningProjectById(id: string) {
  return projectsMap[id as keyof typeof projectsMap];
} 