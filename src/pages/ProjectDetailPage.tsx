import { useLocation, useParams } from "react-router-dom";
import { ProjectDetailHero } from "../components/project-detail/ProjectDetailHero";
import { ProjectImageCarousel } from "../components/project-detail/ProjectImageCarousel";
import { ProjectNavigationLinks } from "../components/project-detail/ProjectNavigationLinks";
import { ProjectStoryList } from "../components/project-detail/ProjectStoryList";
import { ProjectSummaryGrid } from "../components/project-detail/ProjectSummaryGrid";
import { SiteLayout } from "../components/layout/SiteLayout";
import { getProjectById, projects } from "../data/projects";
import { notFoundContent } from "../data/site";
import {
  getNextProject,
  getPreviousProject,
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
        title={notFoundContent.project.title}
        description={notFoundContent.project.description}
      />
    );
  }

  const nextProject = getNextProject(project, projects);
  const previousProject = getPreviousProject(project, projects);
  const projectFocus = getProjectFocus(project);

  return (
    <SiteLayout>
      <ProjectDetailHero project={project} returnTo={returnTo} />
      <ProjectImageCarousel key={project.id} images={project.images} />
      <ProjectSummaryGrid project={project} focus={projectFocus} />
      <ProjectStoryList project={project} />

      <ProjectNavigationLinks
        previousProject={previousProject}
        nextProject={nextProject}
        returnTo={returnTo}
      />
    </SiteLayout>
  );
}
