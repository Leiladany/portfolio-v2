import { Link } from "react-router-dom";
import { AnimatedArrow } from "../common/AnimatedArrow";
import { projectDetailContent } from "../../data/site";
import type { Project } from "../../data/types";

type ProjectNavigationLinksProps = {
  previousProject?: Project;
  nextProject?: Project;
  returnTo: string;
};

export function ProjectNavigationLinks({
  previousProject,
  nextProject,
  returnTo,
}: ProjectNavigationLinksProps) {
  if (!previousProject && !nextProject) {
    return null;
  }

  return (
    <section className="pt-8 pb-12 sm:pt-10 sm:pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="border-stone grid grid-cols-2 gap-4 border-t">
          {previousProject ? (
            <ProjectNavigationLink
              project={previousProject}
              returnTo={returnTo}
              label={projectDetailContent.previousProjectLabel}
              direction="previous"
            />
          ) : null}

          {nextProject ? (
            <ProjectNavigationLink
              project={nextProject}
              returnTo={returnTo}
              label={projectDetailContent.nextProjectLabel}
              direction="next"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

type ProjectNavigationLinkProps = {
  project: Project;
  returnTo: string;
  label: string;
  direction: "previous" | "next";
};

function ProjectNavigationLink({
  project,
  returnTo,
  label,
  direction,
}: ProjectNavigationLinkProps) {
  const isPrevious = direction === "previous";

  return (
    <Link
      to={`/projects/${project.id}`}
      state={{ returnTo }}
      className={[
        "group reveal flex flex-col justify-between gap-1 p-5 text-sm sm:p-6",
        isPrevious ? "items-start text-left" : "items-end text-right",
      ].join(" ")}
    >
      <span className="text-graphite">{label}</span>
      <span
        className={[
          "link-underline text-charcoal inline-flex items-center gap-2 font-medium transition-colors duration-300",
          isPrevious ? "flex-row-reverse" : "",
        ].join(" ")}
      >
        <span>{project.title}</span>
        <AnimatedArrow
          direction={isPrevious ? "left" : "right"}
          className="h-3.5 w-3.5 shrink-0"
        />
      </span>
    </Link>
  );
}
