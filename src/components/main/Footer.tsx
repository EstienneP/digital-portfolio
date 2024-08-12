import { Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Toolbar className="footer navbar">
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
    </>
  );
}

export default Footer;