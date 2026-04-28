import { useState } from "react";
import { AnimatedArrow } from "../common/AnimatedArrow";
import { projectDetailContent } from "../../data/site";
import type { ProjectImage } from "../../data/types";

type ProjectImageCarouselProps = {
  images: readonly [ProjectImage, ...ProjectImage[]];
};

export function ProjectImageCarousel({ images }: ProjectImageCarouselProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const normalizedImageIndex = activeImageIndex % images.length;
  const activeImage = images[normalizedImageIndex];
  const hasMultipleImages = images.length > 1;

  const showPreviousImage = () => {
    setActiveImageIndex(
      (currentIndex) => (currentIndex - 1 + images.length) % images.length,
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  return (
    <section className="py-7 sm:py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="reveal">
          <div className="border-blush bg-blush-soft relative h-72 max-h-170 overflow-hidden rounded-4xl border sm:h-120 lg:h-152">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              width={1280}
              height={900}
              className="h-full w-full object-cover object-center"
            />

            {hasMultipleImages ? (
              <>
                <button
                  type="button"
                  className="text-charcoal shadow-soft absolute top-1/2 left-3 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/50 backdrop-blur-sm transition-colors duration-300 hover:bg-white sm:left-5 sm:h-11 sm:w-11"
                  aria-label={projectDetailContent.previousImageLabel}
                  onClick={showPreviousImage}
                >
                  <AnimatedArrow direction="left" className="h-4 w-4" />
                </button>

                <p
                  className="text-charcoal shadow-soft absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/50 px-3 py-1.5 text-sm font-medium backdrop-blur-sm transition-colors duration-300 hover:bg-white"
                  aria-live="polite"
                >
                  {normalizedImageIndex + 1}{" "}
                  {projectDetailContent.carouselStatusConnector} {images.length}
                </p>

                <button
                  type="button"
                  className="text-charcoal shadow-soft absolute top-1/2 right-3 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/50 backdrop-blur-sm transition-colors duration-300 hover:bg-white sm:right-5 sm:h-11 sm:w-11"
                  aria-label={projectDetailContent.nextImageLabel}
                  onClick={showNextImage}
                >
                  <AnimatedArrow className="h-4 w-4" />
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
