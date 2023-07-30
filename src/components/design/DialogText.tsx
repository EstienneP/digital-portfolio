// IMPORTS
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface DialogProps {
    title: string;
}

const DialogText = ({title}: DialogProps) => {
    const [blurb, setBlurb] = useState<any>(null);
    const bittersweet = <>
        <Typography><i>
            'Bittersweet' sparked a change in how I present 
            myself - both audibly and visually. From this 
            point, I honed in my minimalist tastes and truly
            began manifesting what I saw in my head when I 
            listen to my works.
        </i></Typography><br />
        <Typography><i>
            I wanted to capture a stylised out-of-focus
            effect that mirrored my ideology of bittersweet
            goodbyes leaving the individual unsure of what's
            ahead.
        </i></Typography><br />
        <Typography><i>
            The original focused image underneath the overlayed
            noise and blue colouring is actually a sea of 
            white hands, made from some sort of wooden texture.
        </i></Typography><br />
        <iframe
            title="bittersweet"
            src="https://open.spotify.com/embed/track/7Dq7qVy1eS0E8EuKh5hLJp?utm_source=generator" 
            width="100%" height="25%" frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>
        </>

    const collision = <>
        <Typography><i>
            A personal photograph for the cover art for
            'Collision'. I appreciated the almost symmetrical
            nature of the building and the minimalist lo-fi
            style that mirrored the song it was focused around.
        </i></Typography><br />
        <Typography><i>
            The photo was taken at sunset, but I wanted an unnaturally
            black sky with some sort of dynamic effect to it. To achieve
            this, I replaced the sky with a cloudy sky image, combined it 
            with a vinyl texture, and wrapped the whole thing in a monochrome
            overlay.
        </i></Typography><br />
        <Typography><i>
            I feel that the final result definitely captures the lo-fi house
            energy that I was looking for.
        </i></Typography><br />
        <iframe
            title="collision"
            src="https://open.spotify.com/embed/album/1WLxOWXI1eExG2tmeTw1YJ?utm_source=generator" 
            width="100%" height="25%" frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>
        </>

    const jamPackd = <>
        <Typography><i>
            "JAM PACK'D" was an artwork I created for my personal gym 
            playlist on Spotify. The playlist cultivates music from
            high-energy genres such as Drum 'n' Bass, Bass House, 
            Metal, Breakcore, etc.
        </i></Typography><br />
        <Typography><i>
            I wanted an image of pulsating rage to cover the playlist
            to hype me up before I even hit play. Having an action-oriented
            image, assisted by blood-red colouring and heavily-saturated
            filtering brought the energy to life.
        </i></Typography><br />
        <iframe
            title="very-noise"
            src="https://open.spotify.com/embed/track/4A0ZIhDd8607zlXZzxAl9A?utm_source=generator"
            width="100%" height="25%" frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>
        </>

    const medusa = <>
        <Typography><i>
            The idea for the cover art for Medusa was inspired by
            photos I had taken of the jellyfish at the Osaka aquarium.
            I was enamoured with the jellyfish and the way they moved
            around their tank - the way the light bounced off of them.
            At the time, I believed 'Medusa' to be the best song I had
            ever written, and I wanted a core memory to be displayed
            alongside it. 
        </i></Typography><br />
        <Typography><i>
            I chose a font that matched both the smooth elegance of the
            jellyfish, and the calm nature of the track - filled with
            distant echoes, melodramatic pianos and organic percussion.
        </i></Typography><br />
        <iframe
            title="medusa"
            src="https://open.spotify.com/embed/track/7D8r6Ay43yEl6PLqFcUkAT?utm_source=generator" 
            width="100%" height="25%" frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>
        </>

    const pareidolia = <>
        <Typography><i>
            I created this artwork to go alongside a remix I had created
            for some friends of mine. I'd never heard of the term 
            'pareidolia' before and it fascinated me - it means, to
            see something in something else (similar to seeing 
            recogniseable shapes in clouds).
        </i></Typography><br />
        <Typography><i>
            To coincide with this definition and the lyrics of seeing
            someone's face in the waves of an ocean, I decided to create
            a very literal cover art. I found a fantastic shot of a cove
            and overlayed it with a cut-out silhouette. I was very happy
            with the way the land curved around the back of the silhouette's
            head.
        </i></Typography>
        </>

    const pent = <>
        <Typography><i>
            'Pent' combined a lot of ideas from a lot of different places: 
            RnB vocals, multiple mashed breakbeats and UK garage influences, 
            to name a few.
        </i></Typography><br />
        <Typography><i>
            The imagery for this song also needed to emphasise that mishmash
            of ideas. Resultingly, the cover art for 'Pent' utilises a range
            of colours and unfamiliar shapes, coming together in a sort of
            harmony. 
        </i></Typography><br />
        <Typography><i>
            The piece is crowned with subtle noise effects and saturation to
            make the rowdy temperament of this song shine.
        </i></Typography><br />
        <iframe
            title="pent"
            src="https://open.spotify.com/embed/track/1qy67uEHfq41asstcStjKC?utm_source=generator"
            width="100%" height="25%" frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>
        </>

    const slink = <>
        <Typography><i>
            When making 'Slink', I knew the exact response I wanted to get out of it.
        </i></Typography><br />
        <Typography><i>
            The track's embued with a sleek and effortless swagger, and when 
            I listened to it, I pictured the concept of a classy-but-confident
            party - the kind shown in espionage movies.
        </i></Typography><br />
        <Typography><i>
            I followed this through with textualised styling and a mix of focusses.
            The song title is outlined, italicised and framed in a bold, gradiented box;
            and all four colours used here help to bring out the contradictory
            subtle and strong energy I was looking for.
        </i></Typography><br />
        <iframe
            title="pent"
            src="https://open.spotify.com/embed/track/4vDQLFSkOmzQbqRDF004qc?utm_source=generator"
            width="100%" height="25%" frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>
        </>

    const subside = <>
        <Typography><i>
            'Subside' as a whole is about grief and loss.
        </i></Typography><br />
        <Typography><i>
            Visually, the cover art consists of a grainy, desolate desert being
            mirrored upon itself to create a feeling of infinite despair. Adding to
            this is a black-and-white filtering and saturation to deepen the
            shadows and dark crevices.
        </i></Typography><br />
        <Typography><i>
            Finally, a subtle blur effect was added to the corners to emphasise
            the limits of what you truly know when experiencing moments of sadness.
        </i></Typography><br />
        <iframe
            title="subside"
            src="https://open.spotify.com/embed/track/69CxCQZe9lroQAHF0znvA7?utm_source=generator"
            width="100%" height="25%" frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>
        </>

    const home = <>
    <Typography><i>
        My proposed rework for the Goodreads home page endeavours to collate
        content in a way that actually aids your reading journey.
    </i></Typography><br />
    <Typography><i>
        Goodreads is about showing off <b>GOOD READS</b>;
        yet the old home screen solely shows reviews from friends. I believe that
        friends' reviews should only be shown if they contain dialog - otherwise, 
        the review is meaningless to you: someone who has likely not read the book. 
    </i></Typography><br />
    <Typography><i>
        Since friend reviews are now only a fraction of the home page's content, we
        have space to showcase books based on the user's previous reads and a banner
        to present new releases.
    </i></Typography><br />
    </>

    const friends = <>
    <Typography><i>
        Since friends are a pivotal part of Goodreads, I felt that accessibility and functionality 
        needed to be improved. 
    </i></Typography><br />
    <Typography><i>
        Many times, I'll go through my friends books to find a book they recommended that I
        can't remember the name of. To remedy this, I've added a carousel of books read by multiple
        friends.
    </i></Typography><br />
    <Typography><i>
        Additionally, Goodreads only lets you add friends by sharing your profile URL or importing contacts - 
        very cumbersome. Similar to almost any social network, I propose a username search functionality to 
        simplify the process.
    </i></Typography><br />
    </>

    const profile = <>
    <Typography><i>
        Goodreads' profile template is genuinely good, but there are a few small
        tweaks that I think would make it perfect.
    </i></Typography><br />
    <Typography><i>
        The first thing I want to know when viewing someone's profile on Goodreads is:
        'What's their favourite book?' - it's a key question for most readers and tells you
        so much about them. Because of this, I replaced the yearly summary button with a 
        'Favourite book' slot.
    </i></Typography><br />
    <Typography><i>
        Secondly, Goodreads prioritises friends in many sections across the app, but limits
        room for expression with unenhanceable profile pictures. Expanding the display window
        for the profile picture adds more colour to the page and lets users actually get a good
        look at who they're adding.
    </i></Typography><br />
    </>

    useEffect(() => {
        if (title === 'Bittersweet') { setBlurb(bittersweet) }
        else if (title === 'Collision') { setBlurb(collision) }
        else if (title === "JAM PACK'D") { setBlurb(jamPackd) }
        else if (title === 'Medusa') { setBlurb(medusa) }
        else if (title === 'Pareidolia') { setBlurb(pareidolia) }
        else if (title === 'Pent') { setBlurb(pent) }
        else if (title === 'Slink') { setBlurb(slink) }
        else if (title === 'Subside') { setBlurb(subside) }
        else if (title === 'Home') { setBlurb(home) }
        else if (title === 'Friends') { setBlurb(friends) }
        else if (title === 'Profile') { setBlurb(profile) }
    }, []);
    
    return (blurb);
}

export default DialogText;