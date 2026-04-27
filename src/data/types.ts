export type SocialPlatform = "email" | "github" | "linkedin";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export type OpenToWorkStatus = {
  value: boolean;
  badge: string;
  banner: string;
};

export type Profile = {
  fullName: string;
  firstName: string;
  lastName: string;
  title: string;
  resumeHref: string;
  intro: string;
  aboutParagraphs: readonly string[];
  socials: readonly SocialLink[];
  openToWork: OpenToWorkStatus;
};

export type SkillGroup = {
  id: string;
  title: string;
  items: readonly string[];
};

export type ProjectImage = {
  src: string;
  alt: string;
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
  date: string;
  images: readonly [ProjectImage, ...ProjectImage[]];
  stack: readonly string[];
  facts: readonly ProjectFact[];
  story: ProjectStory;
  links: ProjectLinks;
  sortOrder: number;
};
