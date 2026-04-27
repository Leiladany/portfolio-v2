import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../data/types";

type ProjectCardDetailedProps = {
  project: Project;
  index?: number;
};

function getProjectType(project: Project) {
  return project.facts.find((fact) => fact.label === "Type")?.value ?? "Project";
}

export function ProjectCardDetailed({
  project,
  index = 0,
}: ProjectCardDetailedProps) {
  const image = project.images[0];

  return (
    <Link
      to={`/projects/${project.id}`}
      className="project-card-detailed group flex flex-col reveal"
      data-delay={index * 80}
    >
      <div className="m-5 aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-blush-soft">
        <img
          src={image.src}
          alt={image.alt}
          width={1280}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-5 px-8 pb-8 pt-2">
        <div className="flex items-center gap-3 text-xs">
          <span className="font-mono uppercase text-rose-deep">
            {getProjectType(project)}
          </span>
          <span className="text-graphite">&middot;</span>
          <span className="text-graphite">{project.date}</span>
        </div>

        <div>
          <h3 className="font-display mb-3 text-[1.7rem] text-charcoal transition-colors group-hover:text-rose-deep sm:text-3xl">
            {project.title}
          </h3>
          <p className="text-[15px] leading-relaxed text-graphite sm:text-base">
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

        <div className="mt-auto flex items-center justify-between border-t border-blush-soft pt-5">
          <span className="link-underline text-[15px] font-medium text-charcoal">
            Read the case study
          </span>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blush transition-transform duration-300 group-hover:scale-110">
            <ArrowRight className="h-4 w-4 text-rose-deep transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
