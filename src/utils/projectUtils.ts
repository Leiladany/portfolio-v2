import type { Project } from "../data/types";

export function getProjectType(project: Project) {
  return (
    project.facts.find((fact) => fact.label === "Type")?.value ?? "Project"
  );
}

export function getProjectFocus(project: Project) {
  return (
    project.facts.find((fact) => fact.label === "Focus")?.value ??
    project.keywords.slice(0, 2).join(", ")
  );
}

export function getNextProject(
  currentProject: Project,
  allProjects: readonly Project[],
) {
  const currentProjectIndex = allProjects.findIndex(
    (project) => project.id === currentProject.id,
  );

  if (currentProjectIndex < 0 || allProjects.length <= 1) {
    return undefined;
  }

  return allProjects[(currentProjectIndex + 1) % allProjects.length];
}

export function getSafeReturnPath(value: unknown) {
  return value === "/" || value === "/projects" ? value : "/projects";
}
