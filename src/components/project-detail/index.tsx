"use client";

import type { DetailedProject } from "@/types/project-detail.interface";
import ProjectDetailComponent from "./detail";

interface ProjectDetailProps {
  project: DetailedProject;
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <ProjectDetailComponent project={project} />
  );
};