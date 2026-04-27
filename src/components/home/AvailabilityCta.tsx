import { Mail } from "lucide-react";
import { getSocialLink } from "../../utils/contactLinks";

const emailHref = getSocialLink("email")?.href ?? "/contact";

export function AvailabilityCta() {
  return (
    <section className="py-16 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="reveal border-blush bg-blush-soft rounded-[2rem] border p-6 text-center sm:p-16">
          <p className="eyebrow mb-4">Let's chat</p>
          <h2 className="font-display text-charcoal text-3xl leading-tight sm:text-5xl">
            Open to junior opportunities.
          </h2>
          <p className="text-graphite mx-auto mt-5 max-w-xl text-base leading-relaxed sm:mt-6 sm:text-xl">
            I'm open to junior UX/UI and frontend opportunities where I can keep
            learning, contribute to real products, and grow with a team.
          </p>
          <div className="mt-9 flex justify-center">
            <a href={emailHref} className="pill pill-primary">
              <Mail className="h-4 w-4" /> Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
