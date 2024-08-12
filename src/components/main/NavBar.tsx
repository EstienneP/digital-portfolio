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
      <Toolbar className="navbar">
        <Typography variant="body1">
          <Link className="menu-link" to="digital-portfolio/music">MUSIC</Link>
        </Typography>
        <Typography variant="body1">
          <Link className="menu-link" to="digital-portfolio/design">DESIGN</Link>
        </Typography>
      </Toolbar>
    </>
  );
}

export default NavBar;