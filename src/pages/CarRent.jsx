import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import CarCard from "../components/CarCard";
import carsData from "../data/cars.data";
import WhatsApp from '../components/WhatsApp';

export default function CarRent() {
  return (
    <Box
      sx={{
        // flex: "1 0 auto",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1611073969872-9bbda462b79c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: {sm: "calc(100vh - 128px)"},
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        '::before': {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backdropFilter: "blur(2px)", // Adjust the blur value as needed
      },
      }}
    >
      <Grid container spacing={2} mt={2} mb={4} sx={{ position: "relative", zIndex: 1 }}>
        {carsData.map((car) => (
          <Grid item xs={12} sm={6} md={4} key={car.id}>
            <CarCard
              name={car.name}
              passengers={car.passengers}
              description={car.description}
              price={car.price}
              imageUrls={car.imageUrls}
            />
          </Grid>
        ))}
      </Grid>
      <WhatsApp />
    </Box>
  );
}
