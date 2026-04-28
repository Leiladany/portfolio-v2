import { Link, useLocation } from "react-router-dom";
import { AnimatedArrow } from "../common/AnimatedArrow";
import { projectsPageContent } from "../../data/site";
import type { Project } from "../../data/types";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const image = project.images[0];
  const location = useLocation();

  return (
    <Link
      to={`/projects/${project.id}`}
      state={{ returnTo: location.pathname }}
      className="project-card group reveal flex flex-col"
      data-delay={index * 80}
    >
      <div className="bg-blush-soft m-4 aspect-4/3 overflow-hidden rounded-3xl">
        <img
          src={image.src}
          alt={image.alt}
          width={1024}
          height={768}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-103"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 pt-1 pb-6 sm:px-7 sm:pb-7">
        <div>
          <h3 className="font-display text-charcoal mb-2 text-xl transition-colors duration-300 sm:text-2xl">
            {project.title}
          </h3>
          <p className="text-graphite text-[15px] leading-relaxed">
            {project.summary}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-charcoal text-sm font-medium">
            {projectsPageContent.cardActionLabel}
          </span>
          <span className="bg-blush text-rose-deep flex h-10 w-10 items-center justify-center rounded-full">
            <AnimatedArrow className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
