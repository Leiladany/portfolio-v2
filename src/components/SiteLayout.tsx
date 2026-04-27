import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { profileInfo } from "../data/profile";
import { useReveal } from "../hooks/useReveal";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects", end: false },
  { to: "/about", label: "About", end: false },
  { to: "/contact", label: "Contact", end: false },
] as const;

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  useReveal();

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background">
      <Header />
      <main className="relative z-10 flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span
            className="h-7 w-7 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, var(--rose), var(--blush))",
            }}
            aria-hidden
          />
          <span className="font-display text-lg">{profileInfo.firstName} T.</span>
        </Link>

        <nav className="flex min-w-0 items-center gap-1 overflow-x-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                [
                  "nav-link rounded-full px-3 py-2 text-sm font-medium text-graphite hover:bg-blush/60 hover:text-charcoal sm:px-4",
                  isActive ? "bg-blush text-charcoal" : "",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-stone/60">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-graphite sm:flex-row sm:items-center sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {profileInfo.fullName} - Designed
          and built with care.
        </p>
        <div className="flex flex-wrap gap-6">
          {profileInfo.socials.map((social) => (
            <a
              key={social.platform}
              className="link-underline text-graphite transition-colors duration-300 hover:text-charcoal"
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
