import { Grid } from '@mui/material'
import CarCard from '../components/CarCard'
import carsData from '../data/cars.data'

export default function CarRent() {
  return (
    <Grid container spacing={2} mt={2} mb={4}>
    {carsData.map((car) => (
      <Grid item xs={12} sm={6} md={4}>
        <CarCard
          key={car.id}
          name={car.name}
          description={car.description}
          price={car.price}
          imageUrls={car.imageUrls}
        />
      </Grid>
    ))}
  </Grid>
  )
}
