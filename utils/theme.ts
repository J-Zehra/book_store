import { createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: indigo,
    text: { primary: "#2D2D2D" },
    background: {
      default: "#E9EAEB",
    },
  },
  typography: {
    fontFamily: "unset",
  },
});
