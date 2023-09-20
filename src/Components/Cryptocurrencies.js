import React, { useEffect, useState } from "react";
import Coin from "./Coin";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

const Cryptocurrencies = () => {
  const [coins, setcoins] = useState([]);

  console.log("from crypto", coins);
  useEffect(() => {
    const data = localStorage.getItem("coins");
    setcoins(JSON.parse(data).coins);
  }, []);
  return <Coin coins={coins} />;
};

export default Cryptocurrencies;
