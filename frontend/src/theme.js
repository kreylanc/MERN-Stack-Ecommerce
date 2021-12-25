import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      paper: "#F5F7FB",
      // paper: "#FAFAF5",
    },
    primary: {
      main: "#fff",
      dark: "#e2e4e8",
    },
    secondary: {
      light: "#585c64",
      main: "#393D45",
      dark: "#191d24",
      complementary: "#454139",
    },
  },
});

export default theme;
