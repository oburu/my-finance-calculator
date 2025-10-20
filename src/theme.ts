import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    fontSize: 13,
    body1: {
      color: "#333",
    },
    h1: {
      fontWeight: 700,
      color: "#111",
    },
  },
  palette: {
    text: {
      primary: "#333", // default text color
      secondary: "#666",
    },
    background: {
      default: "#fafafa",
    },
  },
});
