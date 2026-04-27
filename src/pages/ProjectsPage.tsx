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
      <section className="pb-16 pt-24 sm:pt-32">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <p className="eyebrow reveal">Case studies</p>
          <h1 className="font-display reveal mt-5 text-5xl leading-none text-charcoal sm:text-6xl lg:text-7xl">
            Things I've designed
            <br />
            and built.
          </h1>
          <p
            className="reveal mt-7 max-w-2xl text-lg leading-relaxed text-graphite sm:text-xl"
            data-delay="140"
          >
            A small set of student and personal projects - each one taught me
            something about people, interfaces, or both.
          </p>
        </div>
      </section>

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
