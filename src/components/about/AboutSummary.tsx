import { profileInfo } from "../../data/profile";

export function AboutSummary() {
  return (
    <section className="pb-10 sm:pb-16">
      <div className="reveal mx-auto max-w-5xl space-y-4 px-4 sm:space-y-6 sm:px-8">
        {profileInfo.aboutParagraphs.slice(0, 2).map((paragraph) => (
          <p
            key={paragraph}
            className="text-graphite text-base leading-relaxed sm:text-xl"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
