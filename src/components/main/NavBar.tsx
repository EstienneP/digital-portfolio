// IMPORTS
import { Grid, Toolbar, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
// STYLING
import '../../App.css'

/**
 * NavBar
 * The navbar component shown at the top of each page
 * @author Estienne
 * @returns {JSX} the navbar
 */
const NavBar = () => {
  // Get the current page
  const currentPage = useLocation().pathname.split('/').pop();

  return (
    <>
      <Grid container>
        <Toolbar className="navbar-menu">
          <Typography variant="body1">
            <Link 
            aria-roledescription="button"
            className={` ${currentPage === "about" ? 'menu-link active' : 'menu-link'}`} 
            to="digital-portfolio/about">ABOUT</Link>
          </Typography>
          <Typography variant="body1">
            <Link 
            aria-roledescription="button"
            className={` ${currentPage === "experience" ? 'menu-link active' : 'menu-link'}`} 
            to="digital-portfolio/experience">EXPERIENCE</Link>
          </Typography>
          <Typography variant="body1">
            <Link 
            aria-roledescription="button"
            className={` ${currentPage === "skills" ? 'menu-link active' : 'menu-link'}`} 
            to="digital-portfolio/skills">SKILLS</Link>
          </Typography>
          <Typography variant="body1">
            <Link 
            aria-roledescription="button"
            className={` ${currentPage === "music" ? 'menu-link active' : 'menu-link'}`} 
            to="digital-portfolio/music">MUSIC</Link>
          </Typography>
        </Toolbar>
      </Grid>
    </>
  );
}

export default NavBar;