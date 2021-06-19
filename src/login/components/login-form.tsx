import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import BookIcon from "@material-ui/icons/BookSharp";
import {
  BOOKSTORE,
  EMAIL_ADDRESS,
  FORGOT_PASSWORD,
  PASSWORD,
  SIGN_IN,
} from "login/constants";
import Copyright from "./copyright";
import { Credentials } from "login/model";

type LoginFormProps = {
  handleLoginSubmit: (credentials: Credentials) => void;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm: React.FC<LoginFormProps> = ({ handleLoginSubmit }) => {
  const classes = useStyles();
  const [state, setState] = useState<Credentials>({
    email: "",
    password: "",
  });
  const { email, password } = state;

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [`${name}`]: value });
  };

  return (
    <Grid
      container
      className={classes.root}
      component={Paper}
      elevation={6}
      square
    >
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <BookIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {BOOKSTORE} {SIGN_IN}
        </Typography>
        <div className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={EMAIL_ADDRESS}
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={onChangeInput}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={PASSWORD}
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={onChangeInput}
          />
          {/*
<FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={REMEMBER_ME}
          />
            */}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleLoginSubmit(state)}
          >
            {SIGN_IN}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {FORGOT_PASSWORD}
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </div>
    </Grid>
  );
};

export default LoginForm;
