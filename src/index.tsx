// IMPORTS
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
// COMPONENTS
import App from "./App";
import NavBar from "./components/main/NavBar";

/**
 * theme
 * The color theming for the site
 */
const theme = createTheme({
  palette: {
    text: {
      primary: '#2c2c2c'
    }
  }
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <NavBar />
            <App />
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById("root")
);