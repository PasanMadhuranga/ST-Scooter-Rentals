import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./Logo";
import { grey } from "@mui/material/colors";

export default function Header() {
  const [anchorElServices, setAnchorElServices] = useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavMIClick = (path) => {
    navigate(path);
    handleCloseNavMenu();
  };

  const handleOpenServicesMenu = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseServicesMenu = () => {
    setAnchorElServices(null);
  };

  const handleServicesMIClick = (path) => {
    navigate(path);
    handleCloseServicesMenu();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: grey[900] }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Box sx={{ display: { xs: "none", md: "block" } }}> */}
          <Logo />
          {/* </Box> */}

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "end" }}>
            <Button sx={{ my: 2, color: "white", display: "block" }} href="/">
              home
            </Button>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={handleOpenServicesMenu}
            >
              Services
            </Button>
            <Menu
              anchorEl={anchorElServices}
              open={Boolean(anchorElServices)}
              onClose={handleCloseServicesMenu}
            >
              <MenuItem onClick={() => handleServicesMIClick("/scooter-rent")}>
                Scooters
              </MenuItem>
              <MenuItem onClick={() => handleServicesMIClick("/car-rent")}>
                Airport Drop/Pickup
              </MenuItem>
              <MenuItem onClick={() => handleServicesMIClick("/tour")}>
                Tours
              </MenuItem>
            </Menu>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: { xs: "none", md: "block" },
              }}
              href="/about"
            >
              About Us
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: { xs: "none", md: "block" },
              }}
              href="/contact"
            >
              Contact
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={() => handleNavMIClick("/about")}>
                About us
              </MenuItem>
              <MenuItem onClick={() => handleNavMIClick("/contact")}>
                Contact
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
