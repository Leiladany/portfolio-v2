import type { Project } from "./types";

const projectEntries = [
  {
    id: "play-it-better-summer-school",
    title: "Play It Better: Summer School",
    summary:
      "A website designed to present a children's summer school program in a clear, friendly and easy-to-understand way.",
    dateStart: new Date("2024-04-01"),
    dateEnd: new Date("2024-05-21"),
    images: [
      {
        src: "/projects/playitbetter/playitbetter-1.png",
        alt: "Landing page preview of Play It Better: Summer School.",
      },
    ],
    stack: ["React", "JavaScript", "Material UI", "EmailJS"],
    facts: [
      { label: "Type", value: "Educational web project" },
      { label: "Focus", value: "Approachable interface for children" },
    ],
    story: {
      overview: [
        "Play It Better is a website created to explain how a children's summer school works and help parents quickly find the information they need, including how to register.",
      ],
      problem: [
        "When it comes to children's activities, parents usually look for clarity and trust. If the information feels confusing or overwhelming, it becomes harder to make a decision.",
      ],
      goal: [
        "The goal was to design a simple and welcoming experience where users can quickly understand the program and feel comfortable moving forward.",
      ],
      userFlow: [
        "The structure guides users from a general understanding of the program into more specific details, ending with a clear path to registration.",
      ],
      designDecisions: [
        "The interface uses a light and friendly visual style, combined with a simple layout and clear hierarchy. The focus was on readability and making sure each section feels easy to scan.",
        "On the development side, React and Material UI helped maintain consistency, while EmailJS allowed handling contact interactions without needing a backend.",
      ],
      learnings: [
        "This project helped reinforce how important tone and clarity are, especially for younger audiences. Small design choices can make a big difference in how approachable a product feels.",
      ],
    },
    links: {
      repo: "https://github.com/Leiladany/PlayItBetter-client",
      demo: "https://playitbetter.netlify.app/",
    },
  },
  {
    id: "pawsitive-pets",
    title: "Pawsitive Pets",
    summary:
      "A simple web app that helps users organize and manage important information about their pets.",
    dateStart: new Date("2023-02-01"),
    dateEnd: new Date("2023-02-28"),
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
    story: {
      overview: [
        "Pawsitive Pets is a small management tool where users can store and update key information related to their pets in one place.",
      ],
      problem: [
        "Pet information is often scattered across notes, messages or memory, which makes it harder to keep everything updated and accessible.",
      ],
      goal: [
        "The goal was to create a straightforward and organized interface where users can easily manage and update their data.",
      ],
      userFlow: [
        "The experience is based on simple and predictable actions: creating, viewing and editing information in a consistent way.",
      ],
      designDecisions: [
        "The interface focuses on clarity and repetition of patterns, so users don't have to think too much about how to use it.",
        "The app combines a React frontend with an Express and MongoDB backend to support full CRUD functionality.",
      ],
      learnings: [
        "This project reinforced how important consistency is in utility tools. When everything behaves as expected, the product becomes easier to use and trust.",
      ],
    },
    links: {
      repo: "https://github.com/Leiladany/PawsitivePets-v2",
      demo: "https://pawsitivepets.netlify.app/",
    },
  },
  {
    id: "empowered",
    title: "Empowered",
    summary:
      "An educational platform designed to present sensitive topics in a clear, approachable and structured way.",
    dateStart: new Date("2023-01-05"),
    dateEnd: new Date("2023-01-31"),
    images: [
      {
        src: "/projects/empowered/empowered-1.png",
        alt: "Homepage preview of the Empowered platform.",
      },
    ],
    stack: ["React", "JavaScript", "Mantine"],
    facts: [
      { label: "Type", value: "Educational platform" },
      { label: "Focus", value: "Content clarity and trust" },
    ],
    story: {
      overview: [
        "Empowered is a platform focused on topics like sexuality, health and relationships, where the main goal is to make information feel accessible and easy to understand.",
      ],
      problem: [
        "Content around sensitive subjects can easily feel overwhelming, too technical, or uncomfortable to navigate. Without the right structure, users may disengage before finding what they need.",
      ],
      goal: [
        "The goal was to create a space where users feel comfortable exploring content, with a strong focus on clarity, readability and trust.",
      ],
      userFlow: [
        "Users can explore different topics, dive deeper into specific content, and move through the platform without feeling lost or overloaded.",
      ],
      designDecisions: [
        "The design follows a content-first approach, using spacing, hierarchy and simple layouts to support reading and understanding.",
        "From a technical perspective, the project connects a React frontend with an Express and MongoDB backend, allowing content to be structured and delivered dynamically.",
      ],
      learnings: [
        "This project showed how important structure and tone are in building trust. Clear organization and calm visual design make a big difference when dealing with sensitive topics.",
      ],
    },
    links: {
      repo: "https://github.com/Leiladany/Empowered-v2",
      demo: "https://feeling-empowered.netlify.app/",
    },
  },
  {
    id: "escaping-westview",
    title: "Escaping Westview",
    summary:
      "A simple 2D browser game focused on movement, timing and player feedback.",
    dateStart: new Date("2023-01-01"),
    dateEnd: new Date("2023-01-31"),
    images: [
      {
        src: "/projects/westview/westview-1.png",
        alt: "Gameplay screenshot from the Escaping Westview browser game.",
      },
    ],
    stack: ["HTML", "CSS", "JavaScript", "Canvas"],
    facts: [
      { label: "Type", value: "2D browser game" },
      { label: "Focus", value: "Movement, timing, and feedback" },
    ],
    story: {
      overview: [
        "Escaping Westview is a small browser game inspired by WandaVision, where the player must avoid obstacles and survive for as long as possible.",
      ],
      problem: [
        "Even simple games can feel frustrating if controls or feedback aren't responsive enough. The experience depends heavily on how smooth and immediate interactions feel.",
      ],
      goal: [
        "The goal was to create a simple but engaging gameplay loop that feels responsive and easy to understand from the first try.",
      ],
      userFlow: [
        "Players quickly understand the objective and jump into the action, with difficulty increasing naturally as they try to survive longer.",
      ],
      designDecisions: [
        "Using Canvas and vanilla JavaScript allowed full control over rendering and interactions, making it easier to fine-tune movement and collision behavior.",
      ],
      learnings: [
        "This project showed how much impact responsiveness and feedback have. Even a simple idea becomes much more engaging when interactions feel smooth and satisfying.",
      ],
    },
    links: {
      demo: "https://leiladany.github.io/Escaping-Westview/",
    },
  },
] satisfies readonly Project[];

export const projects = [...projectEntries].sort(
  (firstProject, secondProject) =>
    secondProject.dateStart.getTime() - firstProject.dateStart.getTime(),
);

export function getProjectById(projectId: string) {
  return projects.find((project) => project.id === projectId);
}
