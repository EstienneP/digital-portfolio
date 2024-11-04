import { Grid, Typography } from "@mui/material";

const Skills = () => {
    return(
        <Grid container className="content-container">
                <Grid item className="content" xs={6}>
                    <Typography variant="body1" sx={{'fontWeight': 'bold'}}>Languages</Typography>
                    <Typography variant="body1">
                        <ul>
                            <li>Dart</li>
                            <li>HTML</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>TypeScript</li>
                        </ul>
                    </Typography>
                </Grid>
                <Grid item className="content" xs={6}>
                    <Typography variant="body1" sx={{'fontWeight': 'bold'}}>Frameworks and Libraries</Typography>
                    <Typography variant="body1">
                        <ul>
                            <li>Bootstrap</li>
                            <li>Gatsby</li>
                            <li>Pandas</li>
                            <li>React</li>
                            <li>Tailwind</li>
                        </ul>
                    </Typography>
                </Grid>
                <Grid item className="content" xs={6}>
                    <Typography variant="body1" sx={{'fontWeight': 'bold'}}>Environments and Systems</Typography>
                    <Typography variant="body1">
                        <ul>
                            <li>Flutter</li>
                            <li>MongoDB</li>
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                            <li>WordPress</li>
                        </ul>
                    </Typography>
                </Grid>
        </Grid>
    );
}

export default Skills;