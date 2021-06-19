import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import HeaderContainer from "common/components/header/header-container";
import BookingTable from "./booking-table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "common/store";
import { getBooks } from "booking/store/slices/booking-slice";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.grey[100],
  },
}));

const BookingContainer: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isFetching, isError, isReloadNeeded, items } = useSelector(
    (root: RootState) => root.books.list
  );

  const { userInfo } = useSelector((root: RootState) => root.login.user);

  useEffect(() => {
    if (
      (!isFetching &&
        !isError &&
        items.length === 0 &&
        userInfo.sessionTokenBck !== null) ||
      isReloadNeeded
    ) {
      dispatch(getBooks());
    }
  }, [dispatch, isFetching, isError, items.length, isReloadNeeded, userInfo]);

  return (
    <Grid
      container
      data-testid="books"
      direction="column"
      className={classes.root}
    >
      <Grid item>
        <HeaderContainer />
      </Grid>
      <Grid item xs container justify="center" alignItems="center">
        <BookingTable rows={items} />
      </Grid>
    </Grid>
  );
};

export default BookingContainer;
