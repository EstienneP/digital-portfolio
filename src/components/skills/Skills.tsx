import { Grid, Typography } from "@mui/material";

const Skills = () => {
    return(
        <Grid container className="content-container">
            <Grid item xs={12}>
                <Typography variant="body1">
                    <ul>
                        <li>PERN Stack Experience</li>
                        <li>AWS Proficiency</li>
                        <li>Strong understanding of SEO and Google Marketing Platform</li>
                        <li>Fluency in various CMSs and CRMs</li>
                    </ul>
                </Typography>
                <Typography variant="h6">Language/Framework Fluency</Typography>
                <Typography variant="body1">
                    HTML, CSS, JS, TS, Python, Java, React, Gatsby, MongoDB, Node.js, Bootstrap, Tailwind
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Skills;