import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Grid from '@material-ui/core/Grid';
import ListaInmuebles from './components/views';
import AppNavBar from './components/layouts';
import theme from './theme/theme';
import './App.css';

class App extends Component{
  render() {
    return (
        <Router>
      <MuiThemeProvider theme={theme}>
        <AppNavBar />
            <Grid container>
            <Switch>
              <Route path='/' exact component={ListaInmuebles} />
            </Switch>
            </Grid>
      </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;
