import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { BrandLink } from "./BrandLink";
import type { NavigationLink } from "./navigation";

type NavbarMenuProps = {
  links: readonly NavigationLink[];
};

export function NavbarMenu({ links }: NavbarMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    window.setTimeout(() => {
      openButtonRef.current?.focus();
    }, 0);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, isOpen]);

  const openMenu = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        ref={openButtonRef}
        type="button"
        className="pill-ghost inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 sm:hidden"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        onClick={openMenu}
      >
        <span className="mobile-menu-icon" aria-hidden>
          <span />
          <span />
          <span />
        </span>
      </button>

      {isOpen
        ? createPortal(
            <div
              className="navbar-menu-overlay sm:hidden"
              role="dialog"
              aria-modal="true"
            >
              <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4">
                <BrandLink compact onClick={closeMenu} />

                <button
                  ref={closeButtonRef}
                  type="button"
                  className="pill-ghost inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300"
                  aria-label="Close navigation menu"
                  onClick={closeMenu}
                >
                  <span className="mobile-menu-icon is-open" aria-hidden>
                    <span />
                    <span />
                    <span />
                  </span>
                </button>
              </div>

              <nav className="mx-auto flex max-w-5xl flex-col gap-2 px-4 pt-8">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.end}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      [
                        "nav-link text-graphite rounded-2xl px-5 py-4 text-2xl font-medium",
                        isActive ? "bg-blush text-charcoal" : "",
                      ].join(" ")
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
