// IMPORTS
import { useState } from "react";
import { Divider, Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
// COMPONENTS
import GraphicDesign from "./GraphicDesign/GraphicDesign";
import Figma from "./Figma/Figma";
import DetailsDialog from "./DetailsDialog";

/**
 * Design
 * Show some of the design content i've made over the years
 * @author Estienne
 * @returns {JSX} three different design aspect across three tabs
 */
const Design = () => {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const [dialogTitle, setDialogTitle] = useState<string>("");
    const [dialogContent, setDialogContent] = useState<string>("");
    const [imageWidth, setImageWidth] = useState<string>("");
    const [tabNum, setTabNum] = useState<number>(0);

    const handleChangeTab = (event: React.SyntheticEvent, newTabNum: number) => {
        setTabNum(newTabNum);
    }

    return (
        <div style={{padding: 10}}>
            <Typography variant="h2">Design</Typography>
            <Divider /> <br />    
            <Paper sx={{padding: 2}}>
                <Grid container spacing={2}>
                    <Tabs value={tabNum} onChange={handleChangeTab}>
                        <Tab label="Graphic Design" />
                        <Tab label="Figma" />
                    </Tabs>

                    <Grid item xs={12}>
                        <div style={{padding: 10}}>
                            {tabNum === 0 && 
                            <GraphicDesign 
                                setDialogOpen={setDialogOpen} 
                                setDialogTitle={setDialogTitle} 
                                setDialogContent={setDialogContent}
                                setImageWidth={setImageWidth}
                            />}
                            {tabNum === 1 && 
                            <Figma 
                                setDialogOpen={setDialogOpen}
                                setDialogTitle={setDialogTitle}
                                setDialogContent={setDialogContent}
                                setImageWidth={setImageWidth}
                            />}
                        </div>
                    </Grid>
                </Grid>
            </Paper>    

            <DetailsDialog
                open={dialogOpen}
                title={dialogTitle}
                imagePath={dialogContent}
                imageWidth={imageWidth}
                setOpen={setDialogOpen}
            />
        </div>
    );

}

export default Design;