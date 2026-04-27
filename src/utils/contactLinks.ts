import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness, Code2, FileText, Mail } from "lucide-react";
import { profileInfo } from "../data/profile";
import type { SocialPlatform } from "../data/types";

export type ContactLink = {
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

export function getSocialLink(platform: SocialPlatform) {
  return profileInfo.socials.find((social) => social.platform === platform);
}

export function getContactLinks(): ContactLink[] {
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

function getSocialValue(platform: SocialPlatform, href: string) {
  if (platform === "email") {
    return href.replace("mailto:", "");
  }

  return href
    .replace("https://www.", "")
    .replace("https://", "")
    .replace(/\/$/, "");
}
