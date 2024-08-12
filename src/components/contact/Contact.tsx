import { AlternateEmail, Instagram, LinkedIn } from "@mui/icons-material";
import { Grid, Icon, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <>
            <div className="page-wrapper">
                <Grid container sx={{ display: 'block'}} spacing={2}>
                    <Typography variant="h2">Contact</Typography>
                    <Grid item xs={6}>
                        <Grid item sx={{display: 'flex', alignItems: 'center'}} xs={12}>
                            <Typography variant="body1">
                                <Link to={'mailto:estieprior@gmail.com'} className="link social email" target="_blank">
                                    email
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item sx={{display: 'flex', alignItems: 'center'}} xs={12}>
                            <Typography variant="body1">
                                <Link to={'https://www.Linkedin.com/in/estienneprior/'} className="link social linkedin" target="_blank">
                                    linkedin
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item sx={{display: 'flex', alignItems: 'center'}} xs={12}>
                            <Typography variant="body1">
                                <Link to={"https://www.instagram.com/stnistaken"} className="link social instagram" target="_blank">
                                    instagram
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default Contact;