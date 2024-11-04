import { Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import '../../App.css'

/**
 * NavBar
 * The navbar component shown at the top of each page
 * @author Estienne
 * @returns {JSX} the navbar
 */
const NavBar = () => {
  return (
    <>
      <Toolbar className="navbar-menu">
        <Typography variant="body1">
          <Link className="menu-link" to="digital-portfolio/about">ABOUT</Link>
        </Typography>
        <Typography variant="body1">
          <Link className="menu-link" to="digital-portfolio/experience">EXPERIENCE</Link>
        </Typography>
        <Typography variant="body1">
          <Link className="menu-link" to="digital-portfolio/skills">SKILLS</Link>
        </Typography>
        <Typography variant="body1">
          <Link className="menu-link" to="digital-portfolio/music">MUSIC</Link>
        </Typography>
      </Toolbar>
    </>
  );
}

export default NavBar;