import { Link, useLocation } from "react-router-dom";
import { AnimatedArrow } from "../common/AnimatedArrow";
import type { Project } from "../../data/types";
import {
  formatProjectDateRange,
  getProjectType,
} from "../../utils/projectUtils";

type ProjectCardDetailedProps = {
  project: Project;
  index?: number;
};

export function ProjectCardDetailed({
  project,
  index = 0,
}: ProjectCardDetailedProps) {
  const image = project.images[0];
  const location = useLocation();
  const projectDate = formatProjectDateRange(project);

  return (
    <Link
      to={`/projects/${project.id}`}
      state={{ returnTo: location.pathname }}
      className="project-card-detailed group reveal flex flex-col"
      data-delay={index * 80}
    >
      <div className="bg-blush-soft m-5 aspect-[16/10] overflow-hidden rounded-[1.5rem]">
        <img
          src={image.src}
          alt={image.alt}
          width={1280}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-5 px-6 pt-2 pb-7 sm:px-8 sm:pb-8">
        <div className="flex items-center gap-3 text-xs">
          <span className="text-rose-deep font-semibold uppercase">
            {getProjectType(project)}
          </span>
          <span className="text-graphite">&middot;</span>
          <span className="text-graphite">{projectDate}</span>
        </div>

        <div>
          <h3 className="font-display text-charcoal mb-3 text-2xl transition-colors duration-300 sm:text-3xl">
            {project.title}
          </h3>
          <p className="text-graphite text-[15px] leading-relaxed sm:text-base">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((skill) => (
            <span key={skill} className="chip chip-blush">
              {skill}
            </span>
          ))}
        </div>

        <div className="border-blush-soft mt-auto flex items-center justify-between border-t pt-5">
          <span className="text-charcoal text-[15px] font-medium">
            View project
          </span>
          <span className="bg-blush text-rose-deep inline-flex h-11 w-11 items-center justify-center rounded-full">
            <AnimatedArrow className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
