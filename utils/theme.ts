import { createTheme } from "@mui/material";
import { open_sans } from "./font";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    text: { primary: "#2D2D2D" },
    background: {
      default: "#EFEFEF",
      paper: "#E1E1E1",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontFamily: open_sans.style.fontFamily,
        },
      },
    },
  },
  typography: {
    fontFamily: "inherit",
  },
});

export const authorTheme = createTheme({
  palette: {
    primary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#fff",
    },
    text: { primary: "#2D2D2D" },
    background: {
      default: "#E7E7E7",
      paper: "#DADADA",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontFamily: open_sans.style.fontFamily,
        },
      },
    },
  },
  typography: {
    fontFamily: "inherit",
    allVariants: { color: "text.primary" },
  },
});
