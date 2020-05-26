import React, { Component } from 'react';
import { Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: 'flex'
        }
    },
    grow: {
        flexGrow: 1
    },
    sectionMobile: {
        [theme.breakpoints.up("md")]: {
            display: 'none'
        }
    }
})
class BarSession extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6">
                    VAXI HOMES
                </Typography>
                <div className={classes.grow}></div>
                <div className={classes.sectionDesktop}>
                    <Button color="inherit">Login</Button>
                </div>
                <div className={classes.sectionMobile}>
                    <IconButton color="inherit">
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </Toolbar>
        )
    }
}
export default withStyles(styles)(BarSession)
