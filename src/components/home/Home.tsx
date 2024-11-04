// IMPORTS
import { Grid, Typography } from "@mui/material";

/**
 * Home
 * The home page for the site
 * @author Estienne
 * @returns {JSX} the home page
 */
const Home = () => {

    return (
        <Grid container className="content-container">
            <Grid item className="content" xs={12}>
                <Typography variant="body1">Developer and musician, est. 1999.</Typography>
            </Grid>
        </Grid>
    );
}

export default Home;