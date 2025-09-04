import type { LearningProject } from "@/types/project-detail.interface";
import { FRONTEND_STORE } from "./frontend_store";
import { UTA_PROJECT } from "./uta_project";
import { COFFEE_BLOG } from "./cafe_blog";
import { ROCK_EDM_FESTIVAL } from "./rock_edm";
import { RESTAURANT_APP } from "./restaurant_app";
import { SALESFORCE } from "./salesforce";
import { WORKOUT_PLANNER } from "./workout-planner";
import { CAR_RENTAL } from "./car_rental";
import { FOPYMES } from "./fopymes";

export const LEARNING_PROJECTS_DETAILS: LearningProject[] = [
  ...FRONTEND_STORE,
  ...UTA_PROJECT,
  ...COFFEE_BLOG,
  ...ROCK_EDM_FESTIVAL,
  ...RESTAURANT_APP,
  ...SALESFORCE,
  ...WORKOUT_PLANNER,
  ...CAR_RENTAL,
  ...FOPYMES,
]; 