import type { SkillGroup } from "./types";

export const skillGroups = [
  {
    id: "design",
    title: "My Design Stack",
    items: [
      "Figma",
      "Canva",
      "Adobe XD",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],
  },
  {
    id: "frontend",
    title: "My Frontend Stack",
    items: [
      "React",
      "React Native",
      "JavaScript",
      "TypeScript",
      "CSS",
      "HTML",
      "Material UI",
      "Bootstrap",
      "Mantine",
      "Tailwind CSS",
    ],
  },
] satisfies readonly SkillGroup[];
