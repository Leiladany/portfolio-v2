import { Link } from "react-router-dom";
import { AnimatedArrow } from "../common/AnimatedArrow";
import { getSkillItems } from "../../utils/skillUtils";

const designSkills = getSkillItems("design");
const frontendSkills = getSkillItems("frontend");

export function ToolboxPreviewSection() {
  return (
    <section className="py-14 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Toolbox preview</p>
            <h2 className="font-display text-charcoal text-3xl sm:text-5xl">
              Tools I work with
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
  );
}
