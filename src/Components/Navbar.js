import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { Grid, Stack } from "@mui/material";
import MovingIcon from "@mui/icons-material/Moving";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const links = [
  { text: "Home", icon: <HomeIcon /> },
  { text: "cryptocurrencies", icon: <MovingIcon /> },
  { text: "Exchanges", icon: <CurrencyExchangeIcon /> },
  { text: "News", icon: <NewspaperIcon /> },
];
const Navbar = () => {
  return (
    <Grid container sx={{ flexWrap: "wrap", display: "Flex" }}>
      <Grid
        item
        lg={3}
        xs={4}
        sx={{ position: "fixed", width: "100%", top: 0, left: 0 }}
      >
        <Box
          sx={{
            bgcolor: "info.main",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Stack>
              <CurrencyBitcoinIcon sx={{ fontSize: "70px", color: "orange" }} />
            </Stack>
            <Typography
              variant="h5"
              color="#fff"
              sx={{
                typography: { xs: "body1", sm: "h6", md: "h5" },
              }}
            >
              Crypto-app
            </Typography>
          </Box>

          <Divider />
          <List sx={{ marginRight: 1 }}>
            {links.map((link, index) => (
              <ListItem key={link.text} disablePadding>
                <Link className={classes.link} to="/cryptocurrencies">
                  {link.icon}
                  {link.text}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Grid>

      <Outlet />
    </Grid>
  );
};

export default Navbar;
