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
            A selection of design and frontend tools I've used across academic
            projects, bootcamp work and personal projects.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          <SkillCard
            icon={Palette}
            label="Design"
            title="Designing clear and thoughtful interfaces."
            description="Wireframes, UI exploration, prototyping and visual systems, focused on clarity, structure and usability."
            skills={designSkills}
          />

          <SkillCard
            icon={Code2}
            label="Frontend"
            title="Turning designs into responsive interfaces."
            description="Building responsive, accessible and component-based interfaces with React and modern CSS."
            skills={frontendSkills}
            delay={80}
          />
        </div>
      </div>
    </section>
  );
}
