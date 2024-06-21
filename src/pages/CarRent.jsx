import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import CarCard from "../components/CarCard";
import carsData from "../data/cars.data";
import carRentImage from "../assets/page_images/carRent_image.jpg";


export default function CarRent() {
  return (
    <Box
      sx={{
        // flex: "1 0 auto",
        backgroundImage:
          `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${carRentImage})`,
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
        backdropFilter: "blur(3px)", // Adjust the blur value as needed
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
    </Box>
  );
}
