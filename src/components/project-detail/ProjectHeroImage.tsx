import type { ProjectImage } from "../../data/types";

type ProjectHeroImageProps = {
  image: ProjectImage;
};

export function ProjectHeroImage({ image }: ProjectHeroImageProps) {
  return (
    <section className="py-7 sm:py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="reveal border-blush bg-blush-soft overflow-hidden rounded-4xl border">
          <img
            src={image.src}
            alt={image.alt}
            width={1280}
            height={900}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
