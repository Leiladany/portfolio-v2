import { ContactLinksSection } from "../components/contact/ContactLinksSection";
import { FormattedTitle } from "../components/common/FormattedTitle";
import { PageIntro } from "../components/common/PageIntro";
import { SiteLayout } from "../components/layout/SiteLayout";
import { contactPageContent } from "../data/site";

export function ContactPage() {
  const { intro } = contactPageContent;

  return (
    <SiteLayout>
      <PageIntro
        eyebrow={intro.eyebrow}
        title={<FormattedTitle segments={intro.title} />}
        description={intro.description}
      />

      <ContactLinksSection />
    </SiteLayout>
  );
}
