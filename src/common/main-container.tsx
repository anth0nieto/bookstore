import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import {
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import React from "react";
import { Route, Switch } from "react-router-dom";
import theme from "./mui-theme";
import Content from "./content";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
    },
    contentContainer: {
      padding: theme.spacing(1),
      backgroundColor: "#f1f1f1",
    },
  })
);

const MainContainer: React.FC = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <ScThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route>
            <Grid className={classes.root} container direction="column">
              <Content />
            </Grid>
          </Route>
        </Switch>
      </ScThemeProvider>
    </MuiThemeProvider>
  );
};

export default MainContainer;
