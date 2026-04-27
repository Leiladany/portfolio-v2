import type { Project } from "../../data/types";
import { ProjectCardDetailed } from "./ProjectCardDetailed";

type ProjectsGridProps = {
  projects: readonly Project[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section className="pb-20 sm:pb-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
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
  );
}
