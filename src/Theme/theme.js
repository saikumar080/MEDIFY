import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2AA7FF",
      light: "#E7F0FF",
      dark: "#1B8ED6",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#102851",
    },

    success: {
      main: "#02A401",
    },

    warning: {
      main: "#FFC53D",
    },

    error: {
      main: "#E53935",
    },

    background: {
      default: "#F8FBFF",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#102851",
      secondary: "#5C6169",
    },

    divider: "#E5E7EB",
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",

    h1: {
      fontSize: "48px",
      fontWeight: 700,
      lineHeight: 1.2,
      color: "#102851",
    },

    h2: {
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: 1.3,
      color: "#102851",
    },

    h3: {
      fontSize: "24px",
      fontWeight: 600,
      color: "#102851",
    },

    h4: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#102851",
    },

    h5: {
      fontSize: "18px",
      fontWeight: 600,
    },

    body1: {
      fontSize: "16px",
      lineHeight: 1.7,
      color: "#5C6169",
    },

    body2: {
      fontSize: "14px",
      color: "#77829D",
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "16px",
    },
  },

  shape: {
    borderRadius: 12,
  },

  spacing: 8,

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 8,
          minHeight: 48,
          paddingLeft: 24,
          paddingRight: 24,
        },

        containedPrimary: {
          "&:hover": {
            backgroundColor: "#1B8ED6",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2AA7FF",
            borderWidth: 2,
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2AA7FF",
          },
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#E7F6FD",
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#FFFFFF",
          color: "#102851",
        },
      },
    },
  },
});

export default theme;