import { Button, Chip, Link, Stack, Typography } from "@mui/joy";
import { techs, tools } from "../../db/skills";
import SectionTitle from "../shared/section-title";
import SectionWrapper from "../shared/section-wrapper";

function AboutSection() {
  return (
    <SectionWrapper
      id="about-section"
      bgcolor="neutral.100"
      sx={{ py: 16, gap: 10 }}
    >
      <SectionTitle
        title="ABOUT ME"
        description="Here you'll find more information about me, what motivates me and my current skills"
      />

      <Stack direction={{ xs: "column", md: "row" }} gap={10}>
        <Stack width={{ xs: "100%", md: "50%" }} gap={2}>
          <Typography level="title-lg">Who I Am</Typography>

          <Stack gap={1}>
            <Typography level="body-sm" textAlign="justify">
              I'm a <strong>Frontend Developer</strong> with a passion for
              crafting meaningful and creative applications. With a strong focus
              on <strong>UX/UI</strong>, I blend creativity with technology to
              build clean and intuitive digital experiences that make users feel
              understood and appreciated.
            </Typography>

            <Typography level="body-sm" textAlign="justify">
              My journey includes a <strong>Web Design Course</strong> at Lisbon
              School of Design, a comprehensive program covering UX, frontend
              and backend development and digital marketing, as well as a{" "}
              <strong>Full-stack Web Development Bootcamp</strong> at Ironhack,
              where I built projects using both frontend and backend
              technologies while working with databases and APIs.
            </Typography>

            <Typography level="body-sm" textAlign="justify">
              In addition to my formal training, I’ve also completed
              certifications in Agile Methodologies, React Native and OutSystems
              through Udemy, expanding my skills across team workflows, mobile
              development and low-code platforms.
            </Typography>

            <Typography level="body-sm" textAlign="justify">
              I'm passionate about <strong>continuous learning</strong> and
              always on the lookout for opportunities to <strong>grow</strong> —
              both as a developer and as a person.
            </Typography>

            <Typography level="body-sm" textAlign="justify">
              Let’s <strong>build</strong> something amazing together!
            </Typography>
          </Stack>

          <Stack direction="row" gap={1}>
            <Button
              variant="outlined"
              component={Link}
              href="/CV_LeilaTeixeira.pdf"
              download="CV_LeilaTeixeira.pdf"
              underline="none"
            >
              Download my resume
            </Button>

            <Button
              variant="solid"
              component={Link}
              href="#projects-section"
              underline="none"
            >
              See my projects
            </Button>
          </Stack>
        </Stack>

        <Stack width={{ xs: "100%", md: "50%" }} gap={4}>
          <Stack gap={2}>
            <Typography level="title-lg">My Tech Stack</Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {techs.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </Stack>
          </Stack>

          <Stack gap={2}>
            <Typography level="title-lg">My Tool Stack</Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {tools.map((tool) => (
                <Chip key={tool}>{tool}</Chip>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </SectionWrapper>
  );
}

export default AboutSection;
