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
import { Stack } from "@mui/material";
import MovingIcon from "@mui/icons-material/Moving";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import NewspaperIcon from "@mui/icons-material/Newspaper";
const links = [
  { text: "Home", icon: <HomeIcon /> },
  { text: "cryptocurrencies", icon: <MovingIcon /> },
  { text: "Exchanges", icon: <CurrencyExchangeIcon /> },
  { text: "News", icon: <NewspaperIcon /> },
];
const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
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
        <Typography variant="h3" color="#fff">
          Crypto-app
        </Typography>
      </Box>

      <Divider />
      <List sx={{ padding: "5px", fontSize: "50px" }}>
        {links.map((link, index) => (
          <ListItem key={link.text} disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  color: "whitesmoke",
                },
              }}
            >
              <ListItemIcon>{link.icon}</ListItemIcon>
              <Typography sx={{ fontSize: "1.5rem" }} primary={link.text}>
                {link.text}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Navbar;
