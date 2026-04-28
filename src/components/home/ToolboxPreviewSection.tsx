import { Link } from "react-router-dom";
import { AnimatedArrow } from "../common/AnimatedArrow";
import { homePageContent } from "../../data/site";
import {
  getPreviewSkillGroups,
  getPreviewSkillItems,
} from "../../utils/skillUtils";

export function ToolboxPreviewSection() {
  const { toolboxPreview } = homePageContent;
  const previewSkillGroups = getPreviewSkillGroups();
  const previewGridColumns =
    previewSkillGroups.length > 1 ? "md:grid-cols-2" : "";

  return (
    <section className="py-14 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">{toolboxPreview.eyebrow}</p>
            <h2 className="font-display text-charcoal text-3xl sm:text-5xl">
              {toolboxPreview.title}
            </h2>
          </div>
          <Link
            to={toolboxPreview.linkTo}
            className="link-underline text-charcoal hidden items-center gap-1.5 text-sm font-medium transition-colors duration-300 sm:inline-flex"
          >
            {toolboxPreview.linkLabel} <AnimatedArrow className="h-4 w-4" />
          </Link>
        </div>
        <div
          className={[
            "reveal border-blush-soft shadow-soft grid gap-6 rounded-4xl border bg-white p-5 sm:gap-7 sm:p-9",
            previewGridColumns,
          ].join(" ")}
          data-delay="80"
        >
          {previewSkillGroups.map((group) => (
            <div key={group.id}>
              <span className="eyebrow text-charcoal mb-3 block">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {getPreviewSkillItems(group).map((skill) => (
                  <span key={skill} className="chip chip-blush">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
