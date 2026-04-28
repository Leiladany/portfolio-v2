import { AboutActions } from "../components/about/AboutActions";
import { AboutHero } from "../components/about/AboutHero";
import { AboutSummary } from "../components/about/AboutSummary";
import { CurrentStatusBanner } from "../components/about/CurrentStatusBanner";
import { EducationSection } from "../components/about/EducationSection";
import { SkillsSection } from "../components/about/SkillsSection";
import { SiteLayout } from "../components/layout/SiteLayout";

export function AboutPage() {
  return (
    <SiteLayout>
      <AboutHero />
      <CurrentStatusBanner />
      <AboutSummary />
      <SkillsSection />
      <EducationSection />
      <AboutActions />
    </SiteLayout>
  );
}
