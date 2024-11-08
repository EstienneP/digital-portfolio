// IMPORTS
import { Button, Toolbar } from "@mui/material";

/**
 * ThemeBar
 * The menu bar of all the different themes for the site
 * @author Estienne
 * @returns {JSX} the theme bar
 */
const ThemeBar = () => {
    return (
        <>
            <Toolbar className="navbar-menu">
                <Button 
                    className="menu-link theme-button"
                    disableRipple
                    variant="contained"
                    onClick={() =>
                        document.body.setAttribute("data-theme", "dtm")
                    }
                >Don't Touch Me
                </Button>
                <Button
                    className="menu-link theme-button"
                    disableRipple
                    variant="contained" 
                    onClick={() =>
                        document.body.setAttribute("data-theme", "taquito")
                    }
                >Taquito
                </Button>
                <Button
                    className="menu-link theme-button"
                    disableRipple
                    variant="contained"
                    onClick={() =>
                        document.body.setAttribute("data-theme", "medusa")
                    }
                >Medusa
                </Button>
            </Toolbar>
        </>
    );
}

export default ThemeBar;