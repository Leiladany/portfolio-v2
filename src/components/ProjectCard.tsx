import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../data/types";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const image = project.images[0];

  return (
    <Link
      to={`/projects/${project.id}`}
      className="project-card group flex flex-col reveal"
      data-delay={index * 80}
    >
      <div className="m-4 aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-blush-soft">
        <img
          src={image.src}
          alt={image.alt}
          width={1024}
          height={768}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-7 pb-7 pt-1">
        <div>
          <h3 className="font-display mb-2 text-2xl text-charcoal transition-colors duration-300 group-hover:text-rose-deep">
            {project.title}
          </h3>
          <p className="text-[15px] leading-relaxed text-graphite">
            {project.summary}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="link-underline text-sm font-medium text-charcoal">
            View case study
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush">
            <ArrowRight className="h-4 w-4 text-rose-deep" />
          </span>
        </div>
      </div>
    </Link>
  );
}
