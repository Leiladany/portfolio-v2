import type { HomePageContent } from "../types";

export const homePageContent: HomePageContent = {
  hero: {
    greeting: "Hi, I'm",
    primaryAction: {
      label: "View projects",
      to: "/projects",
    },
    secondaryAction: {
      label: "Contact me",
      to: "/contact",
    },
  },
  featuredProjects: {
    eyebrow: "Selected work",
    title: "Featured projects",
    linkLabel: "See all",
    linkTo: "/projects",
    limit: 3,
  },
  toolboxPreview: {
    eyebrow: "Toolbox preview",
    title: "Tools I work with",
    linkLabel: "More about me",
    linkTo: "/about",
  },
};
