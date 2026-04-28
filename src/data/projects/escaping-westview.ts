import type { Project } from "../types";

export const escapingWestview: Project = {
  id: "escaping-westview",
  title: "Escaping Westview",
  summary:
    "A simple 2D browser game focused on movement, timing and player feedback.",
  date: {
    start: "2023-01-01",
    end: "2023-01-31",
  },
  images: [
    {
      src: "/projects/westview/westview-0.png",
      alt: "Gameplay screenshot from the Escaping Westview browser game.",
    },
  ],
  stack: ["HTML", "CSS", "JavaScript", "Canvas"],
  facts: [
    { label: "Type", value: "2D browser game" },
    { label: "Focus", value: "Movement, timing, and feedback" },
  ],
  story: [
    {
      id: "overview",
      label: "01 - Overview",
      paragraphs: [
        "Escaping Westview is a small browser game inspired by WandaVision, where the player must avoid obstacles and survive for as long as possible.",
      ],
    },
    {
      id: "problem",
      label: "02 - Problem",
      paragraphs: [
        "Even simple games can feel frustrating if controls or feedback aren't responsive enough. The experience depends heavily on how smooth and immediate interactions feel.",
      ],
    },
    {
      id: "goal",
      label: "03 - Goal",
      paragraphs: [
        "The goal was to create a simple but engaging gameplay loop that feels responsive and easy to understand from the first try.",
      ],
    },
    {
      id: "design-decisions",
      label: "04 - Design decisions",
      paragraphs: [
        "Using Canvas and vanilla JavaScript allowed full control over rendering and interactions, making it easier to fine-tune movement and collision behavior.",
      ],
    },
    {
      id: "learnings",
      label: "05 - What I learned",
      paragraphs: [
        "This project showed how much impact responsiveness and feedback have. Even a simple idea becomes much more engaging when interactions feel smooth and satisfying.",
      ],
    },
  ],
  links: {
    demo: "https://leiladany.github.io/Escaping-Westview/",
  },
};
