import { PageIntro } from "../components/PageIntro";
import { ProjectCardDetailed } from "../components/ProjectCardDetailed";
import { SiteLayout } from "../components/SiteLayout";
import { projects } from "../data/projects";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function ProjectsPage() {
  useDocumentMeta({
    title: "Projects - Leila Teixeira",
    description:
      "A small selection of UX/UI and frontend case studies by Leila Teixeira.",
  });

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

      <section className="pb-32">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCardDetailed
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
