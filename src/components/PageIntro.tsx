import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow?: string;
  title: ReactNode;
  subheading?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  before?: ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  subheading,
  description,
  actions,
  before,
}: PageIntroProps) {
  const titleMargin = eyebrow ? "mt-5" : "mt-0";

  return (
    <section className="pt-10 pb-7 sm:pt-24 sm:pb-14 lg:pt-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        {before ? <div className="reveal mb-5">{before}</div> : null}
        {eyebrow ? <p className="eyebrow reveal">{eyebrow}</p> : null}
        <h1
          className={[
            "font-display reveal text-charcoal max-w-4xl text-4xl leading-[1.05] sm:text-6xl sm:leading-none lg:text-7xl",
            titleMargin,
          ].join(" ")}
        >
          {title}
        </h1>
        {subheading ? (
          <div className="reveal mt-5 sm:mt-7" data-delay="120">
            {subheading}
          </div>
        ) : null}
        {description ? (
          <p
            className="reveal text-graphite mt-5 max-w-2xl text-base leading-relaxed sm:mt-7 sm:text-xl"
            data-delay="160"
          >
            {description}
          </p>
        ) : null}
        {actions ? (
          <div
            className="reveal mt-7 flex flex-wrap gap-3 sm:mt-9"
            data-delay="220"
          >
            {actions}
          </div>
        ) : null}
      </div>
    </section>
  );
}
