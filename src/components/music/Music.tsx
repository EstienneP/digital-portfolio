// IMPORTS
import { Grid, Typography } from "@mui/material";

/**
 * Music
 * A page to show off my musical capabilities
 * @author Estienne
 * @returns {JSX} the music page
 */
const Music = () => {
    return (
        <>
            <Grid container className="content-container">
                <Grid item xs={12}>
                    <Typography className="content" variant="body1">
                        Here are a few of my trending songs. Thank you for listening ♥. 
                    </Typography>
                    <iframe 
                        className="spotify-player"
                        title="artist"
                        src="https://open.spotify.com/embed/artist/0nu6PXv6dmifKrKOXB6aEY?utm_source=generator" 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="eager">
                    </iframe>
                </Grid>
                {/* <Grid item xs={12}>
                    <iframe
                        title="exchange"
                        src="https://open.spotify.com/embed/track/1Y5SSTHmN1FmnHNRD90wiO?utm_source=generator" 
                        width="100%" 
                        height="152" 
                        frameBorder="0" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy">
                    </iframe>
                </Grid> */}
            </Grid>           
        </>
    );
    
}

export default Music;