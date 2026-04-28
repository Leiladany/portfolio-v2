import { Link } from "react-router-dom";
import { AnimatedArrow } from "../common/AnimatedArrow";
import { ProjectCard } from "../projects/ProjectCard";
import type { Project } from "../../data/types";
import { homePageContent } from "../../data/site";

type FeaturedProjectsSectionProps = {
  projects: readonly Project[];
};

export function FeaturedProjectsSection({
  projects,
}: FeaturedProjectsSectionProps) {
  const { featuredProjects } = homePageContent;

  return (
    <section className="py-14 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="reveal mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">{featuredProjects.eyebrow}</p>
            <h2 className="font-display text-charcoal text-3xl sm:text-5xl">
              {featuredProjects.title}
            </h2>
          </div>
          <Link
            to={featuredProjects.linkTo}
            className="link-underline text-charcoal hidden items-center gap-1.5 text-sm font-medium transition-colors duration-300 sm:inline-flex"
          >
            {featuredProjects.linkLabel} <AnimatedArrow className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
