import type { SkillGroups } from "../types";

export const skillGroups: SkillGroups = [
  {
    id: "design",
    label: "Design",
    title: "Designing clear and thoughtful interfaces.",
    description:
      "Wireframes, UI exploration, prototyping and visual systems, focused on clarity, structure and usability.",
    icon: "palette",
    previewLimit: 4,
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
    label: "Frontend",
    title: "Turning designs into responsive interfaces.",
    description:
      "Building responsive, accessible and component-based interfaces with React and modern CSS.",
    icon: "code",
    previewLimit: 5,
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
];
