import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import BarSession from './bar/BarSession';


class AppNavBar extends Component {
    render() {
        return (
            <AppBar position="static">
                <BarSession/>
            </AppBar>
        )
    }
}

export default AppNavBar;
