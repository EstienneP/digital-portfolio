// IMPORTS
import { Divider, Grid, IconButton, ListItem, Paper, Typography } from "@mui/material";
import { Download } from "@mui/icons-material";

const Resume = () => {
    return(
        <div style={{padding: 10}}>
            <Typography variant="h2">
                Resume
                <IconButton aria-label="download" href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" sx={{ "&:hover": { backgroundColor: "transparent" }}}>
                    <Download />
                </IconButton>
            </Typography><br />
            <Paper sx={{padding: 2}}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography variant="h6"><b>EXPERIENCE</b></Typography>
                        <Divider /><br />
                        <Typography variant="h5"><b>DMS Innovations - </b><i>Software Developer</i></Typography>
                        <Typography variant="subtitle1">NOVEMBER 2022 - PRESENT</Typography>
                        <Typography variant="body1">
                            Full-stack development of ORA DMS, a cloud-deployed SAAS 
                            for the automotive industry. In addition to implementing
                            new features, I have been prominently involved in 
                            translating the React front-end from JavaScript to TypeScript
                            and improving back-end PostgreSQL database communication.
                        </Typography>
                        <br />
                        <Typography variant="h5"><b>Brisbane Motorcycles - </b><i>Director of IT & Ecommerce</i></Typography>
                        <Typography variant="subtitle1">NOVEMBER 2021 - November 2022</Typography>
                        <Typography variant="body1">As my experience grew, I took on:</Typography>
                        <Typography>
                            <ListItem sx={{ display: 'list-item' }}>
                                development of in-house technology with Dart, Python & 
                                JavaScript running on AWS EC2 instances, translating
                                Maropost, Salesforce & Autogate API feeds into a
                                practical leads management system.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item' }}>
                                management of IT infrastructure, intellectual property
                                and deployment of self-hosted 3CX telecommunication
                                via AWS.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item' }}>
                                Ecommerce management + social media marketing for Brisbane
                                Motorcycles, Riders Market & Sydney City Motorcycles.
                            </ListItem>
                        </Typography>
                        <br />
                        <Typography variant="h5"><b>Brisbane Motorcycles - </b><i>Product Database Manager</i></Typography>
                        <Typography variant="subtitle1">DECEMBER 2020 - NOVEMBER 2021</Typography>
                        <Typography variant="body1">
                            Regulated product metadata with Python - utilising Pandas,
                            Selenium and Cron - in addition to ecommerce web development
                            to ensure a smoother customer experience.
                        </Typography>
                        <br />
                        <Typography variant="h5"><b>Wesley Mission Queensland - </b><i>Keeping Connected Team Member</i></Typography>
                        <Typography variant="subtitle1">April 2020 - July 2020</Typography>
                        <Typography variant="body1">
                            During the height of the COVID-19 pandemic, I assisted WMQ with
                            keeping aged care residents connected to their families in
                            unfamiliar times.
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6"><b>SKILLS</b></Typography>
                        <Divider /><br />
                        <Typography variant="body1">
                            <b>PERN stack experience</b>, including 
                            essential TypeScript knowledge and API
                            implementation skills.                                            
                        </Typography>        
                        <br />   
                        <Typography variant="body1">
                            <b>Python experience</b>  with Pandas, 
                            Selenium, Tkinter, API communication and
                            scheduled automation.
                        </Typography> 
                        <br />
                        <Typography variant="body1">
                            <b>Extensive marketing knowledge</b> of SEO,
                            Google Platforms (e.g. Analytics & Ads), and
                            content creation for social media, EDM and SMS
                            campaigns.                                           
                        </Typography> 
                        <br />
                        <Typography variant="body1">
                            <b>Ecommerce proficiency</b> from managing
                            3 Ecommerce stores, and driving 'Brisbane
                            Motorcycles' monthly online sales from $60K
                            to $200K/month.                                         
                        </Typography>
                        <br />
                        <Typography variant="h6"><b>LANGUAGES & ENVIRONMENTS</b></Typography>
                        <Divider /><br />
                        <Typography variant="body1">
                            JavaScript, TypeScript, Python, Dart, React, AWS,
                            Git, MongoDB, HTML/CSS, React, Node.js, SQL, Java, C#                                            
                        </Typography>
                        <br />
                        <Typography variant="h6"><b>EDUCATION</b></Typography>
                        <Divider /><br />
                        <Typography variant="h6"><b>Queensland University of Technology - </b></Typography>
                        <Typography variant="body2" sx={{ fontSize: "12px" }}><i>Bachelor of IT (Computer Science) / Bachelor of Business (Marketing)</i></Typography>
                        <Typography variant="subtitle2">February 2017 - December 2020</Typography>
                        <Typography variant="body1">
                            Graduated with a GPA of 5.5 and awarded placement on the Dean's List.
                        </Typography>
                    </Grid>
                </Grid> 
            </Paper>
        </div>
    );
}

export default Resume;