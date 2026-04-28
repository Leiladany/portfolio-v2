export type IconName =
  | "briefcase"
  | "code"
  | "fileText"
  | "globe"
  | "mail"
  | "palette"
  | "sparkles";

export type TextSegment = {
  text: string;
  highlight?: boolean;
  lineBreakAfter?: boolean;
};

export type PageIntroContent = {
  eyebrow?: string;
  title: readonly TextSegment[];
  description?: string;
};

export type SectionIntroContent = {
  eyebrow: string;
  title: string;
  description?: string;
};

export type EducationSectionContent = SectionIntroContent & {
  stackLabel: string;
};

export type NavigationLink = {
  to: string;
  label: string;
  end: boolean;
};

export type NavigationLinks = readonly NavigationLink[];

export type InternalLinkAction = {
  label: string;
  to: string;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: IconName;
  value?: string;
};

export type ResumeLink = {
  href: string;
  label: string;
  contactValue: string;
  actionLabel: string;
};

export type AvailabilityCta = {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
};

export type OpenToWorkStatus = {
  value: boolean;
  badge: string;
  banner: string;
  cta?: AvailabilityCta;
};

export type Profile = {
  fullName: string;
  shortName: string;
  title: string;
  resume: ResumeLink;
  intro: string;
  aboutParagraphs: readonly string[];
  socials: readonly SocialLink[];
  openToWork: OpenToWorkStatus;
};

export type SkillGroup = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: IconName;
  items: readonly string[];
  previewLimit?: number;
};

export type SkillGroups = readonly SkillGroup[];

export type EducationEntry = {
  id: string;
  program: string;
  institution: string;
  period: string;
  description: string;
  stack?: readonly string[];
};

export type EducationEntries = readonly EducationEntry[];

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectFact = {
  label: string;
  value: string;
};

export type ProjectDateRange = {
  start: string;
  end?: string;
};

export type ProjectStorySection = {
  id: string;
  label: string;
  paragraphs: readonly string[];
};

export type ProjectLinks = {
  repo?: string;
  demo?: string;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  date: ProjectDateRange;
  images: readonly [ProjectImage, ...ProjectImage[]];
  stack: readonly string[];
  facts: readonly ProjectFact[];
  story: readonly ProjectStorySection[];
  links: ProjectLinks;
};

export type Projects = readonly Project[];

export type HomePageContent = {
  hero: {
    greeting: string;
    primaryAction: InternalLinkAction;
    secondaryAction: InternalLinkAction;
  };
  featuredProjects: {
    eyebrow: string;
    title: string;
    linkLabel: string;
    linkTo: string;
    limit: number;
  };
  toolboxPreview: {
    eyebrow: string;
    title: string;
    linkLabel: string;
    linkTo: string;
  };
};

export type AboutPageContent = {
  hero: PageIntroContent;
  skills: SectionIntroContent;
  education: EducationSectionContent;
  actions: {
    contactLabel: string;
  };
};

export type ProjectsPageContent = {
  intro: PageIntroContent;
  cardActionLabel: string;
};

export type ProjectDetailContent = {
  backLabel: string;
  liveDemoLabel: string;
  repositoryLabel: string;
  focusLabel: string;
  stackLabel: string;
  previousProjectLabel: string;
  nextProjectLabel: string;
  previousImageLabel: string;
  nextImageLabel: string;
  carouselStatusLabel: string;
  carouselStatusConnector: string;
};

export type ContactPageContent = {
  intro: PageIntroContent;
};

export type FooterContent = {
  credit: string;
};

export type NotFoundMessage = {
  eyebrow?: string;
  title: string;
  description: string;
};

export type NotFoundContent = {
  page: NotFoundMessage;
  project: NotFoundMessage;
  homeLinkLabel: string;
};
