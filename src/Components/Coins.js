import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const topCoins = coins.slice(0, 10);
  console.log(topCoins);
  useEffect(() => {
    const data = localStorage.getItem("coins");
    setCoins(JSON.parse(data).coins);
  }, []);
  return (
    <Stack m={2}>
      <Typography variant="h3">Top 10 Cryptos In The World</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "30px",
        }}
      >
        {topCoins.map((coin) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <Typography gutterBottom variant="h4" component="div">
                  {coin.name}
                </Typography>
                <CardMedia
                  component="img"
                  height="60"
                  sx={{ width: "60px" }}
                  image={coin.iconUrl}
                  alt="green iguana"
                />
              </Box>
              <CardContent>
                <Typography variant="body2" color="text.secondary"></Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Stack>
  );
};

export default Coins;
