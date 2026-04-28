import type { AboutPageContent } from "../types";

export const aboutPageContent: AboutPageContent = {
  hero: {
    eyebrow: "About",
    title: [
      { text: "A developer who cares", lineBreakAfter: true },
      { text: "about the small details.", highlight: true },
    ],
  },
  skills: {
    eyebrow: "Skills and tools",
    title: "What I work with",
    description:
      "A selection of design and frontend tools I've used across academic projects, bootcamp work and personal projects.",
  },
  education: {
    eyebrow: "Education",
    title: "Where I learned",
    stackLabel: "Tech Stack",
  },
  actions: {
    contactLabel: "Let's talk",
  },
};
