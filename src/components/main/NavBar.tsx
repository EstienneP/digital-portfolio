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
            <Link to="/">
              <Button sx={{color: '#ffffff'}}><Typography>Home</Typography></Button>
            </Link>
            <Link to="music">
              <Button sx={{color: '#ffffff'}}><Typography>Music</Typography></Button>
            </Link>
            <Link to="design">
              <Button sx={{color: '#ffffff'}}><Typography>Design</Typography></Button>
            </Link>
            <Link to="resume">
              <Button sx={{color: '#ffffff'}}><Typography>Resume</Typography></Button>
            </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;