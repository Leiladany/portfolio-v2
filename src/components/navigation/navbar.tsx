import { Link, Stack, Typography } from "@mui/joy";
import { profileInfo } from "../../db/profile";

const navbarLinks = [
  { href: "#home-section", label: "Home" },
  { href: "#about-section", label: "About" },
  { href: "#projects-section", label: "Projects" },
  { href: "#contact-section", label: "Contact" },
];

function Navbar() {
  return (
    <Stack
      component="header"
      bgcolor="neutral.50"
      position="sticky"
      top={0}
      boxShadow="sm"
      zIndex={1000}
    >
      <Stack
        maxWidth={{ xs: "100%", lg: 1200 }}
        width="100%"
        px={{ xs: 2, sm: 10 }}
        direction="row"
        justifyContent={{ xs: "center", sm: "space-between" }}
        py={3}
        alignSelf="center"
      >
        <Typography
          level="title-lg"
          display={{ xs: "none", sm: "flex" }}
          fontWeight="lg"
        >
          <Link
            href="#home-section"
            underline="none"
            sx={{
              fontWeight: "bold",
              transition: "0.3s ease",
              "&:hover": { color: "primary.500" },
            }}
          >
            {profileInfo.fullName}
          </Link>
        </Typography>

        <Stack direction="row" alignItems="center" gap={4}>
          {navbarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              level="title-sm"
              underline="none"
              fontSize={12}
              textColor="neutral.500"
              fontWeight={700}
              sx={{
                "&:hover": {
                  color: "primary.500",
                },
              }}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Navbar;
