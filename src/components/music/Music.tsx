import { Divider, Grid, Paper, Typography } from "@mui/material";

/**
 * Music
 * A page to show off my musical capabilities
 * @author Estienne
 * @returns {JSX} the music page
 */
const Music = () => {
    return (
        <div style={{padding: 10}}>
            <Typography variant="h2">Music</Typography>
            <Divider /> <br />
            <Typography variant="h6" textAlign="center">
                In my spare time, I like to make electronic music
                under the name 'Stn'.
            </Typography>
            <Typography variant="h6" textAlign="center">
                Sometimes, I make house, sometimes I make garage,
                sometimes I make weird 97BPM trip-hop.
            </Typography>
            <Paper sx={{padding: 2}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <iframe 
                            title="artist"
                            src="https://open.spotify.com/embed/artist/0nu6PXv6dmifKrKOXB6aEY?utm_source=generator" 
                            width="100%" 
                            height="152" 
                            frameBorder="0" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy">
                        </iframe>
                    </Grid>
                    <Grid item xs={6}>
                        <iframe 
                            title="medusa"
                            src="https://open.spotify.com/embed/track/7D8r6Ay43yEl6PLqFcUkAT?utm_source=generator" 
                            width="100%" 
                            height="152" 
                            frameBorder="0" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy">
                        </iframe>
                    </Grid>
                    <Grid item xs={6}>
                        <iframe
                            title="bittersweet"
                            src="https://open.spotify.com/embed/track/7Dq7qVy1eS0E8EuKh5hLJp?utm_source=generator" 
                            width="100%" 
                            height="152" 
                            frameBorder="0" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy">
                        </iframe>
                    </Grid>
                    <Grid item xs={6}>
                        <iframe 
                            title="spikes"
                            src="https://open.spotify.com/embed/track/3B3eNTdxt3nnOrEurXJg9N?utm_source=generator" 
                            width="100%" 
                            height="152" 
                            frameBorder="0" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy">
                        </iframe>
                    </Grid>
                    <Grid item xs={6}>
                        <iframe
                            title="exchange"
                            src="https://open.spotify.com/embed/track/1Y5SSTHmN1FmnHNRD90wiO?utm_source=generator" 
                            width="100%" 
                            height="152" 
                            frameBorder="0" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy">
                        </iframe>
                    </Grid>
                </Grid>
            </Paper>            
        </div>
    );
    
}

export default Music;