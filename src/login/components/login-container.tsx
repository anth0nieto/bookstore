import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import LoginForm from "./login-form";
import { useDispatch } from "react-redux";
import { loginUser } from "login/store/slices/user-slice";
import { Credentials } from "login/model";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://source.unsplash.com/featured/?books,libraries)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

const LoginContainer: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onLoginSubmit = ({ email, password }: Credentials) => {
    dispatch(loginUser(email, password));
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <LoginForm handleLoginSubmit={onLoginSubmit} />
      </Grid>
    </Grid>
  );
};

export default LoginContainer;
