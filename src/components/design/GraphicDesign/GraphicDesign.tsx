// IMPORTS
import { Dispatch, SetStateAction } from "react";
import { ImageList, ImageListItem } from "@mui/material";

interface DesignProps {
    setDialogOpen: Dispatch<SetStateAction<boolean>>;
    setDialogTitle: Dispatch<SetStateAction<string>>;
    setDialogContent: Dispatch<SetStateAction<string>>;
    setImageWidth: Dispatch<SetStateAction<string>>;
}

/**
 * GraphicDesign
 * Show various graphic design works
 * @author Estienne
 * @returns {JSX} graphic designs i've made and information about them
 */
const GraphicDesign = ({setDialogOpen, setDialogTitle, setDialogContent, setImageWidth}: DesignProps) => {    
    const images = [
        { img: `${process.env.PUBLIC_URL}/design/bittersweet.jpg`, title: 'Bittersweet' },
        { img: `${process.env.PUBLIC_URL}/design/collision.jpg`, title: 'Collision' },
        { img: `${process.env.PUBLIC_URL}/design/jam-packd.png`, title: "JAM PACK'D" },
        { img: `${process.env.PUBLIC_URL}/design/medusa.jpg`, title: 'Medusa' },
        { img: `${process.env.PUBLIC_URL}/design/pareidolia-final.jpg`, title: 'Pareidolia' },
        { img: `${process.env.PUBLIC_URL}/design/pent.jpg`, title: 'Pent' },
        { img: `${process.env.PUBLIC_URL}/design/slink.jpg`, title: 'Slink' },
        { img: `${process.env.PUBLIC_URL}/design/subside-final.jpg`, title: 'Subside' },
    ];

    return (
        <>
            <ImageList cols={4}>
                {images.map((item) => (
                    <ImageListItem key={item.img} className="hover01">
                        <img
                            onClick={() => {
                                setDialogTitle(item.title);
                                setDialogContent(item.img);
                                setImageWidth('100%');
                                setDialogOpen(true);
                            }}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="eager"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )
}

export default GraphicDesign;