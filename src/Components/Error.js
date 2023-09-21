import { Alert, AlertTitle } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      This is an error alert —{" "}
      <strong>You Have enterd wrong Path🤦‍♂️🤦‍♂️🤦‍♂️!</strong>
    </Alert>
  );
};

export default Error;
