import type { NotFoundContent } from "../types";

export const notFoundContent: NotFoundContent = {
  page: {
    eyebrow: "404",
    title: "Page not found",
    description:
      "The page you are looking for does not exist or has been moved.",
  },
  project: {
    title: "Project not found",
    description: "The selected project could not be found.",
  },
  homeLinkLabel: "Go home",
};
