import { ArrowLeft, ArrowRight, Code2, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { ProjectStorySection } from "../components/ProjectStorySection";
import { SiteLayout } from "../components/SiteLayout";
import { getProjectById, projects } from "../data/projects";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
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

  return (
    <SiteLayout>
      <section className="pb-10 pt-16 sm:pt-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <Link
            to="/projects"
            className="link-underline mb-10 inline-flex items-center gap-2 text-sm text-graphite transition-colors hover:text-charcoal"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>All projects</span>
          </Link>

          <div className="reveal">
            <h1 className="font-display max-w-3xl text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite sm:text-xl">
              {project.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {project.links.demo ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="pill pill-rose"
                >
                  Live demo <ExternalLink className="h-4 w-4" />
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
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="reveal overflow-hidden rounded-[2rem] border border-blush bg-blush-soft">
            <img
              src={image.src}
              alt={image.alt}
              width={1280}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
          {image.caption ? (
            <p className="mt-3 text-sm text-graphite">{image.caption}</p>
          ) : null}
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="reveal grid gap-6 sm:grid-cols-3">
            <div className="soft-card p-6 sm:col-span-1">
              <p className="eyebrow mb-2">Date</p>
              <p className="text-charcoal">{project.date}</p>
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
            <ProjectStorySection label="03 - Goal" paragraphs={project.story.goal} />
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
        <section className="pb-16 pt-10">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <div className="border-t border-stone pt-8">
              <Link
                to={`/projects/${nextProject.id}`}
                className="group reveal flex items-center justify-between gap-4 text-sm"
              >
                <span className="text-graphite">Next case study</span>
                <span className="link-underline inline-flex items-center gap-2 font-medium text-charcoal transition-colors duration-300 group-hover:text-rose-deep">
                  <span>{nextProject.title}</span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </SiteLayout>
  );
}
