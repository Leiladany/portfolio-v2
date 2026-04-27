import type { ContactLink } from "../../utils/contactLinks";

type ContactLinkCardProps = {
  link: ContactLink;
  index: number;
};

export function ContactLinkCard({ link, index }: ContactLinkCardProps) {
  return (
    <a
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
  );
}
