import type { Profile } from "./types";

export const profileInfo = {
  fullName: "Leila Teixeira",
  firstName: "Leila",
  lastName: "Teixeira",
  title: "UX/UI & Frontend Developer",
  resumeHref: "/CV_LeilaTeixeira.pdf",
  aboutParagraphs: [
    "I'm a UX/UI-focused developer who enjoys creating intuitive, visually engaging digital experiences. I care about how things look, but even more about how they feel and work for the user, making interfaces that are clear, thoughtful and easy to use.",

    "With a background in Web Design from the Lisbon School of Design, I developed a strong foundation in user experience, interface design and visual communication. I later expanded my technical skills through a Full-stack Web Development Bootcamp at Ironhack, where I worked with modern frontend technologies, APIs and databases.",

    "I use frontend development as a tool to bring my design ideas to life, focusing on clean, responsive and user-centered interfaces.",

    "I'm always learning, exploring new ideas and improving both my design thinking and technical skills.",

    "Let's build something meaningful together.",
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
} satisfies Profile;
