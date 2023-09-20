import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  Grid,
} from "@mui/material";
import { Masonry } from "@mui/lab";
const heights = [150, 120, 120, 130, 100, 150, 110, 150, 100];

const Coin = ({ coins }) => {
  return (
    <Grid
      item
      sm={12}
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",

        justifyContent: "space-around",
      }}
    >
      <Masonry columns={{ xs: 2, sm: 2, md: 4 }} spacing={2}>
        {coins.map((coin, i) => {
          const { name, color, symbol, rank, iconUrl, price, marketCap } = coin;
          return (
            <Card sx={{ minHeight: 130, height: heights[i] }} key={coin.name}>
              <CardActionArea disableRipple>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    padding: "5px",
                  }}
                >
                  <Typography
                    gutterBottom
                    sx={{
                      typography: { xs: "body1", sm: "h6", mb: 0 },
                      color: color,
                    }}
                    component="div"
                  >
                    {rank + ":"}
                    {symbol}
                    {/* <Rating name="read-only" value={coin.rank / 10} readOnly /> */}
                  </Typography>
                  <CardMedia
                    component="img"
                    height="60"
                    sx={{
                      width: { xs: "20px", sm: "40px", md: "60px" },
                      height: { xs: "20px", sm: "40px", md: "60px" },
                    }}
                    image={iconUrl}
                    alt="green iguana"
                  />
                </Box>
                <Divider />
                <CardContent sx={{ padding: 0 }}>
                  <Typography
                    sx={{ typography: { sm: "subtitle1" }, padding: "0px" }}
                  >
                    Price: {Number(price).toFixed(2)}$
                  </Typography>
                  <Typography sx={{ typography: { sm: "subtitle1" } }}>
                    Market-Cap: {Number(marketCap / 1000000000).toFixed(2)}B $
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Masonry>
    </Grid>
  );
};

export default Coin;
