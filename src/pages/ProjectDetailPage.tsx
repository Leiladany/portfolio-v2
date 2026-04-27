import { Code2 } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import { AnimatedArrow } from "../components/AnimatedArrow";
import { PageIntro } from "../components/PageIntro";
import { ProjectStorySection } from "../components/ProjectStorySection";
import { SiteLayout } from "../components/SiteLayout";
import { getProjectById, projects } from "../data/projects";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { NotFoundPage } from "./NotFoundPage";

type ProjectDetailLocationState = {
  returnTo?: string;
};

function getSafeReturnPath(value: unknown) {
  return value === "/" || value === "/projects" ? value : "/projects";
}

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const location = useLocation();
  const locationState = location.state as ProjectDetailLocationState | null;
  const returnTo = getSafeReturnPath(locationState?.returnTo);
  const project = projectId ? getProjectById(projectId) : undefined;

  useDocumentMeta({
    title: project
      ? `${project.title} - Leila Teixeira`
      : "Project not found - Leila Teixeira",
    description:
      project?.summary ??
      "The selected project could not be found in Leila Teixeira's portfolio.",
    image: project?.images[0].src,
  });

  if (!project) {
    return (
      <NotFoundPage
        title="Project not found"
        description="The selected project could not be found."
      />
    );
  }

  const currentProjectIndex = projects.findIndex(
    (item) => item.id === project.id,
  );
  const nextProject =
    currentProjectIndex >= 0 && projects.length > 1
      ? projects[(currentProjectIndex + 1) % projects.length]
      : undefined;
  const image = project.images[0];
  const projectFocus =
    project.facts.find((fact) => fact.label === "Focus")?.value ??
    project.keywords.slice(0, 2).join(", ");

  return (
    <SiteLayout>
      <PageIntro
        before={
          <Link
            to={returnTo}
            className="link-underline text-graphite inline-flex items-center gap-2 text-sm transition-colors duration-300"
          >
            <AnimatedArrow direction="left" className="h-4 w-4" />
            <span>Back</span>
          </Link>
        }
        title={project.title}
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
                Live demo{" "}
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
                <Code2 className="h-4 w-4" /> Repository
              </a>
            ) : null}
          </>
        }
      />

      <section className="py-10">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="reveal border-blush bg-blush-soft overflow-hidden rounded-[2rem] border">
            <img
              src={image.src}
              alt={image.alt}
              width={1280}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
          {image.caption ? (
            <p className="text-graphite mt-3 text-sm">{image.caption}</p>
          ) : null}
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="reveal grid gap-6 sm:grid-cols-3">
            <div className="soft-card p-6 sm:col-span-1">
              <p className="eyebrow mb-2">Focus</p>
              <p className="text-charcoal">{projectFocus}</p>
            </div>
            <div className="soft-card p-6 sm:col-span-2">
              <p className="eyebrow mb-3">Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((skill) => (
                  <span key={skill} className="chip chip-blush">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="space-y-12">
            <ProjectStorySection
              label="01 - Overview"
              paragraphs={project.story.overview}
            />
            <ProjectStorySection
              label="02 - Problem"
              paragraphs={project.story.problem}
            />
            <ProjectStorySection
              label="03 - Goal"
              paragraphs={project.story.goal}
            />
            <ProjectStorySection
              label="04 - Design decisions"
              paragraphs={project.story.designDecisions}
            />
            <ProjectStorySection
              label="05 - What I learned"
              paragraphs={project.story.learnings}
            />
          </div>
        </div>
      </section>

      {nextProject ? (
        <section className="pt-10 pb-16">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <div className="border-stone border-t pt-8">
              <Link
                to={`/projects/${nextProject.id}`}
                state={{ returnTo }}
                className="group reveal flex items-center justify-between gap-4 text-sm"
              >
                <span className="text-graphite">Next case study</span>
                <span className="link-underline text-charcoal inline-flex items-center gap-2 font-medium transition-colors duration-300">
                  <span>{nextProject.title}</span>
                  <AnimatedArrow className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </SiteLayout>
  );
}
