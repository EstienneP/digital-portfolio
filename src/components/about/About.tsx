// IMPORTS
import { Grid, Typography } from "@mui/material";

/**
 * About
 * A page to describe myself
 * @author Estienne
 * @returns {JSX} the about page
 */
const About = () => {
    return (
        <Grid container className="content-container">
            <Grid item className="content" xs={12}>
                <Typography variant="body1" sx={{'fontWeight': 'bold'}}>Professional</Typography>
                <Typography variant="body1">
                    Based on my academic interests, I studied Computer Science and Marketing at QUT. 
                    Upon graduating in 2020, I worked with Brisbane Motorcycles, directing their IT and eCommerce before developing an in-house web app that would revitalise the dated automotive DMS industry. 
                    Moving forward a few years, I found a home for myself at RAW Marketing as a front-end web developer. 
                </Typography>
            </Grid>
            <Grid item className="content" xs={12}>
                <Typography variant="body1" sx={{'fontWeight': 'bold'}}>Personal</Typography>
                <Typography variant="body1">
                    My main passion in life is music. I love making it, learning about it, and sharing it. The hand image on this site was actually from an artwork for one of my songs, 'Dont Touch Me'.
                    When i'm not working or making music, I like to read, collect retro video games, and share experiences with the many wonderful people in my life.
                </Typography>
            </Grid>
        </Grid>
    );
}

export default About;