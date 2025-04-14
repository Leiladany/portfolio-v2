import { Button, Link, Stack, Typography } from "@mui/joy";
import { PiMouseScrollThin } from "react-icons/pi";
import { profileInfo } from "../../db/profile";
import SectionWrapper from "../shared/section-wrapper";

function HomeSection() {
  return (
    <SectionWrapper id="home-section" isHomeSection sx={{ gap: 4, pb: 25 }}>
      <Stack alignItems="center">
        <Typography
          level="h1"
          fontSize={{ xs: 48, sm: 64 }}
          textAlign="center"
          textColor="primary.500"
        >
          <Typography
            level="h1"
            fontSize={{ xs: 48, sm: 64 }}
            textAlign="center"
            textColor="primary.500"
          >
            {profileInfo.firstName.toUpperCase()}
          </Typography>{" "}
          <Typography
            level="h1"
            fontSize={{ xs: 48, sm: 64 }}
            textAlign="center"
            textColor="neutral.500"
          >
            {profileInfo.lastName.toUpperCase()}
          </Typography>
        </Typography>

        <Typography
          level="body-lg"
          fontSize={{ xs: 20, sm: 28 }}
          textAlign="center"
        >
          {profileInfo.title}
        </Typography>
      </Stack>

      <Button
        component={Link}
        href="#about-section"
        size="lg"
        underline="none"
        sx={{ alignSelf: "center" }}
      >
        Explore my portfolio
      </Button>

      <Typography
        level="body-sm"
        textColor="neutral.500"
        position="absolute"
        bottom="5%"
        left="50%"
        sx={{
          animation: "bounce 2s infinite",
        }}
      >
        <PiMouseScrollThin size={35} />
      </Typography>
    </SectionWrapper>
  );
}

export default HomeSection;
