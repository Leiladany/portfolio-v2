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
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        {before ? <div className="reveal mb-5">{before}</div> : null}
        {eyebrow ? <p className="eyebrow reveal">{eyebrow}</p> : null}
        <h1
          className={[
            "font-display reveal text-charcoal max-w-4xl text-5xl leading-none sm:text-6xl lg:text-7xl",
            titleMargin,
          ].join(" ")}
        >
          {title}
        </h1>
        {subheading ? (
          <div className="reveal mt-7" data-delay="120">
            {subheading}
          </div>
        ) : null}
        {description ? (
          <p
            className="reveal text-graphite mt-7 max-w-2xl text-lg leading-relaxed sm:text-xl"
            data-delay="160"
          >
            {description}
          </p>
        ) : null}
        {actions ? (
          <div className="reveal mt-9 flex flex-wrap gap-3" data-delay="220">
            {actions}
          </div>
        ) : null}
      </div>
    </section>
  );
}
