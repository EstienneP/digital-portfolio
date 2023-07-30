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
      background: {
        default: '#fffdfc'
      },
      primary: {
        main: '#153645'
      },
      secondary: {
        main: '#e02a2f'
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