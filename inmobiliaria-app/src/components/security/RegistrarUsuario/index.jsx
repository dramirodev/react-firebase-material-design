import React, { Component } from "react";
import {
  Container,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const style = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 8,
    backgroundColor: "#e53935",
  },
  form: {
    width: "100%",
    marginTop: 10,
  },
  submit: {
    marginTop: 15,
    marginBottom: 20,
  },
};

export default class RegistrarUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: {
        nombre: "",
        apellido: "",
        email: "",
        password: "",
      },
    };
  }

  handleOnchange = (e) => {
    let usuario = Object.assign({}, this.state.usuario);
    usuario[e.target.name] = e.target.value;
    this.setState({
      usuario,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Container maxWidth="md">
        <div style={style.paper}>
          <Avatar style={style.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registre su cuenta
          </Typography>
          <form style={style.form}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  type="text"
                  name="nombre"
                  onChange={this.handleOnchange}
                  value={this.state.usuario.nombre}
                  fullWidth
                  label="Ingrese su nombre"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  type="text"
                  name="apellido"
                  value={this.state.usuario.apellido}
                  onChange={this.handleOnchange}
                  fullWidth
                  label="Ingrese sus apellidos"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  type="email"
                  name="email"
                  value={this.state.usuario.email}
                  onChange={this.handleOnchange}
                  fullWidth
                  label="Ingrese su correo electrónico"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  type="password"
                  name="password"
                  value={this.state.usuario.password}
                  onChange={this.handleOnchange}
                  fullWidth
                  label="Ingrese su password"
                />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={12} md={6}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  color="primary"
                  style={style.submit}
                  onClick={this.handleSubmit}
                >
                  Registrar
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}
