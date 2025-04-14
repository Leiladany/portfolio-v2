import { IconButton, Link, Stack, Typography } from "@mui/joy";
import { profileInfo } from "../../db/profile";
import SectionWrapper from "../shared/section-wrapper";

function ContactSection() {
  return (
    <SectionWrapper
      id="contact-section"
      isContactSection
      bgcolor="neutral.900"
      sx={{
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        py: 8,
        gap: 4,
      }}
    >
      <Stack alignItems={{ xs: "center", md: "flex-start" }} gap={0.5}>
        <Typography level="h4" fontWeight="lg" textColor="neutral.300">
          {profileInfo.fullName.toLocaleUpperCase()}
        </Typography>

        <Typography level="body-sm" fontWeight="lg" textColor="neutral.500">
          {profileInfo.title}
        </Typography>
      </Stack>

      <Stack alignItems={{ xs: "center", md: "flex-start" }} gap={0.5}>
        <Typography level="h4" fontWeight="lg" textColor="neutral.300">
          Get in touch
        </Typography>

        <Stack direction="row" gap={1}>
          {Object.entries(profileInfo.socials).map(([key, social]) => (
            <Link
              key={key}
              href={key === "email" ? `mailto:${social.link}` : social.link}
              target="_blank"
              rel="noopener"
            >
              <IconButton
                variant="outlined"
                size="sm"
                sx={{
                  bgcolor: "transparent",
                  color: "neutral.500",
                  borderColor: "neutral.500",
                  borderRadius: "50%",
                  "&:hover": {
                    bgcolor: "transparent",
                    color: "primary.500",
                    borderColor: "primary.500",
                  },
                }}
              >
                <social.icon size={18} />
              </IconButton>
            </Link>
          ))}
        </Stack>
      </Stack>
    </SectionWrapper>
  );
}

export default ContactSection;
