import { extendTheme } from "@mui/joy/styles";

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#fff0f5",
          100: "#fbd1e5",
          200: "#f8c9da",
          300: "#f5a8c6",
          400: "#f186b1",
          500: "#e26d9b",
          600: "#c25180",
          700: "#a0386a",
          800: "#7e2a54",
          900: "#5c1e3e",
        },
      },
    },
  },
  fontFamily: {
    body: "'Inter', sans-serif",
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: () => ({
          transition: "0.3s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          },
        }),
      },
    },
    JoyLink: {
      styleOverrides: {
        root: () => ({
          transition: "0.3s ease",
          "&:hover": {
            transform: "translateY(-3px)",
          },
        }),
      },
    },
    JoyTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.neutral[500],
        }),
      },
    },
    JoyChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: "transparent",
          color: theme.palette.neutral[500],
          border: "1px solid",
          borderColor: theme.palette.neutral[300],
          borderRadius: 6,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 6,
          paddingBottom: 8,
          transition: "0.3s ease",
          "&:hover": {
            color: theme.palette.primary[500],
            borderColor: theme.palette.primary[500],
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          },
        }),
      },
    },
  },
});
