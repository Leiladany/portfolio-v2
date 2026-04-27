import { PageIntro } from "../components/common/PageIntro";
import { SiteLayout } from "../components/layout/SiteLayout";
import { ProjectsGrid } from "../components/projects/ProjectsGrid";
import { projects } from "../data/projects";

export function ProjectsPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Projects"
        title={
          <>
            Designing and building
            <br />
            <span className="text-rose">experiences.</span>
          </>
        }
        description={
          <>
            A collection of student and personal projects focused on usability,
            structure and real user needs.
          </>
        }
      />

      <ProjectsGrid projects={projects} />
    </SiteLayout>
  );
}
