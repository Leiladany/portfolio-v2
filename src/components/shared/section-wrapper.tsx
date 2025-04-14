import { Stack } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  id: string;
  isHomeSection?: boolean;
  isContactSection?: boolean;
  bgcolor?: string;
  sx?: SxProps;
};

function SectionWrapper({
  children,
  id,
  isHomeSection,
  isContactSection,
  bgcolor,
  sx,
}: SectionWrapperProps) {
  return (
    <Stack
      component="section"
      id={id}
      minHeight={isContactSection ? "auto" : "100vh"}
      width="100%"
      bgcolor={bgcolor}
      alignItems="center"
      justifyContent={isHomeSection ? "center" : "flex-start"}
    >
      <Stack
        maxWidth={{ xs: "100%", lg: 1200 }}
        width="100%"
        px={{ xs: 2, sm: 10 }}
        sx={{ ...sx }}
      >
        {children}
      </Stack>
    </Stack>
  );
}

export default SectionWrapper;
