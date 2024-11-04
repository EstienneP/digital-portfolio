// IMPORTS
import { Grid, Typography } from "@mui/material";

/**
 * Experience
 * A page to outline my work experience
 * @author Estienne
 * @returns {JSX} the experience page
 */
const Experience = () => {
    return(
        <Grid container className="content-container">
            <Grid item xs={12}>
                <div className="content">
                    <Typography variant="body1" sx={{'fontWeight': 'bold'}}>RAW Marketing - Front-End Web Developer (09/23 - Present)</Typography>
                    <Typography variant="body1">
                        Creating lead generating front-end web experiences for 
                        technology figureheads such as Adobe, HP & HPE, Veeam, 
                        and more; in addition to improving websites for various 
                        AU/NZ B2B technology businesses.
                    </Typography>
                </div>
                <div className="content">
                    <Typography variant="body1" sx={{'fontWeight': 'bold'}}>DMS Innovations - Full-Stack Developer (11/22 - 09/23)</Typography>
                    <Typography variant="body1">
                        Full-stack development of ORA DMS, a cloud-deployed SaaS for the
                        automotive industry. Prominently involved in feature development,
                        translating the React front-end from JavaScript to TypeScript, and
                        improving back-end PostgreSQL database communication.
                    </Typography>
                </div>
                <div className="content">
                    <Typography variant="body1" sx={{'fontWeight': 'bold'}}>Brisbane Motorcycles - Director of IT & eCommerce (12/21 - 11/22)</Typography>
                    <Typography variant="body1">
                        As Director of IT & eCommerce, I took on:
                        <ul>
                            <li>development of an in-house lead management system using Dart, Python & JavaScript.</li>
                            <li>management of IT infrastructure, intellectual property and AWS deployment of self-hosted 3CX telecommunication.</li>
                            <li>Ground-up creation and management of Riders Market & Sydney City Motorcycles websites alongside Brisbane Motorcycles.</li>
                        </ul>
                    </Typography>
                </div>
                <div className="content">
                    <Typography variant="body1" sx={{'fontWeight': 'bold'}}>Brisbane Motorcycles - Product Database Manager (12/20 - 12/21)</Typography>
                    <Typography variant="body1">
                        Regulated product metadata with Python (utilising Pandas, Selenium and
                        Cron), in addition to UI/UX-prioritised web development.
                    </Typography>
                </div>
            </Grid>
        </Grid>
    );
}

export default Experience;