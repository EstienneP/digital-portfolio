import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

/**
 * NavBar
 * The navbar component shown at the top of each page
 * @author Estienne
 * @returns {JSX} the navbar
 */
const NavBar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Estienne Prior</Typography>
            <Link to="/digital-portfolio">
              <Button sx={{color: '#ffffff'}}><Typography>Home</Typography></Button>
            </Link>
            <Link to="/digital-portfolio/music">
              <Button sx={{color: '#ffffff'}}><Typography>Music</Typography></Button>
            </Link>
            <Link to="/digital-portfolio/design">
              <Button sx={{color: '#ffffff'}}><Typography>Design</Typography></Button>
            </Link>
            <Link to="/digital-portfolio/resume">
              <Button sx={{color: '#ffffff'}}><Typography>Resume</Typography></Button>
            </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;