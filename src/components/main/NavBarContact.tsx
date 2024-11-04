import { Grid, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavbarContact = () => {
  return (
    <>
      <Grid container>
          <Toolbar className="navbar-contact">
            <Typography variant="body1">
              <Link className="menu-link" to={'mailto:estieprior@gmail.com'} target="_blank">EMAIL</Link>
            </Typography>
            <Typography variant="body1">
              <Link className="menu-link" to={'https://www.Linkedin.com/in/estienneprior/'} target="_blank">LINKEDIN</Link>
            </Typography>
            <Typography variant="body1">
              <Link className="menu-link" to={'https://www.instagram.com/stnistaken'} target="_blank">INSTAGRAM</Link>
            </Typography>
          </Toolbar>
      </Grid>
    </>
  );
}

export default NavbarContact;