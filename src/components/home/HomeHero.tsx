import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedArrow } from "../common/AnimatedArrow";
import { PageIntro } from "../common/PageIntro";
import { profileInfo } from "../../data/profile";

export function HomeHero() {
  return (
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
          I design and build soft, clear and user-friendly digital experiences -
          with care for the small details that make products feel kind.
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
  );
}
