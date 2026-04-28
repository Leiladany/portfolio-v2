import { PageIntro } from "../components/common/PageIntro";
import { FormattedTitle } from "../components/common/FormattedTitle";
import { SiteLayout } from "../components/layout/SiteLayout";
import { ProjectsGrid } from "../components/projects/ProjectsGrid";
import { projects } from "../data/projects";
import { projectsPageContent } from "../data/site";

export function ProjectsPage() {
  const { intro } = projectsPageContent;

  return (
    <SiteLayout>
      <PageIntro
        eyebrow={intro.eyebrow}
        title={<FormattedTitle segments={intro.title} />}
        description={intro.description}
      />

      <ProjectsGrid projects={projects} />
    </SiteLayout>
  );
}
