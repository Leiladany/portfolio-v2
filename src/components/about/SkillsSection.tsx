import { SkillCard } from "./SkillCard";
import { skillGroups } from "../../data/skills";
import { aboutPageContent } from "../../data/site";
import { getIcon } from "../../utils/icons";

const skillCards = skillGroups.map((group) => ({
  group,
  icon: getIcon(group.icon),
}));

export function SkillsSection() {
  const { skills } = aboutPageContent;

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="reveal mb-12 max-w-xl">
          <p className="eyebrow mb-3">{skills.eyebrow}</p>
          <h2 className="font-display text-charcoal text-3xl sm:text-5xl">
            {skills.title}
          </h2>
          <p className="text-graphite mt-4 text-base leading-relaxed sm:mt-5 sm:text-lg">
            {skills.description}
          </p>
        </div>

        <div className="space-y-6">
          {skillCards.map(({ group, icon }, index) => (
            <SkillCard
              key={group.id}
              group={group}
              icon={icon}
              delay={index === 0 ? undefined : index * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
