import type { Profile } from "./types";

export const profileInfo = {
  fullName: "Leila Teixeira",
  firstName: "Leila",
  lastName: "Teixeira",
  title: "UX/UI & Frontend Developer",
  resumeHref: "/CV_LeilaTeixeira.pdf",

  intro:
    "I design and build clear, thoughtful digital experiences, focusing on usability, visual balance and the small details that make products feel right.",

  aboutParagraphs: [
    "I'm a UX/UI-focused developer who enjoys turning ideas into intuitive and visually engaging interfaces. I care about creating experiences that are not only visually appealing, but also easy to understand and genuinely useful.",

    "I have a background in Web Design from the Lisbon School of Design, where I built a strong foundation in user experience, interface design and visual communication. I later completed a Full-stack Web Development Bootcamp at Ironhack, where I worked with modern frontend technologies, APIs and databases.",

    "Frontend development is how I bring my design ideas to life. I focus on building responsive, structured and user-centered interfaces that feel consistent and easy to use.",

    "I'm continuously learning and refining both my design thinking and technical skills, always looking for ways to improve the way I build and design products.",

    "I'm currently looking for a junior opportunity where I can grow, contribute and keep building meaningful digital experiences.",
  ],

  socials: [
    {
      platform: "email",
      label: "Email",
      href: "mailto:leiladany16@gmail.com",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/leila-teixeira/",
    },
    {
      platform: "github",
      label: "GitHub",
      href: "https://github.com/Leiladany/",
    },
  ],

  openToWork: {
    value: true,
    badge: "Open to junior roles",
    banner:
      "Currently looking for a junior UX/UI or frontend role, based in Lisbon or remote.",
  },
} satisfies Profile;
