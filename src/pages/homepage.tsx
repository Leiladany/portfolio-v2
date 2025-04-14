import { Box } from "@mui/joy";
import AboutSection from "../components/sections/about-section";
import ContactSection from "../components/sections/contact-section";
import HomeSection from "../components/sections/home-section";
import ProjectsSection from "../components/sections/projects-section";

function HomePage() {
  return (
    <Box component="main">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Box>
  );
}

export default HomePage;
