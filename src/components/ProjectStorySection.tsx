type ProjectStorySectionProps = {
  label: string;
  paragraphs: readonly string[];
};

export function ProjectStorySection({
  label,
  paragraphs,
}: ProjectStorySectionProps) {
  return (
    <section className="reveal">
      <p className="eyebrow mb-3">{label}</p>
      <div className="space-y-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-graphite text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
