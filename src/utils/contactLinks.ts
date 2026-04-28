import type { LucideIcon } from "lucide-react";
import { profileInfo } from "../data/profile";
import type { SocialLink } from "../data/types";
import { getIcon } from "./icons";

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

export function getSocialLink(socialId: string) {
  return profileInfo.socials.find((social) => social.id === socialId);
}

export function getContactLinks(): ContactLink[] {
  const socials: readonly SocialLink[] = profileInfo.socials;
  const socialLinks = socials.map((social) => ({
    label: social.label,
    value: social.value ?? getSocialValue(social.href),
    href: social.href,
    icon: getIcon(social.icon),
  }));

  return [
    ...socialLinks,
    {
      label: profileInfo.resume.label,
      value: profileInfo.resume.contactValue,
      href: profileInfo.resume.href,
      icon: getIcon("fileText"),
    },
  ];
}

function getSocialValue(href: string) {
  if (href.startsWith("mailto:")) {
    return href.replace("mailto:", "");
  }

  return href
    .replace("https://www.", "")
    .replace("https://", "")
    .replace(/\/$/, "");
}
