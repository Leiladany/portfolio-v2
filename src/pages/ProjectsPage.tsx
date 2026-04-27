import { PageIntro } from "../components/common/PageIntro";
import { SiteLayout } from "../components/layout/SiteLayout";
import { ProjectsGrid } from "../components/projects/ProjectsGrid";
import { projects } from "../data/projects";

export function ProjectsPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Case studies"
        title={
          <>
            Things I've designed
            <br />
            and built.
          </>
        }
        description={
          <>
            A small set of student and personal projects - each one taught me
            something about people, interfaces, or both.
          </>
        }
      />

      <ProjectsGrid projects={projects} />
    </SiteLayout>
  );
}
