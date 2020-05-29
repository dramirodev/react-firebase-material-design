import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider, Grid } from "@material-ui/core";
import theme from "./theme/theme";
import "./App.css";
import AppNavBar from './components/layouts';
import ListaInmuebles from './components/views';
import RegistrarUsuario from './components/security'

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppNavBar />
          <Grid container>
            <Switch>
              <Route path="/" exact component={ListaInmuebles} />
              <Route
                path="/auth/registrar-usuario"
                exact
                component={RegistrarUsuario}
              />
            </Switch>
          </Grid>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
