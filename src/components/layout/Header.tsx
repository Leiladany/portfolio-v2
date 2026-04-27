import { NavLink } from "react-router-dom";
import { NavbarMenu } from "./NavbarMenu";
import { BrandLink } from "./BrandLink";
import { navigationLinks } from "./navigation";

export function Header() {
  return (
    <header className="border-stone/60 bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300">
      <div className="relative z-50 mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-8">
        <BrandLink />

        <nav className="hidden min-w-0 items-center gap-1 overflow-x-auto sm:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                [
                  "nav-link text-graphite hover:bg-blush/60 hover:text-charcoal rounded-full px-3 py-2 text-sm font-medium sm:px-4",
                  isActive ? "bg-blush text-charcoal" : "",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavbarMenu links={navigationLinks} />
      </div>
    </header>
  );
}
