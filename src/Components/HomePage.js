import React from "react";
import Navbar from "./Navbar";
import { Grid } from "@mui/material";
import FirstPage from "./FirstPage";
const HomePage = () => {
  return (
    <Grid container>
      <Grid item sm={3} xs={12}>
        <Navbar />
      </Grid>
      <Grid item sm={9} sx={{ overflowY: "scroll" }}>
        <FirstPage />
      </Grid>
    </Grid>
  );
};

export default HomePage;
