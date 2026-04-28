import { Mail } from "lucide-react";
import { profileInfo } from "../../data/profile";
import { getSocialLink } from "../../utils/contactLinks";

const emailHref = getSocialLink("email")?.href ?? "/contact";

export function AvailabilityCta() {
  const availabilityCta = profileInfo.openToWork.cta;

  if (!profileInfo.openToWork.value || !availabilityCta) {
    return null;
  }

  return (
    <section className="py-16 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="reveal border-blush bg-blush-soft rounded-4xl border p-6 text-center sm:p-16">
          <p className="eyebrow mb-4">{availabilityCta.eyebrow}</p>
          <h2 className="font-display text-charcoal text-3xl leading-tight sm:text-5xl">
            {availabilityCta.title}
          </h2>
          <p className="text-graphite mx-auto mt-5 max-w-xl text-base leading-relaxed sm:mt-6 sm:text-xl">
            {availabilityCta.description}
          </p>
          <div className="mt-9 flex justify-center">
            <a href={emailHref} className="pill pill-primary">
              <Mail className="h-4 w-4" /> {availabilityCta.actionLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
