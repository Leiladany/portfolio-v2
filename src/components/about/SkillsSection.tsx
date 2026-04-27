import { Code2, Palette } from "lucide-react";
import { SkillCard } from "./SkillCard";
import { getSkillItems } from "../../utils/skillUtils";

const designSkills = getSkillItems("design");
const frontendSkills = getSkillItems("frontend");

export function SkillsSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="reveal mb-12 max-w-xl">
          <p className="eyebrow mb-3">Skills and tools</p>
          <h2 className="font-display text-charcoal text-3xl sm:text-5xl">
            What I work with
          </h2>
          <p className="text-graphite mt-4 text-base leading-relaxed sm:mt-5 sm:text-lg">
            A mix of design and frontend tools I have used across student
            projects, bootcamp work, and personal projects.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          <SkillCard
            icon={Palette}
            label="Design"
            title="Crafting calm, considered interfaces."
            description="Wireframes, UI exploration, prototyping and visual systems - building interfaces that feel soft, clear and trustworthy."
            skills={designSkills}
          />
          <SkillCard
            icon={Code2}
            label="Frontend"
            title="Bringing designs to life in the browser."
            description="Building responsive, accessible, component-based interfaces with React and modern CSS - close to design and kind to users."
            skills={frontendSkills}
            delay={80}
          />
        </div>
      </div>
    </section>
  );
}
