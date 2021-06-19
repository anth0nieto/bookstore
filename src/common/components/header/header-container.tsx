import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import Header from "./header";
import { logout } from "login/store/slices/user-slice";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
  },
}));

const LoginContainer: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Grid container className={classes.root}>
      <Header onLogout={handleLogout} />
    </Grid>
  );
};

export default LoginContainer;
