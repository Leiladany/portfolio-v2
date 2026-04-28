import { ProjectStorySection } from "../projects/ProjectStorySection";
import type { Project } from "../../data/types";

type ProjectStoryListProps = {
  project: Project;
};

export function ProjectStoryList({ project }: ProjectStoryListProps) {
  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="space-y-12">
          {project.story.map((section) => (
            <ProjectStorySection
              key={section.id}
              label={section.label}
              paragraphs={section.paragraphs}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
