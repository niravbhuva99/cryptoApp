import { Grid, Stack, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import Coin from "./Coin";
const Info = () => {
  const [coins, setCoins] = useState([]);
  const topCoins = coins.slice(0, 10);
  console.log(topCoins);
  useEffect(() => {
    const data = localStorage.getItem("coins");
    setCoins(JSON.parse(data).coins);
  }, []);
  return (
    <Grid item sm={12} mt={5} width="100%">
      <Typography sx={{ typography: { xs: "h6" } }} color="secondary" mb={2}>
        Top 10 Cryptos In The World
      </Typography>
      <Coin coins={topCoins} />
    </Grid>
  );
};

export default Info;
