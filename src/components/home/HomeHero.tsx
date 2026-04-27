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
          <p className="text-graphite font-display text-xl leading-tight italic sm:text-3xl">
            {profileInfo.title}
          </p>
          {profileInfo.openToWork.value && (
            <span className="border-blush bg-blush-soft text-rose-deep inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs">
              <Sparkles className="h-4 w-4 shrink-0" />
              <span className="font-light whitespace-nowrap">
                {profileInfo.openToWork.badge}
              </span>
            </span>
          )}
        </div>
      }
      description={profileInfo.intro}
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
