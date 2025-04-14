import { Stack } from "@mui/joy";
import { projects } from "../../db/projects";
import ProjectCard from "../shared/project-card";
import SectionTitle from "../shared/section-title";
import SectionWrapper from "../shared/section-wrapper";

function ProjectsSection() {
  return (
    <SectionWrapper id="projects-section" sx={{ py: 16, gap: 10 }}>
      <SectionTitle
        title="MY PROJECTS"
        description="Here you'll find some of my work, either personal, educational or professional projects"
      />

      <Stack gap={10}>
        {[...projects].reverse().map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Stack>
    </SectionWrapper>
  );
}

export default ProjectsSection;
