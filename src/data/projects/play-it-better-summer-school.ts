import type { Project } from "../types";

export const playItBetterSummerSchool: Project = {
  id: "play-it-better-summer-school",
  title: "Play It Better: Summer School",
  summary:
    "A website designed to present a children's summer school program in a clear, friendly and easy-to-understand way.",
  date: {
    start: "2024-04-01",
    end: "2024-05-21",
  },
  images: [
    {
      src: "/projects/playitbetter/playitbetter-0.png",
      alt: "Landing page preview of Play It Better: Summer School.",
    },
  ],
  stack: ["React", "JavaScript", "Material UI", "EmailJS"],
  facts: [
    { label: "Type", value: "School Web App" },
    { label: "Focus", value: "Approachable interface for children" },
  ],
  story: [
    {
      id: "overview",
      label: "01 - Overview",
      paragraphs: [
        "Play It Better is a website created to explain how a children's summer school works and help parents quickly find the information they need, including how to register.",
      ],
    },
    {
      id: "problem",
      label: "02 - Problem",
      paragraphs: [
        "When it comes to children's activities, parents usually look for clarity and trust. If the information feels confusing or overwhelming, it becomes harder to make a decision.",
      ],
    },
    {
      id: "goal",
      label: "03 - Goal",
      paragraphs: [
        "The goal was to design a simple and welcoming experience where users can quickly understand the program and feel comfortable moving forward.",
      ],
    },
    {
      id: "design-decisions",
      label: "04 - Design decisions",
      paragraphs: [
        "The interface uses a light and friendly visual style, combined with a simple layout and clear hierarchy. The focus was on readability and making sure each section feels easy to scan.",
        "On the development side, React and Material UI helped maintain consistency, while EmailJS allowed handling contact interactions without needing a backend.",
      ],
    },
    {
      id: "learnings",
      label: "05 - What I learned",
      paragraphs: [
        "This project helped reinforce how important tone and clarity are, especially for younger audiences. Small design choices can make a big difference in how approachable a product feels.",
      ],
    },
  ],
  links: {
    repo: "https://github.com/Leiladany/PlayItBetter-client",
    demo: "https://playitbetter.netlify.app/",
  },
};
