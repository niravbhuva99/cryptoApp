import React, { useEffect, useState } from "react";
import Fetch from "./api/Fetch";
import { Box, Button, Grid, IconButton } from "@mui/material";
import Coin from "./Coin";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./Exchanges.module.css";
import RecommendIcon from "@mui/icons-material/Recommend";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const Exchanges = () => {
  const [exchangesData, setExchangesData] = useState([]);
  console.log("dddd", exchangesData);
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  //   exchangesData &&
  //     localStorage.setItem("exchangesdata", JSON.stringify(exchangesData));
  useEffect(() => {
    const dataFromLs = localStorage.getItem("exchangesdata");
    setExchangesData(JSON.parse(dataFromLs));
    // Fetch(
    //   "",
    //   "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges"
    // ).then((data) => setExchangesData(data.data.data.exchanges));
  }, []);
  return (
    <Grid
      item
      md={10}
      sx={{
        width: "100%",
        position: "absolute",
        left: { md: "190px", sm: "270px" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TableContainer component={Paper} sx={{ width: { sm: "800px" } }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Exchange-Name</TableCell>
              <TableCell align="center">
                <IconButton>
                  <CurrencyBitcoinIcon />
                </IconButton>
                Bitcoin Price
              </TableCell>
              <TableCell align="center">numberOfMarkets</TableCell>
              <TableCell align="center">
                <IconButton>
                  <RecommendIcon />
                </IconButton>
                recommended
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exchangesData.map((exchange) => {
              const {
                name,
                iconUrl,
                recommended,
                price,
                numberOfMarkets,
                coinrankingUrl,
              } = exchange;
              return (
                <TableRow
                  key={name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Box
                      sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                      <img src={iconUrl} alt="" className={styles.img} />
                      <Button variant="text" href={coinrankingUrl}>
                        {name}
                      </Button>
                    </Box>
                  </TableCell>

                  <TableCell align="center">{`${Number(price).toFixed(
                    3
                  )}$`}</TableCell>
                  <TableCell align="center">{numberOfMarkets}</TableCell>
                  <TableCell align="center">
                    {recommended ? (
                      <DoneIcon color="success" />
                    ) : (
                      <ClearIcon color="error" />
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Exchanges;
