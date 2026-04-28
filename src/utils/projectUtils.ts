import type { Project } from "../data/types";

const monthLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

export function getProjectType(project: Project) {
  return (
    project.facts.find((fact) => fact.label === "Type")?.value ?? "Project"
  );
}

export function getProjectFocus(project: Project) {
  const factFocus = project.facts.find((fact) => fact.label === "Focus")?.value;

  return factFocus || getProjectType(project);
}

export function formatProjectDateRange(project: Project) {
  const startDate = parseProjectDate(project.date.start);

  if (!project.date.end) {
    return `${formatProjectMonth(startDate)} - Present`;
  }

  const endDate = parseProjectDate(project.date.end);

  if (isSameProjectMonth(startDate, endDate)) {
    return formatProjectMonth(startDate);
  }

  return `${formatProjectMonth(startDate)} - ${formatProjectMonth(endDate)}`;
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

function formatProjectMonth(date: Date) {
  return `${monthLabels[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

function parseProjectDate(value: string) {
  return new Date(value);
}

function isSameProjectMonth(firstDate: Date, secondDate: Date) {
  return (
    firstDate.getUTCFullYear() === secondDate.getUTCFullYear() &&
    firstDate.getUTCMonth() === secondDate.getUTCMonth()
  );
}
