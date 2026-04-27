import type { Project } from "./types";

const projectEntries = [
  {
    id: "play-it-better-summer-school",
    title: "Play It Better: Summer School",
    summary:
      "A project for children that aims to make learning English feel more approachable through a friendly and accessible interface.",
    date: "2023",
    images: [
      {
        src: "/projects/playitbetter.png",
        alt: "Landing page preview of Play It Better: Summer School.",
      },
    ],
    stack: ["React", "JavaScript", "Material UI", "CSS", "EmailJS"],
    keywords: [
      "Education",
      "Friendly UI",
      "Accessible layout",
      "Communication flows",
    ],
    facts: [
      { label: "Type", value: "Educational web project" },
      { label: "Focus", value: "Approachable interface for children" },
      { label: "Stack", value: "React, Material UI, EmailJS" },
    ],
    story: {
      overview: [
        "Play It Better is centered on making English learning feel more inviting and more enjoyable for children.",
        "The visual direction supports that goal by keeping the interface light, readable, and approachable for a younger audience.",
      ],
      problem: [
        "Educational products for children can quickly become noisy or overcomplicated. When that happens, the interface gets in the way of learning instead of supporting it.",
      ],
      goal: [
        "The goal was to create a friendlier experience where the visual language encourages exploration and makes the product feel less intimidating.",
      ],
      userFlow: [
        "The experience is designed so users can land on the product, understand what it offers quickly, and move through the key information without confusion or unnecessary friction.",
      ],
      designDecisions: [
        "The layout uses bright, supportive visuals and straightforward structure so the interface feels accessible. React and Material UI helped keep the experience consistent while EmailJS covered communication needs without adding backend overhead.",
      ],
      learnings: [
        "This project highlighted how much tone matters in education-focused interfaces. Small decisions around spacing, clarity, and visual warmth have a direct impact on whether the product feels welcoming.",
      ],
    },
    links: {
      repo: "https://github.com/Leiladany/PlayItBetter-client",
      demo: "https://playitbetter.netlify.app/",
    },
    sortOrder: 2,
  },
  {
    id: "empowered",
    title: "Empowered",
    summary:
      "An online platform dedicated to helping young people and adults explore topics related to sexuality, health, and relationships in a clear and approachable way.",
    date: "2023",
    images: [
      {
        src: "/projects/empowered.png",
        alt: "Homepage preview of the Empowered platform.",
      },
    ],
    stack: [
      "React",
      "JavaScript",
      "Mantine",
      "Node.js",
      "Express.js",
      "Axios",
      "REST API",
      "MongoDB",
    ],
    keywords: [
      "Educational platform",
      "Content design",
      "Information architecture",
      "Full-stack flow",
    ],
    facts: [
      { label: "Type", value: "Educational platform" },
      { label: "Focus", value: "Content clarity and trust" },
      { label: "Stack", value: "React, Mantine, Express, MongoDB" },
    ],
    story: {
      overview: [
        "Empowered is an information-driven platform built around topics related to sexuality, health, and relationships, so clarity and trust are central to the experience.",
      ],
      problem: [
        "Sensitive subjects can feel overwhelming if the interface is too dense, too clinical, or too difficult to navigate. The challenge was to make the content feel approachable without reducing its importance.",
      ],
      goal: [
        "The goal was to create a platform where users can access educational content in a way that feels welcoming, readable, and organized.",
      ],
      userFlow: [
        "Users move through the platform by discovering key topics, opening deeper content, and continuing through the information architecture without feeling lost or overloaded.",
      ],
      designDecisions: [
        "The design takes a content-first approach where layout, hierarchy, and spacing support comprehension. On the technical side, the frontend connects to APIs and a MongoDB-backed Express layer to support the broader platform flow.",
      ],
      learnings: [
        "This project reinforced how interface trust is built through structure and tone. Readability, pacing, and clear hierarchy matter even more when the subject matter is sensitive.",
      ],
    },
    links: {
      repo: "https://github.com/Leiladany/Empowered-v2",
      demo: "https://feeling-empowered.netlify.app/",
    },
    sortOrder: 3,
  },
  {
    id: "pawsitive-pets",
    title: "Pawsitive Pets",
    summary:
      "A simple online agenda where users can organize and keep track of important information related to their pets.",
    date: "2023",
    images: [
      {
        src: "/projects/pawsitive.png",
        alt: "Dashboard preview of the Pawsitive Pets web app.",
      },
    ],
    stack: [
      "React",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "REST API",
      "MongoDB",
    ],
    keywords: [
      "Pet management",
      "CRUD flows",
      "Clear organization",
      "Full-stack app",
    ],
    facts: [
      { label: "Type", value: "Pet agenda web app" },
      { label: "Focus", value: "Organization and data handling" },
      { label: "Stack", value: "React, Express, MongoDB" },
    ],
    story: {
      overview: [
        "Pawsitive Pets is built around keeping practical pet information easy to access, update, and organize in one place.",
      ],
      problem: [
        "Pet-related details are often scattered across messages, notes, and memory. That makes it harder to keep track of what matters and to update information reliably.",
      ],
      goal: [
        "The goal was to create a simple management tool where users can centralize important pet data through a straightforward interface.",
      ],
      userFlow: [
        "The product flow focuses on managing records with predictable CRUD actions so users can quickly create, review, and update information without needing to relearn the interface.",
      ],
      designDecisions: [
        "The UI emphasizes clarity and repeatable patterns instead of visual complexity. The technical setup combines a React frontend with Express and MongoDB so the app can support a practical data-management flow.",
      ],
      learnings: [
        "This project highlighted how valuable consistency is in utility products. When the interaction model is stable, the product feels easier to trust and easier to use.",
      ],
    },
    links: {
      repo: "https://github.com/Leiladany/PawsitivePets-v2",
      demo: "https://pawsitivepets.netlify.app/",
    },
    sortOrder: 4,
  },
  {
    id: "escaping-westview",
    title: "Escaping Westview",
    summary:
      "A 2D browser game inspired by the Disney+ series WandaVision, where the goal is to survive incoming spells for as long as possible.",
    date: "2022",
    images: [
      {
        src: "/projects/westview.png",
        alt: "Gameplay screenshot from the Escaping Westview browser game.",
      },
    ],
    stack: ["HTML", "CSS", "JavaScript", "Canvas"],
    keywords: [
      "2D gameplay",
      "Canvas rendering",
      "Interaction design",
      "Timing mechanics",
    ],
    facts: [
      { label: "Type", value: "2D browser game" },
      { label: "Focus", value: "Movement, timing, and feedback" },
      { label: "Stack", value: "HTML, CSS, JavaScript, Canvas" },
    ],
    story: {
      overview: [
        "Escaping Westview is a browser game with a simple core loop: keep moving, avoid danger, and survive for as long as possible.",
      ],
      problem: [
        "For a browser game to feel fun, the controls and feedback need to be immediate. Even a simple idea can fall flat if movement and visual response do not feel tight.",
      ],
      goal: [
        "The goal was to create a small but engaging gameplay loop that feels responsive, replayable, and easy to understand from the first session.",
      ],
      userFlow: [
        "Players enter the game, understand the objective quickly, and then focus on movement and survival as the challenge increases through repeated attempts.",
      ],
      designDecisions: [
        "Canvas and vanilla JavaScript were a strong fit because they give direct control over rendering, collision handling, and timing. The project keeps the mechanics readable so the gameplay stays at the center.",
      ],
      learnings: [
        "This project reinforced how much interaction quality matters. Strong feedback and responsive movement can make a simple mechanic feel significantly more satisfying.",
      ],
    },
    links: {
      demo: "https://leiladany.github.io/Escaping-Westview/",
    },
    sortOrder: 5,
  },
] satisfies readonly Project[];

export const projects = [...projectEntries].sort(
  (firstProject, secondProject) =>
    firstProject.sortOrder - secondProject.sortOrder,
);

export function getProjectById(projectId: string) {
  return projects.find((project) => project.id === projectId);
}
