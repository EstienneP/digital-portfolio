// IMPORTS
import { Dialog, DialogContent, DialogTitle, Grid, Typography} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
// COMPONENTS
import DialogText from "./DialogText";

interface DialogProps {
    open: boolean;
    title: string;
    imagePath: string;
    imageWidth: string;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

/**
 * DetailsDialog
 * Show more details about a specific design piece
 * @author Estienne
 * @param DialogProps
 * @returns {JSX} details dialog
 */
const DetailsDialog = ({open, title, imagePath, imageWidth, setOpen}: DialogProps) => {
    /**
     * handleClose
     * Close the dialog
     * @author Estienne
     */
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth="md">
            <DialogTitle><b>{title}</b></DialogTitle>
            <DialogContent sx={{overflow: 'hidden'}}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <DialogText title={title}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography textAlign="center">
                        <img 
                            src={`${imagePath}`}
                            style={{objectFit: 'cover', width: imageWidth, height: 'auto'}}
                        />
                        </Typography>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}

export default DetailsDialog;