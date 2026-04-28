import type { Project } from "../types";

export const pawsitivePets: Project = {
  id: "pawsitive-pets",
  title: "Pawsitive Pets",
  summary:
    "A simple web app that helps users organize and manage important information about their pets.",
  date: {
    start: "2023-01-05",
    end: "2023-01-31",
  },
  images: [
    {
      src: "/projects/pawsitive/pawsitive-1.png",
      alt: "Dashboard preview of the Pawsitive Pets web app.",
    },
  ],
  stack: ["React", "JavaScript", "Bootstrap"],
  facts: [
    { label: "Type", value: "Pet agenda web app" },
    { label: "Focus", value: "Organization and data handling" },
  ],
  story: [
    {
      id: "overview",
      label: "01 - Overview",
      paragraphs: [
        "Pawsitive Pets is a small management tool where users can store and update key information related to their pets in one place.",
      ],
    },
    {
      id: "problem",
      label: "02 - Problem",
      paragraphs: [
        "Pet information is often scattered across notes, messages or memory, which makes it harder to keep everything updated and accessible.",
      ],
    },
    {
      id: "goal",
      label: "03 - Goal",
      paragraphs: [
        "The goal was to create a straightforward and organized interface where users can easily manage and update their data.",
      ],
    },
    {
      id: "design-decisions",
      label: "04 - Design decisions",
      paragraphs: [
        "The interface focuses on clarity and repetition of patterns, so users don't have to think too much about how to use it.",
        "The app combines a React frontend with an Express and MongoDB backend to support full CRUD functionality.",
      ],
    },
    {
      id: "learnings",
      label: "05 - What I learned",
      paragraphs: [
        "This project reinforced how important consistency is in utility tools. When everything behaves as expected, the product becomes easier to use and trust.",
      ],
    },
  ],
  links: {
    repo: "https://github.com/Leiladany/PawsitivePets-v2",
    demo: "https://pawsitivepets.netlify.app/",
  },
};
