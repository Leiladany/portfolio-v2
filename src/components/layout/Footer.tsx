import { profileInfo } from "../../data/profile";
import { footerContent } from "../../data/site";

export function Footer() {
  return (
    <footer className="border-stone/60 relative z-10 mt-24 border-t">
      <div className="text-graphite mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-4 py-8 text-sm sm:flex-row sm:items-center sm:px-8 sm:py-10">
        <p>
          &copy; {new Date().getFullYear()} {profileInfo.fullName} -{" "}
          {footerContent.credit}
        </p>
        <div className="flex flex-wrap gap-6">
          {profileInfo.socials.map((social) => (
            <a
              key={social.id}
              className="link-underline text-graphite transition-colors duration-300"
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
