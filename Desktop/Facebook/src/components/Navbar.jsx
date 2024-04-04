import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Mail, Notifications } from "@mui/icons-material";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "none",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  }));

  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Facebook
        </Typography>
        <FacebookIcon
          sx={{ display: { xs: "block", sm: "none" } }}
        ></FacebookIcon>
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icons>
          <Badge color="error" badgeContent={4}>
            <Mail></Mail>
          </Badge>
          <Badge color="error" badgeContent={4}>
            <Notifications></Notifications>
          </Badge>
          <Avatar
            onClick={() => setShow(!show)}
            sx={{ bgcolor: "red", width: "30px", height: "30px" }}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          >
            Lh
          </Avatar>
        </Icons>
        <UserBox>
          <Avatar
            onClick={() => setShow(!show)}
            sx={{ bgcolor: "red", width: "30px", height: "30px" }}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          >
            Lh
          </Avatar>
          <Typography variant="span">Luvasky</Typography>
        </UserBox>
      </StyleToolbar>
      <Menu
        id="basic-menu"
        open={show}
        onClose={() => setShow(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
