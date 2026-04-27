import { ContactLinksSection } from "../components/contact/ContactLinksSection";
import { PageIntro } from "../components/common/PageIntro";
import { SiteLayout } from "../components/layout/SiteLayout";

export function ContactPage() {
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

      <ContactLinksSection />
    </SiteLayout>
  );
}
