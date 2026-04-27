import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness, Code2, FileText, Mail } from "lucide-react";
import { SiteLayout } from "../components/SiteLayout";
import { profileInfo } from "../data/profile";
import type { SocialPlatform } from "../data/types";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

const socialIconMap: Record<SocialPlatform, LucideIcon> = {
  email: Mail,
  github: Code2,
  linkedin: BriefcaseBusiness,
};

function getSocialValue(platform: SocialPlatform, href: string) {
  if (platform === "email") {
    return href.replace("mailto:", "");
  }

  return href.replace("https://www.", "").replace("https://", "").replace(/\/$/, "");
}

function getContactLinks(): ContactLink[] {
  const socialLinks = profileInfo.socials.map((social) => ({
    label: social.label,
    value: getSocialValue(social.platform, social.href),
    href: social.href,
    icon: socialIconMap[social.platform],
  }));

  return [
    ...socialLinks,
    {
      label: "Resume",
      value: "Download CV (PDF)",
      href: profileInfo.resumeHref,
      icon: FileText,
    },
  ];
}

export function ContactPage() {
  useDocumentMeta({
    title: "Contact - Leila Teixeira",
    description: "Get in touch with Leila Teixeira - UX/UI and frontend developer.",
  });

  const contactLinks = getContactLinks();

  return (
    <SiteLayout>
      <section className="pb-12 pt-20 sm:pt-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <p className="eyebrow reveal">Contact</p>
          <h1 className="font-display reveal mt-4 text-5xl leading-none text-charcoal sm:text-6xl">
            Let's build something
            <br />
            <span className="text-rose">soft and friendly.</span>
          </h1>
          <p
            className="reveal mt-6 max-w-xl text-lg leading-relaxed text-graphite"
            data-delay="140"
          >
            I'm always happy to talk about new opportunities, collaborations,
            or just to say hi. The fastest way to reach me is by email.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="soft-card group flex items-center gap-5 p-7 reveal"
                data-delay={index * 70}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blush">
                  <link.icon className="h-5 w-5 text-charcoal" />
                </span>
                <span className="min-w-0">
                  <span className="eyebrow mb-1 block">{link.label}</span>
                  <span className="block truncate font-medium text-charcoal">
                    {link.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
