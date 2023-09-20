import React from "react";
import Navbar from "./Navbar";
import { Grid } from "@mui/material";
import FirstPage from "./FirstPage";
const HomePage = () => {
  return (
    <Grid sx={{ position: "relative" }}>
      <Grid
        item
        sm={9}
        xs={12}
        sx={{ position: "absolute", top: 0, left: 190 }}
      >
        <FirstPage />
      </Grid>
    </Grid>
  );
};

export default HomePage;
