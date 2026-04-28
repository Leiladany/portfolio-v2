import { EducationCard } from "./EducationCard";
import { educationEntries } from "../../data/education";
import { aboutPageContent } from "../../data/site";

export function EducationSection() {
  const { education } = aboutPageContent;

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="reveal mb-12 max-w-xl">
          <p className="eyebrow mb-3">{education.eyebrow}</p>
          <h2 className="font-display text-charcoal text-3xl sm:text-5xl">
            {education.title}
          </h2>
        </div>

        <div className="space-y-6">
          {educationEntries.map((entry, index) => (
            <EducationCard
              key={entry.id}
              entry={entry}
              stackLabel={education.stackLabel}
              delay={index === 0 ? undefined : index * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
