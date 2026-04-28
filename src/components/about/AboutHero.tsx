import { FormattedTitle } from "../common/FormattedTitle";
import { PageIntro } from "../common/PageIntro";
import { aboutPageContent } from "../../data/site";

export function AboutHero() {
  const { hero } = aboutPageContent;

  return (
    <PageIntro
      eyebrow={hero.eyebrow}
      title={<FormattedTitle segments={hero.title} />}
    />
  );
}
