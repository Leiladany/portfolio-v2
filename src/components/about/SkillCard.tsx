import type { LucideIcon } from "lucide-react";
import type { SkillGroup } from "../../data/types";

type SkillCardProps = {
  group: SkillGroup;
  icon: LucideIcon;
  delay?: number;
};

export function SkillCard({ group, icon: Icon, delay }: SkillCardProps) {
  return (
    <div className="soft-card reveal p-6 sm:p-10" data-delay={delay}>
      <div className="mb-2 flex items-center gap-3">
        <span className="bg-blush inline-flex h-8 w-8 items-center justify-center rounded-2xl">
          <Icon className="text-rose-deep h-4 w-4" />
        </span>
        <p className="eyebrow text-charcoal">{group.label}</p>
      </div>
      <h3 className="font-display text-charcoal mt-3 mb-3 text-xl sm:text-2xl">
        {group.title}
      </h3>
      <p className="text-graphite mb-6 text-base leading-relaxed">
        {group.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {group.items.map((skill) => (
          <span key={skill} className="chip chip-blush">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
