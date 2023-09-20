import React from "react";
import {
  Box,
  Card,
  Stack,
  Typography,
  Paper,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import Fetch from "./api/Fetch";
import { useEffect } from "react";
import { useState } from "react";
import Cryptocurrencies from "./Cryptocurrencies";
import Info from "./Info";
const FirstPage = () => {
  const [glbData, setGlbData] = useState([]);

  const key = Object.keys(glbData);

  const a = key.map((item) => {
    return { name: item, value: glbData[item] };
  });
  console.log("555", glbData);
  // localStorage.setItem("coins", JSON.stringify(glbData));

  //   console.log(glbData);
  useEffect(() => {
    const ls = localStorage.getItem("global");
    const data = JSON.parse(ls);
    console.log(data);
    setGlbData(data);
    // Fetch("stats").then((data) => setGlbData(data.data.data));
  }, []);
  return (
    <Grid
      item
      lg={9}
      xs={8}
      sx={{
        bgcolor: "lightgrey",
        p: 2,
        position: "absolute",
        left: { xl: 480, lg: 400, md: 400, sm: 250, xs: 200 },
        zIndex: -1,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <Typography mb={8} sx={{ typography: { xs: "h6", sm: "h4" }, mb: 2 }}>
          Global Crypto Stats
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {a &&
            a.map((obj, i) => {
              if (typeof obj.value === "object") return null;
              return (
                <Paper
                  key={i}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "33%",
                  }}
                >
                  <Typography
                    color="info.main"
                    sx={{
                      typography: { xs: "body1", sm: "h6" },
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "100%",
                    }}
                  >
                    {obj[key[i]] === "t"
                      ? key[i].slice(0, 5) + " " + key[i].slice(5)
                      : key[i]}
                  </Typography>

                  <Typography variant="h6">
                    {typeof obj.value === "number"
                      ? (obj.value + "").length > 4
                        ? (obj.value / 1000).toFixed(2) + "K"
                        : obj.value
                      : null}
                  </Typography>
                  <Typography variant="h6">
                    {typeof obj.value === "string"
                      ? (obj.value / 1000000000).toFixed(2) + "B"
                      : null}
                  </Typography>
                </Paper>
              );
            })}
        </Box>
        <Info />
      </Box>
    </Grid>
  );
};

export default FirstPage;
