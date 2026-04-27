import { Code2, FileText, Mail, Palette } from "lucide-react";
import { PageIntro } from "../components/PageIntro";
import { SiteLayout } from "../components/SiteLayout";
import { profileInfo } from "../data/profile";
import { skillGroups } from "../data/skills";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const designSkills =
  skillGroups.find((group) => group.id === "design")?.items ?? [];
const frontendSkills =
  skillGroups.find((group) => group.id === "frontend")?.items ?? [];

export function AboutPage() {
  useDocumentMeta({
    title: "About - Leila Teixeira",
    description:
      "Leila Teixeira is a UX/UI-focused developer with a background in Web Design and full-stack web development.",
  });

  return (
    <SiteLayout>
      <PageIntro
        eyebrow="About"
        title={
          <>
            A UX/UI developer who cares
            <br />
            <span className="text-rose">about the small details.</span>
          </>
        }
      />

      <section className="pb-10">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="reveal border-blush bg-blush-soft text-charcoal flex w-full flex-wrap items-center gap-3 rounded-[1.75rem] border px-5 py-3 text-base">
            <span
              className="bg-rose h-2.5 w-2.5 shrink-0 rounded-full"
              aria-hidden
            />
            <span className="font-medium">Currently</span>
            <span className="text-graphite">
              Looking for my first junior role in UX/UI and frontend - remote or
              Lisbon.
            </span>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="reveal mx-auto max-w-5xl space-y-6 px-6 sm:px-8">
          {profileInfo.aboutParagraphs.slice(0, 2).map((paragraph) => (
            <p
              key={paragraph}
              className="text-graphite text-xl leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="reveal mb-12 max-w-xl">
            <p className="eyebrow mb-3">Skills and tools</p>
            <h2 className="font-display text-charcoal text-4xl sm:text-5xl">
              What I work with
            </h2>
            <p className="text-graphite mt-5 text-lg leading-relaxed">
              A mix of design and frontend tools I have used across student
              projects, bootcamp work, and personal projects.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            <div className="soft-card reveal p-8 sm:p-10">
              <div className="mb-2 flex items-center gap-3">
                <span className="bg-blush inline-flex h-11 w-11 items-center justify-center rounded-2xl">
                  <Palette className="text-rose-deep h-5 w-5" />
                </span>
                <p className="eyebrow text-charcoal">Design</p>
              </div>
              <h3 className="font-display text-charcoal mt-3 mb-3 text-2xl">
                Crafting calm, considered interfaces.
              </h3>
              <p className="text-graphite mb-6 text-base leading-relaxed">
                Wireframes, UI exploration, prototyping and visual systems -
                building interfaces that feel soft, clear and trustworthy.
              </p>
              <div className="flex flex-wrap gap-2">
                {designSkills.map((skill) => (
                  <span key={skill} className="chip chip-blush">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="soft-card reveal p-8 sm:p-10" data-delay="80">
              <div className="mb-2 flex items-center gap-3">
                <span className="bg-blush inline-flex h-11 w-11 items-center justify-center rounded-2xl">
                  <Code2 className="text-rose-deep h-5 w-5" />
                </span>
                <p className="eyebrow text-charcoal">Frontend</p>
              </div>
              <h3 className="font-display text-charcoal mt-3 mb-3 text-2xl">
                Bringing designs to life in the browser.
              </h3>
              <p className="text-graphite mb-6 text-base leading-relaxed">
                Building responsive, accessible, component-based interfaces with
                React and modern CSS - close to design and kind to users.
              </p>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <span key={skill} className="chip chip-blush">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal mt-14 flex flex-wrap gap-3">
            <a
              href="mailto:leiladany16@gmail.com"
              className="pill pill-primary"
            >
              <Mail className="h-4 w-4" /> Let's talk
            </a>
            <a
              href={profileInfo.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="pill pill-ghost"
            >
              <FileText className="h-4 w-4" /> Download resume
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
