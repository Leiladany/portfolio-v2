import type { Project } from "../types";

export const empowered: Project = {
  id: "empowered",
  title: "Empowered",
  summary:
    "An educational platform designed to present sensitive topics in a clear, approachable and structured way.",
  date: {
    start: "2023-02-01",
    end: "2023-02-28",
  },
  images: [
    {
      src: "/projects/empowered/empowered-0.png",
      alt: "Homepage preview of the Empowered platform.",
    },
  ],
  stack: ["React", "JavaScript", "Mantine"],
  facts: [
    { label: "Type", value: "Educational Web App" },
    { label: "Focus", value: "Content clarity and trust" },
  ],
  story: [
    {
      id: "overview",
      label: "01 - Overview",
      paragraphs: [
        "Empowered is a platform focused on topics like sexuality, health and relationships, where the main goal is to make information feel accessible and easy to understand.",
      ],
    },
    {
      id: "problem",
      label: "02 - Problem",
      paragraphs: [
        "Content around sensitive subjects can easily feel overwhelming, too technical, or uncomfortable to navigate. Without the right structure, users may disengage before finding what they need.",
      ],
    },
    {
      id: "goal",
      label: "03 - Goal",
      paragraphs: [
        "The goal was to create a space where users feel comfortable exploring content, with a strong focus on clarity, readability and trust.",
      ],
    },
    {
      id: "design-decisions",
      label: "04 - Design decisions",
      paragraphs: [
        "The design follows a content-first approach, using spacing, hierarchy and simple layouts to support reading and understanding.",
        "From a technical perspective, the project connects a React frontend with an Express and MongoDB backend, allowing content to be structured and delivered dynamically.",
      ],
    },
    {
      id: "learnings",
      label: "05 - What I learned",
      paragraphs: [
        "This project showed how important structure and tone are in building trust. Clear organization and calm visual design make a big difference when dealing with sensitive topics.",
      ],
    },
  ],
  links: {
    repo: "https://github.com/Leiladany/Empowered-v2",
    demo: "https://feeling-empowered.netlify.app/",
  },
};
