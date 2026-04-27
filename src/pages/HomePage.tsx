import { SiteLayout } from "../components/layout/SiteLayout";
import { AvailabilityCta } from "../components/home/AvailabilityCta";
import { FeaturedProjectsSection } from "../components/home/FeaturedProjectsSection";
import { HomeHero } from "../components/home/HomeHero";
import { ToolboxPreviewSection } from "../components/home/ToolboxPreviewSection";
import { projects } from "../data/projects";

export function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <SiteLayout>
      <HomeHero />
      <FeaturedProjectsSection projects={featuredProjects} />
      <ToolboxPreviewSection />
      <AvailabilityCta />
    </SiteLayout>
  );
}
