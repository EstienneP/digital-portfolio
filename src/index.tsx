// IMPORTS
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline, Grid, ThemeProvider, Typography } from "@mui/material";
// COMPONENTS
import App from "./App";
import NavBar from "./components/main/NavBar";
import NavBarContact from './components/main/NavBarContact';
import ThemeBar from './components/main/ThemeBar';
import ThemeContent from './components/main/ThemeContent';
//STYLES
import './App.css';
import './styling/Theme.css'


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
    h1: {
      fontSize: 48,
      fontWeight: 100,
    },
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
          <div className="page-wrapper">
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="h1">ESTIENNE PRIOR</Typography>
                  <NavBarContact />
                  <NavBar />
                  <App />
                  {/* <ThemeBar /> */}
                </Grid>
                <Grid item xs={6}>
                  <ThemeContent />
                </Grid>
              </Grid>
          </div>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById("root")
);