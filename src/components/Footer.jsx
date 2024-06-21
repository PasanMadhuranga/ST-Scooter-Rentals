import React from "react";
import Container from "@mui/material/Container";
import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { grey } from "@mui/material/colors";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const styles = {
    footer: {
      // padding: "24px 0",
      backgroundColor: grey[900],
      color: "white",
      height: "64px",
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <Box component="footer" sx={{display: "flex",
      alignItems: "center", bgcolor: grey[900], height: {sm: 64}, color: "white"}}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: { xs: "flex", md: "block" },
                justifyContent: { xs: "center", md: "start" },
              }}
            >
              <Logo />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" sx={{ opacity: 0.7 }} fontSize={10}>
                Copyright &copy;
                {currentYear}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }} fontSize={10}>
                All rights reserved
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "end" },
            }}
          >
            <Box>
              <IconButton color="inherit" href="https://wa.me/94769876543">
                <WhatsAppIcon />
              </IconButton>
              <IconButton color="inherit" href="#">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href="#">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
      </Box>
  );
};

export default Footer;
