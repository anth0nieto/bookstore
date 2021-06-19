import React from "react";
import { Link, Typography } from "@material-ui/core";
import { BOOKSTORE, COPYRIGHT } from "login/constants";

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {COPYRIGHT}
      <Link color="inherit" href="#">
        {BOOKSTORE}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
