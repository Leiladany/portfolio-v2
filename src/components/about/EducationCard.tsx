import { GraduationCap } from "lucide-react";
import type { EducationEntry } from "../../data/types";

type EducationCardProps = {
  entry: EducationEntry;
  stackLabel: string;
  delay?: number;
};

export function EducationCard({
  entry,
  stackLabel,
  delay,
}: EducationCardProps) {
  return (
    <article className="soft-card reveal p-6 sm:p-8" data-delay={delay}>
      <div className="flex flex-col items-start justify-between gap-x-6 gap-y-2 sm:flex-row">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <span className="bg-blush inline-flex h-8 w-8 items-center justify-center rounded-2xl">
              <GraduationCap className="text-rose-deep h-4 w-4" />
            </span>
            <p className="eyebrow text-charcoal">{entry.program}</p>
          </div>
          <h3 className="font-display text-charcoal text-2xl sm:text-3xl">
            {entry.institution}
          </h3>
        </div>
        <p className="text-graphite text-sm font-medium whitespace-nowrap">
          {entry.period}
        </p>
      </div>

      <p className="text-graphite mt-5 max-w-3xl text-base leading-relaxed">
        {entry.description}
      </p>

      {entry.stack?.length ? (
        <div className="mt-6">
          <p className="eyebrow text-charcoal mb-3">{stackLabel}</p>
          <div className="flex flex-wrap gap-2">
            {entry.stack.map((technology) => (
              <span key={technology} className="chip chip-blush">
                {technology}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
