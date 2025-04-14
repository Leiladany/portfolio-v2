import { Box, Stack, Typography } from "@mui/joy";

type SectionTitleProps = { title: string; description: string };

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <Stack gap={2} justifyContent="center" alignItems="center">
      <Typography level="h1" textAlign="center">
        {title.toUpperCase()}
      </Typography>
      <Box bgcolor="primary.500" width={40} height={4} borderRadius={8} />
      <Typography level="body-md" textAlign="center">
        {description}
      </Typography>
    </Stack>
  );
}

export default SectionTitle;
