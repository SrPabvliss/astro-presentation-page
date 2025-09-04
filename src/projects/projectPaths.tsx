import { DIZASA_PROJECT } from "@/constants/project-details/dizasa_project";
import { GAB_MOTORS_PROJECT } from "@/constants/project-details/gab-motors-summary";
import { GENDOCS_V3_PROJECT } from "@/constants/project-details/gendocs-v3-summary";
import { TRANSLOGI_PROJECT } from "@/constants/project-details/translogi-summary";

const projectsMap = {
  "gab-motors": GAB_MOTORS_PROJECT,
  "gendocs-v3": GENDOCS_V3_PROJECT,
  "translogi": TRANSLOGI_PROJECT,
  "dizasa": DIZASA_PROJECT,
};

export function getStaticPaths() {
  return Object.keys(projectsMap).map((id) => ({
    params: { id },
  }));
}

export function getProjectById(id: string) {
  return projectsMap[id as keyof typeof projectsMap];
}
