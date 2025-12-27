import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { cyan, grey, red } from "@mui/material/colors";

let theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: cyan,
      },
    },
    dark: {
      palette: {
        primary: grey,
      },
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: true,
      },
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', sans-serif",
  },
});
theme = responsiveFontSizes(theme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
