import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    common: {
      white: "#fff",
      black: "#000",
    },
    primary: {
      main: "#14213d",
    },
    secondary: {
      main: "#2d3142",
    },
    text: {
      primary: "#ffffff",
      secondary: "#8d8d8d",
    },

    grey: {
      50: "#ddd",
      100: "#a1a1a1",
      200: "#bcbfdb",
    },
  },
});

type AppTheme = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends AppTheme {}
}
