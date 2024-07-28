import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import '../../App.css'

const navButtons = {
  basic: {
    backgroundColor: 'transparent',
    color: '#2c2c2c',
    paddingRight: '10px',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#00476b'
    }
  },

  cta: {
    border: 'solid 1px #2c2c2c',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#00476b'
    }
  }
}

/**
 * NavBar
 * The navbar component shown at the top of each page
 * @author Estienne
 * @returns {JSX} the navbar
 */
const NavBar = () => {
  return (
    <>
      <AppBar position="sticky" sx={{backgroundColor: '#fff'}}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}><Link to="digital-portfolio" className="estienne">Estienne Prior</Link></Typography>
          <Link to="digital-portfolio/music">
            <Button sx={navButtons.basic}><Typography>Music</Typography></Button>
          </Link>
          <Link to="digital-portfolio/design">
            <Button sx={navButtons.basic}><Typography>Design</Typography></Button>
          </Link>
          <Link to="digital-portfolio/resume">
            <Button sx={navButtons.basic}><Typography>Resume</Typography></Button>
          </Link>
          {/* <Link to="contact">
            <Button sx={[navButtons.basic, navButtons.cta]}><Typography>Contact</Typography></Button>
          </Link> */}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;