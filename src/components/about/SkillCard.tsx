import type { LucideIcon } from "lucide-react";

type SkillCardProps = {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  skills: readonly string[];
  delay?: number;
};

export function SkillCard({
  icon: Icon,
  label,
  title,
  description,
  skills,
  delay,
}: SkillCardProps) {
  return (
    <div className="soft-card reveal p-6 sm:p-10" data-delay={delay}>
      <div className="mb-2 flex items-center gap-3">
        <span className="bg-blush inline-flex h-11 w-11 items-center justify-center rounded-2xl">
          <Icon className="text-rose-deep h-5 w-5" />
        </span>
        <p className="eyebrow text-charcoal">{label}</p>
      </div>
      <h3 className="font-display text-charcoal mt-3 mb-3 text-xl sm:text-2xl">
        {title}
      </h3>
      <p className="text-graphite mb-6 text-base leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="chip chip-blush">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
