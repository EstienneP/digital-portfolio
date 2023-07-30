// IMPORTS
import { Dispatch, SetStateAction } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
// CSS
import '../../home/photos.css';

interface DesignProps {
    setDialogOpen: Dispatch<SetStateAction<boolean>>;
    setDialogTitle: Dispatch<SetStateAction<string>>;
    setDialogContent: Dispatch<SetStateAction<string>>;
    setImageWidth: Dispatch<SetStateAction<string>>;
}

const Figma = ({setDialogOpen, setDialogTitle, setDialogContent, setImageWidth}: DesignProps) => {
    const home_image = { img: `${process.env.PUBLIC_URL}/design/goodreads-home.png`, title: 'Home' }
    const friends_image = { img: `${process.env.PUBLIC_URL}/design/goodreads-friends.png`, title: 'Friends' }
    const profile_image = { img: `${process.env.PUBLIC_URL}/design/goodreads-profile.png`, title: 'Profile' }

    return (
        <>
            <Typography textAlign="center" variant="h4"><b>Goodreads Rework</b></Typography>
            <br />
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="home"
                            height="140"
                            image={home_image.img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">Home</Typography>
                            <Typography variant="body2" color="text.secondary">
                                A more diversified and engaging home page, summarising what Goodreads is about.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={(e) => {
                                setDialogTitle("Home")
                                setDialogContent(home_image.img)
                                setImageWidth('50%')
                                setDialogOpen(true)
                            }} size="small">See More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="home"
                            height="140"
                            image={friends_image.img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">Friends</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Finally making it easy for users to add their friends and explore shared interests.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={(e) => {
                                setDialogTitle("Friends")
                                setDialogContent(friends_image.img)
                                setImageWidth('100%')
                                setDialogOpen(true);
                            }} size="small">See More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="home"
                            height="140"
                            image={profile_image.img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">Profile</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Add greater depth to how you present yourself to the Goodreads community.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={(e) => {
                                setDialogTitle("Profile")
                                setDialogContent(profile_image.img)
                                setImageWidth('50%')
                                setDialogOpen(true)
                            }} size="small">See More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default Figma;