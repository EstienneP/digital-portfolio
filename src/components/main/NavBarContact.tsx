import { Grid, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavbarContact = () => {
  return (
    <>
      <Grid container>
          <Toolbar className="navbar-contact">
            <Typography variant="body1">
              <Link className="menu-link" to={'mailto:estieprior@gmail.com'}>EMAIL</Link>
            </Typography>
            <Typography variant="body1">
              <Link className="menu-link" to={'https://www.Linkedin.com/in/estienneprior/'}>LINKEDIN</Link>
            </Typography>
            <Typography variant="body1">
              <Link className="menu-link" to={'https://www.instagram.com/stnistaken'}>INSTAGRAM</Link>
            </Typography>
          </Toolbar>
      </Grid>
    </>
  );
}

export default NavbarContact;