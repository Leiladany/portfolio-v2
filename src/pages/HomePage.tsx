import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { SiteLayout } from "../components/SiteLayout";
import { profileInfo } from "../data/profile";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const designSkills = skillGroups.find((group) => group.id === "design")?.items ?? [];
const frontendSkills =
  skillGroups.find((group) => group.id === "frontend")?.items ?? [];

export function HomePage() {
  useDocumentMeta({
    title: "Leila Teixeira - UX/UI & Frontend Developer",
    description:
      "Portfolio of Leila Teixeira, a UX/UI-focused frontend developer designing soft, clear and user-friendly digital experiences.",
  });

  const featuredProjects = projects.slice(0, 3);

  return (
    <SiteLayout>
      <section className="relative pb-28 pt-28 sm:pb-40 sm:pt-40">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <h1 className="font-display reveal max-w-4xl text-6xl leading-none text-charcoal sm:text-7xl lg:text-8xl">
            Hi, I'm <span className="text-rose">{profileInfo.fullName}</span>
            <span className="text-rose">.</span>
          </h1>

          <div
            className="reveal mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
            data-delay="160"
          >
            <p className="font-display text-3xl text-graphite sm:text-4xl">
              {profileInfo.title}
            </p>
            <span className="inline-flex items-center gap-2 rounded-full border border-blush bg-blush-soft px-4 py-2 text-sm text-rose-deep">
              <Sparkles className="h-4 w-4 shrink-0" />
              <span className="font-medium whitespace-nowrap">
                Open to junior roles
              </span>
            </span>
          </div>

          <p
            className="reveal mt-8 max-w-2xl text-lg leading-relaxed text-graphite sm:text-xl"
            data-delay="220"
          >
            I design and build soft, clear and user-friendly digital
            experiences - with care for the small details that make products
            feel kind.
          </p>

          <div className="reveal mt-10 flex flex-wrap gap-3" data-delay="280">
            <Link to="/projects" className="pill pill-primary">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="pill pill-ghost">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="reveal mb-12 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">Selected work</p>
              <h2 className="font-display text-4xl text-charcoal sm:text-5xl">
                Featured projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="link-underline hidden items-center gap-1.5 text-sm font-medium text-charcoal transition-colors hover:text-rose-deep sm:inline-flex"
            >
              See all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="eyebrow mb-3">Toolbox preview</p>
              <h2 className="font-display text-4xl text-charcoal sm:text-5xl">
                Tools I love working with
              </h2>
            </div>
            <Link
              to="/about"
              className="link-underline hidden items-center gap-1.5 text-sm font-medium text-charcoal transition-colors hover:text-rose-deep sm:inline-flex"
            >
              More about me <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div
            className="reveal flex flex-wrap items-center gap-x-8 gap-y-4 rounded-[2rem] border border-blush-soft bg-white p-7 shadow-soft sm:p-9"
            data-delay="80"
          >
            <span className="eyebrow text-charcoal">Design</span>
            <div className="flex min-w-[200px] flex-1 flex-wrap gap-2">
              {designSkills.slice(0, 4).map((skill) => (
                <span key={skill} className="chip chip-blush">
                  {skill}
                </span>
              ))}
            </div>
            <span className="hidden h-8 w-px bg-blush-soft sm:block" aria-hidden />
            <span className="eyebrow text-charcoal">Frontend</span>
            <div className="flex min-w-[200px] flex-1 flex-wrap gap-2">
              {frontendSkills.slice(0, 5).map((skill) => (
                <span key={skill} className="chip chip-blush">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="reveal rounded-[2rem] border border-blush bg-blush-soft p-10 text-center sm:p-16">
            <p className="eyebrow mb-4">Let's chat</p>
            <h2 className="font-display text-4xl leading-tight text-charcoal sm:text-5xl">
              Open to junior opportunities.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-graphite sm:text-xl">
              I'm open to junior UX/UI and frontend opportunities where I can
              keep learning, contribute to real products, and grow with a team.
            </p>
            <div className="mt-9 flex justify-center">
              <a href="mailto:leiladany16@gmail.com" className="pill pill-primary">
                <Mail className="h-4 w-4" /> Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
