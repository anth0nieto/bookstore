import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { columnsGrid } from "./constants";
import { BookFormated } from "booking/model";

type BookingTableProps = {
  rows: BookFormated[];
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
  },
}));

const BookingTable: React.FC<BookingTableProps> = ({ rows }) => {
  const classes = useStyles();
  return (
    <Box height="70%" width="80%">
      <Paper elevation={3} className={classes.root}>
        <DataGrid rows={rows} columns={columnsGrid} pageSize={5} />
      </Paper>
    </Box>
  );
};
export default BookingTable;
