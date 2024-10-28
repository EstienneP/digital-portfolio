import { Grid, Typography } from "@mui/material";

const About = () => {
    return (
        <Grid container className="content-container">
            <Grid item xs={12}>
                <Typography variant="body1">
                    After being born in the UK and raised in Australia, I somehow ended up studying Computer Science and Marketing at QUT. 
                    Upon graduating in 2020, I worked with Brisbane Motorcycles, directing their IT and eCommerce before developing an in-house web app that would revitalise the dated automotive DMS industry. 
                    Moving forward a few years, I found a home for myself at RAW Marketing as a front-end web developer. 
                </Typography>
            </Grid>
        </Grid>
    );
}

export default About;