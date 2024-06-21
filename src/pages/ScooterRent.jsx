import ScooterCard from "../components/ScooterCard";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import scootersData from "../data/scooters.data";


export default function ScooterRent() {
  return (
    <Box sx={{ flex: "1 0 auto", 
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1572168737399-24c6f29b860a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
      }
     }}>
      <Grid container spacing={2} mt={2} mb={4} sx={{ position: "relative", zIndex: 1 }}>
        {scootersData.map((scooter) => (
          <Grid item xs={12} sm={6} md={4} key={scooter.id}>
            <ScooterCard
              name={scooter.name}
              description={scooter.description}
              price={scooter.price}
              imageUrls={scooter.imageUrls}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
