import { createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { open_sans } from "./font";

export const theme = createTheme({
  palette: {
    primary: indigo,
    text: { primary: "#2D2D2D" },
    background: {
      default: "#E9EAEB",
      paper: "#D3DCE2",
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
