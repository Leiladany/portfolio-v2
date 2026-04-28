import type { Projects } from "../types";
import { empowered } from "./empowered";
import { escapingWestview } from "./escaping-westview";
import { pawsitivePets } from "./pawsitive-pets";
import { playItBetterSummerSchool } from "./play-it-better-summer-school";

const projectEntries: Projects = [
  playItBetterSummerSchool,
  pawsitivePets,
  empowered,
  escapingWestview,
];

export const projects: Projects = [...projectEntries].sort(
  (firstProject, secondProject) =>
    Date.parse(secondProject.date.start) - Date.parse(firstProject.date.start),
);

export function getProjectById(projectId: string) {
  return projects.find((project) => project.id === projectId);
}
