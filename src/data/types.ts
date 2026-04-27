export type SocialPlatform = "email" | "github" | "linkedin";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export type Profile = {
  fullName: string;
  firstName: string;
  lastName: string;
  title: string;
  resumeHref: string;
  aboutParagraphs: readonly string[];
  socials: readonly SocialLink[];
};

export type SkillGroup = {
  id: string;
  title: string;
  items: readonly string[];
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectFact = {
  label: string;
  value: string;
};

export type ProjectStory = {
  overview: readonly string[];
  problem: readonly string[];
  goal: readonly string[];
  userFlow: readonly string[];
  designDecisions: readonly string[];
  learnings: readonly string[];
};

export type ProjectLinks = {
  repo?: string;
  demo?: string;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  images: readonly [ProjectImage, ...ProjectImage[]];
  stack: readonly string[];
  keywords: readonly string[];
  facts: readonly ProjectFact[];
  story: ProjectStory;
  links: ProjectLinks;
  sortOrder: number;
};
