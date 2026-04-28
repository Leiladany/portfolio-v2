import { FileText, Mail } from "lucide-react";
import { profileInfo } from "../../data/profile";
import { aboutPageContent } from "../../data/site";
import { getSocialLink } from "../../utils/contactLinks";

const emailHref = getSocialLink("email")?.href ?? "/contact";

export function AboutActions() {
  const { actions } = aboutPageContent;

  return (
    <section className="pb-12 sm:pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="reveal flex flex-wrap gap-3">
          <a href={emailHref} className="pill pill-primary">
            <Mail className="h-4 w-4" /> {actions.contactLabel}
          </a>
          <a
            href={profileInfo.resume.href}
            target="_blank"
            rel="noreferrer"
            className="pill pill-ghost"
          >
            <FileText className="h-4 w-4" /> {profileInfo.resume.actionLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
