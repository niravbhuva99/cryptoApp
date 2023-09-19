import React from "react";
import {
  Box,
  Card,
  Stack,
  Typography,
  Paper,
  CardMedia,
  CardContent,
} from "@mui/material";
import Fetch from "./api/Fetch";
import { useEffect } from "react";
import { useState } from "react";
import Coins from "./Coins";
const FirstPage = () => {
  const [glbData, setGlbData] = useState([]);

  const key = Object.keys(glbData);

  const a = key.map((item) => {
    return { name: item, value: glbData[item] };
  });
  console.log("555", glbData);
  //   localStorage.setItem("global", JSON.stringify(glbData));

  //   console.log(glbData);
  useEffect(() => {
    const ls = localStorage.getItem("global");
    const data = JSON.parse(ls);
    console.log(data);
    setGlbData(data);
    // Fetch("stats").then((data) => setGlbData(data.data.data));
  }, []);
  return (
    <Stack sx={{ width: "100%", height: "100%", bgcolor: "lightgrey" }}>
      <Stack
        direction="column"
        p={3}
        sx={{
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h3" mb={8}>
          Global Crypto Stats
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {a &&
            a.map((obj, i) => {
              if (typeof obj.value === "object") return null;
              return (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30%",
                    height: "20%",
                    rowGap: 1,
                  }}
                >
                  <Typography variant="h5" color="error">
                    {obj[key[i]] === "t"
                      ? key[i].slice(0, 5) + " " + key[i].slice(5)
                      : key[i]}
                  </Typography>

                  <Typography variant="h6">
                    {typeof obj.value === "number" ? obj.value : null}
                  </Typography>
                  <Typography variant="h6">
                    {typeof obj.value === "string"
                      ? (obj.value / 1000000000).toFixed(2) + "B"
                      : null}
                  </Typography>
                </Box>
              );
            })}
        </Box>
      </Stack>
      <Coins />
    </Stack>
  );
};

export default FirstPage;
