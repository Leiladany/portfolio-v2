import { useLocation, useParams } from "react-router-dom";
import { NextProjectLink } from "../components/project-detail/NextProjectLink";
import { ProjectDetailHero } from "../components/project-detail/ProjectDetailHero";
import { ProjectHeroImage } from "../components/project-detail/ProjectHeroImage";
import { ProjectStoryList } from "../components/project-detail/ProjectStoryList";
import { ProjectSummaryGrid } from "../components/project-detail/ProjectSummaryGrid";
import { SiteLayout } from "../components/layout/SiteLayout";
import { getProjectById, projects } from "../data/projects";
import {
  getNextProject,
  getProjectFocus,
  getSafeReturnPath,
} from "../utils/projectUtils";
import { NotFoundPage } from "./NotFoundPage";

type ProjectDetailLocationState = {
  returnTo?: string;
};

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const location = useLocation();
  const locationState = location.state as ProjectDetailLocationState | null;
  const returnTo = getSafeReturnPath(locationState?.returnTo);
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <NotFoundPage
        title="Project not found"
        description="The selected project could not be found."
      />
    );
  }

  const nextProject = getNextProject(project, projects);
  const projectFocus = getProjectFocus(project);

  return (
    <SiteLayout>
      <ProjectDetailHero project={project} returnTo={returnTo} />
      <ProjectHeroImage image={project.images[0]} />
      <ProjectSummaryGrid project={project} focus={projectFocus} />
      <ProjectStoryList project={project} />

      {nextProject ? (
        <NextProjectLink project={nextProject} returnTo={returnTo} />
      ) : null}
    </SiteLayout>
  );
}
