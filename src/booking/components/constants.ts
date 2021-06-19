import { GridColDef } from "@material-ui/data-grid";

export const columnsGrid: GridColDef[] = [
  { field: "bookingId", headerName: "ID", width: 90 },
  { field: "bookingPrice", headerName: "Booking Price", width: 200 },
  { field: "bookingTime", headerName: "Booking Time", width: 200 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  {
    field: "streetAddress",
    headerName: "Street Address",
    width: 200,
  },
];
