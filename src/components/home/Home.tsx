// IMPORTS
import { useEffect, useState } from "react";
import { Divider, Grid, IconButton, ImageList, ImageListItem, Typography } from "@mui/material";
import { AlternateEmail, Instagram, LinkedIn } from "@mui/icons-material";
// CSS
import './photos.css';

/**
 * Home
 * The home page for the site
 * @author Estienne
 * @returns {JSX} the home page
 */
const Home = () => {
    const [time, setTime] = useState(Date.now());
    const attributes = ['Software developer', 'Electronic Musician',  
    'Graphic Designer', 'Director of IT', 'Book Nerd', 
    'Database Manager', 'Book Nerd', 'TypeScript Advocate', 
    'Python Scripter', 'Full-stack Developer', 'Ecommerce Manager'];
    const [singleAttribute, setSingleAttribute] = useState(attributes[0]);

    const itemData = [
        { img: `${process.env.PUBLIC_URL}/home/bush.jpg`, title: 'Bush' },
        { img: `${process.env.PUBLIC_URL}/home/office.jpeg`, title: 'Office' },
        // { img: `${process.env.PUBLIC_URL}/home/skate.png`, title: 'Skate' },
        // { img: `${process.env.PUBLIC_URL}/home/park.jpg`, title: 'Park' },
        // { img: `${process.env.PUBLIC_URL}/home/mountain.jpg`, title: 'Mountain' },
        // { img: `${process.env.PUBLIC_URL}/home/skate.jpg`, title: 'Skate' },
      ];

    /**
     * useEffect
     * Change the rendered character
     * attribute every 3 seconds
     */
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Date.now());

            // Filter out the currently-rendered attribute,
            // then set the new attribute
            let filteredAttributes = attributes.filter(x => x !== singleAttribute);
            setSingleAttribute(attributes[Math.floor(Math.random() * filteredAttributes.length)]);
        }, 3000);
        
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <div style={{padding: 10}}>
                        <Typography variant="h3">
                            <div className="elementToFadeInAndOut">
                                {singleAttribute}
                            </div>
                        </Typography>
                        <Divider />
                        <br />
                        <Typography variant="h6">
                            Hey, thanks for checking in!
                        </Typography>
                        <br />
                        <Typography variant="body1">
                            My name is Estienne and I'm a computer science and marketing 
                            graduate from Nottingham. Feel free to check out my interests,
                            browse my resume, or count how many titles get rendered above.
                        </Typography>
                        <br />
                        <IconButton aria-label="email" href={`mailto:estieprior@gmail.com`}>
                            <AlternateEmail />
                        </IconButton>
                        <IconButton aria-label="linkedin" onClick={() => window.open('https://www.Linkedin.com/in/estienneprior/')}>
                            <LinkedIn />
                        </IconButton>
                        <IconButton aria-label="instagram" onClick={() => window.open('https://www.instagram.com/stnistaken')}>
                            <Instagram />
                        </IconButton>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{padding: 10}}>
                        <ImageList cols={2}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} className="hover01">
                                    <img
                                        src={`${item.img}`}
                                        srcSet={`${item.img}`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </Grid>

            </Grid>
        </>
    );
}

export default Home;