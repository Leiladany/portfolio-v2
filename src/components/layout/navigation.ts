export type NavigationLink = {
  to: string;
  label: string;
  end: boolean;
};

export const navigationLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects", end: false },
  { to: "/about", label: "About", end: false },
  { to: "/contact", label: "Contact", end: false },
] as const satisfies readonly NavigationLink[];
