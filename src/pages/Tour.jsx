import { Box, Grid } from "@mui/material"
import TourCard from "../components/TourCard"
import toursData from "../data/tours.data"

export default function Tour() {
  return (
    <Box sx={{ flex: "1 0 auto", 
      backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('https://images.unsplash.com/photo-1568918755806-6de9501c15ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
      <Grid container spacing={3} mt={2} mb={4} sx={{ position: "relative", zIndex: 1 }}>
        {toursData.map((tour) => (
          <Grid item xs={12} md={6} key={tour.id} sx={{display: "flex", justifyContent:"center"}}>
            <TourCard key={tour.id} tourDetails={tour} />
          </Grid>
        ))}
      </Grid>
      </Box>
  )
}