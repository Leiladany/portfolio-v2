import { PageIntro } from "../common/PageIntro";

export function AboutHero() {
  return (
    <PageIntro
      eyebrow="About"
      title={
        <>
          A developer who cares
          <br />
          <span className="text-rose">about the small details.</span>
        </>
      }
    />
  );
}
