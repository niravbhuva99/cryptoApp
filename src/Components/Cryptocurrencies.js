import React, { useEffect, useState } from "react";
import Coin from "./Coin";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

const Cryptocurrencies = () => {
  const [coins, setcoins] = useState([]);

  // console.log("from crypto", coins);
  useEffect(() => {
    const data = localStorage.getItem("coins");
    setcoins(JSON.parse(data).coins);
  }, []);
  return (
    <Grid
      item
      md={10}
      sm={8}
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        position: "absolute",
        left: { md: "190px", sm: "270px" },
        justifyContent: "space-around",
        mt: 5,
      }}
    >
      <Coin coins={coins} />
    </Grid>
  );
};

export default Cryptocurrencies;
