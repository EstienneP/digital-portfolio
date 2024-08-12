// IMPORTS
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
// COMPONENTS
import App from "./App";
import NavBar from "./components/main/NavBar";
//STYLES
import './App.css';

/**
 * theme
 * The theming for the site
 */
const theme = createTheme({
  palette: {
    background: {
      default: '#181818'
    },
    text: {
      primary: '#fff'
    }
  },
  typography: {
    h2: {
      fontWeight: 100,
    },
    body1: {
      fontWeight: 100,
    },
    fontFamily: [
      '"Nunito Sans"',
      'sans-serif',
    ].join(','),
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