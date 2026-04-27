import { ProjectStorySection } from "../projects/ProjectStorySection";
import type { Project } from "../../data/types";

type ProjectStoryListProps = {
  project: Project;
};

export function ProjectStoryList({ project }: ProjectStoryListProps) {
  const sections = [
    { label: "01 - Overview", paragraphs: project.story.overview },
    { label: "02 - Problem", paragraphs: project.story.problem },
    { label: "03 - Goal", paragraphs: project.story.goal },
    {
      label: "04 - Design decisions",
      paragraphs: project.story.designDecisions,
    },
    { label: "05 - What I learned", paragraphs: project.story.learnings },
  ];

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="space-y-12">
          {sections.map((section) => (
            <ProjectStorySection
              key={section.label}
              label={section.label}
              paragraphs={section.paragraphs}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
