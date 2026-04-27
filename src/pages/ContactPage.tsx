import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness, Code2, FileText, Mail } from "lucide-react";
import { PageIntro } from "../components/PageIntro";
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

  return href
    .replace("https://www.", "")
    .replace("https://", "")
    .replace(/\/$/, "");
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
    description:
      "Get in touch with Leila Teixeira - UX/UI and frontend developer.",
  });

  const contactLinks = getContactLinks();

  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Contact"
        title={
          <>
            Let's build something
            <br />
            <span className="text-rose">soft and friendly.</span>
          </>
        }
        description={
          <>
            I'm always happy to talk about new opportunities, collaborations, or
            just to say hi. The fastest way to reach me is by email.
          </>
        }
      />

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="soft-card group reveal flex items-center gap-4 p-5 sm:gap-5 sm:p-7"
                data-delay={index * 70}
              >
                <span className="bg-blush flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                  <link.icon className="text-charcoal h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="eyebrow mb-1 block">{link.label}</span>
                  <span className="text-charcoal block truncate font-medium">
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
