//Delete this file
import { ProjectDetail } from "@/components/project-detail";
import { GAB_MOTORS_PROJECT } from "@/constants/project-details/gab-motors-summary";
import type { DetailedProject } from "@/types/project-detail.interface";
import { GENDOCS_V3_PROJECT } from "@/constants/project-details/gendocs-v3";
import { TRANSLOGI_PROJECT } from "@/constants/project-details/translogi";
import { navigate } from "astro/virtual-modules/transitions-router.js";

const projectsMap: Record<string, DetailedProject> = {
  "gab-motors": GAB_MOTORS_PROJECT,
  "gendocs-v3": GENDOCS_V3_PROJECT,
  "translogi": TRANSLOGI_PROJECT,
};

export async function generateStaticParams() {
  return Object.keys(projectsMap).map((id) => ({
    id,
  }));
}

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsMap[params.id];

  if (!project) {
    navigate("/404");
    return null;
  };

  return <ProjectDetail project={project} />;
} 