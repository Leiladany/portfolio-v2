import { Link } from "react-router-dom";
import { AnimatedArrow } from "../common/AnimatedArrow";
import type { Project } from "../../data/types";

type NextProjectLinkProps = {
  project: Project;
  returnTo: string;
};

export function NextProjectLink({ project, returnTo }: NextProjectLinkProps) {
  return (
    <section className="pt-8 pb-12 sm:pt-10 sm:pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="border-stone border-t pt-8">
          <Link
            to={`/projects/${project.id}`}
            state={{ returnTo }}
            className="group reveal flex items-center justify-between gap-4 text-sm"
          >
            <span className="text-graphite">Next case study</span>
            <span className="link-underline text-charcoal inline-flex items-center gap-2 font-medium transition-colors duration-300">
              <span>{project.title}</span>
              <AnimatedArrow className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
