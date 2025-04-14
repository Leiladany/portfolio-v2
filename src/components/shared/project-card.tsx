import { Box, Button, Chip, Link, Stack, Typography } from "@mui/joy";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    img: string;
    githubLink: string;
    demoLink: string;
    techs: string[];
  };
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Stack
      component="section"
      direction={{ xs: "column", md: "row" }}
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      bgcolor="background.surface"
      border="1px solid"
      borderColor="neutral.200"
      height={{ xs: "auto", md: 320 }}
    >
      <Box flex={1}>
        <Box
          component="img"
          src={project.img}
          alt={project.title}
          height={{ xs: 200, sm: 280, md: "100%" }}
          width="100%"
          sx={{
            objectFit: "cover",
            opacity: 0.8,
          }}
        />
      </Box>

      <Stack flex={1} p={{ xs: 2, md: 4 }} gap={2}>
        <Typography level="title-lg" fontWeight="lg">
          {project.title}
        </Typography>

        <Typography level="body-sm" color="neutral" textAlign="justify">
          {project.description}
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={1}>
          {project.techs.map((tech) => (
            <Chip key={tech} size="sm">
              {tech}
            </Chip>
          ))}
        </Stack>

        <Stack direction="row" gap={1}>
          {project.githubLink && (
            <Button
              variant="outlined"
              size="md"
              component={Link}
              href={project.githubLink}
              target="_blank"
              rel="noopener"
              underline="none"
              endDecorator={<FaExternalLinkAlt size={10} />}
              sx={{ alignSelf: "flex-start" }}
            >
              View github
            </Button>
          )}

          {project.demoLink && (
            <Button
              variant="solid"
              size="md"
              component={Link}
              href={project.demoLink}
              target="_blank"
              rel="noopener"
              underline="none"
              endDecorator={<FaExternalLinkAlt size={10} />}
              sx={{ alignSelf: "flex-start" }}
            >
              View demo
            </Button>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ProjectCard;
