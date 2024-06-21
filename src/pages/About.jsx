import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${"https://images.unsplash.com/photo-1509982724584-2ce0d4366d8b?q=80&w=1860&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "calc(100vh - 128px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: 'center',
        // justifyContent: 'center',
        color: "#fff",
        // color: '',
        textAlign: "center",
        opacity: 0.9,
        p: 2,
      }}
    >
      <Container
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          borderRadius: 2,
          py: 5,
          maxWidth: "800px",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ opacity: 0.8 }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          component="h2"
          gutterBottom
          sx={{ mb: 4, px: 3, opacity: 0.8 }}
        >
          Welcome to ST Rentals, your reliable partner for seamless travel
          experiences. We offer a variety of rental services designed to meet
          your transportation needs.
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ opacity: 0.8 }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ mb: 4, px: 3, opacity: 0.8 }}
        >
          At ST Rentals, we provide well-maintained scooter rentals that make
          exploring the city easy and enjoyable. For those needing airport
          transportation, our drop and pickup services are timely and
          comfortable, ensuring you reach your destination without any hassle.
          Additionally, we offer guided tours that help you discover the city's
          highlights and hidden gems.
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ opacity: 0.8 }}
        >
          Why Choose Us?
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ mb: 3, px: 3, opacity: 0.8 }}
        >
          Our vehicles are regularly serviced and safe to use, providing you
          with reliable transportation. We offer premium services at competitive
          prices, making quality travel affordable. We are dedicated to your
          satisfaction, offering personalized service to meet your unique needs.
          With our local expertise, we provide insightful tips and
          recommendations to enhance your travel experience.
        </Typography>
      </Container>
    </Box>
  );
}
