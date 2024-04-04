import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListItem,
  Switch,
} from "@mui/material";
import {
  Home,
  Article,
  Groups,
  Storefront,
  Person,
  Settings,
  AccountBox,
  DarkMode,
} from "@mui/icons-material";

const SideBar = ({ mode }) => {
  return (
    <Box flex={4} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home></Home>
              </ListItemIcon>
              <ListItemText primary="HomePage"></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton component="a" href="#groups">
              <ListItemIcon>
                <Groups></Groups>
              </ListItemIcon>
              <ListItemText primary="Groups"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#market">
              <ListItemIcon>
                <Storefront></Storefront>
              </ListItemIcon>
              <ListItemText primary="MarketPlace"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <Person></Person>
              </ListItemIcon>
              <ListItemText primary="Friends"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#setting">
              <ListItemIcon>
                <Settings></Settings>
              </ListItemIcon>
              <ListItemText primary="Settings"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <DarkMode></DarkMode>
              </ListItemIcon>
              <Switch onChange={mode}></Switch>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
