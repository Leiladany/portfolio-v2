import { Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedArrow } from "../components/AnimatedArrow";
import { PageIntro } from "../components/PageIntro";
import { ProjectCard } from "../components/ProjectCard";
import { SiteLayout } from "../components/SiteLayout";
import { profileInfo } from "../data/profile";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const designSkills =
  skillGroups.find((group) => group.id === "design")?.items ?? [];
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
      <PageIntro
        title={
          <>
            Hi, I'm <span className="text-rose">{profileInfo.fullName}</span>
            <span className="text-rose">.</span>
          </>
        }
        subheading={
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <p className="text-graphite text-xl leading-tight font-medium sm:text-3xl">
              {profileInfo.title}
            </p>
            <span className="border-blush bg-blush-soft text-rose-deep inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 shrink-0" />
              <span className="font-medium whitespace-nowrap">
                Open to junior roles
              </span>
            </span>
          </div>
        }
        description={
          <>
            I design and build soft, clear and user-friendly digital experiences
            - with care for the small details that make products feel kind.
          </>
        }
        actions={
          <>
            <Link to="/projects" className="pill pill-primary">
              View Projects
              <AnimatedArrow className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="pill pill-ghost">
              Contact Me
            </Link>
          </>
        }
      />

      <section className="py-14 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <div className="reveal mb-12 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">Selected work</p>
              <h2 className="font-display text-charcoal text-3xl sm:text-5xl">
                Featured projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="link-underline text-charcoal hidden items-center gap-1.5 text-sm font-medium transition-colors duration-300 sm:inline-flex"
            >
              See all <AnimatedArrow className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="eyebrow mb-3">Toolbox preview</p>
              <h2 className="font-display text-charcoal text-3xl sm:text-5xl">
                Tools I love working with
              </h2>
            </div>
            <Link
              to="/about"
              className="link-underline text-charcoal hidden items-center gap-1.5 text-sm font-medium transition-colors duration-300 sm:inline-flex"
            >
              More about me <AnimatedArrow className="h-4 w-4" />
            </Link>
          </div>
          <div
            className="reveal border-blush-soft shadow-soft grid gap-6 rounded-[2rem] border bg-white p-5 sm:gap-7 sm:p-9 md:grid-cols-2"
            data-delay="80"
          >
            <div>
              <span className="eyebrow text-charcoal mb-3 block">Design</span>
              <div className="flex flex-wrap gap-2">
                {designSkills.slice(0, 4).map((skill) => (
                  <span key={skill} className="chip chip-blush">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="eyebrow text-charcoal mb-3 block">Frontend</span>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.slice(0, 5).map((skill) => (
                  <span key={skill} className="chip chip-blush">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <div className="reveal border-blush bg-blush-soft rounded-[2rem] border p-6 text-center sm:p-16">
            <p className="eyebrow mb-4">Let's chat</p>
            <h2 className="font-display text-charcoal text-3xl leading-tight sm:text-5xl">
              Open to junior opportunities.
            </h2>
            <p className="text-graphite mx-auto mt-5 max-w-xl text-base leading-relaxed sm:mt-6 sm:text-xl">
              I'm open to junior UX/UI and frontend opportunities where I can
              keep learning, contribute to real products, and grow with a team.
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href="mailto:leiladany16@gmail.com"
                className="pill pill-primary"
              >
                <Mail className="h-4 w-4" /> Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
