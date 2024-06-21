import React from 'react'
import ScooterCard from '../components/ScooterCard'
import { Grid } from '@mui/material';


const imageUrls = [
  "https://motoroctane.com/wp-content/uploads/2016/05/New-Honda-Dio-2017-Yellow.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9LZOIJ63aprzi4SZkkY557bvFG7FYgi98A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwTA6OSz6p4-rfFO7AMFKFVkYH0lq5g_fOA&s"
];
export default function ScooterRent() {
  return (
    // <div>
    //   Scooter Rent cards
    //   <ScooterCard 
    //     name="Honda Dio"
    //     description="Honda Dio with 110cc engine and 7.6 bhp power output is available for rent"
    //     price={10}
    //     imageUrls={imageUrls}
    //   />
    // </div>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <ScooterCard
          name="Honda Dio"
          description="Honda Dio with 110cc engine and 7.6 bhp power output is available for rent"
          price={10}
          imageUrls={imageUrls}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ScooterCard
          name="TVS Jupiter"
          description="TVS Jupiter with 110cc engine and 7.6 bhp power output is available for rent"
          price={12}
          imageUrls={imageUrls}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ScooterCard
          name="Suzuki Access"
          description="Suzuki Access with 110cc engine and 7.6 bhp power output is available for rent"
          price={15}
          imageUrls={imageUrls}
        />
      </Grid>
    </Grid>
  )
}
