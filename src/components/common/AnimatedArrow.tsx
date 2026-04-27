import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

type AnimatedArrowDirection = "left" | "right" | "external";

type AnimatedArrowProps = {
  direction?: AnimatedArrowDirection;
  className?: string;
};

const arrowIcons: Record<AnimatedArrowDirection, LucideIcon> = {
  external: ExternalLink,
  left: ArrowLeft,
  right: ArrowRight,
};

export function AnimatedArrow({
  direction = "right",
  className = "h-4 w-4",
}: AnimatedArrowProps) {
  const Icon = arrowIcons[direction];

  return (
    <span
      className={[
        "animated-arrow",
        `animated-arrow-${direction}`,
        "shrink-0",
        className,
      ].join(" ")}
      aria-hidden
    >
      <Icon className="h-full w-full" />
    </span>
  );
}
