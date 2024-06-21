import ScooterCard from "../components/ScooterCard";
import { Grid } from "@mui/material";
import scootersData from "../data/scooters.data";

export default function ScooterRent() {
  return (
    <Grid container spacing={2} mt={2} mb={4}>
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
  );
}
