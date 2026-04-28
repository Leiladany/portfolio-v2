import { Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedArrow } from "../common/AnimatedArrow";
import { PageIntro } from "../common/PageIntro";
import { projectDetailContent } from "../../data/site";
import type { Project } from "../../data/types";

type ProjectDetailHeroProps = {
  project: Project;
  returnTo: string;
};

export function ProjectDetailHero({
  project,
  returnTo,
}: ProjectDetailHeroProps) {
  return (
    <PageIntro
      before={
        <Link
          to={returnTo}
          className="link-underline text-graphite inline-flex items-center gap-2 text-sm transition-colors duration-300"
        >
          <AnimatedArrow direction="left" className="h-4 w-4" />
          <span>{projectDetailContent.backLabel}</span>
        </Link>
      }
      title={
        <span className="inline-flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <span>{project.title}</span>
        </span>
      }
      description={project.summary}
      actions={
        <>
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="pill pill-rose"
            >
              {projectDetailContent.liveDemoLabel}{" "}
              <AnimatedArrow direction="external" className="h-4 w-4" />
            </a>
          ) : null}
          {project.links.repo ? (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className="pill pill-ghost"
            >
              <Code2 className="h-4 w-4" />{" "}
              {projectDetailContent.repositoryLabel}
            </a>
          ) : null}
        </>
      }
    />
  );
}
